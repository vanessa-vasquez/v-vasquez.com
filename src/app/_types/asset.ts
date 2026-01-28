import { StaticImageData } from "next/image";

export interface Asset {
  image: StaticImageData;
  url: string;
  name: string;
}
