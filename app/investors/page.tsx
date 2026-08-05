import {
  InvestorRelationsDisclosuresSection,
  StrategicVisionPerformanceSection,
  RegulatoryFinancialDisclosuresSection,
  BoardGovernanceEthicsSection,
  EsgSustainableInvestmentSection,
  SecureInvestorAccessSection,
} from "@/components/investors";

export default function InvestorsPage() {
  return (
    <main>
      <InvestorRelationsDisclosuresSection />
      <StrategicVisionPerformanceSection />
      <RegulatoryFinancialDisclosuresSection />
      <BoardGovernanceEthicsSection />
      <EsgSustainableInvestmentSection />
      <SecureInvestorAccessSection />
    </main>
  );
}
