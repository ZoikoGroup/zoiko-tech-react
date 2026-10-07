import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  UseCaseRegistrySection,
  SystemInventorySection,
  AuthorityRightsSection,
  InputGovernanceSection,
  EvaluationValidationSection,
  HumanOversightSection,
  ChangeReleaseSection,
  HarmfulUseControlsSection,
  MonitoringIncidentsSection,
  ThirdPartyBoundarySection,
  NeighborsHandoffsSection,
  AuthoritativeLinksSection,
  ImplementationAdoptionSection,
  BuyerQuestionsFaqSection,
  GetStartedContactSection,
} from "@/components/ai-safety-and-governance";

export const metadata: Metadata = {
  title: "AI Safety & Governance | Zoiko Tech",
  description:
    "The governance architecture for registering, risk-classifying, approving, evaluating, monitoring, changing and evidencing AI and agent use cases while keeping authority explicit.",
};

export default function AiSafetyAndGovernancePage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <IntentRouterSection />
      <UseCaseRegistrySection />
      <SystemInventorySection />
      <AuthorityRightsSection />
      <InputGovernanceSection />
      <EvaluationValidationSection />
      <HumanOversightSection />
      <ChangeReleaseSection />
      <HarmfulUseControlsSection />
      <MonitoringIncidentsSection />
      <ThirdPartyBoundarySection />
      <NeighborsHandoffsSection />
      <AuthoritativeLinksSection />
      <ImplementationAdoptionSection />
      <BuyerQuestionsFaqSection />
      <GetStartedContactSection />
    </main>
  );
}
