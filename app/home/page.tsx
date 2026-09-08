import {
  DeveloperPlatform,
  EntityOverview,
  GovernedAIFoundations,
  IndustrySpecialization,
  KnowledgeFrontier,
  PlatformAccess,
  ProductEcosystem,
  SolutionsByOutcome,
  TechnologyInPractice,
  TechValues,
  UnifiedArchitecture,
  WhoWeAre,
  ZoikoTech,
} from "@/components/home";

export default function Page() {
  return (
    <main>
      <ZoikoTech />
      <TechValues />
      <ProductEcosystem />
      <UnifiedArchitecture />
      <SolutionsByOutcome />
      <IndustrySpecialization />
      <GovernedAIFoundations />
      <DeveloperPlatform />
      <TechnologyInPractice />
      <WhoWeAre />
      <KnowledgeFrontier />
      <EntityOverview />
      <PlatformAccess />
    </main>
  );
}