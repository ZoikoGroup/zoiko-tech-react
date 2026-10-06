import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { icon: "desktop-contact-users-icon.svg", title: "Digital public services", body: ["Accessible, understandable journeys with explicit", "status and support."] },
  { icon: "desktop-icon-lock.svg", title: "Identity & access", body: ["Identity, authentication and revocable delegated", "authority."] },
  { icon: "desktop-pathways-icon-network.svg", title: "Operations & workflows", body: ["Requests, approvals, exceptions and", "accountable handoffs."] },
  { icon: "desktop-icon-sparkle.svg", title: "Governed AI", body: ["Source-aware assistance with human authority", "and review."] },
  { icon: "desktop-practice-document-icon.svg", title: "Communications", body: ["Approved notifications connected to service", "workflows."] },
  { icon: "desktop-icon-code.svg", title: "Infrastructure & integration", body: ["Connect systems through interfaces, data and", "observability."] },
];

export default function DesktopPathways() {
  return (
    <section id="pathways" className="w-full bg-white pb-[94px] pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["Where does your public-service need", "start?"]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Choose a service objective to explore its architecture, controls and evaluation path.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {cards.map((c) => (
            <li key={c.title} className="min-w-0">
              <a
                href="#"
                className="flex h-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-7"
              >
                <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={`/public-sector-government/${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="pb-[22px] font-poppins text-[15px] leading-6 text-[#587176]">
                  {c.body[0]}
                  <br />
                  {c.body[1]}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
