"use client";

import { projects } from "@data";
import ProjectItem from "./ProjectItem";
import styles from "./ProjectsList.module.css";
import { useRef } from "react";

export default function ProjectsList() {
  const projectItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleClick = (refName: string) => {
    setTimeout(() => {
      projectItemRefs.current[refName]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }, 300);
  };

  return (
    <div className={styles.projects}>
      {projects.map((project, i) => (
        <ProjectItem
          ref={(el) => {
            projectItemRefs.current[project.refName] = el;
          }}
          key={i}
          project={project}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
