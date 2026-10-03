import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const NODE =
  "flex flex-col items-start gap-[6px] rounded-[14px] border border-[rgba(111,191,197,0.4)] bg-[rgba(16,44,48,0.9)] px-5 pb-5 pt-[27px] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.13)] lg:absolute lg:w-[180px]";
const ICON = "flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]";
const NODE_TITLE = "font-poppins text-[16px] font-bold leading-[25.6px] text-white";
const NODE_TEXT = "font-inter text-[11px] font-normal leading-[17.6px] text-[#b6d5d8]";

const nodes = [
  {
    cls: "lg:left-[15px] lg:top-[40px]",
    icon: "/education-research/evidence-icon-document.svg",
    title: "Authoritative sources",
    text: "Version · Rights · Citation",
    gap: "pt-[15.295px]",
  },
  {
    cls: "lg:right-0 lg:top-[100px]",
    icon: "/education-research/evidence-icon-author.svg",
    title: "Human review",
    text: "Academic / research authority",
    gap: "pt-[16.2px]",
  },
  {
    cls: "lg:right-0 lg:bottom-[89.88px]",
    icon: "/education-research/icon-org-chart-light.svg",
    title: "Collaboration & output",
    text: "Approved sharing boundary",
    gap: "pt-[15.295px]",
  },
  {
    cls: "lg:left-0 lg:bottom-[129.59px]",
    icon: "/education-research/icon-database-light.svg",
    title: "Evidence & state",
    text: "Exploratory ≠ Published",
    gap: "pt-4",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full bg-[linear-gradient(123.41deg,#000_0%,#0a2528_48%,#247780_100%)] pb-14 pt-14 lg:pb-[65px] lg:pt-[27px]"
    >
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-center gap-10 lg:min-h-[732px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col items-start gap-[15.1px] pb-3">
            <span className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              EDUCATION &amp; RESEARCH
            </span>
            <h1 className="font-poppins pb-[0.69px] text-[36px] font-bold leading-[1.08] tracking-[-1px] text-white md:text-[46px] md:tracking-[-1.5px] xl:text-[58px] xl:leading-[62.64px] xl:tracking-[-2px]">
              Connect research and
              <br className="hidden xl:block" /> learning workflows
              <br className="hidden xl:block" /> without separating
              <br className="hidden xl:block" /> intelligence from{" "}
              <span className="text-[#8edbdb]">
                <br className="hidden xl:block" />
                source, evidence or
                <br className="hidden xl:block" /> human review.
              </span>
            </h1>
            <p className="max-w-[640px] pt-[10.29px] font-inter text-[16px] leading-[25.6px] text-[#c4d7d9]">
              <Lines
                lines={[
                  "Zoiko Tech supports education and research organizations with professional",
                  "intelligence, research-oriented technology, governed AI, collaboration and",
                  "developer foundations — designed to keep provenance, access, exploratory state",
                  "and institutional authority visible.",
                ]}
              />
            </p>
            <div className="flex w-full flex-col gap-3 pb-[11.4px] pt-[12.89px] sm:flex-row sm:flex-wrap">
              <a
                href="#pathways"
                className="font-poppins flex min-h-[48px] w-full sm:w-auto sm:whitespace-nowrap items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center text-[14px] font-bold leading-[22.4px] text-[#0a3639] sm:w-[275px]"
              >
                Explore education &amp; research
              </a>
              <a
                href="/contact-us"
                className="font-poppins flex min-h-[48px] w-full sm:w-auto sm:whitespace-nowrap items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center text-[14px] font-bold leading-[22.4px] text-white sm:w-[275px]"
              >
                Discuss your research architecture
              </a>
            </div>
            <a href="#" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]">
              Explore Zoiko Research →
            </a>
          </div>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:block lg:h-[620px] lg:min-h-[620px]">
            <div className="pointer-events-none absolute hidden rounded-[216.55px] border border-[rgba(116,201,207,0.33)] shadow-[0px_0px_75px_0px_rgba(36,119,128,0.33)] lg:inset-x-[45px] lg:inset-y-[110px] lg:block">
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_60px_1px_rgba(36,119,128,0.27)]" />
            </div>
            <div className="flex flex-col items-center gap-[6px] rounded-[24px] border border-[#88d5da] bg-[#123a3f] px-5 py-7 drop-shadow-[0px_0px_22.5px_rgba(100,203,217,0.2)] sm:col-span-2 lg:absolute lg:left-1/2 lg:top-[235px] lg:z-10 lg:w-[220px] lg:-translate-x-1/2">
              <span className={`${ICON} px-[10.5px]`}>
                <Image src="/education-research/icon-sparkle.svg" alt="" width={25} height={25} />
              </span>
              <strong className={`${NODE_TITLE} pt-2 text-center`}>Governed intelligence</strong>
              <span className={`${NODE_TEXT} text-center`}>Source-aware · Human-reviewed</span>
            </div>
            {nodes.map((n) => (
              <div key={n.title} className={`${NODE} ${n.cls}`}>
                <span className={ICON}>
                  <Image src={n.icon} alt="" width={25} height={25} />
                </span>
                <strong className={`${NODE_TITLE} ${n.gap}`}>{n.title}</strong>
                <span className={NODE_TEXT}>{n.text}</span>
              </div>
            ))}
            <p className="text-center font-inter text-[10px] leading-[16px] tracking-[1.6px] text-[#8dd4d9] sm:col-span-2 lg:absolute lg:inset-x-0 lg:bottom-[10px]">
              IDENTITY / ACCESS · PROVENANCE · INTEGRATION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
