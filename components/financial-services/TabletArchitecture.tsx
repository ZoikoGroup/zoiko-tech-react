const layers = [
  { level: "L1", title: "Institution / operator context", text: "Organization, legal operator, market and service scope.", question: "Who is responsible?" },
  { level: "L2", title: "Identity & authority", text: "User, service and agent identities; roles and release controls.", question: "Who can do what?" },
  { level: "L3", title: "Financial workflow", text: "Payments, remittance, billing, payroll or specialist operations.", question: "What work is happening?" },
  { level: "L4", title: "Authoritative systems", text: "The source that owns definitive transaction, invoice or payroll state.", question: "Which system is authoritative?" },
  { level: "L5", title: "Controls, compliance & evidence", text: "Obligations, approvals, exceptions and reviewed evidence.", question: "How is it governed?" },
  { level: "L6", title: "Integration & events", text: "Documented APIs, events and approved system handoffs.", question: "How does it connect?" },
  { level: "L7", title: "Operations & observability", text: "Pending, partial, failed and review states; verification and recovery.", question: "Can teams see and resolve it?" },
];

export default function TabletArchitecture() {
  return (
    <section id="architecture-t" className="w-full overflow-hidden bg-white px-[5%] pb-[94px] pt-[93px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            03 / FINANCIAL SERVICES OPERATING ARCHITECTURE
          </p>
          <h2 className="pb-[0.52px] font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            One operating spine.
            <br />
            Seven explicit layers.
          </h2>
          <p className="max-w-[760px] pt-[4.095px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Specialist systems retain their roles while shared foundations connect financial work,
            authority and evidence.
          </p>
        </div>

        <ol className="flex flex-col gap-[10px] pt-[10px]">
          {layers.map((l) => (
            <li
              key={l.level}
              className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-[20px] gap-y-[20px] rounded-[8px] border border-[#ddeaea] bg-[#f4f9f9] px-[22px] py-[18px] sm:grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <span className="col-start-1 row-start-1 flex items-center justify-center self-center rounded-[30px] border border-[#90b8bd] p-[5px] font-poppins text-[13px] leading-[20.8px] text-[#247780]">
                {l.level}
              </span>
              <h3 className="col-start-2 row-start-1 self-center font-poppins text-[16px] font-bold leading-[20.8px] text-[#102d2f]">
                {l.title}
              </h3>
              <p className="col-start-2 row-start-2 self-center font-poppins text-[14px] leading-[22.4px] text-[#587176] sm:col-start-3 sm:row-start-1">
                {l.text}
              </p>
              <strong className="col-start-2 row-start-3 self-center font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] sm:col-span-2 sm:row-start-2">
                {l.question}
              </strong>
            </li>
          ))}
        </ol>

        <div className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px]">
          <p className="font-poppins text-[14px] leading-[22.4px] text-[#48666a]">
            Definitive “paid,” “settled,” “approved” or “complete” states come from the
            authoritative system, never an intermediate event.
          </p>
        </div>
      </div>
    </section>
  );
}
