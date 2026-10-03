import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/education-research/adjacent-icon-integration.svg", title: "Build", text: "Approved APIs, SDKs, model interfaces, events and authentication." },
  { icon: "/education-research/adjacent-icon-publications.svg", title: "Learn", text: "Documentation, API references, quickstarts and architecture guides." },
  { icon: "/education-research/icon-shield-check-dark.svg", title: "Test", text: "Sandbox and sample implementations only when external access is live." },
  { icon: "/education-research/adjacent-icon-collaboration.svg", title: "Operate", text: "Supported observability, status, changelog and developer support." },
];

export default function Developers() {
  return (
    <section id="developers" className="w-full bg-white py-14 md:py-16 lg:pt-[93px] lg:pb-[108px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex flex-col gap-[15px]">
          <h2 className="font-poppins text-[32px] leading-[1.15] font-bold tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Build around documented interfaces.
          </h2>
          <p className="pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Institutional identity, content, research and collaboration integrations require current technical evidence.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 pt-[9.99px] md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c) => (
            <li key={c.title} className="flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7">
              <div className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </div>
              <h3 className="mb-3 font-poppins text-xl leading-[26px] font-bold text-[#102d2f]">{c.title}</h3>
              <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
        <div className="relative h-[200px] w-full overflow-hidden rounded-[10px] border border-[#dae8e8] md:h-[260px] lg:h-[320px]">
          <Image
            src="/education-research/developers-team-whiteboard.webp"
            alt="Team reviewing an architecture diagram on a wall display"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
