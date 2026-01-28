import { NameAnimationDesktop, NameAnimationMobile } from "@images";
import { getImageProps } from "next/image";
import styles from "./NameAnimation.module.css";

export function NameAnimation() {
  const nameAnimationSharedProps = { alt: "Hello, I'm Vanessa." };

  const {
    props: { srcSet: mobileNameAnimationSrcSet },
  } = getImageProps({
    ...nameAnimationSharedProps,
    sizes: "(max-width: 575px) 80vw",
    width: NameAnimationMobile.width,
    height: NameAnimationMobile.height,
    src: NameAnimationMobile.src,
  });

  const {
    props: { srcSet: desktopNameAnimationSrcSet, ...rest },
  } = getImageProps({
    ...nameAnimationSharedProps,
    sizes: "(min-width: 576px) 60vw, (min-width: 768px) 50vw, 35vw",
    width: NameAnimationDesktop.width,
    height: NameAnimationDesktop.height,
    src: NameAnimationDesktop.src,
  });

  return (
    <picture className={styles.nameAnimation}>
      <source srcSet={mobileNameAnimationSrcSet} media="(max-width: 767px)" />
      <source srcSet={desktopNameAnimationSrcSet} media="(min-width: 768px)" />
      <img
        {...rest}
        src={NameAnimationMobile.src}
        alt={nameAnimationSharedProps.alt}
      />
    </picture>
  );
}
