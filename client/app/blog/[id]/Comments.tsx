import usePortfolio from "@/app/_context/usePortfolio";
import { useEffect, useState } from "react";

interface CommentProps {
  name: string;
  thought: string;
  date: string;
  background: string;
}

interface CommentsProps {
  comments: CommentProps[];
  blogID: string;
}

function Comments({ comments, blogID }: CommentsProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [allComments, setAllComments] = useState<CommentProps[]>(comments);
  const [comment, setComment] = useState({ name: "", thought: "" });
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [expandedTexts, setExpandedTexts] = useState<boolean[]>(
    allComments.map(() => false)
  );

  const { lightMode } = usePortfolio();

  const addComment = async () => {
    if (comment.thought === "") {
      setToast(true);
      setToastMessage("Please enter a comment before adding");
    } else {
      const currentDate = new Date().toISOString();
      const randomColor = generateRandomColor();

      const data = {
        name: comment.name,
        thought: comment.thought,
        date: currentDate,
        background: randomColor,
      };

      try {
        // Send new comment to the server
        const res = await fetch("/api/EditBlog", {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ blogID, data }),
        });

        console.log("Blog ID:", blogID);

        if (res.ok) {
          setAllComments((prev) => [...prev, data]);
          // setExpandedTexts((prev) => [...prev, false]);
          setComment({ name: "", thought: "" });
          setToast(false);
          setToastMessage("Comment added");
        } else {
          throw new Error("Failed to add comment");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
        setToast(true);
        setToastMessage("Failed to add comment");
      }
    }
  };

  const generateRandomColor = (): string => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70;
    const lightness = 40;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const expandText = (index: number) => {
    setExpandedTexts((prev) => {
      const newText = [...prev];
      newText[index] = true;
      return newText;
    });
  };

  const formatDate = (isoString: string): string => {
    const commentDate = new Date(isoString);
    const currentYear = new Date().getFullYear();
    const commentYear = commentDate.getFullYear();

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      ...(commentYear !== currentYear &&
        ({ year: "numeric" } as Intl.DateTimeFormatOptions)),
    };

    return commentDate.toLocaleDateString("en-US", options);
  };

  //set timeout for toast message
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <>
      {toast && (
        <span className="fixed top-[3rem] left-1/2 transform -translate-x-1/2 bg-[rgb(236,228,228)] rounded-sm p-2.5 text-sm">
          {toastMessage}
        </span>
      )}
      <div className="pt-12 pb-10 px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]">
        <div
          className={`${
            lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
          } border-b pb-10 lg:pb-14`}
        >
          <h2 className="text-xl font-semibold mb-6">
            Comments {allComments.length > 0 && `(${allComments.length})`}
          </h2>
          <div
            onClick={() => setIsClicked(true)}
            className={`${
              isClicked
                ? "h-[193px] max-h-[300px] py-3"
                : "max-h-[50px] h-[50px] overflow-hidden"
            } ${
              lightMode
                ? "shadow-[0_0_7px_rgb(68,68,82,0.2)]"
                : "shadow-[0_0_8px_rgb(0,123,255,0.3)]"
            } flex flex-col gap-2 w-full px-2 rounded-sm transition-all duration-500 ease-in-out`}
          >
            <input
              className={`${isClicked ? "py-2 px-2 border-b" : "py-3"} 
              ${
                lightMode && isClicked ? "border-[#f2f2f2]" : "border-[#253a69]"
              } w-full bg-transparent outline-none rounded-sm`}
              type="text"
              placeholder={
                isClicked ? "Please enter your name" : "Leave a comment"
              }
              value={comment.name}
              onChange={(e) => setComment({ ...comment, name: e.target.value })}
            />
            <textarea
              className={`${
                isClicked ? "delay-300 scale-y-100" : "scale-y-0"
              } w-full bg-transparent h-20 px-2 outline-none`}
              placeholder="what are you thoughts?"
              value={comment.thought}
              onChange={(e) =>
                setComment({ ...comment, thought: e.target.value })
              }
            ></textarea>
            <div
              className={`${
                isClicked ? "delay-300 scale-y-100" : "scale-y-0"
              } flex justify-end gap-2`}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsClicked(false);
                }}
                className={`px-3 py-1 rounded-3xl`}
              >
                Cancel
              </button>
              <button
                onClick={addComment}
                className={`${lightMode ? "text-white" : "text-teal-300"} ${
                  lightMode && comment.thought
                    ? "bg-[#007bff]"
                    : lightMode && !comment.thought
                    ? "bg-[#007bff]/40"
                    : !lightMode && comment.thought
                    ? "bg-teal-400/50"
                    : "bg-teal-400/10"
                }  px-3 py-1 rounded-3xl`}
              >
                Comment
              </button>
              {/* <button
                className={`${
                  isClicked ? "" : "my-2 h-[34px]"
                } bg-[blue] text-white px-3 py-1 rounded-3xl`}
              >
                Comment
              </button> */}
            </div>
          </div>
        </div>
        <div className="mt-6">
          {allComments.map((comment, index) => (
            <div
              key={index}
              className={`${
                lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
              } border-b py-4 lg:py-8`}
            >
              <div className="flex items-center gap-2">
                <span
                  className="uppercase flex justify-center items-center text-xl w-8 h-8 text-white rounded-full"
                  style={{ backgroundColor: comment.background }}
                >
                  {comment.name.slice(0, 1)}
                </span>
                <p className="flex flex-col leading-4">
                  <span>{comment.name}</span>
                  <span className="text-sm">{formatDate(comment.date)}</span>
                </p>
              </div>
              <div className="mt-4 flex flex-col gap-1.5 lg:gap-3">
                {expandedTexts[index]
                  ? comment.thought
                      .split("\n")
                      .map((line, idx) => <p key={idx}>{line}</p>)
                  : `${comment.thought.slice(0, 70)}`
                      .split("\n")
                      .map((line, idx) => <p key={idx}>{line}</p>)}
              </div>
              {!expandedTexts[index] && comment.thought.length > 70 && (
                <span
                  onClick={() => expandText(index)}
                  className="text-[#007bff]"
                >
                  Read more
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comments;
