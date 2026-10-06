import type { Metadata } from "next";
import {
  DesktopHero,
  DesktopPathways,
  DesktopProblems,
  DesktopArchitecture,
  DesktopPayments,
  DesktopRemittance,
  DesktopOperations,
  DesktopIdentity,
  DesktopCompliance,
  DesktopIntelligence,
  DesktopSecurity,
  DesktopPlatforms,
  DesktopDevelopers,
  DesktopImplementation,
  DesktopPractice,
  DesktopCustomerEvidence,
  DesktopAdjacent,
  DesktopFaq,
  DesktopContact,
  TabletHero,
  TabletPathways,
  TabletProblems,
  TabletArchitecture,
  TabletPayments,
  TabletRemittance,
  TabletOperations,
  TabletIdentity,
  TabletCompliance,
  TabletIntelligence,
  TabletSecurity,
  TabletPlatforms,
  TabletDevelopers,
  TabletImplementation,
  TabletPractice,
  TabletCustomerEvidence,
  TabletAdjacent,
  TabletFaq,
  TabletContact,
} from "@/components/financial-services";

export const metadata: Metadata = {
  title: "Financial Services | Zoiko Tech",
  description:
    "Technology, evidence and governance for financial services — payments, remittance, operations, identity, compliance and security in one coherent architecture.",
};

/**
 * Desktop (>= 1024px) and tablet/mobile (< 1024px) are separate components
 * with separate images (Desktop* / Tablet* files), so editing one never
 * affects the other. Only one set is visible at a time (CSS).
 */
export default function FinancialServicesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <DesktopHero />
        <DesktopPathways />
        <DesktopProblems />
        <DesktopArchitecture />
        <DesktopPayments />
        <DesktopRemittance />
        <DesktopOperations />
        <DesktopIdentity />
        <DesktopCompliance />
        <DesktopIntelligence />
        <DesktopSecurity />
        <DesktopPlatforms />
        <DesktopDevelopers />
        <DesktopImplementation />
        <DesktopPractice />
        <DesktopCustomerEvidence />
        <DesktopAdjacent />
        <DesktopFaq />
        <DesktopContact />
      </div>

      <div className="lg:hidden">
        <TabletHero />
        <TabletPathways />
        <TabletProblems />
        <TabletArchitecture />
        <TabletPayments />
        <TabletRemittance />
        <TabletOperations />
        <TabletIdentity />
        <TabletCompliance />
        <TabletIntelligence />
        <TabletSecurity />
        <TabletPlatforms />
        <TabletDevelopers />
        <TabletImplementation />
        <TabletPractice />
        <TabletCustomerEvidence />
        <TabletAdjacent />
        <TabletFaq />
        <TabletContact />
      </div>
    </div>
  );
}
