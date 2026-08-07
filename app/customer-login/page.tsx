import {
  CustomerLoginSection,
  UnifiedAccessSection,
  IdentityAndSupportSection,
} from "@/components/customer-login";

export default function CustomerLoginPage() {
  return (
    <main>
      <CustomerLoginSection />
      <UnifiedAccessSection />
      <IdentityAndSupportSection />
    </main>
  );
}
