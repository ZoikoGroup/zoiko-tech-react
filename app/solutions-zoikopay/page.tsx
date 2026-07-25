import {
  ZoikoPayHero,
  ZoikoPayFeatures,
  ZoikoPayFeaturesAndCapabilities,
  ArchitectureAndEngineering,
  IndustryUseCases,
  ZoikoPayPricingAndMonetisation,
  ZoikoPayComplianceAndGovernance,
  ZoikoPayApiHub,
  ZoikoPayCTA,
} from "@/components/solutions-zoikopay";

export default function SolZoikoPay() {
  return (
    <main>
      <ZoikoPayHero />
      <ZoikoPayFeatures />
      <ZoikoPayFeaturesAndCapabilities />
      <ArchitectureAndEngineering />
      <IndustryUseCases />
      <ZoikoPayPricingAndMonetisation />
      <ZoikoPayComplianceAndGovernance />
      <ZoikoPayApiHub />
      <ZoikoPayCTA />
    </main>
  );
}
