import { SectionHeader, cardDark, securitySideImg, gradDarkToTeal } from "./shared";

const cards = [
  {
    title: "Security",
    desc: (
      <>
        Identity, least privilege, secure
        <br />
        engineering, environment
        <br />
        separation, vulnerability
        <br />
        reporting, operational controls.
      </>
    ),
  },
  {
    title: "Privacy",
    desc: (
      <>
        Purpose limitation, data
        <br />
        minimization, configurable
        <br />
        controls, market and jurisdiction
        <br />
        context where relevant.
      </>
    ),
  },
  {
    title: "Responsible AI",
    desc: (
      <>
        Human oversight, controlled use,
        <br />
        evaluation, evidence, policy and
        <br />
        accountability.
      </>
    ),
  },
  {
    title: "Compliance",
    desc: (
      <>
        Evidence and obligation support.
        <br />
        No blanket “compliant” language
        <br />
        without legal validation.
      </>
    ),
  },
  {
    title: "Reliability",
    desc: (
      <>
        Observability, service health,
        <br />
        incident communication,
        <br />
        resilience and recovery
        <br />
        expectations.
      </>
    ),
  },
  {
    title: "Accessibility",
    desc: (
      <>
        Product and web experiences
        <br />
        designed to WCAG 2.2 AA
        <br />
        requirements.
      </>
    ),
  },
];

export default function ResponsibleAiSecurityPrivacy() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader light title="Security, trust and governance" />
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          <div className="w-full lg:w-[581px] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className={`p-5 flex flex-col gap-2.5 ${cardDark}`}
              >
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {c.title}
                </p>
                <p className="zk-body text-color-cyan-90 text-xs sm:text-sm font-normal leading-5">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[500px] flex items-center justify-center">
            <img
              src={securitySideImg.src}
              alt={securitySideImg.alt}
              className="w-full max-w-[480px] lg:max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
