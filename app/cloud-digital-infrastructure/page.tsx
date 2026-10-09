import {
  CloudAndDigitalInfrastructureHero,
  CloudUnderstandingRoutes,
  SevenLayersWorkloadToEvidence,
  ZoikoCloudSection,
  DeveloperPlatform,
  CoreXSection,
  IdentitySecurityData,
  WhoIsResponsibleForWhat,
  IntegrationEventArchitecture,
  ObservabilityReliabilityAndStatus,
  RegulatedWorkloads,
  EvidenceAndTrustSection,
  ImplementationAndAdoption,
  TechnologyInPracticeCases,
  BuyerQuestions,
  DesignInfrastructureSection,
} from "@/components/cloud-digital-infrastructure";

export default function CloudPage() {
  return (
    <main>
      <CloudAndDigitalInfrastructureHero />
      <CloudUnderstandingRoutes />
      <SevenLayersWorkloadToEvidence />
      <ZoikoCloudSection />
      <DeveloperPlatform />
      <CoreXSection />
      <IdentitySecurityData />
      <WhoIsResponsibleForWhat />
      <IntegrationEventArchitecture />
      <ObservabilityReliabilityAndStatus />
      <RegulatedWorkloads />
      <EvidenceAndTrustSection />
      <ImplementationAndAdoption />
      <TechnologyInPracticeCases />
      <BuyerQuestions />
      <DesignInfrastructureSection />
    </main>
  );
}
