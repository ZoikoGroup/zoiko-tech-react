import type { Metadata } from "next";
import {
  DesktopAiSystems,
  DesktopArchitecture,
  DesktopBillingBoundary,
  DesktopBusinessOs,
  DesktopDeveloper,
  DesktopFaq,
  DesktopFinalCta,
  DesktopHero,
  DesktopInfrastructureIdentity,
  DesktopPlatforms,
  DesktopPractice,
  DesktopProblems,
  DesktopReliability,
  DesktopRouter,
  DesktopSecurity,
  TabletAiSystems,
  TabletArchitecture,
  TabletBillingBoundary,
  TabletBusinessOs,
  TabletDeveloper,
  TabletFaq,
  TabletFinalCta,
  TabletHero,
  TabletImplementation,
  TabletInfrastructureIdentity,
  TabletPlatforms,
  TabletPractice,
  TabletProblems,
  TabletReliability,
  TabletRouter,
  TabletSecurity,
} from "@/components/technology-saas-industry";

export const metadata: Metadata = {
  title: "Technology & SaaS Industry | Zoiko Tech",
  description:
    "Build and operate technology products on foundations that keep scale, identity, governance and evidence connected — across AI, APIs, infrastructure, identity, developer tooling and operational platforms.",
};

/**
 * Desktop (>= 1024px) and tablet/mobile (< 1024px) are separate component
 * sets with separate image folders, so editing one never affects the other.
 * Only one set is visible at a time (CSS), the other stays display:none.
 */
export default function TechnologySaasIndustryPage() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="hidden lg:block">
        <DesktopHero />
        <DesktopRouter />
        <DesktopProblems />
        <DesktopArchitecture />
        <DesktopAiSystems />
        <DesktopDeveloper />
        <DesktopInfrastructureIdentity />
        <DesktopBusinessOs />
        <DesktopBillingBoundary />
        <DesktopReliability />
        <DesktopSecurity />
        <DesktopPlatforms />
        <DesktopPractice />
        <DesktopFaq />
        <DesktopFinalCta />
      </div>

      <div className="lg:hidden">
        <TabletHero />
        <TabletRouter />
        <TabletProblems />
        <TabletArchitecture />
        <TabletAiSystems />
        <TabletDeveloper />
        <TabletInfrastructureIdentity />
        <TabletBusinessOs />
        <TabletBillingBoundary />
        <TabletReliability />
        <TabletSecurity />
        <TabletPlatforms />
        <TabletImplementation />
        <TabletPractice />
        <TabletFaq />
        <TabletFinalCta />
      </div>
    </div>
  );
}
