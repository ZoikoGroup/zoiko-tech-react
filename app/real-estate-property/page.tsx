import type { Metadata } from "next";
import {
  Hero,
  Pathways,
  Problems,
  Architecture,
  Discovery,
  Communications,
  Transactions,
  Payments,
  Operations,
  Compliance,
  Identity,
  Platforms,
  Developers,
  Implementation,
  Practice,
  CustomerEvidence,
  Adjacent,
  Faq,
  Contact,
} from "@/components/real-estate-property";

export const metadata: Metadata = {
  title: "Real Estate & Property | Zoiko Tech",
  description:
    "Technology, evidence and governance for real estate and property — discovery, transactions, payments, operations and compliance in one coherent architecture.",
};

/** One component per section; each handles mobile, tablet and desktop with breakpoint classes. */
export default function RealEstatePropertyPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <Pathways />
      <Problems />
      <Architecture />
      <Discovery />
      <Communications />
      <Transactions />
      <Payments />
      <Operations />
      <Compliance />
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
