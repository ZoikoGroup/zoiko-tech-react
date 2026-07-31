import {
  NgosConservationPublicSectorSection,
  ZoikoTechSupportInitiativesSection,
  ZoikoAxisPublicGoodSection,
  ZoikoNexFundingSection,
  ZoikoAssureComplianceSection,
  ZoikoShieldSecuritySection,
  ZoikoWebServicesSection,
  ZoikoCommitmentSection,
} from "@/components/social";

export default function SocialPage() {
  return (
    <main>
      <NgosConservationPublicSectorSection />
      <ZoikoTechSupportInitiativesSection />
      <ZoikoAxisPublicGoodSection />
      <ZoikoNexFundingSection />
      <ZoikoAssureComplianceSection />
      <ZoikoShieldSecuritySection />
      <ZoikoWebServicesSection />
      <ZoikoCommitmentSection />
    </main>
  );
}
