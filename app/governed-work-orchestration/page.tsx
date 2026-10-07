import {
  GovernedWorkOrchestrationHeroSection,
  CoordinationSection,
  GovernedOrchestrationSevenLayersSection,
  GovernedOrchestrationWorkObjectSection,
  GovernedOrchestrationQueueSection,
  GovernedOrchestrationDependenciesSection,
  ActorUnitsSection,
  GovernedOrchestrationPolicyGatesSection,
  HandoffsSection,
  GovernedOrchestrationExceptionsSection,
  GovernedOrchestrationEvidenceSection,
  GovernedOrchestrationIdentitySection,
  GovernedOrchestrationBoundarySection,
  GovernedOrchestrationPlatformEvidenceSection,
} from "@/components/governed-work-orchestration";

export default function GovernedWorkOrchestrationPage() {
  return (
    <main>
      <GovernedWorkOrchestrationHeroSection />
      <CoordinationSection />
      <GovernedOrchestrationSevenLayersSection />
      <GovernedOrchestrationWorkObjectSection />
      <GovernedOrchestrationQueueSection />
      <GovernedOrchestrationDependenciesSection />
      <ActorUnitsSection />
      <GovernedOrchestrationPolicyGatesSection />
      <HandoffsSection />
      <GovernedOrchestrationExceptionsSection />
      <GovernedOrchestrationEvidenceSection />
      <GovernedOrchestrationIdentitySection />
      <GovernedOrchestrationBoundarySection />
      <GovernedOrchestrationPlatformEvidenceSection />
    </main>
  );
}
