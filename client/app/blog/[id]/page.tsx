import BlogPage from "./BlogPage";
import { Metadata } from "next";

interface Params {
  id: string;
}

export interface PageProps {
  params: Params;
}

const fetchBlog = async (params: string) => {
  try {
    const url = `https://blogiify.vercel.app/api/v1/blogs/${params}`;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Something went wrong with fetching blogs");
    const data = await res.json();
    return data.data.blog;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blogPost = await fetchBlog(params.id);

  const blogImages =
    blogPost.coverImage.length > 1
      ? blogPost.coverImage.map((image: { image: string }) => image.image)
      : blogPost.coverImage[0].image;

  return {
    title: `${blogPost.title} - My Blog`,
    description: blogPost.headParagraph,
    keywords: blogPost.tags.join(", "),
    authors: [{ name: blogPost.author }],
    openGraph: {
      type: "article",
      title: blogPost.title,
      description: blogPost.headParagraph,
      images: blogImages,

      url: `https://ifeanyiiheme.vercel.app/blog/${blogPost.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blogPost.title,
      description: blogPost.headParagraph,
      images: blogImages,
    },
  };
}

const Page = ({ params }: PageProps) => {
  return (
    // <>
    //   <Head>
    //     <title>{blogPost.title} - My Blog</title>
    //     <meta name="description" content={blogPost.headParagraph} />
    //     <meta name="keywords" content={blogPost.tags.join(", ")} />
    //     <meta name="author" content={blogPost.author} />

    //     {/* Open Graph / Facebook */}
    //     <meta property="og:type" content="article" />
    //     <meta property="og:title" content={blogPost.title} />
    //     <meta property="og:description" content={blogPost.headParagraph} />
    //     <meta property="og:image" content={blogPost.coverImage[0].image} />
    //     <meta
    //       property="og:url"
    //       content={`https://ifeanyiiheme.vercel.app/blog/${blogPost.slug}`}
    //     />

    //     {/* Twitter */}
    //     <meta name="twitter:card" content="summary_large_image" />
    //     <meta name="twitter:title" content={blogPost.title} />
    //     <meta name="twitter:description" content={blogPost.headParagraph} />
    //     <meta name="twitter:image" content={blogPost.coverImage[0].image} />
    //   </Head>
    //   <div className={lora.className}>
    //     <div
    //       className={`${
    //         lightMode ? "text-[#000]" : "text-[#94a3b8]"
    //       } mt-20 md:my-2t px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]`}
    //     >
    //       {/* Header Section */}
    //       <div
    //         className={`${
    //           lightMode ? "text-[#242424]" : "text-[#e2e8f0]"
    //         } hidden lg:block mb-8`}
    //       >
    //         <h1 className="text-[2.5rem] font-semibold leading-tight">
    //           {blogPost.title}
    //         </h1>
    //         <div className="flex justify-between items-center">
    //           <span className="text-[0.875rem]">
    //             {blogPost.readTime} . {formatDate(blogPost.date)}
    //           </span>
    //           <div className="relative">
    //             {!displayShareIcon && (
    //               <IoIosShareAlt
    //                 onClick={() => setDisplayShareIcon(true)}
    //                 className="md:text-[1.8rem] cursor-pointer"
    //               />
    //             )}
    //             {displayShareIcon && (
    //               <ShareIcons
    //                 url={blogPost.slug}
    //                 setDisplayShareIcon={setDisplayShareIcon}
    //               />
    //             )}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Cover Image */}
    //       <div
    //         className={`grid ${
    //           blogPost.coverImage.length > 1 ? "grid-cols-2" : "grid-cols-1"
    //         } lg:my-4`}
    //       >
    //         {blogPost.coverImage.map((image, index) => (
    //           <div
    //             key={index}
    //             className={
    //               isZoomedCover === index
    //                 ? "fixed inset-0 z-[999999] flex items-center justify-center bg-black bg-opacity-60"
    //                 : ""
    //             }
    //             onClick={() => handleZoomCover(index)}
    //           >
    //             <Image
    //               className={`${
    //                 isZoomedCover === index
    //                   ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
    //                   : "cursor-zoom-in w-full h-full"
    //               } object-cover`}
    //               src={
    //                 isZoomedCover === index ? image.zoomedImage : image.image
    //               }
    //               // className="w-full h-full object-cover"
    //               // src={image}
    //               width={1280}
    //               height={855}
    //               alt={blogPost.alt}
    //             />{" "}
    //           </div>
    //         ))}
    //       </div>

    //       {/* Mobile Header */}
    //       <div
    //         className={`${lightMode ? "" : "text-[#e2e8f0]"} lg:hidden my-4`}
    //       >
    //         <h1 className="text-[1.7rem] md:text-[2rem] font-semibold leading-tight">
    //           {blogPost.title}
    //         </h1>
    //         <div className="flex justify-between items-center">
    //           <span className="text-[0.875rem]">
    //             {blogPost.readTime} . {formatDate(blogPost.date)}
    //           </span>
    //           <IoIosShareAlt className="md:text-[1.5rem]" />
    //         </div>
    //       </div>

    //       {/* Paragraph Sections */}
    //       <div className="flex flex-col gap-2">
    //         <p className={``}>{blogPost.headParagraph}</p>
    //         {blogPost.sections.map((section, sectionIndex) => (
    //           <div key={sectionIndex} className="flex flex-col gap-4">
    //             <div
    //               className={`${
    //                 (section.imgSubtitle && "mt-6") || (section.image && "mt-2")
    //               } flex flex-col gap-8`}
    //             >
    //               <h2
    //                 className={`${
    //                   lightMode ? "" : "text-[#e2e8f0]"
    //                 } text-[1.2rem] md:text-[1.5rem] font-semibold`}
    //               >
    //                 {section.imgSubtitle && section.imgSubtitle}
    //               </h2>
    //               {section.image && (
    //                 <div
    //                   className={`grid ${
    //                     section.image.length > 1 ? "grid-cols-2" : "grid-cols-1"
    //                   }`}
    //                 >
    //                   {section.image.map((image, imageId) => {
    //                     const zoomed =
    //                       zoomedState[`${sectionIndex}-${imageId}`];
    //                     return (
    //                       <div
    //                         key={imageId}
    //                         className={
    //                           zoomed
    //                             ? "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    //                             : ""
    //                         }
    //                         onClick={() => handleZoom(sectionIndex, imageId)}
    //                       >
    //                         <Image
    //                           className={`${
    //                             zoomed
    //                               ? "cursor-zoom-out w-auto h-auto max-w-full max-h-full"
    //                               : "cursor-zoom-in w-full h-full"
    //                           } object-cover`}
    //                           src={zoomed ? image.zoomedImage : image.image}
    //                           width={1280}
    //                           height={855}
    //                           alt={blogPost.alt}
    //                         />{" "}
    //                       </div>
    //                     );
    //                   })}
    //                 </div>
    //               )}
    //             </div>
    //             <div className="flex flex-col gap-2">
    //               <h2
    //                 className={`${
    //                   lightMode ? "" : "text-[#e2e8f0]"
    //                 } text-[1.2rem] md:text-[1.5rem] font-semibold`}
    //               >
    //                 {section.subtitle && section.subtitle}
    //               </h2>
    //               <p className="">{section.text}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Tags */}
    //       <div className="my-8 flex gap-2 flex-wrap">
    //         {blogPost.tags.map((tag, index) => (
    //           <span
    //             key={index}
    //             className={`${
    //               lightMode ? "bg-[#f1f1f1]" : "bg-teal-400/10 text-teal-300"
    //             } px-3 py-1 rounded-full`}
    //           >
    //             {tag}
    //           </span>
    //         ))}
    //       </div>

    //       {/* Reactions */}
    //       <LikesandViews blogPost={blogPost} params={params} />
    //     </div>

    //     {/* Author*/}
    //     <div
    //       className={`${
    //         lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
    //       }  border-b pt-8 pb-12 px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]`}
    //     >
    //       <div className="w-16 h-16 rounded-full">
    //         <Image
    //           src={blogPost.authorImage || "/default-avatar-icon.jpg"}
    //           alt="author identity"
    //           width={100}
    //           height={100}
    //           className="rounded-full"
    //         />
    //       </div>
    //       <h2 className="my-3 text-[1.55rem] font-semibold">
    //         Written by {blogPost.author}
    //       </h2>
    //       <p className="">
    //         {blogPost.authorBio} This is a sample text designed to fill space
    //         where content is not yet available. It provides a visual
    //         representation of text on a page, helping to plan layouts or
    //         designs.
    //       </p>
    //     </div>
    //     {/* Comments */}
    //     <Comments comments={blogPost.comments} blogID={blogPost._id} />
    //     {/* More Articles */}
    //     <MoreArticles params={params} />
    //   </div>
    // </>

    <>
      <BlogPage params={params} />
    </>
  );
};

export default Page;
