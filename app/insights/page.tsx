import {
  EngineeringTransformationHero,
  CaseStudiesHeader,
  CaseStudiesAndSuccessStories,
  EldercareSection,
  PublicSectorPayroll,
  TelcoSection,
  GlobalRegTechTransformation,
} from "@/components/insights";

export default function Insights() {
  return (
    <main>
      <EngineeringTransformationHero />
      <CaseStudiesHeader />
      <CaseStudiesAndSuccessStories />
      <EldercareSection />
      <PublicSectorPayroll />
      <TelcoSection />
      <GlobalRegTechTransformation />
    </main>
  );
}
