import {
  GlobalVisionSection,
  AboutZoikoTechSection,
  ZoikoEnvironmentalResponsibilitySection,
  ZoikoSocialImpactSection,
  ZoikoGovernanceEthicsSection,
} from "@/components/global-vision";

export default function GlobalVisionPage() {
  return (
    <main>
      <GlobalVisionSection />
      <AboutZoikoTechSection />
      <ZoikoEnvironmentalResponsibilitySection />
      <ZoikoSocialImpactSection />
      <ZoikoGovernanceEthicsSection />
    </main>
  );
}
