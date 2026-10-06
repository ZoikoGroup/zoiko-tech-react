import {
  CybersecurityHeroSection,
  CybersecurityIntentRouterSection,
  ProtectionArchitecture,
  ProtectedScopeSection,
  SecuritySignalsSection,
  IncidentResilienceSection,
  ResponseRecoverySection,
  VulnerabilityExposureBoundarySection,
  SecurityControlsSection,
  HumanOwnershipSection,
  EvidenceObservabilitySection,
  PrivacyIdentityRegulatoryHandoffsSection,
  AuthoritativeRoutesSection,
  DeveloperIntegrationLayerSection,
  ImplementationAdoptionSection,
  CybersecurityFAQSection,
  GetStartedSection,
} from "@/components/cybersecurity";

export default function CybersecurityPage() {
  return (
    <main>
      <CybersecurityHeroSection />
      <CybersecurityIntentRouterSection />
      <ProtectionArchitecture />
      <ProtectedScopeSection />
      <SecuritySignalsSection />
      <IncidentResilienceSection />
      <ResponseRecoverySection />
      <VulnerabilityExposureBoundarySection />
      <SecurityControlsSection />
      <HumanOwnershipSection />
      <EvidenceObservabilitySection />
      <PrivacyIdentityRegulatoryHandoffsSection />
      <AuthoritativeRoutesSection />
      <DeveloperIntegrationLayerSection />
      <ImplementationAdoptionSection />
      <CybersecurityFAQSection />
      <GetStartedSection />
    </main>
  );
}
