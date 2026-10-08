import { Metadata } from "next";
import Hero from "@/components/developer-resources/Hero";
import ContactSection from "@/components/developer-resources/ContactSection";
import DeveloperTaskRouter from "@/components/developer-resources/DeveloperTaskRouter";
import DeveloperResourceRegistry from "@/components/developer-resources/DeveloperResourceRegistry";
import ApiInterfaceLayer from "@/components/developer-resources/ApiInterfaceLayer";
import SdkPackageLayer from "@/components/developer-resources/SdkPackageLayer";
import IntegrationsEvents from "@/components/developer-resources/IntegrationsEvents";
import AuthenticationAccess from "@/components/developer-resources/AuthenticationAccess";
import QuickstartsSamples from "@/components/developer-resources/QuickstartsSamples";
import JourneyStages from "@/components/developer-resources/JourneyStages";
import VersionChangeDeprecation from "@/components/developer-resources/VersionChangeDeprecation";
import UsageObservability from "@/components/developer-resources/UsageObservability";
import SecurityPrivacy from "@/components/developer-resources/SecurityPrivacy";
import ThreeDestinations from "@/components/developer-resources/ThreeDestinations";
import EscalateSupport from "@/components/developer-resources/EscalateSupport";
import ExplicitStates from "@/components/developer-resources/ExplicitStates";
import ClearAnswers from "@/components/developer-resources/ClearAnswers";

export const metadata: Metadata = {
  title: "Developer Resources | Zoiko Tech",
  description: "Find approved Zoiko Tech APIs, SDKs, integration guides and developer tools.",
};

export default function DeveloperResourcesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <Hero />
      <DeveloperTaskRouter />
      <DeveloperResourceRegistry />
      <ApiInterfaceLayer />
      <SdkPackageLayer />
      <IntegrationsEvents />
      <AuthenticationAccess />
      <QuickstartsSamples />
      <JourneyStages />
      <VersionChangeDeprecation />
      <UsageObservability />
      <SecurityPrivacy />
      <ThreeDestinations />
      <EscalateSupport />
      <ExplicitStates />
      <ClearAnswers />
      <ContactSection />
    </div>
  );
}
