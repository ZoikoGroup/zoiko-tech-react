import {
  ZoikoImpactHeroSection,
  ZoikoSustainableFutureSection,
  ZoikoHumanCenteredInnovationSection,
  ZoikoESGAndDiversitySection,
} from "@/components/sustainability";

export default function SustainabilityPage() {
  return (
    <main>
      <ZoikoImpactHeroSection />
      <ZoikoSustainableFutureSection />
      <ZoikoHumanCenteredInnovationSection />
      <ZoikoESGAndDiversitySection />
    </main>
  );
}
