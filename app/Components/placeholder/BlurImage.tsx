import Image from "next/image";
import { useEffect, useState } from "react";

interface BlurProps {
  src: string;
  alt: string;
}

export default function BlurImage({ src, alt }: BlurProps) {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      setBlurDataURL(`data:image/png;base64,${base64}`);
    }

    fetchImage();
  }, [src]);

  if (!blurDataURL) return null;

  return (
    <Image
      className="object-cover rounded-[7px]"
      fill
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}

// interface blurProps {
//   src: string;
//   alt: string;
// }

// export default async function BlurImage({ src, alt }: blurProps) {
//   const imageBlur = await fetch(src).then(async (res) => {
//     return Buffer.from(await res.arrayBuffer()).toString("base64");
//   });

//   return (
//     <>
//       <Image
//         className="object-cover rounded-[7px]"
//         fill
//         src={src}
//         alt={alt}
//         placeholder="blur"
//         blurDataURL={`data:image/png;base64,${imageBlur}`}
//       />
//     </>
//   );
// }
