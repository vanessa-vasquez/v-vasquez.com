import { Markdown } from "@icons";
import styles from "./VSCodeEditor.module.css";
import Image from "next/image";
import { Badge } from "@ui";
import { Project } from "../types";

interface VSCodeEditorProps {
  project: Project;
}

export function VSCodeEditor({ project }: VSCodeEditorProps) {
  const { name, fileName, type, stack, description, moreDetails, image, link } =
    project;

  return (
    <div className={styles.vsCodeEditor}>
      <div className={styles.vsCodeEditorHeaderContainer}>
        <div className={styles.vsCodeEditorHeader}>
          <Markdown /> Preview {fileName}
        </div>
        <div className={styles.vsCodeEditorBorder}></div>
      </div>
      <div className={styles.vsCodeEditorContent}>
        <div className={styles.vsCodeProjectTitleContainer}>
          <div className={styles.vsCodeProjectTitle}>{name}</div>
          <div className={styles.vsCodeHandwrittenNote}>
            {`* ${type} project`}
          </div>
        </div>
        <div className={styles.vsCodeProjectInfo}>
          <div className={styles.vsCodeProjectBadges}>
            {stack.map((tech, i) => (
              <Badge key={i} label={tech} />
            ))}
          </div>

          <div className={styles.vsCodeProjectDescription}>{description}</div>
          {moreDetails && (
            <div className={styles.vsCodeProjectMoreDetails}>
              {moreDetails}{" "}
            </div>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.vsCodeProjectLink}
          >
            {link}
          </a>

          <div className={styles.vsCodeProjectImage}>
            <Image src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
