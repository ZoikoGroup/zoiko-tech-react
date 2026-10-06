import React from "react";
import {
  Check,
  X,
  HelpCircle,
  User,
  Cpu,
  Bot,
  Users,
  Building2,
  Zap,
} from "lucide-react";

interface DecisionRow {
  id: string;
  subjectTitle: string;
  subjectSubtitle: string;
  subjectIconType: "person" | "service" | "agent" | "guest" | "org";
  source: "confirmed" | "stale" | "failed" | "na";
  authenticated: "confirmed" | "stale" | "failed" | "na";
  entitlement: "confirmed" | "failed" | "na";
  delegation: "confirmed" | "failed" | "na";
  policy: "confirmed" | "stale" | "na";
  decision: {
    label: string;
    variant:
      | "allow"
      | "review"
      | "delegated"
      | "stepup"
      | "denied"
      | "revoked"
      | "unknown";
  };
}

const DECISION_ROWS: DecisionRow[] = [
  {
    id: "1",
    subjectTitle: "Person · S-1042",
    subjectSubtitle: "Read supplier invoices",
    subjectIconType: "person",
    source: "confirmed",
    authenticated: "confirmed",
    entitlement: "confirmed",
    delegation: "na",
    policy: "confirmed",
    decision: { label: "Allow", variant: "allow" },
  },
  {
    id: "2",
    subjectTitle: "Service · svc-billing",
    subjectSubtitle: "Post invoice batch",
    subjectIconType: "service",
    source: "confirmed",
    authenticated: "confirmed",
    entitlement: "confirmed",
    delegation: "na",
    policy: "stale",
    decision: { label: "Review required", variant: "review" },
  },
  {
    id: "3",
    subjectTitle: "Agent · INV-EXC-01",
    subjectSubtitle: "Send supplier query",
    subjectIconType: "agent",
    source: "confirmed",
    authenticated: "confirmed",
    entitlement: "confirmed",
    delegation: "confirmed",
    policy: "confirmed",
    decision: { label: "Allow (delegated)", variant: "delegated" },
  },
  {
    id: "4",
    subjectTitle: "Guest · partner G-77",
    subjectSubtitle: "Open contract room",
    subjectIconType: "guest",
    source: "confirmed",
    authenticated: "stale",
    entitlement: "confirmed",
    delegation: "na",
    policy: "na",
    decision: { label: "Step-up required", variant: "stepup" },
  },
  {
    id: "5",
    subjectTitle: "Person · S-0991",
    subjectSubtitle: "Approve payment",
    subjectIconType: "person",
    source: "confirmed",
    authenticated: "confirmed",
    entitlement: "failed",
    delegation: "na",
    policy: "na",
    decision: { label: "Denied", variant: "denied" },
  },
  {
    id: "6",
    subjectTitle: "Agent · REC-02",
    subjectSubtitle: "Update ledger",
    subjectIconType: "agent",
    source: "confirmed",
    authenticated: "confirmed",
    entitlement: "confirmed",
    delegation: "failed",
    policy: "na",
    decision: { label: "Revoked delegation", variant: "revoked" },
  },
  {
    id: "7",
    subjectTitle: "Org · ORG-12",
    subjectSubtitle: "Tenant admin",
    subjectIconType: "org",
    source: "stale",
    authenticated: "na",
    entitlement: "na",
    delegation: "na",
    policy: "na",
    decision: { label: "Unknown · fail closed", variant: "unknown" },
  },
];

const DECISION_BADGE_STYLES: Record<string, string> = {
  allow: "bg-[#E6F4F1] text-[#2b7a78]",
  review: "bg-[#FEF3C7] text-[#D97706]",
  delegated: "bg-[#E6F4F1] text-[#2b7a78]",
  stepup: "bg-[#F3E8FF] text-[#9333EA]",
  denied: "bg-[#FDE8E8] text-[#E02424]",
  revoked: "bg-[#FDE8E8] text-[#E02424]",
  unknown: "bg-[#1E293B] text-[#94A3B8] border border-[#334155]",
};

export default function DecisionMapSection() {
  const renderCellIcon = (type: "confirmed" | "stale" | "failed" | "na") => {
    switch (type) {
      case "confirmed":
        return <Check className="w-4 h-4 text-[#2b7a78]" />;
      case "stale":
        return <HelpCircle className="w-4 h-4 text-[#D97706]" />;
      case "failed":
        return <X className="w-4 h-4 text-[#E02424]" />;
      case "na":
        return <span className="text-[#64748B] font-medium">-</span>;
    }
  };

  const renderSubjectIcon = (
    type: "person" | "service" | "agent" | "guest" | "org",
  ) => {
    switch (type) {
      case "person":
        return <User className="w-4 h-4 text-[#2b7a78]" />;
      case "service":
        return <Cpu className="w-4 h-4 text-[#2b7a78]" />;
      case "agent":
        return <Bot className="w-4 h-4 text-[#2b7a78]" />;
      case "guest":
        return <Users className="w-4 h-4 text-[#2b7a78]" />;
      case "org":
        return <Building2 className="w-4 h-4 text-[#2b7a78]" />;
    }
  };

  return (
    <section className="w-full bg-[#001315] py-20 px-6 md:px-12 lg:px-20 font-sans text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Content */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight mb-4 leading-tight">
            Seven requests. Five checks. One honest decision each.
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed">
            Denied, review, expired, revoked, stale and unknown are first-class
            outcomes, never hidden behind &ldquo;authorized&rdquo;.
          </p>
        </div>

        {/* Main Decision Map Card Container */}
        <div className="w-full bg-[#00191EB8] border border-[#34D4CA73] rounded-2xl p-6 md:p-8 shadow-2xl overflow-x-auto">
          {/* Table Header Metadata */}
          <div className="flex items-center justify-between pb-6 mb-2 border-b border-[#1A2E3B] min-w-[760px]">
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#64748B]">
              IDENTITY &amp; AUTHORITY DECISION MAP
            </span>
            <span className="text-[10px] tracking-wider uppercase font-medium text-[#64748B]">
              SPECIMEN · SYNTHETIC DATA
            </span>
          </div>

          {/* Table Header Columns */}
          <div className="grid grid-cols-12 py-3 text-[10px] tracking-wider uppercase font-bold text-[#64748B] border-b border-[#1A2E3B]/60 min-w-[760px]">
            <div className="col-span-3">SUBJECT</div>
            <div className="col-span-1 text-center">SOURCE</div>
            <div className="col-span-2 text-center">AUTHENTICATED</div>
            <div className="col-span-2 text-center">ENTITLEMENT</div>
            <div className="col-span-1 text-center">DELEGATION</div>
            <div className="col-span-1 text-center">POLICY</div>
            <div className="col-span-2 text-right">DECISION</div>
          </div>

          {/* Table Rows (Mapped) */}
          <div className="divide-y divide-[#1A2E3B]/40 min-w-[760px]">
            {DECISION_ROWS.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-12 py-4 items-center transition-colors rounded-lg px-2"
              >
                {/* Subject Column */}
                <div className="col-span-3 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2231] border border-[#1E3A4C] flex items-center justify-center shrink-0">
                    {renderSubjectIcon(row.subjectIconType)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-white mb-0.5">
                      {row.subjectTitle}
                    </span>
                    <span className="text-[11px] text-[#94A3B8]">
                      {row.subjectSubtitle}
                    </span>
                  </div>
                </div>

                {/* Source Column */}
                <div className="col-span-1 flex justify-center">
                  {renderCellIcon(row.source)}
                </div>

                {/* Authenticated Column */}
                <div className="col-span-2 flex justify-center">
                  {renderCellIcon(row.authenticated)}
                </div>

                {/* Entitlement Column */}
                <div className="col-span-2 flex justify-center">
                  {renderCellIcon(row.entitlement)}
                </div>

                {/* Delegation Column */}
                <div className="col-span-1 flex justify-center">
                  {renderCellIcon(row.delegation)}
                </div>

                {/* Policy Column */}
                <div className="col-span-1 flex justify-center">
                  {renderCellIcon(row.policy)}
                </div>

                {/* Decision Column */}
                <div className="col-span-2 flex justify-end">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${DECISION_BADGE_STYLES[row.decision.variant]}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 shrink-0"></span>
                    {row.decision.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Legend & Evidence Rail */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 mt-4 border-t border-[#1A2E3B] text-xs text-[#94A3B8] gap-4 min-w-[760px]">
            {/* Legend items */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#2b7a78]" />
                <span>Confirmed</span>
              </div>
              <div className="flex items-center space-x-2">
                <X className="w-3.5 h-3.5 text-[#E02424]" />
                <span>Failed / revoked</span>
              </div>
              <div className="flex items-center space-x-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Stale / unknown</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#64748B] font-bold">-</span>
                <span>Not applicable</span>
              </div>
            </div>

            {/* Evidence Rail notice */}
            <div className="flex items-center space-x-2 text-[#2b7a78] font-medium">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>EVIDENCE RAIL · EVERY DECISION RECORDED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
