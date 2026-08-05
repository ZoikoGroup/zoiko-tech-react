import {
  WhitePapersHeroSection,
  StrategicWhitePapersSection,
  EmbeddedComplianceWhitePaperSection,
  GlobalMvnoWhitePaperSection,
  DigitizingGovernmentWhitePaperSection,
  TelecomEsgWhitePaperSection,
  TechnicalBriefsSection,
  EmergingResearchSection,
  AccessAndApplicationSection,
} from "@/components/white-papers";

export default function WhitePapersPage() {
  return (
    <main>
      <WhitePapersHeroSection />
      <StrategicWhitePapersSection />
      <EmbeddedComplianceWhitePaperSection />
      <GlobalMvnoWhitePaperSection />
      <DigitizingGovernmentWhitePaperSection />
      <TelecomEsgWhitePaperSection />
      <TechnicalBriefsSection />
      <EmergingResearchSection />
      <AccessAndApplicationSection />
    </main>
  );
}
