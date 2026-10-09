import {
  AuditCommitteeHero,
  AuditPrioritiesGrid,
  AuditOversightLenses,
  AuditVisibilityAssurance,
  AuditRoleBoundaries,
  AuditExceptionContext,
  ProtectRecord,
  AuditConnectRoles,
  AuditClarityBriefing,
  AuditBriefingForm,
} from "@/components/audit-commitee";

export default function AuditCommiteePage() {
  return (
    <main>
      <AuditCommitteeHero />
      <AuditPrioritiesGrid />
      <AuditOversightLenses />
      <AuditVisibilityAssurance />
      <AuditRoleBoundaries />
      <AuditExceptionContext />
      <ProtectRecord />
      <AuditConnectRoles />
      <AuditClarityBriefing />
      <AuditBriefingForm />
    </main>
  );
}
