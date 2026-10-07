import {
  StatusHero,
  FreshnessAndSourceAuthority,
  ActiveIncidents,
  ComponentAndServiceStatus,
  PlannedMaintenance,
  IncidentDetail,
  IncidentHistoryCorrectionsAndRestatements,
  AvailabilityMetricsAndSlaBoundary,
  StatusSubscriptionsAndNotifications,
  StatusEmbedsAndWidgets,
  CurrentnessErrorAndEdgeStates,
  CommonQuestions,
} from "@/components/status";

export default function StatusPage() {
  return (
    <main>
      <StatusHero />
      <FreshnessAndSourceAuthority />
      <ActiveIncidents />
      <ComponentAndServiceStatus />
      <PlannedMaintenance />
      <IncidentDetail />
      <IncidentHistoryCorrectionsAndRestatements />
      <AvailabilityMetricsAndSlaBoundary />
      <StatusSubscriptionsAndNotifications />
      <StatusEmbedsAndWidgets />
      <CurrentnessErrorAndEdgeStates />
      <CommonQuestions />
    </main>
  );
}
