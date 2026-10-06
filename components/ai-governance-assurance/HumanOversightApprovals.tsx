import { SectionHeader, cardDark, body, thCell, thText, tdCell, tdTextStrong, tdText, primaryBtn, gradDarkToTeal } from "./shared";

const roles = [
  {
    title: "Accountable owner",
    desc: (
      <>
        Named business or operational<br />
        owner for the use case.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Technical owner",
    desc: (
      <>
        Named owner for system, model<br />
        or agent implementation.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Reviewer",
    desc: (
      <>
        Security, legal / compliance,<br />
        privacy, domain or AI governance<br />
        reviewer by classification.
      </>
    ),
  },
  {
    title: "Approval",
    desc: (
      <>
        Pilot, production or restricted<br />
        state, with conditions and expiry<br />
        or review date.
      </>
    ),
  },
  {
    title: "Override",
    desc: (
      <>
        Authorized users can reject,<br />
        correct, pause or redirect AI<br />
        behavior.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Escalation",
    desc: (
      <>
        A defined path for uncertainty,<br />
        policy conflict, exceptions or<br />
        high-impact action.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Separation of duties",
    desc: (
      <>
        Configuration, approval,<br />
        operation and audit may be<br />
        separated for higher-impact<br />
        uses.
      </>
    ),
  },
];

const recordRows = [
  ["Decision", "Approved; Approved with conditions; Pilot only; Restricted; Rejected; Suspended; Re-evaluation required."],
  ["Scope", "System, version, environment, user group, workflow, authority mode."],
  ["Conditions", "Required controls, monitoring, limitations, review frequency, action gates."],
  ["Evidence reviewed", "Evaluation suite, security / privacy review, policy evidence, limitations."],
  ["Approvers", "Authorized roles or names at the product-supported level."],
  ["Effective / review dates", "When the decision starts and when it must be reviewed."],
  ["Rationale", "Concise documented reasoning."],
];

export default function HumanOversightApprovals() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader light title="Human oversight and approvals" />
        <div className="self-stretch flex flex-wrap content-start gap-4">
          {roles.map((c, i) => (
            <div
              key={i}
              className={`w-[283px] px-4 pt-5 ${c.pb ?? "p-5"} ${cardDark} flex flex-col items-start gap-1.5 overflow-hidden`}
            >
              <div className="self-stretch">
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {c.title}
                </p>
              </div>
              <div className="w-full max-w-[670.68px] pb-[0.63px]">
                <p className={`${body} tracking-tight text-color-cyan-90`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="self-stretch pt-2">
          <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
            Approval decision record
          </p>
        </div>
        <div className="self-stretch rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 overflow-hidden">
          <div className="min-w-[600px] overflow-x-auto">
            <div className="flex">
              <div className={`w-60 shrink-0 ${thCell}`}>
                <p className={thText}>Field</p>
              </div>
              <div className={`flex-1 ${thCell}`}>
                <p className={thText}>Required content</p>
              </div>
            </div>
            {recordRows.map(([field, content]) => (
              <div key={field} className="flex">
                <div className={`w-60 shrink-0 ${tdCell}`}>
                  <p className={tdTextStrong}>{field}</p>
                </div>
                <div className={`flex-1 ${tdCell}`}>
                  <p className={tdText}>{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <a href="#contact-sales" className={primaryBtn}>
            Review oversight
          </a>
        </div>
      </div>
    </section>
  );
}
