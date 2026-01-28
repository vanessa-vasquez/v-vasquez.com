"use client";

import { useState } from "react";
import styles from "./VSCodeWidget.module.css";
import { VSCodeHeader } from "./VSCodeHeader";
import { VSCodeSidebar } from "./VSCodeSidebar";
import { VSCodeEditor } from "./VSCodeEditor";
import { ASSET_LINKS, projects } from "@data";
import { Project } from "@types";
import { useViewAssets } from "@contexts";
import { InfoSvg, PastaAndWineFontAd, SearchSvg } from "@images";
import { clsx } from "clsx";
import { AssetsModal } from "@components";

export default function VSCodeWidget() {
  const [currProject, setCurrProject] = useState<Project>(projects[0]);
  const { isViewAssetsActive } = useViewAssets();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(styles.vsCodeWidgetContainer, {
          [styles.viewAssets]: isViewAssetsActive,
        })}
        onClick={() => {
          if (isViewAssetsActive) {
            setOpen(true);
          }
        }}
      >
        <VSCodeHeader />
        <div className={styles.vsCodeContent}>
          <VSCodeSidebar
            projects={projects}
            currProject={currProject}
            onProjectSelect={setCurrProject}
          />
          <VSCodeEditor project={currProject} />
        </div>
      </div>
      <AssetsModal
        open={open}
        setOpen={setOpen}
        assets={[
          {
            name: "PastaAndWineFontAd",
            image: PastaAndWineFontAd,
            url: ASSET_LINKS["PastaAndWineFontAd"],
          },
          {
            name: "SearchSvg",
            image: SearchSvg,
            url: ASSET_LINKS["SearchSvg"],
          },
          {
            name: "InfoSvg",
            image: InfoSvg,
            url: ASSET_LINKS["InfoSvg"],
          },
        ]}
      />
    </>
  );
}
