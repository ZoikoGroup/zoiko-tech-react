import { SectionHeader, cardDark, securitySideImg } from "./shared";

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
    pb: "pb-11",
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
    pb: "pb-11",
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
    pb: "pb-11",
  },
];

export default function ResponsibleAiSecurityPrivacy() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #0a2f34 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <SectionHeader light title="Security, trust and governance" />
        <div className="relative mt-5">
          <div className="w-full lg:w-[581px] flex flex-wrap gap-4">
            {cards.map((c) => (
              <div
                key={c.title}
                className={`w-72 p-5 flex flex-col gap-3.5 ${cardDark} ${c.pb ?? ""}`}
              >
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {c.title}
                </p>
                <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
          <img
            src={securitySideImg.src}
            alt={securitySideImg.alt}
            className="size-[589px] object-cover hidden xl:block absolute right-0 top-[-28px]"
          />
        </div>
      </div>
    </section>
  );
}
