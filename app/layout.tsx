import type { Metadata } from "next";
import "./Styles/globals.css";
import { PortfolioProvider } from "./_context/PortfolioContext";
import Navigation from "./Components/Navigation";
import MenuPage from "./Components/MenuPage";
import { sourceSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Ifeanyi Iheme",
    default: "Ifeanyi Iheme | Frontend Engineer",
  },
  description:
    "Ifeanyi Iheme is a front-end engineer who loves solving problems and creating beautiful, easy-to-use web interfaces.",
  openGraph: {
    title: "Ifeanyi Iheme | Front-End Engineer",
    description:
      "Front-end engineer passionate about solving problems and creating beautiful, easy-to-use web interfaces.",
    type: "website",
    url: "https://ifeanyiiheme.vercel.app/",
    siteName: "Ifeanyi Iheme",
    images: [
      {
        url: "https://ifeanyiiheme.vercel.app/images/opengraph-image.png",
        width: 1280,
        height: 800,
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "https://yourwebsite.com/",
    // site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Ifeanyi Iheme | Front-End Engineer",
    description:
      "Front-end engineer passionate about solving problems and creating beautiful, easy-to-use web interfaces.",
    images: [
      {
        url: "https://yourwebsite.com/img/og.png",
      },
    ],
  },
  keywords: [
    "front-end",
    "development",
    "web",
    "ifeanyi",
    "iheme",
    "javascript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-[#171c28]  */}

      <body className={`${sourceSans.className} bg-[#0f172a] text-[#e7e7e7] `}>
        <PortfolioProvider>
          <>
            {/* <Navigation /> */}
            <MenuPage />
            {children}
          </>
        </PortfolioProvider>
      </body>
    </html>
  );
}
