import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const rows = [
  ["Workspace", "Sample research project"],
  ["Participants", "Internal team / authorized partner roles"],
  ["Source permission", "Project-scoped / restricted"],
  ["Shared artifacts", "Versioned draft outputs"],
  ["AI use", "Subject to project policy"],
  ["Publication authority", "Named reviewer / not yet confirmed"],
  ["Public partner identity", "Not supplied"],
];

const cardBase =
  "flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-5 md:p-7";

function Icon({ src }: { src: string }) {
  return (
    <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
      <Image src={src} alt="" width={25} height={25} className="size-[25px]" />
    </span>
  );
}

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="w-full bg-[linear-gradient(121.67deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[79px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px] xl:max-w-none">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Collaborate deliberately.", "Share within explicit boundaries."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            University and external collaboration require approved participants, rights and publication rules.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-11">
          <div className="min-w-0 flex-1 rounded-xl border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-5 shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)] md:p-[26px]">
            <div className="flex items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="max-w-[244px] font-poppins text-lg font-bold leading-[23.4px] text-white">
                Collaboration / access detail
              </h3>
              <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-inter text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[0.8fr_1.2fr] gap-5 py-4 font-inter text-[13px] leading-[20.8px] ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="text-[#9bc2c6]">{k}</dt>
                  <dd className="text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:h-[515px] lg:grid-rows-[284px_211px]">
            <article className={cardBase}>
              <Icon src="/education-research/evidence-icon-author.svg" />
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">Participants &amp; ownership</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                Internal, university and guest roles with accountable project ownership.
              </p>
            </article>
            <article className={cardBase}>
              <Icon src="/education-research/icon-lock.svg" />
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">Rights &amp; sharing</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                Dataset, source and output restrictions remain explicit.
              </p>
            </article>
            <article className={`${cardBase} md:col-span-2`}>
              <Icon src="/education-research/evidence-icon-document.svg" />
              <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">Review &amp; evidence</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                Record material access, approval and release events where policy permits.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
