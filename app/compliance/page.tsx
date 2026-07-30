import {
  LegalTaxComplianceSection,
  ZoikoAxisLegalSection,
  ZoikoNexProfessionalSection,
  ZoikoAssureRegulatorySection,
  ZoikoShieldSecuritySection,
  ZoikoWebServicesLegalSection,
  TrustedByProfessionalsSection,
} from "@/components/compliance";

export default function CompliancePage() {
  return (
    <main>
      <LegalTaxComplianceSection />
      <ZoikoAxisLegalSection />
      <ZoikoNexProfessionalSection />
      <ZoikoAssureRegulatorySection />
      <ZoikoShieldSecuritySection />
      <ZoikoWebServicesLegalSection />
      <TrustedByProfessionalsSection />
    </main>
  );
}
