import { StaticImageData } from "next/image";

export type Project = {
  name: string;
  fileName: string;
  type: string;
  stack: string[];
  description: string;
  moreDetails?: string;
  link: string;
  image: StaticImageData;
  refName: string;
};
