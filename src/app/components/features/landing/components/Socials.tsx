import {
  BrownPaper,
  GithubPaper,
  LinkedInPaper,
  LinkedInIcon,
  GithubIcon,
  MailPaper,
  MailIcon,
} from "@images";
import Image from "next/image";
import styles from "./Socials.module.css";
import { clsx } from "clsx";
import { ASSET_LINKS } from "@data";
import { useViewAssets } from "@contexts";
import { Asset } from "src/app/types/asset";
import { useState } from "react";
import { AssetsModal } from "@ui";

export function Socials() {
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
      <div className={styles.socialsContainer}>
        <a
          href="https://www.linkedin.com/in/v-vasquez/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isViewAssetsActive) {
              e.preventDefault();
              handleAssetClick([
                {
                  name: "BrownPaper",
                  image: BrownPaper,
                  url: ASSET_LINKS["BrownPaper"],
                },
                {
                  name: "LinkedInIcon",
                  image: LinkedInIcon,
                  url: ASSET_LINKS["LinkedInIcon"],
                },
              ]);
            }
          }}
        >
          <Image
            src={LinkedInPaper}
            alt="Visit my linkedin profile."
            className={clsx(styles.linkedInBtn, {
              [styles.viewAssets]: isViewAssetsActive,
            })}
            priority
          />
        </a>
        <a
          href="https://github.com/vanessa-vasquez"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isViewAssetsActive) {
              e.preventDefault();
              handleAssetClick([
                {
                  name: "BrownPaper",
                  image: BrownPaper,
                  url: ASSET_LINKS["BrownPaper"],
                },
                {
                  name: "GithubIcon",
                  image: GithubIcon,
                  url: ASSET_LINKS["GithubIcon"],
                },
              ]);
            }
          }}
        >
          <Image
            src={GithubPaper}
            alt="Visit my github profile."
            className={clsx(styles.githubBtn, {
              [styles.viewAssets]: isViewAssetsActive,
            })}
            priority
          />
        </a>

        <a
          href="mailto:vvasquez528@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (isViewAssetsActive) {
              e.preventDefault();
              handleAssetClick([
                {
                  name: "BrownPaper",
                  image: BrownPaper,
                  url: ASSET_LINKS["BrownPaper"],
                },
                {
                  name: "MailIcon",
                  image: MailIcon,
                  url: ASSET_LINKS["MailIcon"],
                },
              ]);
            }
          }}
        >
          <Image
            src={MailPaper}
            alt="Send me an email."
            className={clsx(styles.mailBtn, {
              [styles.viewAssets]: isViewAssetsActive,
            })}
            priority
          />
        </a>
      </div>
      {currentAssets.length > 0 && (
        <AssetsModal open={open} setOpen={setOpen} assets={currentAssets} />
      )}
    </>
  );
}
