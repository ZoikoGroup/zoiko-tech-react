import {
  TermsOfUseSection,
  AccountAndPlatformTermsSection,
  LegalTermsContinuedSection,
} from "@/components/terms-of-use";

export default function TermsOfUsePage() {
  return (
    <main>
      <TermsOfUseSection />
      <AccountAndPlatformTermsSection />
      <LegalTermsContinuedSection />
    </main>
  );
}
