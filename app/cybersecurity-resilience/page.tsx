import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  WhySilosFailSection,
  SecurityArchitectureSection,
  PostureExposureSection,
  IdentityAccessSection,
  DetectionResponseSection,
  SecureEngineeringSection,
  ResilienceContinuitySection,
  ResponsibleEvidenceSection,
  PlatformEvidenceSection,
  IntegrationContextSection,
  ImplementationJourneySection,
  TechnologyInPracticeSection,
  WhereTeamsGoNextSection,
  FaqSection,
  ContactSalesCtaSection,
} from "@/components/cybersecurity-resilience";

export const metadata: Metadata = {
  title: "Cybersecurity & Resilience | Zoiko Tech",
  description:
    "Protect critical systems and keep operations resilient when conditions change. Zoiko Tech brings secure engineering, identity, least privilege, threat prevention, security operations and resilience into a governed architecture.",
};

export default function CybersecurityResiliencePage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <IntentRouterSection />
      <WhySilosFailSection />
      <SecurityArchitectureSection />
      <PostureExposureSection />
      <IdentityAccessSection />
      <DetectionResponseSection />
      <SecureEngineeringSection />
      <ResilienceContinuitySection />
      <ResponsibleEvidenceSection />
      <PlatformEvidenceSection />
      <IntegrationContextSection />
      <ImplementationJourneySection />
      <TechnologyInPracticeSection />
      <WhereTeamsGoNextSection />
      <FaqSection />
      <ContactSalesCtaSection />
    </main>
  );
}
