import { useEffect, useState } from "react";

interface Comment {
  name: string;
  thought: string;
  date: string;
  background: string;
}

function Comments() {
  const [isClicked, setIsClicked] = useState(false);
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState({ name: "", thought: "" });
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [expandedTexts, setExpandedTexts] = useState<boolean[]>(
    allComments.map(() => false)
  );

  const addComment = () => {
    if (comment.thought === "") {
      setToast(true);
      setToastMessage("Please enter a comment before adding");
    } else {
      const currentDate = new Date().toISOString();
      const randomColor = generateRandomColor();
      setAllComments([
        ...allComments,
        {
          name: comment.name,
          thought: comment.thought,
          date: currentDate,
          background: randomColor,
        },
      ]);
      setComment({ name: "", thought: "" });
      setToast(false);
      setToastMessage("Comment added");
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
        <div className="border-b border-[#f2f2f2] pb-10">
          <h2 className="text-xl font-semibold mb-6">
            Comments {allComments.length > 0 && `(${allComments.length})`}
          </h2>
          <div
            onClick={() => setIsClicked(true)}
            className={`${
              isClicked
                ? "h-[193px] max-h-[300px] py-3"
                : "max-h-[50px] h-[50px] overflow-hidden"
            } flex flex-col gap-2 w-full px-2 shadow-[0_0_7px_rgb(68,68,82,0.2)] rounded-sm transition-all duration-500 ease-in-out`}
          >
            <input
              className={`${
                isClicked ? "py-2 px-2 border-b border-[#f2f2f2]" : "py-3"
              } w-full outline-none rounded-sm`}
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
              } w-full h-20 px-2 outline-none`}
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
                className={`${
                  !comment.thought ? "bg-[#007bff]/40" : "bg-[#007bff]"
                } text-white px-3 py-1 rounded-3xl`}
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
            <div key={index} className="border-b border-[#f2f2f2] py-4">
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
              <div className="mt-4 flex flex-col gap-1.5">
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
