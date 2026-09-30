import { SectionHeader, cardDark, primaryBtn, journeySideImg } from "./shared";

const steps = [
  {
    name: "Discover",
    desc: (
      <>
        Business goals, current
        <br />
        systems, constraints,
        <br />
        markets, security and
        <br />
        regulatory context.
      </>
    ),
    tag: <>Qualifies without a long form</>,
    icon: { size: "size-3", left: "left-[2px]", top: "top-[2px]" },
  },
  {
    name: "Architect",
    desc: (
      <>
        Target architecture,
        <br />
        coexistence, identity,
        <br />
        integration, data and
        <br />
        governance decisions.
      </>
    ),
    tag: (
      <>
        Creates technical
        <br />
        confidence
      </>
    ),
    icon: { size: "size-3.5", left: "left-[1.33px]", top: "top-[1.33px]" },
  },
  {
    name: "Validate",
    desc: (
      <>
        Pilot or proof-of-value
        <br />
        scope, success criteria,
        <br />
        evidence needs,
        <br />
        integration test.
      </>
    ),
    tag: <>Reduces implementation risk</>,
    icon: { size: "size-3.5", left: "left-[1.34px]", top: "top-[1.33px]" },
  },
  {
    name: "Migrate / Deploy",
    desc: (
      <>
        Phased migration or
        <br />
        new deployment with
        <br />
        controlled cutover and
        <br />
        rollback.
      </>
    ),
    tag: (
      <>
        Supports implementation
        <br />
        readiness
      </>
    ),
    icon: { size: "size-3", left: "left-[2px]", top: "top-[2px]" },
  },
  {
    name: "Operate",
    desc: (
      <>
        Observability, support,
        <br />
        status, policy, review
        <br />
        and change
        <br />
        management.
      </>
    ),
    tag: <>Retention and trust</>,
    icon: { size: "size-3.5", left: "left-[1.33px]", top: "top-[1.33px]" },
  },
  {
    name: "Expand",
    desc: (
      <>
        Add adjacent platforms
        <br />
        and workflows when
        <br />
        value and governance
        <br />
        are established.
      </>
    ),
    tag: <>Expansion without pressure</>,
    icon: { size: "size-2.5", left: "left-[3.33px]", top: "top-[3.33px]" },
  },
];

export default function StartWithInventory() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage:
          "linear-gradient(157deg, #010f14 0%, #0d353b 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto pb-3 relative flex flex-col gap-6">
        <SectionHeader light title="From discovery to expansion" />
        <div className="w-full lg:w-[703px] flex flex-wrap gap-3.5">
          {steps.map((s) => (
            <div
              key={s.name}
              className={`w-56 px-4 pt-4 pb-10 flex flex-col gap-3 ${cardDark}`}
            >
              <div className="self-stretch flex items-center gap-3">
                <div className="size-8 bg-color-white-solid rounded-2xl flex items-center justify-center shrink-0">
                  <div className="size-4 relative overflow-hidden">
                    <div
                      className={`${s.icon.size} ${s.icon.left} ${s.icon.top} absolute outline outline-2 -outline-offset-1 outline-color-cyan-67/50 rounded-[2px]`}
                    />
                  </div>
                </div>
                <p className="flex-1 zk-heading text-color-cyan-90 text-base font-bold leading-6">
                  {s.name}
                </p>
              </div>
              <p className="zk-body text-color-cyan-90 text-base font-normal leading-6">
                {s.desc}
              </p>
              <p className="zk-body text-color-cyan-67 text-sm font-semibold leading-5 pt-1">
                {s.tag}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap content-start">
          <a href="#contact-sales" className={primaryBtn}>
            Discuss your architecture
          </a>
        </div>
        <img
          src={journeySideImg.src}
          alt={journeySideImg.alt}
          className="w-96 h-[508px] object-cover rounded-2xl hidden xl:block absolute right-0 top-[65px]"
        />
      </div>
    </section>
  );
}
