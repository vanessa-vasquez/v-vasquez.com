"use client";

import { ProjectsList } from "./projects-list";
import styles from "./Projects.module.css";
import { clsx } from "clsx";
import { ASSET_LINKS } from "@data";
import { MagazineLettersAd, PastaAndWineFontAd } from "@images";
import { VSCodeWidget } from "./vscode-widget";
import { useViewAssets } from "@contexts";
import { Asset } from "@types";
import { useState } from "react";
import { AssetsModal } from "@ui";

export default function Projects() {
  const { isViewAssetsActive } = useViewAssets();
  const [open, setOpen] = useState(false);
  const [currentAssets, setCurrentAssets] = useState<Asset[]>([]);

  const handleAssetClick = (assets: Asset[]) => {
    if (isViewAssetsActive) {
      setCurrentAssets(assets);
      setOpen(true);
    }
  };

  return (
    <>
      <div className={styles.projectsSectionContainer}>
        <div
          className={clsx(styles.projectsTitle, {
            [styles.viewAssets]: isViewAssetsActive,
          })}
          onClick={() =>
            handleAssetClick([
              {
                name: "MagazineLettersAd",
                image: MagazineLettersAd,
                url: ASSET_LINKS["MagazineLettersAd"],
              },
            ])
          }
        >
          Projects
        </div>
        <div
          className={clsx(styles.projectsText, {
            [styles.viewAssets]: isViewAssetsActive,
          })}
          onClick={() =>
            handleAssetClick([
              {
                name: "PastaAndWineFontAd",
                image: PastaAndWineFontAd,
                url: ASSET_LINKS["PastaAndWineFontAd"],
              },
            ])
          }
        >
          i build silly stuff
        </div>
        <div className={styles.vsCodeWidget}>
          <VSCodeWidget />
        </div>
        <div className={styles.projectsList}>
          <ProjectsList />
        </div>
      </div>
      {currentAssets.length > 0 && (
        <AssetsModal open={open} setOpen={setOpen} assets={currentAssets} />
      )}
    </>
  );
}
