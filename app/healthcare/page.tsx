import {
  HealthcareSection,
  ZoikoAxisHealthSection,
  ZoikoNexHealthSection,
  ZoikoAssureHealthSection,
  ZoikoShieldSection,
  ZoikoWebServicesSection,
  ZoikoPalElderlySection,
  RegulatedScaleSection,
} from "@/components/healthcare";

export default function HealthCarePage() {
  return (
    <main>
      <HealthcareSection />
      <ZoikoAxisHealthSection />
      <ZoikoNexHealthSection />
      <ZoikoAssureHealthSection />
      <ZoikoShieldSection />
      <ZoikoWebServicesSection />
      <ZoikoPalElderlySection />
      <RegulatedScaleSection />
    </main>
  );
}
