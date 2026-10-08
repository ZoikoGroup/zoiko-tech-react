import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Finder,
  Featured,
  Library,
  CardContract,
  Detail,
  Downloads,
  Guides,
  Reports,
  Sources,
  Ownership,
  Currentness,
  Access,
  Journeys,
  Developers,
  Authority,
  Governance,
  Recovery,
  Faq,
  Contact,
} from "@/components/guides-reports";

export const metadata: Metadata = {
  title: "Guides & Reports | Zoiko Tech",
  description:
    "Guides and reports from Zoiko Tech — find, download and verify approved guides, reports, sources, ownership and currentness.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function GuidesReportsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Finder />
      <Featured />
      <Library />
      <CardContract />
      <Detail />
      <Downloads />
      <Guides />
      <Reports />
      <Sources />
      <Ownership />
      <Currentness />
      <Access />
      <Journeys />
      <Developers />
      <Authority />
      <Governance />
      <Recovery />
      <Faq />
      <Contact />
    </div>
  );
}
