import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  FrictionBetweenTeamsSection,
  OperatingSpineSection,
  SixDomainsSection,
  ExceptionQueueSection,
  SpecialistPlatformsSection,
  ImplementationSection,
  FaqSection,
  ContactSalesCtaSection,
} from "@/components/business-operations";

export const metadata: Metadata = {
  title: "Business Operations | Zoiko Tech",
  description:
    "Connect the recurring operations that keep the business running. Zoiko Tech brings people operations, payroll, billing, workforce assurance, communications, marketing operations and compliance into a clearer operating architecture, with explicit sources, owners, approvals, exceptions, integrations and evidence.",
};

export default function BusinessOperationsPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <IntentRouterSection />
      <FrictionBetweenTeamsSection />
      <OperatingSpineSection />
      <SixDomainsSection />
      <ExceptionQueueSection />
      <SpecialistPlatformsSection />
      <ImplementationSection />
      <FaqSection />
      <ContactSalesCtaSection />
    </div>
  );
}
