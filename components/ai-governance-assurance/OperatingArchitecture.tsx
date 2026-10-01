import { SectionHeader, body } from "./shared";

type Layer = {
  name: React.ReactNode;
  detail: React.ReactNode;
  question: string;
  dark?: boolean;
};

const layers: Layer[] = [
  {
    name: "L8 Evidence / history",
    detail: (
      <>
        Evaluation results, approvals, limitations, incidents,<br />
        changes, re-approval, retirement.
      </>
    ),
    question: "Can we reconstruct the lifecycle?",
  },
  {
    name: "L7 Runtime / monitoring",
    detail: (
      <>
        Version, usage / state, exceptions, incidents, drift / change<br />
        indicators, ownership.
      </>
    ),
    question: "How is it governed in operation?",
  },
  {
    name: "L6 Human decision",
    detail: (
      <>
        Reviewer / approver, conditions, exceptions, release<br />
        scope, evidence.
      </>
    ),
    question: "Who authorized it?",
  },
  {
    name: "L5 Evaluation / controls",
    detail: (
      <>
        Scenario tests, quality, policy, safety / risk, tool behavior,<br />
        privacy / security, acceptance.
      </>
    ),
    question: "How was it tested?",
  },
  {
    name: "L4 Authority / impact",
    detail: (
      <>
        Assist, recommend, prepare, approval-required or<br />
        bounded execution; action classes and limits.
      </>
    ),
    question: "What can it do?",
  },
  {
    name: "L3 Data / knowledge / tools",
    detail: (
      <>
        Approved sources, retrieval, tool / API access, credentials<br />
        / identity, sensitivity boundaries.
      </>
    ),
    question: "What can it see and touch?",
    dark: true,
  },
  {
    name: (
      <>
        L2 System / model / agent<br />
        inventory
      </>
    ),
    detail: (
      <>
        Name, model / provider reference where approved,<br />
        version, environment, owner, operator, dependencies.
      </>
    ),
    question: "What is actually deployed?",
    dark: true,
  },
  {
    name: "L1 AI use / business purpose",
    detail: (
      <>
        Use case, owner, intended users, domain, expected<br />
        outcome, prohibited use.
      </>
    ),
    question: "Why does this AI exist?",
    dark: true,
  },
];

export default function OperatingArchitecture() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="AI governance operating architecture"
          subtitle="The governance chain from intended use to accountable operation. Read from the bottom layer up."
        />
        <div className="self-stretch pt-1 flex flex-col gap-2.5">
          {layers.map((l, i) => (
            <div
              key={i}
              className={`self-stretch px-4 pt-3 pb-3.5 rounded-xl shadow-[0px_4px_10px_0px_rgba(0,0,0,0.20)] flex items-center gap-3 ${
                l.dark
                  ? "bg-linear-to-r from-color-black-solid to-color-cyan-25"
                  : "bg-color-grey-97 outline outline-1 -outline-offset-1 outline-color-cyan-87"
              }`}
            >
              <div className="w-56 shrink-0">
                <p
                  className={`zk-heading text-base font-bold leading-6 ${
                    l.dark ? "text-color-white-solid" : "text-color-cyan-6"
                  }`}
                >
                  {l.name}
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p
                  className={`${body} ${l.dark ? "text-color-white-solid" : "text-color-cyan-35-2"}`}
                >
                  {l.detail}
                </p>
              </div>
              <div className="flex-1 min-w-0 pb-[0.59px] hidden lg:block">
                <p
                  className={`zk-body text-base font-semibold leading-6 ${
                    l.dark ? "text-color-white-solid" : "text-color-cyan-25"
                  }`}
                >
                  {l.question}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
