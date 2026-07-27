import {
  FinanceSection,
  ZoikoAxisSection,
  ZoikoNexSection,
  ZoikoAssureSection,
  ZoikoShieldSection,
  ZoikoWebServicesSection,
  ZoikoPalSection,
  GlobalFinanceTrustSection,
} from "@/components/fintech";

export default function FintechPage() {
  return (
    <main>
      <FinanceSection />
      <ZoikoAxisSection />
      <ZoikoNexSection />
      <ZoikoAssureSection />
      <ZoikoShieldSection />
      <ZoikoWebServicesSection />
      <ZoikoPalSection />
      <GlobalFinanceTrustSection />
    </main>
  );
}
