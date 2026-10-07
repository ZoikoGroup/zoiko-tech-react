import {
  TrustYouCanInspectHero,
  StartWithYourDiligenceQuestion,
  StatusIsPartOfTheEvidence,
  SecurityAndResilienceStaySourceOwned,
  DataHandlingNeedsExplicitScope,
  ControlsAlignmentAndAssurance,
  ResponsibleAiAndAccessibility,
  VulnerabilityReportingAndLiveHealth,
  TheTrustEvidenceCollection,
  AScopedReviewNeedsMinimalSafeContext,
  CurrentEvidenceCanChange,
  FailureMustNotBecomeFalseCertainty,
  ClearAnswersForDiligence,
  DiscussATrustEvaluation,
} from "@/components/trust-center";

export default function TrustCenterPage() {
  return (
    <main>
      <TrustYouCanInspectHero />
      <StartWithYourDiligenceQuestion />
      <StatusIsPartOfTheEvidence />
      <SecurityAndResilienceStaySourceOwned />
      <DataHandlingNeedsExplicitScope />
      <ControlsAlignmentAndAssurance />
      <ResponsibleAiAndAccessibility />
      <VulnerabilityReportingAndLiveHealth />
      <TheTrustEvidenceCollection />
      <AScopedReviewNeedsMinimalSafeContext />
      <CurrentEvidenceCanChange />
      <FailureMustNotBecomeFalseCertainty />
      <ClearAnswersForDiligence />
      <DiscussATrustEvaluation />
    </main>
  );
}
