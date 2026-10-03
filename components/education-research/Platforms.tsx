import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/education-research/evidence-icon-document.svg", title: "Zoiko Research", text: "Research, publications, benchmarks, technical papers and university collaboration. Approved content only." },
  { icon: "/education-research/icon-sparkle.svg", title: "Zoiko AI", text: "Shared governed agentic intelligence foundation; education-specific capability requires evidence." },
  { icon: "/education-research/icon-code-light.svg", title: "Developer Platform", text: "Build state. Public developer surfaces and capabilities depend on readiness and approval." },
  { icon: "/education-research/icon-org-chart-light.svg", title: "Zoiko Sema", text: "Governed business communications for approved collaboration scenarios." },
  { icon: "/education-research/icon-database-light.svg", title: "Professional Intelligence", text: "ZoikoLogia, Kriton and Massarius architecture where public-approved; sector roles need source support." },
  { icon: "/education-research/icon-institution.svg", title: "Frontier / Education", text: "Exploratory research lane; no generally available education product claim." },
];

export default function Platforms() {
  return (
    <section
      id="platforms"
      className="w-full py-14 md:py-16 lg:pt-[93px] lg:pb-[94px]"
      style={{ backgroundImage: "linear-gradient(120.95deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] leading-[1.15] font-bold tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Shared foundations.", "Evidence-specific scope."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Research artifacts, exploratory programs and technology products retain distinct states.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-[258px] lg:grid-cols-3">
          {CARDS.map((c) => (
            <li key={c.title} className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7">
              <div className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#62c6ca]/10">
                <Image src={c.icon} alt="" width={25} height={25} />
              </div>
              <h3 className="mb-3 font-poppins text-xl leading-[26px] font-bold text-white">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
