"use client";

import Image from "next/image";
import { MegaphonePopArt, MobileTechStack } from "@images";
import styles from "./TechStack.module.css";
import { useInView } from "react-intersection-observer";
import { clsx } from "clsx";

export default function TechStack() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const techStackLetters = [
    { char: "t", className: styles.smallTChar },
    { char: "e", className: styles.eChar },
    { char: "c", className: styles.smallCChar },
    { char: "h", className: styles.hChar },
    { char: " ", className: "" },
    { char: "s", className: styles.sChar },
    { char: "t", className: styles.bigTChar },
    { char: "a", className: styles.aChar },
    { char: "c", className: styles.bigCChar },
    { char: "k", className: styles.kChar },
  ];

  return (
    <div className={styles.techStackMobileContainer}>
      <Image
        src={MobileTechStack}
        alt="I work with React, React Native, Remix, Typescript, and Javascript (ES6+)."
      />
      <Image
        src={MegaphonePopArt}
        alt=""
        className={clsx(styles.megaphonePopArt, {
          [styles.animateScream]: inView,
        })}
        ref={ref}
      />
      <div
        className={clsx(styles.techStackTitle, {
          [styles.animateScare]: inView,
        })}
      >
        {techStackLetters.map((l, i) => (
          <span key={i} className={l.className}>
            {l.char}
          </span>
        ))}
      </div>
    </div>
  );
}
