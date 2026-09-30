import { SectionHeader, cardDark, body, incidentIcons } from "./shared";

const signals = [
  {
    title: "Deployment state",
    desc: (
      <>
        Pilot, production, restricted,
        <br />
        suspended, retired.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: (
      <>
        Policy / guardrail event
      </>
    ),
    desc: (
      <>
        Blocked, approval-required or
        <br />
        exception events at the
        <br />
        supported level.
      </>
    ),
  },
  {
    title: "Human override",
    desc: (
      <>
        Correction, reject, stop /
        <br />
        containment or escalation.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Operational failure",
    desc: (
      <>
        Unavailable model, service, tool
        <br />
        or integration; partial action; stale context; timeout.
      </>
    ),
  },
  {
    title: (
      <>
        Quality / behavior signal
      </>
    ),
    desc: (
      <>
        Use-case-specific monitoring.
        <br />
        No unsupported “drift” claims
        <br />
        without validated telemetry.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Incident",
    desc: (
      <>
        Security, privacy, safety,
        <br />
        compliance or operational issue
        <br />
        linked to a system and version.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Review trigger",
    desc: (
      <>
        Incident, threshold, model / tool /
        <br />
        data change, new policy,
        <br />
        scheduled review or owner
        <br />
        request.
      </>
    ),
  },
];

const timeline = [
  {
    icon: incidentIcons[0],
    title: "Detection / report",
    desc: (
      <>
        Specimen incident
        <br />
        logged against Sample
        <br />
        agent B v0.4.
      </>
    ),
  },
  {
    icon: incidentIcons[1],
    title: "Triage",
    desc: (
      <>
        Owner assigned, scope
        <br />
        set at minimum
        <br />
        necessary level.
      </>
    ),
  },
  {
    icon: incidentIcons[2],
    title: "Containment",
    desc: (
      <>
        Agent paused by an
        <br />
        authorized role.
      </>
    ),
    pb: "pb-11",
  },
  {
    icon: incidentIcons[3],
    title: "Correction / recovery",
    desc: (
      <>
        Previous approved
        <br />
        version restored where
        <br />
        supported.
      </>
    ),
  },
  {
    icon: incidentIcons[4],
    title: "Review / closure",
    desc: (
      <>
        Re-evaluation, policy
        <br />
        and process follow-ups
        <br />
        recorded.
      </>
    ),
  },
];

export default function RuntimeMonitoringIncidents() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage: "linear-gradient(157deg, #000000 0%, #0c2729 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader light title="Runtime monitoring and incidents" />
        <div className="self-stretch flex flex-wrap content-start gap-4">
          {signals.map((c, i) => (
            <div
              key={i}
              className={`w-[283px] px-5 pt-5 ${c.pb ?? "p-5"} ${cardDark} flex flex-col items-start gap-1.5 overflow-hidden`}
            >
              <div className="self-stretch">
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {c.title}
                </p>
              </div>
              <div className="w-full max-w-[670.68px] pb-[0.63px]">
                <p className={`${body} text-color-cyan-90`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="self-stretch pt-1.5">
          <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
            Incident timeline (specimen)
          </p>
        </div>
        <div className="self-stretch pt-[2.90px] flex flex-wrap gap-3.5">
          {timeline.map((t) => (
            <div
              key={t.title}
              className={`w-56 px-4 pt-4 ${t.pb ?? "pb-5"} bg-white/6 rounded-2xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 flex flex-col items-start gap-[3.10px]`}
            >
              <div className="self-stretch flex items-center gap-3">
                <div className="size-8 bg-color-white-solid rounded-2xl flex items-center justify-center">
                  <img src={t.icon} alt="" className="size-4" />
                </div>
                <p className="flex-1 zk-heading text-color-cyan-90 text-base font-bold leading-6">
                  {t.title}
                </p>
              </div>
              <p className={`${body} text-color-cyan-90`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
