import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  {
    icon: "/education-research/evidence-icon-document.svg",
    title: "Source & citation",
    text: "Author or owner, canonical source, version, date and review state.",
  },
  {
    icon: "/education-research/icon-lock.svg",
    title: "Rights & permitted use",
    text: "Public, internal, partner-restricted or unavailable.",
  },
  {
    icon: "/education-research/icon-sparkle.svg",
    title: "Derived AI content",
    text: "Clearly labeled and traced to the authorized source set.",
  },
];

const rows = [
  ["Artifact", "Sample technical paper — synthetic"],
  ["Owner", "Research team — specimen"],
  ["Version", "v0.2 / draft"],
  ["Access / rights", "Internal review only"],
  ["Derived summary", "AI-assisted / not authoritative"],
  ["Reviewer", "Assigned researcher"],
  ["Review state", "Needs confirmation"],
  ["Limitations", "Source completeness not established"],
];

export default function Provenance() {
  return (
    <section
      id="provenance"
      className="w-full py-14 lg:pb-[94px] lg:pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(121.40109979150378deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <div className="hidden h-5 lg:block" aria-hidden="true" />
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Every derived output needs a source trail.
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Missing, restricted, conflicting and superseded sources remain visible.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-8 xl:flex-row xl:items-center xl:gap-11">
          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 xl:h-[512px] xl:flex-1 xl:grid-rows-[258px_234px]">
            {cards.map((c) => (
              <article
                key={c.title}
                className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7"
              >
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <div className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </div>
                </div>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">
                  {c.title}
                </h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="flex min-w-0 flex-col rounded-xl border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-5 shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] sm:p-[26px] xl:flex-1">
            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <div className="relative h-[35.39px] w-[231.13px] shrink-0">
                <h3 className="absolute left-0 top-[11.5px] w-[232.177px] -translate-y-1/2 font-poppins text-lg font-bold leading-[23.4px] text-white">
                  Research provenance view
                </h3>
              </div>
              <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-3 py-4 sm:gap-x-5 ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="pb-[0.8px] font-inter text-[13px] leading-[20.8px] text-[#9bc2c6]">
                    {k}
                  </dt>
                  <dd className="pb-[0.8px] font-inter text-[13px] leading-[20.8px] text-white">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
