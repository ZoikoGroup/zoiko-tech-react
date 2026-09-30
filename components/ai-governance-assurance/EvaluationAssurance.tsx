import { SectionHeader, ThumbCard, thumb, thCell, thText, tdCell, tdTextStrong, tdText, pillGreen, pillGreenText, pillAmber, pillAmberText, pillRed, pillRedText } from "./shared";

const cards = [
  {
    img: thumb.taskQuality,
    title: "Task / outcome quality",
    desc: (
      <>
        Use-case-specific acceptance
        <br />
        criteria.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: thumb.policyAdherence,
    title: "Policy adherence",
    desc: (
      <>
        Prohibited actions, approval
        <br />
        rules, data and tool boundaries.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: thumb.safetyScenarios,
    title: "Safety / harm scenarios",
    desc: (
      <>
        Misuse, unsafe output or action,
        <br />
        prompt / tool abuse, failure
        <br />
        scenarios at approved scope.
      </>
    ),
  },
  {
    img: thumb.toolBehavior,
    title: "Tool / action behavior",
    desc: (
      <>
        Tool selection, parameters,
        <br />
        retries, partial completion,
        <br />
        downstream validation.
      </>
    ),
  },
  {
    img: thumb.humanReview,
    title: "Human review",
    desc: (
      <>
        Agreement, correction, reject
        <br />
        and escalation patterns.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: thumb.privacySecurity,
    title: "Privacy / security",
    desc: (
      <>
        Sensitive-data handling,
        <br />
        credential boundaries,
        <br />
        minimization, access controls.
      </>
    ),
  },
  {
    img: thumb.operationalPerf,
    title: "Operational performance",
    desc: (
      <>
        Latency, cost, availability only
        <br />
        where evidence-approved.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: thumb.knownLimitations,
    title: "Known limitations",
    desc: (
      <>
        Failure modes, unsupported use,
        <br />
        out-of-scope conditions, residual
        <br />
        risk.
      </>
    ),
  },
];

const suiteRows = [
  {
    scenario: "Request within limits",
    expected: "Prepare, don’t execute",
    result: (
      <span className={pillGreen}>
        <span className={pillGreenText}>Pass</span>
      </span>
    ),
    evidence: "Evidence attached",
  },
  {
    scenario: "Blocked tool call",
    expected: "Stop and escalate",
    result: (
      <span className={pillAmber}>
        <span className={pillAmberText}>Conditional</span>
      </span>
    ),
    evidence: "Retry behavior under review",
  },
  {
    scenario: "Out-of-scope data",
    expected: "Refuse",
    result: (
      <span className={pillRed}>
        <span className={pillRedText}>Fail</span>
      </span>
    ),
    evidence: "Documented; fix required",
  },
];

const suiteWidths = ["w-72", "w-80", "w-48", "w-96"];

export default function EvaluationAssurance() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader
          title="Evaluation and assurance"
          subtitle="Use-case-specific and version-aware. No universal accuracy metric."
        />
        <div className="self-stretch pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <ThumbCard
              key={c.title}
              img={c.img}
              title={c.title}
              desc={c.desc}
              pb={c.pb ?? "pb-5"}
              shadow="shadow-[0px_8px_18px_0px_rgba(0,31,36,0.32)]"
              titleClass="zk-heading text-color-cyan-6 text-base font-bold leading-5"
            />
          ))}
        </div>

        {/* Evaluation suite table */}
        <div className="self-stretch pt-2 rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-87 overflow-hidden">
          <div className="min-w-[600px] overflow-x-auto">
            <div className="px-3.5 pt-1.5 pb-2 opacity-90">
              <p className="zk-body text-color-cyan-6 text-xs font-normal leading-5">
                Evaluation suite (specimen data): Sample agent B, v0.4, pilot
                environment
              </p>
            </div>
            <div className="flex">
              {["Scenario", "Expected behavior", "Result", "Limitation / evidence"].map(
                (h, i) => (
                  <div
                    key={h}
                    className={`${suiteWidths[i]} shrink-0 px-3.5 pt-2 pb-2.5 bg-color-cyan-7 border-b border-color-cyan-87`}
                  >
                    <p className={thText}>{h}</p>
                  </div>
                ),
              )}
            </div>
            {suiteRows.map((r) => (
              <div key={r.scenario} className="flex">
                <div className={`${suiteWidths[0]} shrink-0 px-3.5 py-2.5 border-b border-color-cyan-87`}>
                  <p className="zk-body text-color-cyan-6 text-sm font-semibold leading-6">
                    {r.scenario}
                  </p>
                </div>
                <div className={`${suiteWidths[1]} shrink-0 px-3.5 py-2.5 border-b border-color-cyan-87`}>
                  <p className="zk-body text-color-cyan-35-2 text-sm font-normal leading-6">
                    {r.expected}
                  </p>
                </div>
                <div className={`${suiteWidths[2]} shrink-0 px-3.5 py-2.5 border-b border-color-cyan-87`}>
                  {r.result}
                </div>
                <div className={`${suiteWidths[3]} shrink-0 px-3.5 py-2.5 border-b border-color-cyan-87`}>
                  <p className="zk-body text-color-cyan-35-2 text-sm font-normal leading-6">
                    {r.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
