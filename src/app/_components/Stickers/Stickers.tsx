import { EyeCollage, GooglyEyes, GoldStars, WavyTexture } from "@images";
import Sticker from "./Sticker";
import styles from "./Sticker.module.css";

export default function Stickers() {
  return (
    <div>
      <Sticker
        img={WavyTexture}
        priority={true}
        className={styles.wavySticker}
        width={785}
        height={436}
        name="WavyTexture"
      />
      <Sticker
        img={EyeCollage}
        priority={true}
        className={styles.eyesSticker}
        name="EyeCollage"
      />
      <Sticker
        img={GoldStars}
        priority={true}
        className={styles.starSticker}
        name="GoldStars"
      />
      <Sticker
        img={GooglyEyes}
        priority={true}
        className={styles.googlyEyesSticker}
        name="GooglyEyes"
      />
    </div>
  );
}
