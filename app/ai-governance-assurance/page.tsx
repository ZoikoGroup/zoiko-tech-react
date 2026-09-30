import type { Metadata } from "next";
import {
  Hero,
  WhatDoYouNeedToGovern,
  WhyGovernanceBreaksDown,
  OperatingArchitecture,
  SystemRegistry,
  ImpactClassification,
  AgentAuthorityControls,
  EvaluationAssurance,
  HumanOversightApprovals,
  EvidenceDecisionRecord,
  RuntimeMonitoringIncidents,
  ChangeControlReapproval,
  ResponsibleAiSecurityPrivacy,
  PlatformEvidence,
  IntegrationDeveloperLayer,
  StartWithInventory,
  TechnologyInPractice,
  WhereTeamsGoNext,
  BuyerQuestionsFaq,
  MoveGovernanceCta,
} from "@/components/ai-governance-assurance";

export const metadata: Metadata = {
  title: "AI Governance & Assurance | Zoiko Tech",
  description:
    "Govern AI systems and agents with evidence before, during and after deployment — inventory, classification, authority, evaluation, approvals, monitoring and change control.",
};

export default function AiGovernanceAssurance() {
  return (
    <main>
      <Hero />
      <WhatDoYouNeedToGovern />
      <WhyGovernanceBreaksDown />
      <OperatingArchitecture />
      <SystemRegistry />
      <ImpactClassification />
      <AgentAuthorityControls />
      <EvaluationAssurance />
      <HumanOversightApprovals />
      <EvidenceDecisionRecord />
      <RuntimeMonitoringIncidents />
      <ChangeControlReapproval />
      <ResponsibleAiSecurityPrivacy />
      <PlatformEvidence />
      <IntegrationDeveloperLayer />
      <StartWithInventory />
      <TechnologyInPractice />
      <WhereTeamsGoNext />
      <BuyerQuestionsFaq />
      <MoveGovernanceCta />
    </main>
  );
}
