import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    href: "#journey",
    icon: "/retail-commerce/desktop-contact-icon-network.svg",
    title: "Disconnected journey & state",
    text: "Context gets lost between the channel and the authoritative commerce system.",
  },
  {
    href: "#marketing",
    icon: "/retail-commerce/desktop-adjacent-icon-sparkle.svg",
    title: "Marketing disconnected from execution",
    text: "Prepared work needs approval, evidence and an accountable handoff.",
  },
  {
    href: "#communications",
    icon: "/retail-commerce/desktop-adjacent-icon-phone.svg",
    title: "Communication outside the workflow",
    text: "A conversation needs a responsible owner and a supported next step.",
  },
  {
    href: "#payments",
    icon: "/retail-commerce/desktop-adjacent-icon-shield.svg",
    title: "Unclear payment boundaries",
    text: "Payment and order states can diverge and need separate confirmation.",
  },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:pb-[94px] md:pt-[93px] xl:bg-[linear-gradient(122.5deg,#000_0%,#0a2528_48%,#247780_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-8 lg:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px] lg:gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            02 / PRIORITY INDUSTRY PROBLEMS
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["The customer sees one journey.", "Your systems need clear handoffs."]}
              tablet={["The customer sees one journey.", "Your systems need clear handoffs."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Four challenges shape the retail and commerce operating model.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a
                href={c.href}
                className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-6 md:p-7"
              >
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
                <span className="mt-auto flex min-h-[36px] items-center justify-between pb-2 pt-[11px] font-poppins text-[13px] font-bold leading-[20.8px] text-[#9cdee0] lg:hidden">
                  <span>Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
