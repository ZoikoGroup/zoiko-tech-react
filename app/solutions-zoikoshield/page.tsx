import {
  ZoikoSecurityStack,
  ZoikoSecurityArchitecture,
  ZoikoSecurityIntegrations,
  ZoikoSecurityUseCases,
  PricingSection,
  ZoikoSecurityStandards,
  ZoikoDeveloperHub,
  ZoikoCtaSection,
} from "@/components/solutions-zoikoshield";

export default function SolZoikoShield() {
  return (
    <main>
      <ZoikoSecurityStack />
      <ZoikoSecurityArchitecture />
      <ZoikoSecurityIntegrations />
      <ZoikoSecurityUseCases />
      <PricingSection />
      <ZoikoSecurityStandards />
      <ZoikoDeveloperHub />
      <ZoikoCtaSection />
    </main>
  );
}
