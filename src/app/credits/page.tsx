import { ReactNode } from "react";
import styles from "./credits.module.css";
import { ASSET_LINKS } from "@data";
import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Croissant,
  CrowDoodle,
  EyeCollage,
  FrenchWashiTape,
  GoldStars,
  GreenWashiTape,
  InfoSvg,
  Lamplights,
  PinkPostIt,
  SearchSvg,
  WavyTexture,
  YellowWashiTape,
  MailIcon,
  GithubIcon,
  LinkedInIcon,
  BrownPaper,
  PinkStar,
  LongScrapsAd,
  AncientDiaryPackAd,
  DoodleCloud,
  MegaphonePopArt,
  Converse,
  StarScribble,
} from "@images";
import Link from "next/link";
import StickyLink from "../components/ui/sticky-link/StickyLink";

const AssetElement = ({
  element,
  link,
  flip,
}: {
  element: ReactNode;
  link: string;
  flip: boolean;
}) => {
  return (
    <div className={styles.assetElementContainer}>
      {flip ? (
        <>
          <StickyLink link={link} />
          <div className={styles.assetElement}>{element}</div>
        </>
      ) : (
        <>
          <div className={styles.assetElement}>{element}</div>
          <StickyLink link={link} />
        </>
      )}
    </div>
  );
};

const AssetImage = ({
  image,
  link,
  priority = false,
  width = "100%",
}: {
  image: StaticImageData;
  link: string;
  priority?: boolean;
  width?: string;
}) => {
  return (
    <div className={styles.assetImageContainer}>
      <Image
        src={image}
        alt=""
        className={styles.assetImage}
        priority={priority}
        style={{ width: width }}
      />
      <StickyLink link={link} />
    </div>
  );
};

export default function Page() {
  return (
    <>
      <div className={styles.assetElements}>
        <div className={styles.homeLink}>
          <Link href="/" className={styles.home}>
            <span>v-vasquez.com</span>
          </Link>
          <span className={styles.slash}>/</span>
          <span className={styles.credits}>credits</span>
        </div>
        <AssetElement
          element={<div className={styles.pastaFont}>Pasta and Wine Font</div>}
          link={ASSET_LINKS["PastaAndWineFontAd"]}
          flip={false}
        />
        <AssetElement
          element={
            <div className={styles.magazineLettersFont}>
              Magazine Letters Font
            </div>
          }
          link={ASSET_LINKS["MagazineLettersAd"]}
          flip={true}
        />
      </div>
      <div className={styles.assetImages}>
        <AssetImage
          image={WavyTexture}
          link={ASSET_LINKS["WavyTexture"]}
          priority={true}
        />
        <AssetImage
          image={EyeCollage}
          link={ASSET_LINKS["EyeCollage"]}
          priority={true}
        />
        <AssetImage
          image={GoldStars}
          link={ASSET_LINKS["GoldStars"]}
          priority={true}
        />
        <AssetImage image={Croissant} link={ASSET_LINKS["Croissant"]} />
        <AssetImage image={PinkPostIt} link={ASSET_LINKS["PinkPostIt"]} />
        <AssetImage
          image={FrenchWashiTape}
          link={ASSET_LINKS["FrenchWashiTape"]}
        />
        <AssetImage
          image={GreenWashiTape}
          link={ASSET_LINKS["GreenWashiTape"]}
        />
        <AssetImage
          image={YellowWashiTape}
          link={ASSET_LINKS["YellowWashiTape"]}
        />
        <AssetImage
          image={AncientDiaryPackAd}
          link={ASSET_LINKS["AncientDiaryPackAd"]}
        />
        <AssetImage image={LongScrapsAd} link={ASSET_LINKS["LongScrapsAd"]} />
        <AssetImage image={PinkStar} link={ASSET_LINKS["PinkStar"]} />
        <AssetImage image={CrowDoodle} link={ASSET_LINKS["CrowDoodle"]} />

        <AssetImage image={BrownPaper} link={ASSET_LINKS["BrownPaper"]} />
        <AssetImage
          image={LinkedInIcon}
          link={ASSET_LINKS["LinkedInIcon"]}
          width="40%"
        />
        <AssetImage
          image={GithubIcon}
          link={ASSET_LINKS["GithubIcon"]}
          width="40%"
        />
        <AssetImage
          image={MailIcon}
          link={ASSET_LINKS["MailIcon"]}
          width="40%"
        />
        <AssetImage image={InfoSvg} link={ASSET_LINKS["InfoSvg"]} width="40%" />
        <AssetImage
          image={SearchSvg}
          link={ASSET_LINKS["SearchSvg"]}
          width="40%"
        />
        <AssetImage
          image={DoodleCloud}
          link={ASSET_LINKS["DoodleCloud"]}
          width="40%"
        />
        <AssetImage
          image={Lamplights}
          link={ASSET_LINKS["Lamplights"]}
          width="40%"
        />
        <AssetImage
          image={MegaphonePopArt}
          link={ASSET_LINKS["MegaphonePopArt"]}
        />
        <AssetImage image={Converse} link={ASSET_LINKS["Converse"]} />
        <AssetImage image={StarScribble} link={ASSET_LINKS["StarScribble"]} />
      </div>
    </>
  );
}
