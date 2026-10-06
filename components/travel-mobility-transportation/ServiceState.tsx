import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const P = "/travel-mobility-transportation/";
const STATES = [
  { icon: "state-clock.svg", title: "Awaiting provider", text: "Service confirmation has not been returned." },
  { icon: "state-check-circle.svg", title: "Confirmed", text: "Only when the responsible provider confirms." },
  { icon: "state-alert-triangle.svg", title: "Changed / delayed", text: "Explain the authoritative update, impact and owner." },
  { icon: "state-x-circle.svg", title: "Unavailable / unsupported", text: "Show the supported alternate or review path." },
  { icon: "state-x.svg", title: "Failed / closed", text: "Retain the definitive reason or reference when supplied." },
  { icon: "state-alert-circle.svg", title: "Incident / concern", text: "Escalate to the responsible operator and appropriate support resources." },
];

export default function ServiceState() {
  return (
    <section id="service-state" className="w-full bg-white py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-8`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines lines={["Explain the current state.", "Show the responsible next step."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#587176]">
            Availability, delays, failures and disruptions must follow authoritative provider records.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STATES.map((s) => (
            <li
              key={s.title}
              className="flex items-center justify-center gap-4 rounded-[10px] border border-[rgba(128,168,175,0.4)] bg-white/[0.03] p-6 sm:gap-6 lg:min-h-[205px]"
            >
              <div className="flex h-[110px] w-[100px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(128,168,175,0.4)] sm:h-[140px] sm:w-[140px] lg:h-[155px] lg:w-[160px]">
                <Image src={`${P}${s.icon}`} alt="" width={48} height={48} />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-3 self-start lg:self-center">
                <h3 className="font-poppins text-[18px] font-bold leading-[23.4px] text-[#102d2f]">{s.title}</h3>
                <p className="font-inter text-[14px] leading-[22.4px] text-[#587176]">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
