"use client";

import styles from "./ProjectItem.module.css";
import { useState, forwardRef } from "react";
import clsx from "clsx";
import { Project } from "../types";
import Image from "next/image";
import { Badge } from "@ui";

interface ProjectItemProps {
  project: Project;
  handleClick: (refName: string) => void;
}

const ProjectItem = forwardRef<HTMLDivElement, ProjectItemProps>(
  ({ project, handleClick }, ref) => {
    const [expand, setExpand] = useState(false);
    return (
      <div
        ref={ref}
        className={clsx(styles.projectContainer, {
          [styles.activeProjectItem]: expand,
        })}
        onClick={() => {
          setExpand(!expand);
          if (!expand) {
            handleClick(project.refName);
          }
        }}
      >
        <div className={styles.projectHeader}>
          <div className={styles.projectName}>{project.name}</div>
          <div
            className={styles.projectType}
          >{`* ${project.type} project`}</div>
        </div>
        <div className={styles.projectTextContainer}>
          <div className={styles.projectBadges}>
            {project.stack.map((tech, i) => (
              <Badge key={i} label={tech} />
            ))}
          </div>
          <div className={styles.projectDescription}>{project.description}</div>
          <div className={styles.projectLink}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>
          <div className={styles.projectImage}>
            <Image src={project.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
);

ProjectItem.displayName = "ProjectItem";
export default ProjectItem;
