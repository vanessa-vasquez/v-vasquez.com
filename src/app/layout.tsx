import type { Metadata } from "next";
import "./globals.css";
import { ViewAssetsProvider } from "@contexts";
import { Roboto } from "next/font/google";
import { getImageProps } from "next/image";
import { PaperBackground } from "@images";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const getBackgroundImage = (srcSet = "") => {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
};

export const metadata: Metadata = {
  title: "Vanessa Vasquez",
  description:
    "Vanessa Vasquez is a software engineer who builds diverse web projects with a focus on design and accessibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "",
    width: PaperBackground.width,
    height: PaperBackground.height,
    src: PaperBackground.src,
  });
  const backgroundImage = getBackgroundImage(srcSet);
  const style = {
    backgroundImage,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <html lang="en">
      <body className={` ${roboto.className}`} style={style}>
        <ViewAssetsProvider>
          <main>{children}</main>
        </ViewAssetsProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
