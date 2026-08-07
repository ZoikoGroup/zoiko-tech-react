import {
  StatusDashboardSection,
  WhatYouCanMonitorSection,
  MonitoredMetricsSection,
  EnterpriseReliabilitySection,
  DeveloperFriendlyAlertsSection,
  TransparencyAtScaleSection,
} from "@/components/status-dashboard";

export default function StatusDashboardPage() {
  return (
    <main>
      <StatusDashboardSection />
      <WhatYouCanMonitorSection />
      <MonitoredMetricsSection />
      <EnterpriseReliabilitySection />
      <DeveloperFriendlyAlertsSection />
      <TransparencyAtScaleSection />
    </main>
  );
}
