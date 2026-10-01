import { SectionHeader, cardLight, asset } from "./shared";

const platforms = [
  {
    img: asset("scale-trust-dash.png"),
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
  },
  {
    img: asset("photo-1558494949-ef010cbdcc31.png"),
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
        <br />
        / availability metadata
      </>
    ),
  },
  {
    img: asset("photo-1550751827-4bd374c3f58b.png"),
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
  },
  {
    img: asset("photo-1461749280684-dccba630e2f6.png"),
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
  },
];

export default function PlatformEvidence() {
  return (
    <section id="platform-evidence" className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          title="Platform evidence"
          subtitle={
            <>
              Delivery capability, not a product directory. Only approved platforms and descriptors appear,
              <br />
              with a maximum of three to five cards per outcome.
            </>
          }
        />
        <div className="self-stretch rounded-[20px] border border-teal-900/30 p-5 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {platforms.map((p) => (
              <div
                key={p.title}
                className={`h-full pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}
              >
                <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
                  <img
                    src={p.img}
                    alt=""
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
                  <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                    {p.title}
                  </p>
                  <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-5">
                    {p.desc}
                  </p>
                  {p.meta && (
                    <p className="zk-body text-color-cyan-19 text-xs font-semibold leading-5 pt-1 mt-auto">
                      {p.meta}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-2 flex">
          <a
            href="#platform-evidence"
            className="inline-flex items-center min-h-12 px-6 bg-color-cyan-19 rounded-[10px] outline outline-2 -outline-offset-2 outline-color-cyan-19 zk-body text-color-white-solid text-base font-semibold hover:bg-color-cyan-7 transition-colors duration-200"
          >
            View related platforms
          </a>
        </div>
      </div>
    </section>
  );
}
