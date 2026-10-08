import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Portfolio,
  Labs,
  Robotics,
  Education,
  Geospatial,
  Language,
  Industrial,
  Lifecycle,
  Graduation,
  Governance,
  Data,
  Evidence,
  Developers,
  Collaboration,
  Practice,
  Faq,
  Contact,
} from "@/components/frontier-technologies";

export const metadata: Metadata = {
  title: "Frontier Technologies | Zoiko Tech",
  description:
    "Frontier technologies from Zoiko Tech — labs, robotics, education, geospatial, language and industrial technologies governed from lab to production.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function FrontierTechnologiesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Portfolio />
      <Labs />
      <Robotics />
      <Education />
      <Geospatial />
      <Language />
      <Industrial />
      <Lifecycle />
      <Graduation />
      <Governance />
      <Data />
      <Evidence />
      <Developers />
      <Collaboration />
      <Practice />
      <Faq />
      <Contact />
    </div>
  );
}
