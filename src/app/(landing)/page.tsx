import Landing from "./_components/Landing/Landing";

import dynamic from "next/dynamic";
import Toast from "../_components/Toast/Toast";
import { memo } from "react";

const TechStack = memo(
  dynamic(() => import("./_components/TechStack/TechStack"), {
    loading: () => <></>,
  })
);

const Projects = memo(
  dynamic(() => import("./_components/Projects/Projects"), {
    loading: () => <></>,
  })
);
const Footer = memo(
  dynamic(() => import("./_components/Footer/Footer"), {
    loading: () => <></>,
  })
);

export default function Page() {
  return (
    <div className="homeContainer">
      <Landing />
      <TechStack />
      <Projects />
      <Footer />
      <Toast />
    </div>
  );
}
