import { Metadata } from "next";
import BlogPage from "./BlogPage";

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
    <>
      <BlogPage params={params} />
    </>
  );
};

export default Page;
