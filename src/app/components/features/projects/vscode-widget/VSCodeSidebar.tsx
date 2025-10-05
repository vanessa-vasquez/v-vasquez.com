import { ChevronDown, FileExplorer, Info } from "@icons";
import styles from "./VSCodeSidebar.module.css";
import clsx from "clsx";
import isEqual from "lodash/isEqual";
import { Project } from "../types";

interface VSCodeSidebarProps {
  projects: Project[];
  currProject: Project;
  onProjectSelect: (project: Project) => void;
}

export function VSCodeSidebar({
  projects,
  currProject,
  onProjectSelect,
}: VSCodeSidebarProps) {
  return (
    <>
      <div className={styles.vsCodeToolbar}>
        <div className={styles.vsCodeToolbarItemActive}>
          <FileExplorer />
        </div>
      </div>
      <div className={styles.vsCodeFileExplorer}>
        <div className={styles.vsCodeExplorerHeader}>EXPLORER</div>
        <div className={styles.vsCodeExplorerProjectName}>
          <ChevronDown /> VANESSA&apos;S PROJECTS
        </div>
        <div className={styles.vsCodeProjects}>
          {projects.map((project) => (
            <div
              key={project.name}
              className={clsx(styles.vsCodeProject, {
                [styles.vsCodeActiveProject]: isEqual(project, currProject),
              })}
              onClick={() => onProjectSelect(project)}
            >
              <Info />
              {project.fileName}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
