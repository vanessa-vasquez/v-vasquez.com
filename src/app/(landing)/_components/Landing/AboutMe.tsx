"use client";

import {
  Croissant,
  PinkPostIt,
  FrenchWashiTape,
  GreenWashiTape,
  DoodleCloud,
  PastaAndWineFontAd,
  AncientDiaryPackAd,
  LongScrapsAd,
  PinkStar,
} from "@images";
import styles from "./AboutMe.module.css";
import { useViewAssets } from "@contexts";
import { clsx } from "clsx";
import { ASSET_LINKS } from "@data";
import { useState } from "react";
import { AboutMeCollage } from "./AboutMeCollage";
import { NameAnimation } from "./NameAnimation";
import { Socials } from "./Socials";
import { AssetsModal } from "@components";

export default function AboutMe() {
  const { isViewAssetsActive } = useViewAssets();
  const [expandAboutMe, setExpandAboutMe] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(styles.aboutMeContainer, {
          [styles.viewAssets]: isViewAssetsActive && expandAboutMe,
        })}
      >
        <div
          className={clsx({
            [styles.clickableArea]: isViewAssetsActive,
          })}
          onMouseEnter={() => setExpandAboutMe(true)}
          onMouseLeave={() => setExpandAboutMe(false)}
          onClick={() => {
            if (isViewAssetsActive) {
              setOpen(true);
            }
          }}
        ></div>
        <NameAnimation />
        <div className={styles.aboutMeSection}>
          <AboutMeCollage />
          <Socials />
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
            name: "AncientDiaryPackAd",
            image: AncientDiaryPackAd,
            url: ASSET_LINKS["AncientDiaryPackAd"],
          },
          {
            name: "FrenchWashiTape",
            image: FrenchWashiTape,
            url: ASSET_LINKS["FrenchWashiTape"],
          },
          {
            name: "LongScrapsAd",
            image: LongScrapsAd,
            url: ASSET_LINKS["LongScrapsAd"],
          },
          {
            name: "Croissant",
            image: Croissant,
            url: ASSET_LINKS["Croissant"],
          },
          {
            name: "PinkPostIt",
            image: PinkPostIt,
            url: ASSET_LINKS["PinkPostIt"],
          },
          {
            name: "GreenWashiTape",
            image: GreenWashiTape,
            url: ASSET_LINKS["GreenWashiTape"],
          },
          {
            name: "DoodleCloud",
            image: DoodleCloud,
            url: ASSET_LINKS["DoodleCloud"],
          },
          {
            name: "PinkStar",
            image: PinkStar,
            url: ASSET_LINKS["PinkStar"],
          },
        ]}
      />
    </>
  );
}
