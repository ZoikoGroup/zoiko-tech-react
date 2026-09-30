import { SectionHeader, cardLight, darkSectionBtn, photo } from "./shared";

const platforms = [
  {
    img: photo.saasBoard4,
    title: "Business operations",
    desc: (
      <>
        ZoikoSuite, Zoiko One, Zoiko HR,
        <br />
        Zoiko Payroll, Zoiko Billing, when
        <br />
        public-approved for this context.
      </>
    ),
    pb: "pb-24",
  },
  {
    img: photo.circuit2,
    title: "Developer / infrastructure",
    desc: (
      <>
        Developer Platform, Zoiko Cloud,
        <br />
        CoreX, only when public-ready.
      </>
    ),
    meta: (
      <>
        Shown with state badge and operator
        <br />/ availability metadata
      </>
    ),
    pb: "pb-16",
  },
  {
    img: photo.analytics3,
    title: "AI / automation",
    desc: (
      <>
        ZoikoVertex, Zoiko AI and
        <br />
        governed work orchestration
        <br />
        surfaces when naming is
        <br />
        approved.
      </>
    ),
    meta: (
      <>
        No implied unrestricted autonomous
        <br />
        operation
      </>
    ),
    pb: "pb-5",
  },
  {
    img: photo.decision3,
    title: "Communications",
    desc: (
      <>
        Zoiko Sema, Zoiko Local,
        <br />
        ZoikoNex where relevant to the
        <br />
        buyer problem.
      </>
    ),
    pb: "pb-24",
  },
  {
    img: photo.approval,
    title: "Trust / compliance",
    desc: (
      <>
        Zoiko Assure, ZoikoTax, identity
        <br />
        and security surfaces when
        <br />
        approved.
      </>
    ),
    meta: (
      <>
        Evidence-state language and correct
        <br />
        operator attribution
      </>
    ),
    pb: "pb-5",
  },
];

export default function PlatformEvidence() {
  return (
    <section id="platform-evidence" className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          title="Platform evidence"
          subtitle={
            <>
              Delivery capability, not a product directory. Only approved
              platforms and descriptors appear,
              <br />
              with a maximum of three to five cards per outcome.
            </>
          }
        />
        <div className="self-stretch rounded-[20px] border-l-2 border-r-2 border-teal-900 flex flex-wrap justify-center lg:justify-between items-center gap-10 overflow-hidden">
          {platforms.map((p) => (
            <div
              key={p.title}
              className={`w-72 px-5 ${p.pb} ${cardLight} flex flex-col items-center gap-5 overflow-hidden`}
            >
              <div className="w-72 h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
                <img src={p.img} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5 pt-2.5">
                {p.title}
              </p>
              <p className="zk-body text-color-cyan-35-2 text-base font-normal leading-6">
                {p.desc}
              </p>
              {p.meta && (
                <p className="zk-body text-color-cyan-7 text-sm font-semibold leading-5 pt-1">
                  {p.meta}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="self-stretch pb-3 flex flex-wrap content-start">
          <a href="#platform-evidence" className={darkSectionBtn}>
            View related platforms
          </a>
        </div>
      </div>
    </section>
  );
}
