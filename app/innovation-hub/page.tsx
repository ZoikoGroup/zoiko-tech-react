import {
  RnDHeaderSection,
  RnDDeploymentPurposeSection,
  RnDGeoAgnosticSection,
  RnDEthicalAISection,
  ZoikoInnovationLabSection,
} from "@/components/innovation-hub";

export default function InnovationHubPage() {
  return (
    <main>
      <RnDHeaderSection />
      <RnDDeploymentPurposeSection />
      <RnDGeoAgnosticSection />
      <RnDEthicalAISection />
      <ZoikoInnovationLabSection />
    </main>
  );
}
