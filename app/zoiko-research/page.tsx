import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Families,
  Lifecycle,
  Library,
  Publication,
  Benchmarks,
  Papers,
  Collaboration,
  Topics,
  Methods,
  Provenance,
  ResponsibleAi,
  Frontier,
  Developers,
  Practice,
  Contact,
} from "@/components/zoiko-research";

export const metadata: Metadata = {
  title: "Zoiko Research | Zoiko Tech",
  description:
    "Zoiko Research — research families, lifecycle, publications, benchmarks, papers, collaboration, methods and provenance, with responsible AI and frontier boundaries.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function ZoikoResearchPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Families />
      <Lifecycle />
      <Library />
      <Publication />
      <Benchmarks />
      <Papers />
      <Collaboration />
      <Topics />
      <Methods />
      <Provenance />
      <ResponsibleAi />
      <Frontier />
      <Developers />
      <Practice />
      <Contact />
    </div>
  );
}
