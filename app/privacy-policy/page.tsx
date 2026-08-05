import {
  PrivacyPolicySection,
  DataSecurityAndTransfersSection,
  UserRightsAndArchitectureSection,
} from "@/components/privacy-policy";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PrivacyPolicySection />
      <DataSecurityAndTransfersSection />
      <UserRightsAndArchitectureSection />
    </main>
  );
}
