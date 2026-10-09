import {
  ComplianceLadderHero,
  ComplianceProgression,
  ComplianceSourceSteps,
  ComplianceCompletedTask,
  UnknownStaysUnknown,
  DifferentReadersResponsibilities,
  GovernanceClarity,
  OneAuthoritativeOwner,
  KnowLimitsEvaluation,
  EvaluationContextForm,
} from "@/components/compliance-ladder";

export default function ComplianceLadderPage() {
  return (
    <main>
      <ComplianceLadderHero />
      <ComplianceProgression />
      <ComplianceSourceSteps />
      <ComplianceCompletedTask />
      <UnknownStaysUnknown />
      <DifferentReadersResponsibilities />
      <GovernanceClarity />
      <OneAuthoritativeOwner />
      <KnowLimitsEvaluation />
      <EvaluationContextForm />
    </main>
  );
}
