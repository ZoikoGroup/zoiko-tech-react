import Lines from "./Lines";
import { WRAP } from "./layout";

const layers = [
  { level: "L1", title: "Customer / organization / location", text: "Anonymous or known customer, market and location at minimum necessary scope.", q: "Who is engaging?" },
  { level: "L2", title: "Channel / touchpoint", text: "Web, app, calling, local number or another supported digital channel.", q: "Where is the interaction?" },
  { level: "L3", title: "Intent / marketing / routing", text: "Customer intent and governed recommendations at supported scope.", q: "What is the customer trying to do?" },
  { level: "L4", title: "Authoritative commerce / payment system", text: "The external or adjacent system that owns the definitive transaction state.", q: "Where is the action owned?" },
  { level: "L5", title: "Operations / service handoff", text: "Responsible system or team for service, support and downstream work.", q: "Who operates the outcome?" },
  { level: "L6", title: "Shared controls", text: "Identity, consent, privacy, security, provenance and documented interfaces.", q: "How is it controlled?" },
  { level: "L7", title: "Outcome / evidence / observability", text: "Definitive state, exceptions, support and retained material evidence.", q: "Can teams review it?" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white pb-16 pt-14 md:pb-[108px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px] lg:gap-[14.8px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            03 / RETAIL &amp; COMMERCE EXPERIENCE ARCHITECTURE
          </p>
          <h2 className="font-poppins text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Connect the journey.", "Preserve the system of record."]}
              tablet={["Connect the journey.", "Preserve the system of record."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Seven layers make source, ownership, permission and outcome visible.
          </p>
        </div>

        <ol className="flex flex-col gap-[10px] pt-[10px]">
          {layers.map((l) => (
            <li
              key={l.level}
              className="grid grid-cols-[40px_minmax(0,1fr)] items-center gap-x-5 gap-y-2 rounded-[8px] border border-[#ddeaea] bg-[#f4f9f9] px-[22px] py-[18px] md:grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)] md:gap-y-5 lg:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)]"
            >
              <span className="col-start-1 row-start-1 flex items-center justify-center rounded-[30px] border border-[#90b8bd] p-[5px] font-poppins text-[13px] leading-[20.8px] text-[#247780]">
                {l.level}
              </span>
              <h3 className="col-start-2 row-start-1 font-poppins text-[16px] font-bold leading-[20.8px] text-[#102d2f]">
                {l.title}
              </h3>
              <p className="col-start-2 row-start-2 font-poppins text-[14px] leading-[22.4px] text-[#587176] md:col-start-3 md:row-start-1">
                {l.text}
              </p>
              <strong className="col-start-2 row-start-3 font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] md:col-span-2 md:row-start-2 lg:col-span-1 lg:col-start-4 lg:row-start-1">
                {l.q}
              </strong>
            </li>
          ))}
        </ol>

        <p className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] font-poppins text-[14px] leading-[22.4px] text-[#48666a] lg:hidden">
          Paid, ordered, booked, fulfilled, refunded, cancelled, delivered and complete states must come from the responsible commerce, payment or service system.
        </p>
      </div>
    </section>
  );
}
