import {
  SaaSCloudEnterprisesSection,
  ZoikoAxisSection,
  ZoikoNexBillingSection,
  ZoikoAssureSection,
  ZoikoShieldRiskSection,
  ZoikoWebServicesSaaSSection,
  ReadyForScaleSection,
} from "@/components/sme-saas";

export default function SmeSaasPage() {
  return (
    <main>
      <SaaSCloudEnterprisesSection />
      <ZoikoAxisSection />
      <ZoikoNexBillingSection />
      <ZoikoAssureSection />
      <ZoikoShieldRiskSection />
      <ZoikoWebServicesSaaSSection />
      <ReadyForScaleSection />
    </main>
  );
}
