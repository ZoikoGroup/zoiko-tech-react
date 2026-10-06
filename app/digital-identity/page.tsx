import {
  DigitalIdentitySection,
  DecisionMapSection,
  IdentityIntentRouterSection,
  AuthorityChainSection,
  PaymentApprovalHeaderSection,
  IdentitySubjectSection,
  AuthenticationSection,
  EntitlementSection,
  DelegationSection,
  AccessDecisionSection,
  EvidenceSection,
  LifecycleExpirySection,
  CastOfSubjectsSection,
  ContactSalesSection,
} from "@/components/digital-identity";

export default function DigitalIdentityPage() {
  return (
    <main>
      <DigitalIdentitySection />
      <DecisionMapSection />
      <IdentityIntentRouterSection />
      <AuthorityChainSection />
      <PaymentApprovalHeaderSection />
      <IdentitySubjectSection />
      <AuthenticationSection />
      <EntitlementSection />
      <DelegationSection />
      <AccessDecisionSection />
      <EvidenceSection />
      <LifecycleExpirySection />
      <CastOfSubjectsSection />
      <ContactSalesSection />
    </main>
  );
}
