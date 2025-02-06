"use client";

import usePortfolio from "@/app/_context/usePortfolio";
import { lora } from "@/app/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import { IoIosShareAlt } from "react-icons/io";
import Comments from "./Comments";
import MoreArticles from "./MoreArticles";
import useBlog from "@/app/_context/useBlog";
import LikesandViews from "./LikesandViews";
import { formatDate } from "@/app/Utils/formatString";
import HomeSkeleton from "@/app/Components/skeleton/HomeSkeleton";
import ShareIcons from "@/app/Components/ShareIcons";
import { PageProps } from "./page";
import BlurImage from "@/app/Components/placeholder/BlurImage";

function BlogPage({ params }: PageProps) {
  const { lightMode } = usePortfolio();
  const { blogs } = useBlog();

  const [isZoomedCover, setIsZoomedCover] = useState<number | null>(null);
  const [zoomedState, setZoomedState] = useState<Record<string, boolean>>({});
  const [displayShareIcon, setDisplayShareIcon] = useState(false);

  const blogPost = blogs.find((post) => (params?.id as string) === post.slug);

  if (!blogPost) {
    return <HomeSkeleton />;
  }

  const handleZoomCover = (index: number) => {
    setIsZoomedCover((prevIndex) => (prevIndex === index ? null : index));
  };

  // Handle zoom toggle based on section index and image id
  const handleZoom = (sectionIndex: number, imageId: number) => {
    setZoomedState((prevState) => {
      const key = `${sectionIndex}-${imageId}`;
      // Toggle zoom for the clicked image in the clicked section
      return prevState[key]
        ? { ...prevState, [key]: false }
        : { ...prevState, [key]: true };
    });
  };

  return (
    <div className={lora.className}>
      <div
        className={`${
          lightMode ? "text-[#000]" : "text-[#94a3b8]"
        } mt-20 md:my-2t px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]`}
      >
        {/* Header Section */}
        <div
          className={`${
            lightMode ? "text-[#242424]" : "text-[#e2e8f0]"
          } hidden lg:block mb-8`}
        >
          <h1 className="text-[2.5rem] font-semibold leading-tight">
            {blogPost.title}
          </h1>
          <div className="flex justify-between items-center">
            <span className="text-[0.875rem]">
              {blogPost.readTime} min read . {formatDate(blogPost.date)}
            </span>
            <div className="relative">
              {!displayShareIcon && (
                <IoIosShareAlt
                  onClick={() => setDisplayShareIcon(true)}
                  className="md:text-[1.8rem] cursor-pointer"
                />
              )}
              {displayShareIcon && (
                <ShareIcons
                  url={blogPost.slug}
                  setDisplayShareIcon={setDisplayShareIcon}
                />
              )}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div
          className={`grid ${
            blogPost.coverImage.length > 1 ? "grid-cols-2" : "grid-cols-1"
          } lg:my-4`}
        >
          {blogPost.coverImage.map((image, index) => (
            <div
              key={index}
              className={
                isZoomedCover === index
                  ? "fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-60"
                  : ""
              }
              onClick={() => handleZoomCover(index)}
            >
              <BlurImage
                classname={
                  isZoomedCover === index
                    ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
                    : "cursor-zoom-in w-full h-full max-h-[510px]"
                }
                src={isZoomedCover === index ? image.zoomedImage : image.image}
                alt={blogPost.alt}
                width={1280}
                height={855}
              />
            </div>
          ))}
        </div>

        {/* Mobile Header */}
        <div className={`${lightMode ? "" : "text-[#e2e8f0]"} lg:hidden my-4`}>
          <h1 className="text-[1.7rem] md:text-[2rem] font-semibold leading-tight">
            {blogPost.title}
          </h1>
          <div className="flex justify-between items-center">
            <span className="text-[0.875rem]">
              {blogPost.readTime} . {formatDate(blogPost.date)}
            </span>
            <div className="relative">
              {!displayShareIcon && (
                <IoIosShareAlt
                  onClick={() => setDisplayShareIcon(true)}
                  className="md:text-[1.8rem] cursor-pointer"
                />
              )}
              {displayShareIcon && (
                <ShareIcons
                  url={blogPost.slug}
                  setDisplayShareIcon={setDisplayShareIcon}
                />
              )}
            </div>
          </div>
        </div>

        {/* Paragraph Sections */}
        <div className="flex flex-col gap-2">
          <p className={``}>{blogPost.headParagraph}</p>
          {blogPost.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="flex flex-col gap-4">
              <div
                className={`${
                  (section.imgSubtitle && "mt-6") || (section.image && "mt-2")
                } flex flex-col gap-8`}
              >
                <h2
                  className={`${
                    lightMode ? "" : "text-[#e2e8f0]"
                  } text-[1.2rem] md:text-[1.5rem] font-semibold`}
                >
                  {section.imgSubtitle && section.imgSubtitle}
                </h2>
                {section.image && (
                  <div
                    className={`grid ${
                      section.image.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    }`}
                  >
                    {section.image.map((image, imageId) => {
                      const zoomed = zoomedState[`${sectionIndex}-${imageId}`];
                      return (
                        <div
                          key={imageId}
                          className={
                            zoomed
                              ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                              : ""
                          }
                          onClick={() => handleZoom(sectionIndex, imageId)}
                        >
                          <BlurImage
                            classname={
                              zoomed
                                ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
                                : "cursor-zoom-in w-full h-full max-h-[510px]"
                            }
                            src={zoomed ? image.zoomedImage : image.image}
                            width={1280}
                            height={855}
                            alt={blogPost.alt}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h2
                  className={`${
                    lightMode ? "" : "text-[#e2e8f0]"
                  } text-[1.2rem] md:text-[1.5rem] font-semibold`}
                >
                  {section.subtitle && section.subtitle}
                </h2>
                <p className="">{section.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="my-8 flex gap-2 flex-wrap">
          {blogPost.tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                lightMode ? "bg-[#f1f1f1]" : "bg-teal-400/10 text-teal-300"
              } px-3 py-1 rounded-full`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Reactions */}
        <LikesandViews blogPost={blogPost} params={params} />
      </div>

      {/* Author*/}
      <div
        className={`${
          lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
        }  border-b pt-8 pb-12 px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]`}
      >
        <div className="w-16 h-16 rounded-full">
          <BlurImage
            src={blogPost.authorImage || "/default-avatar-icon.jpg"}
            alt="author identity"
            width={100}
            height={100}
            classname="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="my-3 text-[1.55rem] font-semibold">
          Written by {blogPost.author}
        </h2>
        <p className="">{blogPost.authorBio}</p>
      </div>
      {/* Comments */}
      <Comments comments={blogPost.comments} blogID={blogPost._id} />
      {/* More Articles */}
      <MoreArticles params={params} />
    </div>
  );
}

export default BlogPage;
