import useBlog from "@/app/_context/useBlog";
import usePortfolio from "@/app/_context/usePortfolio";
import Image from "next/image";
import Link from "next/link";

interface MoreArticlesProps {
  params: {
    id: string;
  };
}

function MoreArticles({ params }: MoreArticlesProps) {
  const { lightMode } = usePortfolio();
  const { blogs } = useBlog();

  // Ensure params and params.id are defined
  // if (!params || !params.id) {
  //   return <div>Error: No article ID provided</div>;
  // }

  const blogList = blogs.filter((data) => data.slug !== params.id);

  return (
    <div className={lightMode ? "bg-[#f9f9f9]" : " bg-black/30"}>
      <div
        className={` py-12 flex flex-col gap-10 px-[1.5rem] md:px-14 lg:px-0 lg:max-w-[680px] mx-auto lg:text-[1.1rem]`}
      >
        <h2 className="text-2xl font-semibold">Read more blogs</h2>
        <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
          {blogList.map((data, index) => (
            <Link key={data._id} href={`/blog/${data.slug}`}>
              <div
                className={`${
                  lightMode ? "border-[#f7f6f6]" : " border-[#253a69]"
                } flex flex-col gap-4 border-b pb-4`}
              >
                <div className="relative h-[13.696rem]">
                  <Image
                    className="object-cover"
                    src={data.coverImage[0].image}
                    alt={data.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={data.coverImage[0].image}
                    title={data.alt}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex-shrink-0">
                    <Image
                      className="w-full h-full object-cover rounded-full"
                      src={data.authorImage || "/default-avatar-icon.jpg"}
                      width={100}
                      height={100}
                      alt={data.coverImage[0].image}
                      placeholder="blur"
                      blurDataURL={data.coverImage[0].image}
                      title={data.alt}
                    />
                  </div>
                  <span>{data.author}</span>
                </div>
                <h2 className="text-2xl font-bold md:leading-tight">
                  {data.title}
                </h2>
                <p className="md:hidden">
                  {data.headParagraph.slice(0, 80)}...
                </p>
                <p className="hidden lg:block">
                  {data.headParagraph.slice(0, 60)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/blog"
          className={`${
            lightMode ? "border-[#222]" : " border-[#253a69]"
          } w-full border rounded-full text-center py-2`}
        >
          See all from blog page listing
        </Link>
      </div>
    </div>
  );
}

export default MoreArticles;
