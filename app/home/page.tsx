import {
  Architecture,
  CaseStudies,
  DeepSpecialization,
  Developers,
  EntityOverview,
  GlobalPresence,
  GovernedAI,
  KnowledgeFrontier,
  Platform,
  PlatformAccess,
  Principles,
  Solutions,
  ZoikoTechHero,
} from '@/components/home'

export default function Page() {
  return (
    <main>
      <ZoikoTechHero />
      <Principles />
      <Platform />
      <Architecture />
      <Solutions />
      <DeepSpecialization />
      <GovernedAI />
      <Developers />
      <CaseStudies />
      <GlobalPresence />
      <KnowledgeFrontier />
      <EntityOverview />
      <PlatformAccess />
    </main>
  )
}
