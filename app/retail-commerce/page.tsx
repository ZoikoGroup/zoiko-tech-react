import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Problems,
  Architecture,
  Communications,
  Marketing,
  Journey,
  Payments,
  Operations,
  Locations,
  Identity,
  Platforms,
  Developers,
  Implementation,
  Practice,
  CustomerEvidence,
  Adjacent,
  Faq,
  Contact,
} from "@/components/retail-commerce";

export const metadata: Metadata = {
  title: "Retail & Commerce | Zoiko Tech",
  description:
    "Technology, evidence and governance for retail and commerce — payments, marketing, customer journeys, operations and locations in one coherent architecture.",
};

/**
 * One component per section. Each component handles all three views with
 * breakpoint-scoped classes: mobile (< md), tablet (md–lg) and desktop (lg+).
 */
export default function RetailCommercePage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Problems />
      <Architecture />
      <Communications />
      <Marketing />
      <Journey />
      <Payments />
      <Operations />
      <Locations />
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
