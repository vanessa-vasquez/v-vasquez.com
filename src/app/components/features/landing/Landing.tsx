"use client";

import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import { Stickers, ToggleAssetsSwitch } from "@ui";

export default function Landing() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQueryList.matches);
  }, []);

  return (
    <div>
      <AboutMe />
      <Stickers />
      {isDesktop && <ToggleAssetsSwitch />}
    </div>
  );
}
