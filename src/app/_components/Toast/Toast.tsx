"use client";

import styles from "./Toast.module.css";
import Image from "next/image";
import { useViewAssets } from "@contexts";
import Slide from "@mui/material/Slide";

export default function Toast() {
  const { isViewAssetsActive } = useViewAssets();

  return (
    <Slide direction="up" in={isViewAssetsActive} mountOnEnter unmountOnExit>
      <div className={styles.toastContainer}>
        <div className={styles.eyeIcon}>
          <Image
            src="https://img.icons8.com/?size=100&id=85130&format=png&color=9c27b0"
            alt="Eye icon."
            width={25}
            height={25}
          />
        </div>
        <div className={styles.toastMessage}>
          <div className={styles.toastHeader}>View assets mode</div>
          <div>Click on an element to inspect it. Links disabled.</div>
        </div>
      </div>
    </Slide>
  );
}
