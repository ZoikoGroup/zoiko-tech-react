import {
  LeadershipHero,
  StrategicLeadership,
  InstitutionalGovernance,
  EthicalAiCompliance,
  CultureOfAccountability,
} from "@/components/leadership-and-governance";

export default function page() {
  return (
    <main>
      <LeadershipHero />
      <StrategicLeadership />
      <InstitutionalGovernance />
      <EthicalAiCompliance />
      <CultureOfAccountability />
    </main>
  );
}
