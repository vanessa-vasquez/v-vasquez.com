"use client";

import { clsx } from "clsx";
import styles from "./AssetsModal.module.css";
import Image from "next/image";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { Asset } from "@types";
import { usePreventScroll } from "react-aria";
import StickyLink from "../sticky-link/StickyLink";
import { createPortal } from "react-dom";

const AssetsListImage = ({
  asset,
  onClick,
}: {
  asset: Asset;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <Image src={asset.image} alt="" className={styles.assetsListImage} />
    </div>
  );
};

interface AssetsModalProps {
  assets: Asset[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function AssetsModal({
  assets,
  open,
  setOpen,
}: AssetsModalProps) {
  const [asset, setCurrentAsset] = useState<Asset>(assets[0]);
  const [mounted, setMounted] = useState(false);

  usePreventScroll({ isDisabled: !open });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (assets.length === 0 || !mounted || !open) return null;

  return createPortal(
    <div
      className={clsx(styles.backdrop)}
      onClick={() => {
        setOpen(false);
      }}
    >
      <div
        className={clsx(styles.modalContainer)}
        onClick={(e) => e.stopPropagation()}
        id="modal"
      >
        {assets.length > 1 && (
          <div className={styles.currentAssetsList}>
            {assets.map((asset, i) => (
              <AssetsListImage
                key={i}
                asset={asset}
                onClick={() => setCurrentAsset(asset)}
              />
            ))}
          </div>
        )}
        <div className={styles.currentAssetImageContainer}>
          <Image
            src={asset.image}
            alt=""
            className={styles.currentAssetImage}
          />
        </div>
        <div className={styles.linkContainer}>
          <StickyLink link={asset.url} />
        </div>
      </div>
    </div>,
    document.body
  );
}
