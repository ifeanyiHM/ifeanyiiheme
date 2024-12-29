"use client";
import Image from "next/image";
import { IoMdShare } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import usePortfolio from "../_context/usePortfolio";
import Link from "next/link";
import { blogData } from "../Data/PortfolioProps";

function BlogPage() {
  const { lightMode } = usePortfolio();

  return (
    <div className="flex flex-col gap-6 md:gap-10 mt-20 md:mt-24 px-[1.5rem] lg:pr-8 lg:pl-20 xl:pl-28">
      {blogData
        .slice()
        .reverse()
        .map((preview) => (
          <Link key={preview.id} href={`/blog/${preview.id}`}>
            <div
              className={`${
                lightMode
                  ? "border border-[#dbd6d6] rounded-md shadow-md hover:shadow-[0_0_5px_rgb(68,68,82,0.3)]"
                  : "shadow-[0_0_8px_rgb(0,123,255,0.3)]"
              } flex justify-between items-center p-2`}
            >
              <div className="flex items-center gap-2">
                <div className="w-16 h-16 flex-shrink-0">
                  <Image
                    className="w-full h-full object-cover rounded-md"
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
                    } uppercase font-semibold lg:text-[1.1rem]`}
                  >
                    {preview.title}
                  </h2>
                  <span className="text-[0.8rem] lg:text-[1rem]">
                    Published . {preview.date}
                  </span>
                  <div className="flex gap-2 md:hidden">
                    <IoMdShare />
                    <GoComment />
                    <FaRegHeart />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  lightMode ? "" : "text-[#e2e8f0]"
                } hidden md:flex flex-col gap-2 lg:text-[1.1rem] xl:mr-2`}
              >
                <span className="">{preview.author}</span>
                <div className="flex gap-2 lg:gap-3 justify-end">
                  <IoMdShare />
                  <GoComment />
                  <FaRegHeart />
                </div>
              </div>
            </div>
          </Link>
        ))}
      {/* <Link href="/blog/beauty">
        <div
          className={`${
            lightMode
              ? "border border-[#dbd6d6] rounded-md shadow-md hover:shadow-[0_0_5px_rgb(68,68,82,0.3)]"
              : "shadow-[0_0_8px_rgb(0,123,255,0.3)]"
          } flex justify-between items-center p-2`}
        >
          <div className="flex items-center gap-2">
            <div className="w-16 h-16">
              <Image
                className="w-full h-full object-cover rounded-md"
                src="/blogs/tic-tac-toe.jpg"
                width={100}
                height={100}
                alt="blog"
              />
            </div>
            <div className="flex flex-col gap-0">
              <h2 className="uppercase font-semibold lg:text-[1.1rem]">
                Beauty in simple words
              </h2>
              <span className="text-[0.8rem] lg:text-[1rem]">
                Published . 13 Apr
              </span>
              <div className="flex gap-2 md:hidden">
                <IoMdShare />
                <GoComment />
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 lg:text-[1.1rem] xl:mr-2">
            <span className="uppercase">Modish blogs</span>
            <div className="flex gap-2 lg:gap-3 justify-end">
              <IoMdShare />
              <GoComment />
              <FaRegHeart />
            </div>
          </div>
        </div>
      </Link>
      <Link href="/blog/fine">
        <div
          className={`${
            lightMode
              ? "border border-[#dbd6d6] rounded-md shadow-md hover:shadow-[0_0_5px_rgb(68,68,82,0.3)]"
              : "shadow-[0_0_8px_rgb(0,123,255,0.3)]"
          } flex justify-between items-center p-2`}
        >
          <div className="flex items-center gap-2">
            <div className="w-16 h-16">
              <Image
                className="w-full h-full object-cover rounded-md"
                src="/blogs/heart.jpg"
                width={100}
                height={100}
                alt="blog"
              />
            </div>
            <div className="flex flex-col gap-0">
              <h2 className="uppercase font-semibold lg:text-[1.1rem]">
                Beauty in simple words
              </h2>
              <span className="text-[0.8rem] lg:text-[1rem]">
                Published . 13 Apr
              </span>
              <div className="flex gap-2 md:hidden">
                <IoMdShare />
                <GoComment />
                <FaRegHeart />
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-2 lg:text-[1.1rem] xl:mr-2">
            <span className="uppercase">Modish blogs</span>
            <div className="flex gap-2 lg:gap-3 justify-end">
              <IoMdShare />
              <GoComment />
              <FaRegHeart />
            </div>
          </div>
        </div>
      </Link> */}
    </div>
  );
}

export default BlogPage;
