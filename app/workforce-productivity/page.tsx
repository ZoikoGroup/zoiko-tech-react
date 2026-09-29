import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  WhyFragmentSection,
  ContextArchitectureSection,
  OperationalVisibilitySection,
  TimeAssuranceSection,
  CoordinationCollabSection,
  ExceptionsAccountabilitySection,
  HrHandoffsSection,
  GovernanceSection,
  PlatformEvidenceSection,
  ImplementationJourneySection,
  TechInPracticeSection,
  WhereTeamsGoNextSection,
  FaqSection,
  ContactSalesCtaSection,
} from "@/components/workforce-productivity";

export const metadata: Metadata = {
  title: "Workforce & Productivity | Zoiko Tech",
  description:
    "Give teams clearer operational context without turning work into surveillance. Zoiko Tech brings time, workforce context, collaboration and operational accountability into connected workflows.",
};

export default function WorkforceProductivityPage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <IntentRouterSection />
      <WhyFragmentSection />
      <ContextArchitectureSection />
      <OperationalVisibilitySection />
      <TimeAssuranceSection />
      <CoordinationCollabSection />
      <ExceptionsAccountabilitySection />
      <HrHandoffsSection />
      <GovernanceSection />
      <PlatformEvidenceSection />
      <ImplementationJourneySection />
      <TechInPracticeSection />
      <WhereTeamsGoNextSection />
      <FaqSection />
      <ContactSalesCtaSection />
    </main>
  );
}
