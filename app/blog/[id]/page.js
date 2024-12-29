"use client";

import usePortfolio from "@/app/_context/usePortfolio";
import { blogData } from "@/app/Data/PortfolioProps";
import { inter } from "@/app/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { PiHandsClappingThin } from "react-icons/pi";
import Comments from "./Comments";
import MoreArticles from "./MoreArticles";

const Page = ({ params }) => {
  const { lightMode } = usePortfolio();

  const [isZoomedCover, setIsZoomedCover] = useState(null);
  const [zoomedState, setZoomedState] = useState({});

  // const [expandedTexts, setExpandedTexts] =
  //   useState < [] > recentProjects.map(() => false);

  const blogPost = blogData.find((post) => params.id === post.id);

  const handleZoomCover = (index) => {
    setIsZoomedCover((prevIndex) => (prevIndex === index ? null : index));
  };

  // Handle zoom toggle based on section index and image id
  const handleZoom = (sectionIndex, imageId) => {
    setZoomedState((prevState) => {
      const key = `${sectionIndex}-${imageId}`;
      // Toggle zoom for the clicked image in the clicked section
      return prevState[key]
        ? { ...prevState, [key]: false }
        : { ...prevState, [key]: true };
    });
  };

  const toggleExpand = (index) => {
    setExpandedTexts((prev) => {
      const newText = [...prev];
      newText[index] = !newText[index];
      return newText;
    });
  };

  return (
    <>
      <div
        className={`${inter.className} ${
          lightMode ? "text-[#242424]" : "text-[#94a3b8]"
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
              {blogPost.readTime} . {blogPost.date}
            </span>
            <IoMdShare className="md:text-[1.8rem]" />
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
                  ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                  : ""
              }
              onClick={() => handleZoomCover(index)}
            >
              <Image
                className={`${
                  isZoomedCover === index
                    ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
                    : "cursor-zoom-in w-full h-full"
                } object-cover`}
                src={isZoomedCover === index ? image.zoomedImage : image.image}
                // className="w-full h-full object-cover"
                // src={image}
                width={1280}
                height={855}
                alt={blogPost.alt}
              />{" "}
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
              {blogPost.readTime} . {blogPost.date}
            </span>
            <IoMdShare className="md:text-[1.5rem]" />
          </div>
        </div>

        {/* Paragraph Sections */}
        <div className="flex flex-col gap-2">
          <p className={`font-[300]`}>{blogPost.headParagraph}</p>
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
                          <Image
                            className={`${
                              zoomed
                                ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
                                : "cursor-zoom-in w-full h-full"
                            } object-cover`}
                            src={zoomed ? image.zoomedImage : image.image}
                            width={1280}
                            height={855}
                            alt={blogPost.alt}
                          />{" "}
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
                <p className="font-[300]">{section.text}</p>
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
        <div
          className={`${
            lightMode ? "" : "text-[#e2e8f0]"
          } flex justify-between items-center pb-6 border-b border-[#f2f2f2]`}
        >
          <div className="flex gap-4 items-center">
            <div className="flex gap-2 items-center">
              <PiHandsClappingThin className="md:text-[1.5rem]" />
              <span>{blogPost.reactions.claps}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegHeart className="md:text-[1.5rem]" />
              <span>{blogPost.reactions.hearts}</span>
            </div>
          </div>
          <span>
            <IoMdShare className="md:text-[1.5rem]" />
          </span>
        </div>
      </div>
      {/* Author*/}
      <div className="border-b pt-8 pb-12 border-[#f2f2f2] px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]">
        <div className="w-65 h-65 rounded-full">
          {blogPost.authorImage ? (
            <Image
              src={blogPost.authorImage}
              alt="author identity"
              width={100}
              height={100}
            />
          ) : (
            <FaRegCircleUser size={65} />
          )}
        </div>
        <h2 className="my-2 text-3xl font-semibold">
          Written by {blogPost.author}
        </h2>
        <p className="">
          {blogPost.bio} This is a sample text designed to fill space where
          content is not yet available. It provides a visual representation of
          text on a page, helping to plan layouts or designs.
        </p>
      </div>
      {/* Comments */}
      <Comments />
      {/* More Articles */}
      <MoreArticles />
    </>
  );
};

export default Page;
