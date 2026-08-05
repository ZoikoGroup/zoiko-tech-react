import {
  GlobalDataPrivacySection,
  PrivacyByDesignAndSubjectRightsSection,
  CrossBorderAndAccountabilitySection,
} from "@/components/gdp";

export default function GdpaPage() {
  return (
    <main>
      <GlobalDataPrivacySection />
      <PrivacyByDesignAndSubjectRightsSection />
      <CrossBorderAndAccountabilitySection />
    </main>
  );
}
