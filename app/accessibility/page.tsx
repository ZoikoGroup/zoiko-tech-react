import {
  AccessibilityStatementSection,
  PlatformAccessibilityFeaturesSection,
  InclusiveInnovationAndContactSection,
} from "@/components/accessibility";

export default function AccessibilityPage() {
  return (
    <main>
      <AccessibilityStatementSection />
      <PlatformAccessibilityFeaturesSection />
      <InclusiveInnovationAndContactSection />
    </main>
  );
}
