import {
  SandboxAccessSection,
  SandboxFeaturesSection,
  PreloadedTestUtilitiesSection,
  MultipleAccessTiersSection,
  ResponsibleInnovationSection,
} from "@/components/sandbox-access";

export default function SandboxAccessPage() {
  return (
    <main>
      <SandboxAccessSection />
      <SandboxFeaturesSection />
      <PreloadedTestUtilitiesSection />
      <MultipleAccessTiersSection />
      <ResponsibleInnovationSection />
    </main>
  );
}
