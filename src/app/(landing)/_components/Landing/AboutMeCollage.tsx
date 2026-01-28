import { AboutMeDesktop, AboutMeMobile } from "@images";
import { getImageProps } from "next/image";
import styles from "./AboutMeCollage.module.css";

export function AboutMeCollage() {
  const aboutMeSharedProps = {
    alt: "I'm a software engineer based in NYC who loves art, games, and french.",
  };

  const {
    props: { srcSet: mobileAboutMeSrcSet },
  } = getImageProps({
    ...aboutMeSharedProps,
    sizes: "(max-width: 575px) 100vw, (max-width: 767px) 70vw",
    width: AboutMeMobile.width,
    height: AboutMeMobile.height,
    src: AboutMeMobile.src,
  });

  const {
    props: { srcSet: desktopAboutMeSrcSet, ...rest },
  } = getImageProps({
    ...aboutMeSharedProps,
    sizes: "(min-width: 768px) 90vw, 70vw",
    width: AboutMeDesktop.width,
    height: AboutMeDesktop.height,
    src: AboutMeDesktop.src,
  });

  return (
    <picture className={styles.aboutMeCollage}>
      <source srcSet={mobileAboutMeSrcSet} media="(max-width: 767px)" />
      <source srcSet={desktopAboutMeSrcSet} media="(min-width: 768px)" />
      <img
        {...rest}
        src={AboutMeMobile.src}
        alt={aboutMeSharedProps.alt}
        fetchPriority="high"
        loading="eager"
      />
    </picture>
  );
}
