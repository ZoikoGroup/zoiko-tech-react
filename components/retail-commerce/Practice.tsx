import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    title: "Customer journey",
    icon: "/retail-commerce/desktop-practice-icon-journey.svg",
    body: (
      <>Disconnected experience → integration<br className="hidden md:block lg:hidden" /> redesign → authoritative handoff.</>
    ),
  },
  {
    title: "Marketing operations",
    icon: "/retail-commerce/desktop-practice-icon-marketing.svg",
    body: (
      <>Repeatable work → governed intelligence<br className="hidden md:block lg:hidden" /> and approval → evidenced outcome.</>
    ),
  },
  {
    title: "Payments & commerce",
    icon: "/retail-commerce/desktop-practice-icon-payments.svg",
    body: (
      <>Commercial workflow → separate system<br className="hidden md:block lg:hidden" /> states → approved result.</>
    ),
  },
  {
    title: "Multi-location communications",
    icon: "/retail-commerce/desktop-practice-icon-locations.svg",
    body: (
      <>Reachability problem → supported routing<br className="hidden md:block lg:hidden" /> → approved outcome.</>
    ),
  },
];

export default function Practice() {
  return (
    <section
      id="practice"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 font-poppins md:pb-[94px] md:pt-[93px] lg:bg-[linear-gradient(122deg,#000_0%,#0a2528_48%,#247780_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] lg:gap-[14.8px]">
          <span className="text-xs font-bold uppercase leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            14 / TECHNOLOGY IN PRACTICE
          </span>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[1.15] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Retail proof needs", "measured, approved outcomes."]}
              tablet={["Retail proof needs", "measured, approved outcomes."]}
            />
          </h2>
          <p className="max-w-[760px] pt-1 text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines
              desktop={[
                "Customer stories and measured results were not supplied. Explore the operating architecture while",
                "evidence is pending.",
              ]}
              tablet={[
                "Customer stories and measured results were not supplied. Explore the operating architecture while",
                "evidence is pending.",
              ]}
            />
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:items-start">
          {CARDS.map((c) => (
            <li key={c.title}>
              <article className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:min-h-[294.8px]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 lg:pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] max-lg:mb-[22px]">
                    <img
                      src="/retail-commerce/tablet-icon-document.svg"
                      alt=""
                      width={25}
                      height={25}
                      className="size-[25px] lg:hidden"
                    />
                    <img
                      src={c.icon}
                      alt=""
                      width={25}
                      height={25}
                      className="hidden size-[25px] lg:block"
                    />
                  </span>
                  <span className="flex w-full items-center gap-[6px] rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade] lg:w-auto lg:px-[10px] lg:py-1">
                    <img
                      src="/retail-commerce/desktop-practice-badge-dot.svg"
                      alt=""
                      width={6}
                      height={6}
                      className="hidden size-[6px] lg:block"
                    />
                    Evidence pending
                  </span>
                </div>
                <h3 className="pb-3 text-xl font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
                <a
                  href="/contact-us"
                  className="mt-auto flex min-h-[36px] items-start py-2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0]"
                >
                  Discuss the architecture ↗
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
