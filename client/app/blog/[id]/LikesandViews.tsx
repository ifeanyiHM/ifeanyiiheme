import usePortfolio from "@/app/_context/usePortfolio";
import useBlog from "@/app/_context/useBlog";
import { BlogPostProps } from "@/app/Data/BlogsProps";
import { useState, useEffect } from "react";
import { IoIosHeart, IoIosShareAlt, IoMdShare } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import ShareIcons from "@/app/Components/ShareIcons";
import { FaRegHeart } from "react-icons/fa";

interface LikesandViewsProps {
  blogPost: BlogPostProps;
  params: {
    id: string;
  };
}

function LikesandViews({ blogPost, params }: LikesandViewsProps) {
  const { lightMode } = usePortfolio();
  const { fetchBlogs } = useBlog();

  const [likes, setLikes] = useState(blogPost.reaction.hearts);
  const [views, setViews] = useState(blogPost.reaction.views);
  const [isLiked, setIsLiked] = useState(false);
  const [hasIncrementedViews, setHasIncrementedViews] = useState(false);
  const [displayShareIcon, setDisplayShareIcon] = useState(false);

  console.log(views);

  const updateBlogReaction = async (updateKey: string, value: number) => {
    try {
      await fetch(`/api/updateLikesandViews/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: blogPost._id,
          update: { [updateKey]: value },
        }),
      });
    } catch (error) {
      console.error(`Error updating ${updateKey}:`, error);
      throw error;
    }
  };

  const updateLikes = async () => {
    try {
      const updatedLikes = likes + 1;
      await updateBlogReaction("reaction.hearts", updatedLikes);
      setLikes(updatedLikes);
      setIsLiked(true);
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  useEffect(() => {
    if (params.id === blogPost.slug && !hasIncrementedViews) {
      const incrementViews = async () => {
        try {
          const updatedViews = views + 1;
          await updateBlogReaction("reaction.views", updatedViews);
          setViews(updatedViews);
          setHasIncrementedViews(true);
        } catch (error) {
          console.error("Error incrementing views:", error);
        }
      };

      incrementViews();
    }
  }, [params.id, blogPost.slug, blogPost._id, hasIncrementedViews, views]);

  useEffect(() => {
    fetchBlogs();
  }, [likes, views]);

  return (
    <div
      className={`${
        lightMode ? "border-[#f7f6f6]" : "text-[#e2e8f0] border-[#253a69]"
      } flex justify-between items-center pb-6 border-b`}
    >
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <MdRemoveRedEye className="md:text-[1.5rem]" />
          <span>{views}</span>
        </div>
        <div
          className={`${
            isLiked ? "text-[#cb3532] font-semibold" : ""
          } flex gap-2 items-center cursor-pointer`}
          onClick={updateLikes}
        >
          {isLiked ? (
            <IoIosHeart className="md:text-[1.5rem]" />
          ) : (
            <FaRegHeart className="md:text-[1.5rem]" />
          )}
          <span>{likes}</span>
        </div>
      </div>
      <div className="relative">
        {!displayShareIcon && (
          <IoIosShareAlt
            onClick={() => setDisplayShareIcon(true)}
            className="md:text-[1.5rem] cursor-pointer"
          />
        )}
        {displayShareIcon && <ShareIcons url={blogPost.slug} />}
      </div>
    </div>
  );
}

export default LikesandViews;
