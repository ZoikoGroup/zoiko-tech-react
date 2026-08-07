import {
  TransparencyAtScaleSection,
  DeveloperPortalAccessSection,
  DeveloperPortalFeaturesSection,
  BuiltInComplianceSection,
  GloballyOptimizedSection,
} from "@/components/developer-portal";

export default function DeveloperPortalPage() {
  return (
    <main>
      <TransparencyAtScaleSection />
      <DeveloperPortalAccessSection />
      <DeveloperPortalFeaturesSection />
      <BuiltInComplianceSection />
      <GloballyOptimizedSection />
    </main>
  );
}
