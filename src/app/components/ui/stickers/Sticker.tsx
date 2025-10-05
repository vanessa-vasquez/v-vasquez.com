"use client";

import { useViewAssets } from "@contexts";
import { clsx } from "clsx";
import { StaticImageData } from "next/image";
import styles from "./Sticker.module.css";
import Image from "next/image";
import { ASSET_LINKS } from "@data";
import { AssetsModal } from "../assets-modal";
import { useState } from "react";

export default function Sticker({
  img,
  className,
  priority = false,
  width,
  height,
  name,
}: {
  name: string;
  img: StaticImageData;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const { isViewAssetsActive } = useViewAssets();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={img}
        alt=""
        className={clsx(styles.sticker, className, {
          [styles.viewAssets]: isViewAssetsActive,
        })}
        priority={priority}
        width={width}
        height={height}
        onClick={() => {
          if (isViewAssetsActive) {
            setOpen(true);
          }
        }}
      />
      <AssetsModal
        open={open}
        setOpen={setOpen}
        assets={[{ name, image: img, url: ASSET_LINKS[name] }]}
      />
    </>
  );
}
