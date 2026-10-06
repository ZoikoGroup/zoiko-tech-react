import {
  CustomerEvidenceHero,
  CustomerEvidencePublished,
  OneProofChainSection,
  WhatMakesACaseStudyReviewable,
  ResultNeedsMoreThanANumber,
  IdentityAndQuotationPermission,
  ArchitectureEvidenceSection,
  InspectContextBehindClaim,
  WhenProofIsUnavailableSection,
  DifferentClaimsHaveDifferentAuthorities,
  PublishGovernedProofSection,
  ClearAnswersAboutProof,
  StartWithTheProofSection,
} from "@/components/customer-evidence";

export default function CustomerEvidencePage() {
  return (
    <main>
      <CustomerEvidenceHero />
      <CustomerEvidencePublished />
      <OneProofChainSection />
      <WhatMakesACaseStudyReviewable />
      <ResultNeedsMoreThanANumber />
      <IdentityAndQuotationPermission />
      <ArchitectureEvidenceSection />
      <InspectContextBehindClaim />
      <WhenProofIsUnavailableSection />
      <DifferentClaimsHaveDifferentAuthorities />
      <PublishGovernedProofSection />
      <ClearAnswersAboutProof />
      <StartWithTheProofSection />
    </main>
  );
}
