import { Lora, Merriweather, Source_Sans_3, Ubuntu } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
