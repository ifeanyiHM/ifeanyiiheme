import Image from "next/image";

interface blurProps {
  src: string;
  alt: string;
}

export default async function BlurImage({ src, alt }: blurProps) {
  const imageBlur = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer()).toString("base64");
  });

  return (
    <>
      <Image
        className="object-cover rounded-[7px]"
        fill
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={`data:image/png;base64,${imageBlur}`}
      />
    </>
  );
}
