import {
  DeveloperIntegrationNetworkHeroSection,
  WhatDevelopersGainAccessToSection,
  SdksDeveloperToolkitsSection,
  DeveloperPortalComingSoonSection,
  BuiltForInteroperabilitySection,
  DeveloperCommunityPartnerCertificationSection,
} from "@/components/developer-integration";

export default function DeveloperIntegrationPage() {
  return (
    <main>
      <DeveloperIntegrationNetworkHeroSection />
      <WhatDevelopersGainAccessToSection />
      <SdksDeveloperToolkitsSection />
      <DeveloperPortalComingSoonSection />
      <BuiltForInteroperabilitySection />
      <DeveloperCommunityPartnerCertificationSection />
    </main>
  );
}
