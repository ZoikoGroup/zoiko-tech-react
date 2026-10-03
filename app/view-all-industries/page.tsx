import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  CoreIndustries,
  ConnectedIndustries,
  SectorRoutes,
  CrossIndustry,
  Solutions,
  Architecture,
  Evidence,
  Contact,
} from "@/components/view-all-industries";

export const metadata: Metadata = {
  title: "View All Industries | Zoiko Tech",
  description:
    "Explore Zoiko Tech by economic sector, then move into the operational systems, solutions, technology foundations and approved evidence most relevant to your organization.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function ViewAllIndustriesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <CoreIndustries />
      <ConnectedIndustries />
      <SectorRoutes />
      <CrossIndustry />
      <Solutions />
      <Architecture />
      <Evidence />
      <Contact />
    </div>
  );
}
