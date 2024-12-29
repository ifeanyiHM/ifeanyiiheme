import { blogData } from "@/app/Data/PortfolioProps";
import Image from "next/image";

function MoreArticles() {
  return (
    <div className="bg-[#f9f9f9] py-12 flex flex-col gap-10 md:gap-10 px-[1.5rem] lg:pr-8 lg:pl-20 xl:pl-28">
      <h2 className="text-2xl font-semibold">Read more articles</h2>
      {blogData.map((data, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 border-b border-[#f2f2f2] pb-4"
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
                src={data.coverImage[0].image}
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
      ))}
    </div>
  );
}

export default MoreArticles;
