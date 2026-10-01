import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  WhyFragmentedSection,
  CustomerExperienceArchitectureSection,
  CustomerCommunicationsSection,
  LocalPresenceSection,
  MarketingIntelligenceSection,
  CommerceJourneySection,
  LifeOrchestrationSection,
  CustomerOperationsSection,
  TrustConsentIdentitySection,
  IntegrationDeveloperSection,
  ImplementationAdoptionSection,
  TechnologyInPracticeSection,
  ExpansionRetentionSection,
  FaqSection,
  ContactSalesCtaSection,
} from "@/components/customer-and-local-commerce";

export const metadata: Metadata = {
  title: "Customer & Local Commerce | Zoiko Tech",
  description:
    "Connect customer communication, local presence and digital experiences without creating another channel silo. Zoiko Tech brings customer communications, governed marketing intelligence, local presence, commerce journeys and life-orchestration experiences into a shared technology architecture.",
};

export default function CustomerAndLocalCommercePage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntentRouterSection />
      <WhyFragmentedSection />
      <CustomerExperienceArchitectureSection />
      <CustomerCommunicationsSection />
      <LocalPresenceSection />
      <MarketingIntelligenceSection />
      <CommerceJourneySection />
      <LifeOrchestrationSection />
      <CustomerOperationsSection />
      <TrustConsentIdentitySection />
      <IntegrationDeveloperSection />
      <ImplementationAdoptionSection />
      <TechnologyInPracticeSection />
      <ExpansionRetentionSection />
      <FaqSection />
      <ContactSalesCtaSection />
    </main>
  );
}
