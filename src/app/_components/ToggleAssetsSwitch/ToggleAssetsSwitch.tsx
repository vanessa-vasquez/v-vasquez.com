"use client";

import {
  CrowDoodle,
  PastaAndWineFontAd,
  ToggleAssetsTape,
  YellowWashiTape,
} from "@images";
import Image from "next/image";
import styles from "./ToggleAssetsSwitch.module.css";
import { Switch, FormControlLabel } from "@mui/material";
import { useViewAssets } from "@contexts";
import { clsx } from "clsx";
import { ASSET_LINKS } from "@data";
import { useState } from "react";
import { AssetsModal } from "../AssetsModal";

export default function ToggleAssetsSwitch() {
  const { toggleViewAssets, isViewAssetsActive } = useViewAssets();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.toggleAssetsContainer}>
      <div className={styles.switch}>
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              onChange={() => toggleViewAssets()}
              checked={isViewAssetsActive}
            />
          }
          label={
            <div className={styles.visuallyHidden}>Toggle to view assets.</div>
          }
        />
      </div>
      <Image
        src={ToggleAssetsTape}
        alt=""
        className={clsx(styles.toggleAssetsImg, {
          [styles.viewAssets]: isViewAssetsActive,
        })}
        priority
        onClick={() => {
          if (isViewAssetsActive) {
            setOpen(true);
          }
        }}
      />
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
            name: "YellowWashiTape",
            image: YellowWashiTape,
            url: ASSET_LINKS["YellowWashiTape"],
          },
          {
            name: "CrowDoodle",
            image: CrowDoodle,
            url: ASSET_LINKS["CrowDoodle"],
          },
        ]}
      />
    </div>
  );
}
