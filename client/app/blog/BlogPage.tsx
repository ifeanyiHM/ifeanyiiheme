"use client";

import Link from "next/link";
import { IoIosHeart, IoIosShareAlt } from "react-icons/io";
import { MdRemoveRedEye } from "react-icons/md";
import { FaComment } from "react-icons/fa";

import usePortfolio from "../_context/usePortfolio";
import useBlog from "../_context/useBlog";
import { lora } from "../fonts/fonts";
import { formatDate } from "../Utils/formatString";
import BlurImage from "../Components/placeholder/BlurImage";
import BlogsSkeleton from "../Components/skeleton/BlogsSkeleton";

function BlogPage() {
  const { lightMode } = usePortfolio();
  const { blogs, loading } = useBlog();

  if (loading) {
    return <BlogsSkeleton />;
  }

  return (
    <div
      className={`flex flex-col gap-6 md:gap-10 mt-20 md:mt-24 px-[1.5rem] lg:pr-8 lg:pl-20 xl:pl-28`}
    >
      {blogs
        .slice()
        .reverse()
        .map((preview) => (
          <Link key={preview._id} href={`/blog/${preview.slug}`}>
            <div
              className={`${
                lightMode
                  ? "border border-[#dbd6d6] rounded-md shadow-md hover:shadow-[0_0_5px_rgb(68,68,82,0.3)]"
                  : "shadow-[0_0_8px_rgb(0,123,255,0.3)] hover:shadow-[0_0_15px_rgb(0,123,255,0.3)]"
              } flex justify-between items-center p-2`}
            >
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 flex-shrink-0">
                  <BlurImage
                    classname="w-full h-full object-center rounded-md"
                    src={preview.coverImage[0].image}
                    width={100}
                    height={100}
                    alt={preview.alt}
                  />
                </div>
                <div className="flex flex-col gap-0">
                  <h2
                    className={`${
                      lightMode ? "" : "text-[#e2e8f0]"
                    } uppercase font-semibold lg:text-[1.1rem] leading-tight`}
                  >
                    {preview.title}
                  </h2>
                  <span
                    className={`${lora.className} text-[0.8rem] lg:text-[1rem]`}
                  >
                    Published . {formatDate(preview.date)}
                  </span>
                  <div className="flex gap-2 md:hidden items-center">
                    {preview.reaction.hearts > 0 && (
                      <span className="text-[#cb3532] flex gap-1 items-center">
                        <IoIosHeart /> {preview.reaction.hearts}
                      </span>
                    )}
                    {preview.comments.length > 0 && (
                      <span className="text-[#007bff] flex gap-1 items-center">
                        <FaComment /> {preview.comments.length}
                      </span>
                    )}
                    {preview.reaction.views > 0 && (
                      <span className="flex gap-1 items-center">
                        <MdRemoveRedEye /> {preview.reaction.views}
                      </span>
                    )}
                    {/* <IoIosShareAlt /> */}
                  </div>
                </div>
              </div>
              <div
                className={` hidden md:flex flex-col gap-2 lg:text-[1.1rem] xl:mr-2 text-end`}
              >
                <span className={lightMode ? "" : "text-[#e2e8f0]"}>
                  {preview.author}
                </span>
                <div className="flex gap-2 lg:gap-3 justify-end items-center">
                  {preview.reaction.hearts > 0 && (
                    <span className="text-[#cb3532] flex gap-1 items-center">
                      <IoIosHeart /> {preview.reaction.hearts}
                    </span>
                  )}
                  {preview.comments.length > 0 && (
                    <span className="text-[#007bff] flex gap-1 items-center">
                      <FaComment /> {preview.comments.length}
                    </span>
                  )}
                  {preview.reaction.views > 0 && (
                    <span className="flex gap-1 items-center">
                      <MdRemoveRedEye /> {preview.reaction.views}
                    </span>
                  )}
                  {/* <IoIosShareAlt /> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default BlogPage;
