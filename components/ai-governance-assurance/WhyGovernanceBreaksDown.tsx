import { SectionHeader, cardDark, breaksDownImg, body, gradDarkToTeal } from "./shared";

const cards = [
  {
    title: "Incomplete inventory",
    desc: (
      <>
        Unknown, unregistered and
        <br />
        owner-missing states stay
        <br />
        visible.
      </>
    ),
    pb: "pb-10",
  },
  {
    title: (
      <>
        Policy disconnected from
        <br />
        deployment
      </>
    ),
    desc: (
      <>
        Every approved use is bound to
        <br />
        an actual system, version and
        <br />
        environment.
      </>
    ),
  },
  {
    title: (
      <>
        Tools exceed intended
        <br />
        authority
      </>
    ),
    desc: (
      <>
        Explicit tools, actions, data scope
        <br />
        and approval conditions.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: (
      <>
        Evaluation doesn’t match
        <br />
        the use case
      </>
    ),
    desc: (
      <>
        Scenario, outcome and policy-
        <br />
        specific evidence, not one
        <br />
        generic score.
      </>
    ),
  },
  {
    title: "Ceremonial oversight",
    desc: (
      <>
        Define who can approve, reject,
        <br />
        override, stop or escalate, and
        <br />
        when.
      </>
    ),
  },
  {
    title: "Evidence goes stale",
    desc: (
      <>
        Evidence is linked to version and
        <br />
        re-evaluated on material change.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Runtime failures escape",
    desc: (
      <>
        Monitoring, incidents,
        <br />
        containment and review are built
        <br />
        in.
      </>
    ),
  },
];

export default function WhyGovernanceBreaksDown() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader light title="Why AI governance breaks down" />
        <div className="relative self-stretch">
          <div className="w-full md:w-[582px] flex flex-wrap content-start gap-4">
            {cards.map((c, i) => (
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
          <img
            src={breaksDownImg.src}
            alt={breaksDownImg.alt}
            className="hidden md:block absolute left-[663px] top-0 w-[517px] h-[653px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
