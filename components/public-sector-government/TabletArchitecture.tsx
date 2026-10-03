import TabletLines from "./TabletLines";

const layers = [
  { level: "L1", title: "User / organization context", text: "Resident, business, employee, vendor or service operator at minimum necessary scope.", question: "Who is using the service?" },
  { level: "L2", title: "Jurisdiction / service scope", text: "Agency, program, locality and policy context from authoritative sources.", question: "Which authority and rules apply?" },
  { level: "L3", title: "Identity / delegated authority", text: "Supported authentication, authorization and representative authority.", question: "Who may act?" },
  { level: "L4", title: "Service request / workflow", text: "Request, application, task or review at an architecture level.", question: "What work is performed?" },
  { level: "L5", title: "Authoritative data / policy", text: "System of record, official source, effective period and reviewed rules.", question: "What is authoritative?" },
  { level: "L6", title: "Controls / evidence / communications", text: "Approval, exceptions, notifications, evidence and support.", question: "How is it governed and explained?" },
  { level: "L7", title: "Integration / operations", text: "Interfaces, observability, status and downstream handoffs.", question: "Can agencies operate it reliably?" },
];

export default function TabletArchitecture() {
  return (
    <section id="architecture-t" className="w-full overflow-hidden bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            03 / PUBLIC DIGITAL-SERVICE ARCHITECTURE
          </span>
          <h2 className="pb-[0.52px] text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-[#102d2f]">
            <TabletLines lines={["One service journey.", "Seven explicit operating layers."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.095px] text-[16px] leading-[25.6px] text-[#587176]">
            <TabletLines
              lines={[
                "Keep user-facing services, agency operations and authoritative systems connected without blurring",
                "their responsibilities.",
              ]}
            />
          </p>
        </div>

        <ul className="flex flex-col gap-[10px] pt-[10px]">
          {layers.map((l) => (
            <li
              key={l.level}
              className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-[20px] gap-y-[8px] rounded-[8px] border border-[#ddeaea] bg-[#f4f9f9] px-[22px] py-[18px] sm:grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)] sm:gap-y-[20px]"
            >
              <span className="flex h-fit items-center justify-center self-center rounded-[30px] border border-[#90b8bd] p-[5px] text-[13px] leading-[20.8px] text-[#247780]">
                {l.level}
              </span>
              <h3 className="col-start-2 self-center text-[16px] font-bold leading-[20.8px] text-[#102d2f]">
                {l.title}
              </h3>
              <p className="col-start-2 self-center text-[14px] leading-[22.4px] text-[#587176] sm:col-start-3 sm:row-start-1">
                {l.text}
              </p>
              <strong className="col-start-2 self-center text-[13px] font-bold leading-[20.8px] text-[#247780] sm:col-span-2">
                {l.question}
              </strong>
            </li>
          ))}
        </ul>

        <div className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#48666a]">
          <TabletLines
            lines={[
              "Information, workflow preparation and AI recommendations are distinct from official decisions. Only the",
              "responsible officer or authoritative government system can issue a determination.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
