"use client";

import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import { Stickers, ToggleAssetsSwitch } from "@components";

export default function Landing() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQueryList.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div>
      <AboutMe />
      <Stickers />
      {isDesktop && <ToggleAssetsSwitch />}
    </div>
  );
}
