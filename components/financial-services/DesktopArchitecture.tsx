import DesktopLines from "./DesktopLines";

const layers = [
  ["L1", "Institution / operator context", "Organization, legal operator, market and service scope.", "Who is responsible?"],
  ["L2", "Identity & authority", "User, service and agent identities; roles and release controls.", "Who can do what?"],
  ["L3", "Financial workflow", "Payments, remittance, billing, payroll or specialist operations.", "What work is happening?"],
  ["L4", "Authoritative systems", "The source that owns definitive transaction, invoice or payroll state.", "Which system is authoritative?"],
  ["L5", "Controls, compliance & evidence", "Obligations, approvals, exceptions and reviewed evidence.", "How is it governed?"],
  ["L6", "Integration & events", "Documented APIs, events and approved system handoffs.", "How does it connect?"],
  ["L7", "Operations & observability", "Pending, partial, failed and review states; verification and recovery.", "Can teams see and resolve it?"],
];

export default function DesktopArchitecture() {
  return (
    <section
      id="architecture"
      className="flex w-full flex-col items-center justify-center bg-white px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-[26px]">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <div className="h-[20px] w-full" aria-hidden="true" />
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines lines={["One operating spine.", "Seven explicit layers."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] text-[16px] leading-[25.6px] text-[#587176]">
            <DesktopLines
              lines={[
                "Specialist systems retain their roles while shared foundations connect financial work, authority and",
                "evidence.",
              ]}
            />
          </p>
        </div>
        <ol className="flex w-full flex-col gap-[10px] pt-[10px]">
          {layers.map(([level, title, desc, question]) => (
            <li
              key={level}
              className="grid min-h-[70.8px] grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)] items-center gap-x-5 rounded-[8px] border border-[#ddeaea] bg-[#f4f9f9] px-[22px] py-[18px]"
            >
              <span className="flex flex-col items-center rounded-[30px] border border-[#90b8bd] p-[5px] text-center text-[13px] leading-[20.8px] text-[#247780]">
                {level}
              </span>
              <h3 className="pb-[0.8px] text-[16px] font-bold leading-[20.8px] text-[#102d2f]">{title}</h3>
              <p className="text-[14px] leading-[22.4px] text-[#587176]">{desc}</p>
              <strong className="pb-[0.8px] text-[13px] font-bold leading-[20.8px] text-[#247780]">
                {question}
              </strong>
            </li>
          ))}
        </ol>
        <div className="w-full border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] pb-[18.9px] pt-[18.5px]">
          <p className="text-[14px] leading-[22.4px] text-[#48666a]">
            Definitive “paid,” “settled,” “approved” or “complete” states come from the authoritative system, never an intermediate event.
          </p>
        </div>
      </div>
    </section>
  );
}
