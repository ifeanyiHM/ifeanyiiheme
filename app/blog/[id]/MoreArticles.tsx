import usePortfolio from "@/app/_context/usePortfolio";
import { blogData } from "@/app/Data/PortfolioProps";
import Image from "next/image";
import Link from "next/link";

interface MoreArticlesProps {
  params: {
    id: string;
  };
}

function MoreArticles({ params }: MoreArticlesProps) {
  const { lightMode } = usePortfolio();

  const blogList = blogData.filter((data) => data.id !== params.id);

  return (
    <div
      className={`${
        lightMode ? "bg-[#f9f9f9]" : " bg-teal-400/10"
      } py-12 flex flex-col gap-10 md:gap-10 px-[1.5rem] lg:pr-8 lg:pl-20 xl:pl-28`}
    >
      <h2 className="text-2xl font-semibold">Read more articles</h2>
      {blogList.map((data, index) => (
        <Link key={index} href={`/blog/${data.id}`}>
          <div
            className={`${
              lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
            } flex flex-col gap-4 border-b pb-4`}
          >
            <Image
              className="w-full h-full object-cover"
              src={data.coverImage[0].image}
              width={100}
              height={100}
              alt={data.coverImage[0].image}
            />
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex-shrink-0">
                <Image
                  className="w-full h-full object-cover rounded-full"
                  src={data.authorImage || "/default-avatar-icon.jpg"}
                  width={100}
                  height={100}
                  alt={data.coverImage[0].image}
                />
              </div>
              <span>{data.author}</span>
            </div>
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p>{data.headParagraph.slice(0, 80)}...</p>
          </div>
        </Link>
      ))}
      <Link
        href="/blog"
        className="w-full border border-[#222] rounded-full text-center py-2"
      >
        See all from blog page listing
      </Link>
    </div>
  );
}

export default MoreArticles;
