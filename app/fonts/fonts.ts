import {
  Inter,
  Merriweather,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
