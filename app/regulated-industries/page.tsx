import type { Metadata } from "next";
import {
  DesktopHero,
  DesktopContext,
  DesktopRouter,
  DesktopArchitecture,
  DesktopWorkflows,
  DesktopIdentity,
  DesktopSecurity,
  DesktopAi,
  DesktopJurisdiction,
  DesktopClaims,
  DesktopEvidence,
  DesktopPlatforms,
  DesktopDeveloper,
  DesktopImplementation,
  DesktopPractice,
  DesktopCustomerEvidence,
  DesktopFaq,
  DesktopFinalCta,
  TabletHero,
  TabletContext,
  TabletRouter,
  TabletArchitecture,
  TabletWorkflows,
  TabletIdentity,
  TabletSecurity,
  TabletAi,
  TabletJurisdiction,
  TabletClaims,
  TabletEvidence,
  TabletPlatforms,
  TabletDeveloper,
  TabletImplementation,
  TabletPractice,
  TabletCustomerEvidence,
  TabletFaq,
  TabletFinalCta,
} from "@/components/regulated-industries";

export const metadata: Metadata = {
  title: "Regulated Industries | Zoiko Tech",
  description:
    "Technology, evidence and governance for regulated industries — identity, security, AI governance, jurisdiction and claims boundaries in one coherent architecture.",
};

/**
 * Desktop (>= 1024px) and tablet/mobile (< 1024px) are separate components
 * with separate images (Desktop* / Tablet* files), so editing one never
 * affects the other. Only one set is visible at a time (CSS).
 */
export default function RegulatedIndustriesPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <DesktopHero />
        <DesktopContext />
        <DesktopRouter />
        <DesktopArchitecture />
        <DesktopWorkflows />
        <DesktopIdentity />
        <DesktopSecurity />
        <DesktopAi />
        <DesktopJurisdiction />
        <DesktopClaims />
        <DesktopEvidence />
        <DesktopPlatforms />
        <DesktopDeveloper />
        <DesktopImplementation />
        <DesktopPractice />
        <DesktopCustomerEvidence />
        <DesktopFaq />
        <DesktopFinalCta />
      </div>

      <div className="lg:hidden">
        <TabletHero />
        <TabletContext />
        <TabletRouter />
        <TabletArchitecture />
        <TabletWorkflows />
        <TabletIdentity />
        <TabletSecurity />
        <TabletAi />
        <TabletJurisdiction />
        <TabletClaims />
        <TabletEvidence />
        <TabletPlatforms />
        <TabletDeveloper />
        <TabletImplementation />
        <TabletPractice />
        <TabletCustomerEvidence />
        <TabletFaq />
        <TabletFinalCta />
      </div>
    </div>
  );
}
