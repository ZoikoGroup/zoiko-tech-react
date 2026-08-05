import {
  AnalystReportsMarketTrendsSection,
  KeyFocusAreasSection,
  ComplianceTechGovernanceSection,
  PublicSectorDigitalTransformationSection,
  AiForAgingPopulationsSection,
  FintechGlobalBillingSection,
  MarketMonitoringIntelligenceSection,
  CollaborativeResearchEngagementSection,
} from "@/components/analyst-reports";

export default function AnalystReportsPage() {
  return (
    <main>
      <AnalystReportsMarketTrendsSection />
      <KeyFocusAreasSection />
      <ComplianceTechGovernanceSection />
      <PublicSectorDigitalTransformationSection />
      <AiForAgingPopulationsSection />
      <FintechGlobalBillingSection />
      <MarketMonitoringIntelligenceSection />
      <CollaborativeResearchEngagementSection />
    </main>
  );
}
