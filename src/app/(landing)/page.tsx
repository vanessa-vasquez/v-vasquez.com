import Landing from "./_components/Landing/Landing";

import dynamic from "next/dynamic";
import { Toast } from "@components";
import { memo } from "react";
import styles from "./page.module.css";
import { Metadata } from "next";

const TechStack = memo(
  dynamic(() => import("./_components/TechStack/TechStack"), {
    loading: () => <></>,
  })
);

const Projects = memo(
  dynamic(() => import("./_components/Projects/Projects"), {
    loading: () => <></>,
  })
);

export const metadata: Metadata = {
  title: "Vanessa Vasquez",
  description:
    "Vanessa Vasquez is a software engineer who builds diverse web projects with a focus on design and accessibility.",
};

export default function Page() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.visuallyHidden}>
        Vanessa Vasquez - Software Engineer
      </h1>

      <section>
        <h2 className={styles.visuallyHidden}>About Me</h2>
        <Landing />
      </section>
      <section>
        <h2 className={styles.visuallyHidden}>Tech Stack</h2>
        <TechStack />
      </section>
      <Projects />
      <Toast />
    </div>
  );
}
