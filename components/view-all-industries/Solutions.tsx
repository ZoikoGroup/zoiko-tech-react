import Image from "next/image";
import Link from "next/link";
import { WRAP } from "./layout";

const cards = [
  { title: "AI & automation", text: "Intelligent automation, agentic workflows and AI governance.", img: "solution-ai-automation", href: "/ai-and-intelligent-automation" },
  { title: "Recurring operations", text: "Business operations, HR, payroll and workforce context.", img: "solution-recurring-operations", href: "/business-operations" },
  { title: "Telecom & communications", text: "Infrastructure, operator workflows and business collaboration.", img: "solution-telecom-communications", href: "/telecom" },
  { title: "Security, identity & compliance", text: "Resilience, access, regulatory controls and evidence.", img: "solution-security-identity", href: "/solution-zoiko-identity-access" },
  { title: "Modernization & integration", text: "Cloud and developer foundations with documented interfaces.", img: "solution-modernization-integration", href: "/modernization-integration" },
  { title: "Customer & digital experiences", text: "Commerce and supported communications workflows.", img: "solution-customer-digital-experiences", href: "/customer-and-local-commerce" },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="w-full py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
      style={{
        backgroundImage: "linear-gradient(115.497deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Start with the operating need.
          </h2>
          <p className="max-w-[760px] pt-[5px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Cross-industry solution directions are informational, not rankings or universal recommendations.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-[15px] md:grid-cols-2 lg:grid-cols-3 lg:gap-x-5">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <Link
                href={c.href}
                className="flex w-full flex-col overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] lg:h-[344px]"
              >
                <div className="relative h-[180px] w-full shrink-0">
                  <Image
                    src={`/view-all-industries/${c.img}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col p-7">
                  <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#a4d6dd]">{c.title}</h3>
                  <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#6c9aa6]">{c.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
