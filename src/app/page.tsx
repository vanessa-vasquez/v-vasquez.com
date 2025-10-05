import { Landing } from "@features";

import dynamic from "next/dynamic";
import Toast from "./components/ui/toast/Toast";
import { memo } from "react";

const TechStack = memo(
  dynamic(() => import("./components/features/tech-stack/TechStack"), {
    loading: () => <></>,
  })
);

const Projects = memo(
  dynamic(() => import("./components/features/projects/Projects"), {
    loading: () => <></>,
  })
);
const Footer = memo(
  dynamic(() => import("./components/features/footer/Footer"), {
    loading: () => <></>,
  })
);

export default function Page() {
  return (
    <div className={"homeContainer"}>
      <Landing />
      <TechStack />
      <Projects />
      <Footer />
      <Toast />
    </div>
  );
}
