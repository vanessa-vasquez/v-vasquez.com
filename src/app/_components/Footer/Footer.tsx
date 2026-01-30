"use client";

import {
  Lamplights,
  Credits,
  PastaAndWineFontAd,
  MagazineLettersAd,
} from "@images";
import styles from "./Footer.module.css";
import Image from "next/image";
import { clsx } from "clsx";
import { useViewAssets } from "@contexts";
import { ASSET_LINKS } from "@data";
import Link from "next/link";
import { AssetsModal } from "@components";
import { useState } from "react";
import { Asset } from "@types";

export default function Footer() {
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
    <footer className={styles.footerContainer}>
      <Image
        src={Lamplights}
        alt=""
        className={clsx(styles.lamplightsSticker, {
          [styles.viewAssets]: isViewAssetsActive,
        })}
        onClick={() =>
          handleAssetClick([
            {
              name: "Lamplights",
              image: Lamplights,
              url: ASSET_LINKS["Lamplights"],
            },
          ])
        }
      />
      <div
        className={clsx(styles.footerNameContainer, {
          [styles.viewAssets]: isViewAssetsActive,
        })}
        onClick={() =>
          handleAssetClick([
            {
              name: "PastaAndWineFontAd",
              image: PastaAndWineFontAd,
              url: ASSET_LINKS["PastaAndWineFontAd"],
            },
            {
              name: "MagazineLettersAd",
              image: MagazineLettersAd,
              url: ASSET_LINKS["MagazineLettersAd"],
            },
          ])
        }
      >
        <span className={styles.handwrittenFooterText}>built by</span>

        <div className={styles.magazineFooterText}>vanessa </div>
        <div className={clsx(styles.magazineFooterText, styles.lastName)}>
          vasquez
        </div>
      </div>
      {isViewAssetsActive ? (
        <Image
          src={Credits}
          alt=""
          className={clsx(styles.creditsSticker, {
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
        />
      ) : (
        <Link
          href="/credits"
          className={styles.creditsLink}
          aria-label="Go to credits page."
        >
          <Image src={Credits} alt="" className={clsx(styles.creditsSticker)} />
        </Link>
      )}
      {currentAssets.length > 0 && (
        <AssetsModal open={open} setOpen={setOpen} assets={currentAssets} />
      )}
    </footer>
  );
}
