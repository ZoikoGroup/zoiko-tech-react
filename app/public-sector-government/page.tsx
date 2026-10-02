import type { Metadata } from "next";
import {
  DesktopHero,
  DesktopPathways,
  DesktopProblems,
  DesktopArchitecture,
  DesktopAccessibility,
  DesktopIdentity,
  DesktopWorkflows,
  DesktopIntelligence,
  DesktopCommunications,
  DesktopData,
  DesktopSecurity,
  DesktopEvidence,
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
  TabletAccessibility,
  TabletIdentity,
  TabletWorkflows,
  TabletIntelligence,
  TabletCommunications,
  TabletData,
  TabletSecurity,
  TabletEvidence,
  TabletPlatforms,
  TabletDevelopers,
  TabletImplementation,
  TabletPractice,
  TabletCustomerEvidence,
  TabletAdjacent,
  TabletFaq,
  TabletContact,
} from "@/components/public-sector-government";

export const metadata: Metadata = {
  title: "Public Sector & Government | Zoiko Tech",
  description:
    "Technology, evidence and governance for public sector and government — accessibility, identity, workflows, communications, data and security in one coherent architecture.",
};

/**
 * Desktop (>= 1024px) and tablet/mobile (< 1024px) are separate components
 * with separate images (Desktop* / Tablet* files), so editing one never
 * affects the other. Only one set is visible at a time (CSS).
 */
export default function PublicSectorGovernmentPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <DesktopHero />
        <DesktopPathways />
        <DesktopProblems />
        <DesktopArchitecture />
        <DesktopAccessibility />
        <DesktopIdentity />
        <DesktopWorkflows />
        <DesktopIntelligence />
        <DesktopCommunications />
        <DesktopData />
        <DesktopSecurity />
        <DesktopEvidence />
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
        <TabletAccessibility />
        <TabletIdentity />
        <TabletWorkflows />
        <TabletIntelligence />
        <TabletCommunications />
        <TabletData />
        <TabletSecurity />
        <TabletEvidence />
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
