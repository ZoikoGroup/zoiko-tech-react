import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Problems,
  Architecture,
  Provenance,
  Workflow,
  Learning,
  Section08,
  Collaboration,
  Publications,
  Frontier,
  Trust,
  Platforms,
  Developers,
  Adoption,
  Practice,
  Evidence,
  Adjacent,
  Faq,
  Contact,
} from "@/components/education-research";

export const metadata: Metadata = {
  title: "Education & Research | Zoiko Tech",
  description:
    "Technology, evidence and governance for education and research — provenance, workflows, learning, collaboration and publications in one coherent architecture.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function EducationResearchPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Problems />
      <Architecture />
      <Provenance />
      <Workflow />
      <Learning />
      <Section08 />
      <Collaboration />
      <Publications />
      <Frontier />
      <Trust />
      <Platforms />
      <Developers />
      <Adoption />
      <Practice />
      <Evidence />
      <Adjacent />
      <Faq />
      <Contact />
    </div>
  );
}
