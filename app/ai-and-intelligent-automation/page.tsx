import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  StallsArchitectureSection,
  AuthorityLevelsSection,
  PatternsSection,
  TrustGovernanceSection,
  PlatformsDeveloperSection,
  ImplementationAdoptionSection,
  FaqSection,
  ContactSalesCtaSection,
} from "@/components/ai-and-intelligent-automation";

export const metadata: Metadata = {
  title: "AI & Intelligent Automation | Zoiko Tech",
  description:
    "Turn enterprise intelligence into governed work, not isolated AI experiments. Zoiko Tech brings models, knowledge, agents, workflows, developer interfaces and governance into a connected AI architecture.",
};

export default function AiAndIntelligentAutomationPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntentRouterSection />
      <StallsArchitectureSection />
      <AuthorityLevelsSection />
      <PatternsSection />
      <TrustGovernanceSection />
      <PlatformsDeveloperSection />
      <ImplementationAdoptionSection />
      <FaqSection />
      <ContactSalesCtaSection />
    </main>
  );
}
