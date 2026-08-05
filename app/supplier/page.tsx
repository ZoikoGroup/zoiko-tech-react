import {
  SupplierCodeOfConductSection,
  HumanRightsAndLaborPracticesSection,
  DataProtectionAndEthicalConductSection,
  EnvironmentalSustainabilityAndSubcontractorSection,
  ReportingMisconductSection,
} from "@/components/supplier";

export default function SupplierPage() {
  return (
    <main>
      <SupplierCodeOfConductSection />
      <HumanRightsAndLaborPracticesSection />
      <DataProtectionAndEthicalConductSection />
      <EnvironmentalSustainabilityAndSubcontractorSection />
      <ReportingMisconductSection />
    </main>
  );
}
