import type { Metadata } from "next";
import {
  Hero,
  WhatDoYouNeedToGovern,
  WhyGovernanceBreaksDown,
  OutcomeArchitecture,
  OneTechnologyFoundation,
  DeliveryPatterns,
  SolutionCapabilityMatrix,
  PlatformEvidence,
  ResponsibleAiSecurityPrivacy,
  IntegrationDeveloperLayer,
  StartWithInventory,
  TechnologyInPractice,
  WhereTeamsGoNext,
  BuyerQuestionsFaq,
  MoveGovernanceCta,
} from "@/components/technology-saas";

export const metadata: Metadata = {
  title: "Technology & SaaS | Zoiko Tech",
  description:
    "Modernize the technology estate without creating another layer of complexity — enterprise software, governed AI, developer infrastructure, integration, identity and shared foundations in one coherent architecture.",
};

export default function TechnologySaaS() {
  return (
    <main>
      <Hero />
      <WhatDoYouNeedToGovern />
      <WhyGovernanceBreaksDown />
      <OutcomeArchitecture />
      <OneTechnologyFoundation />
      <DeliveryPatterns />
      <SolutionCapabilityMatrix />
      <PlatformEvidence />
      <ResponsibleAiSecurityPrivacy />
      <IntegrationDeveloperLayer />
      <StartWithInventory />
      <TechnologyInPractice />
      <WhereTeamsGoNext />
      <BuyerQuestionsFaq />
      <MoveGovernanceCta />
    </main>
  );
}
