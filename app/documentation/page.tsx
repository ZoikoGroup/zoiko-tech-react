import type { Metadata } from "next";
import {
  HeroSection,
  StartByGoalSection,
  DirectorySection,
  SearchSection,
  ArticleTemplateSection,
  CurrentnessSection,
  ProceduresSection,
  ConceptsSection,
  ReferenceDataSection,
  DevelopersSection,
  ChangesSection,
  AuthoritySection,
  RelatedSection,
  StatesSection,
  QuestionsSection,
  ContactSection,
} from "@/components/documentation";

export const metadata: Metadata = {
  title: "Documentation | Zoiko Tech",
  description:
    "Browse source-governed Zoiko Tech documentation by goal, product or platform. Each public article makes scope, currentness, prerequisites, expected behavior and the next authoritative route visible.",
};

export default function DocumentationPage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <StartByGoalSection />
      <DirectorySection />
      <SearchSection />
      <ArticleTemplateSection />
      <CurrentnessSection />
      <ProceduresSection />
      <ConceptsSection />
      <ReferenceDataSection />
      <DevelopersSection />
      <ChangesSection />
      <AuthoritySection />
      <RelatedSection />
      <StatesSection />
      <QuestionsSection />
      <ContactSection />
    </main>
  );
}
