import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Problems,
  Architecture,
  Journeys,
  Operations,
  Automotive,
  Communications,
  CrossBorder,
  ServiceState,
  Identity,
  Platforms,
  Developers,
  Implementation,
  Practice,
  CustomerEvidence,
  Adjacent,
  Faq,
  Contact,
} from "@/components/travel-mobility-transportation";

export const metadata: Metadata = {
  title: "Travel, Mobility & Transportation | Zoiko Tech",
  description:
    "Technology, evidence and governance for travel, mobility and transportation — journeys, operations, cross-border, service state and identity in one coherent architecture.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function TravelMobilityTransportationPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Problems />
      <Architecture />
      <Journeys />
      <Operations />
      <Automotive />
      <Communications />
      <CrossBorder />
      <ServiceState />
      <Identity />
      <Platforms />
      <Developers />
      <Implementation />
      <Practice />
      <CustomerEvidence />
      <Adjacent />
      <Faq />
      <Contact />
    </div>
  );
}
