import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Principles,
  Architecture,
  Domain,
  Execution,
  Orchestration,
  Authority,
  Sources,
  Controls,
  Governance,
  Operations,
  Platforms,
  Developers,
  Adoption,
  Practice,
  Faq,
  Contact,
} from "@/components/artificial-intelligence-agentic-systems";

export const metadata: Metadata = {
  title: "Artificial Intelligence & Agentic Systems | Zoiko Tech",
  description:
    "Governed artificial intelligence and agentic systems from Zoiko Tech — principles, architecture, execution, orchestration, authority, sources and controls.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function ArtificialIntelligenceAgenticSystemsPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Principles />
      <Architecture />
      <Domain />
      <Execution />
      <Orchestration />
      <Authority />
      <Sources />
      <Controls />
      <Governance />
      <Operations />
      <Platforms />
      <Developers />
      <Adoption />
      <Practice />
      <Faq />
      <Contact />
    </div>
  );
}
