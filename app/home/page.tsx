import {
  Ai,
  Arch,
  BuildNext,
  CorePillars,
  Developer,
  Eco,
  EntityOverview,
  GlobalPresence,
  HomeHero,
  Industry,
  KnowledgeFrontier,
  Practice,
  Solution,
} from "@/components/home";

export default function Page() {
  return (
    <main>
      <HomeHero />
      <CorePillars />
      <Eco />
      <Arch />
      <Solution />
      <Industry />
      <Ai />
      <Developer />
      <Practice />
      <GlobalPresence />
      <EntityOverview />
      <KnowledgeFrontier />
      <BuildNext />
    </main>
  );
}