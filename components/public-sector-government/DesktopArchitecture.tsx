import DesktopLines from "./DesktopLines";

const layers = [
  { level: "L1", title: "User / organization context", body: "Resident, business, employee, vendor or service operator at minimum necessary scope.", q: "Who is using the service?" },
  { level: "L2", title: "Jurisdiction / service scope", body: "Agency, program, locality and policy context from authoritative sources.", q: "Which authority and rules apply?" },
  { level: "L3", title: "Identity / delegated authority", body: "Supported authentication, authorization and representative authority.", q: "Who may act?" },
  { level: "L4", title: "Service request / workflow", body: "Request, application, task or review at an architecture level.", q: "What work is performed?" },
  { level: "L5", title: "Authoritative data / policy", body: "System of record, official source, effective period and reviewed rules.", q: "What is authoritative?" },
  { level: "L6", title: "Controls / evidence / communications", body: "Approval, exceptions, notifications, evidence and support.", q: "How is it governed and explained?" },
  { level: "L7", title: "Integration / operations", body: "Interfaces, observability, status and downstream handoffs.", q: "Can agencies operate it reliably?" },
];

export default function DesktopArchitecture() {
  return (
    <section id="architecture" className="w-full bg-white pb-[94px] pt-[93px] px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            <DesktopLines lines={["One service journey.", "Seven explicit operating layers."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.49px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Keep user-facing services, agency operations and authoritative systems connected without blurring their",
                "responsibilities.",
              ]}
            />
          </p>
        </div>
        <ol className="flex flex-col gap-[10px] pt-[10px]">
          {layers.map((l) => (
            <li
              key={l.level}
              className="grid grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)] items-center gap-5 rounded-[8px] border-l-2 border-[#0d3632] bg-[#f4f9f9] px-[22px] py-[18px]"
            >
              <span className="flex flex-col items-center rounded-[30px] border border-[#90b8bd] p-[5px] font-poppins text-[13px] leading-[20.8px] text-[#247780]">
                {l.level}
              </span>
              <h3 className="pb-[0.8px] font-poppins text-[16px] font-bold leading-[20.8px] text-[#102d2f]">{l.title}</h3>
              <p className="font-poppins text-[14px] leading-[22.4px] text-[#587176]">{l.body}</p>
              <strong className="pb-[0.8px] font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780]">{l.q}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
