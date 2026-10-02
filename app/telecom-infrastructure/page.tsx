import {
  HeroSection,
  InfrastructureIntentRouter,
  OperatorStacksSection,
  TelecomReferenceArchitecture,
  FivePlacesSection,
  EvolveStackSection,
  OperationalResilienceSection,
  PlatformsBehindArchitecture,
  MigrationWavesSection,
  TelecomInfrastructureAtAGlance,
  ContactSalesSection,
} from "@/components/telecom-infrastructure";

export default function TelecomInfrastructurePage() {
  return (
    <main>
      <HeroSection />
      <InfrastructureIntentRouter />
      <OperatorStacksSection />
      <TelecomReferenceArchitecture />
      <FivePlacesSection />
      <EvolveStackSection />
      <OperationalResilienceSection />
      <PlatformsBehindArchitecture />
      <MigrationWavesSection />
      <TelecomInfrastructureAtAGlance />
      <ContactSalesSection />
    </main>
  );
}
