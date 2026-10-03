import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const P = "/travel-mobility-transportation/";
const CARDS = [
  { img: "platform-zoiko-arc.webp", icon: "icon-network.svg", title: "Zoiko Arc", text: "AI-powered life-orchestration ecosystem across supported domains.", scope: "Booking is an action, not the platform definition." },
  { img: "platform-zoiko-rides.webp", icon: "icon-car.svg", title: "Zoiko Rides", text: "Mobility & Transportation mapping when public-ready.", scope: "Directory exposure only when public-approved; no ride-hailing or dispatch scope inferred." },
  { img: "platform-driverxtra.webp", icon: "icon-steering-wheel.svg", title: "DriverXtra", text: "Mobility / automotive evidence candidate.", scope: "Destination when ready; exact descriptor and capabilities require approval." },
  { img: "platform-mobility-transportation.webp", icon: "icon-route.svg", title: "Mobility & Transportation", text: "Digital mobility, transportation and safety-oriented operations.", scope: "Feature and safety claims require dedicated evidence." },
  { img: "platform-zoiko-local.webp", icon: "icon-message-square.svg", title: "Zoiko Local / communications", text: "Adjacent local customer-communication evidence.", scope: "Approved communications and markets; no automatic mobility-product mapping." },
];

export default function Platforms() {
  return (
    <section id="platforms" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines lines={["Exact maturity.", "Clear provider boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Product presence does not establish live availability, transport authority or a complete mobility stack.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-4 rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-6 lg:min-h-[445px]"
            >
              <div className="relative h-[160px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={`${P}${c.img}`}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 336px, (min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={`${P}${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="min-w-0 flex-1 font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              </div>
              <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              <dl className="flex flex-col gap-[10px] font-inter text-[12px] leading-[19.2px]">
                <div className="flex gap-2">
                  <dt className="w-[92px] shrink-0 text-[#4c7379]">Scope</dt>
                  <dd className="min-w-0 flex-1 text-[#102d2f]">{c.scope}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-[92px] shrink-0 text-[#4c7379]">Approval</dt>
                  <dd className="min-w-0 flex-1 text-[#102d2f]">Requires current confirmation.</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
