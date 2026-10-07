import type { Metadata } from "next";
import {
  HeroSection,
  PathwaysSection,
  FeaturedStoriesSection,
  StoryFinderSection,
  EvidenceLibrarySection,
  TransformationOverviewSection,
  ImplementationPatternsSection,
  MeasuredOutcomesSection,
  RightsGovernanceSection,
  VerificationCurrentnessSection,
  CaseStudiesComparisonSection,
  TechnicalValidationSection,
  RelatedResourcesSection,
  FaqQuestionsSection,
  ContactSalesCtaSection,
} from "@/components/customer-stories";

export const metadata: Metadata = {
  title: "Customer Stories | Zoiko Tech",
  description:
    "See real operating context behind approved customer outcomes. Explore evidence-led stories that connect an approved customer context, operating challenge, Zoiko Tech technology or platform involvement, implementation reality and verified outcomes — with scope, attribution and currentness kept visible.",
};

export default function CustomerStoriesPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <PathwaysSection />
      <FeaturedStoriesSection />
      <StoryFinderSection />
      <EvidenceLibrarySection />
      <TransformationOverviewSection />
      <ImplementationPatternsSection />
      <MeasuredOutcomesSection />
      <RightsGovernanceSection />
      <VerificationCurrentnessSection />
      <CaseStudiesComparisonSection />
      <TechnicalValidationSection />
      <RelatedResourcesSection />
      <FaqQuestionsSection />
      <ContactSalesCtaSection />
    </main>
  );
}
