import type { Metadata } from "next";
import {
  HeroSection,
  IntentRouterSection,
  PathwaysSection,
  FeaturedResearchSection,
  ResultsLibrarySection,
  CardContractSection,
  ArtifactDetailSection,
  BenchmarkDiscoverySection,
  TechnicalPaperPatternSection,
  TopicDomainBrowseSection,
  TechnologyRelationshipsSection,
  StateCurrentnessSection,
  EvidenceProvenanceSection,
  ZoikoResearchHandoffSection,
  FrontierBoundarySection,
  DeveloperHandoffSection,
  TrustResponsibleAiSection,
  StatesEdgeCasesSection,
  ResearchJourneysSection,
  BuyerQuestionsFaqSection,
  ContactConsultationSection,
} from "@/components/research";

export const metadata: Metadata = {
  title: "Technical Research | Zoiko Tech",
  description:
    "Browse approved technical papers, benchmarks and research outputs. See what each artifact is, whether it is current, where the authoritative version lives and what limitations apply before you rely on it.",
};

export default function ResearchPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <IntentRouterSection />
      <PathwaysSection />
      <FeaturedResearchSection />
      <ResultsLibrarySection />
      <CardContractSection />
      <ArtifactDetailSection />
      <BenchmarkDiscoverySection />
      <TechnicalPaperPatternSection />
      <TopicDomainBrowseSection />
      <TechnologyRelationshipsSection />
      <StateCurrentnessSection />
      <EvidenceProvenanceSection />
      <ZoikoResearchHandoffSection />
      <FrontierBoundarySection />
      <DeveloperHandoffSection />
      <TrustResponsibleAiSection />
      <StatesEdgeCasesSection />
      <ResearchJourneysSection />
      <BuyerQuestionsFaqSection />
      <ContactConsultationSection />
    </main>
  );
}
