import TabletLines from "./TabletLines";

const cards = [
  { title: "Regulatory workflow", lines: ["Obligation and operational problem,", "control architecture, deployment,", "approved measurable result, evidence", "and permission."] },
  { title: "Identity / authority", lines: ["Authority or access problem, delegated-", "control architecture, approved", "operational result."] },
  { title: "Security / resilience", lines: ["Risk or operational challenge, control", "architecture, approved outcome, without", "overstated certification."] },
  { title: "AI governance", lines: ["Bounded AI use case, evaluation, human", "oversight, approval, approved result and", "limitations."] },
];

export default function TabletPractice() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[85.45px] pt-[60.43px]"
      style={{ backgroundImage: "linear-gradient(135.028deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(21px,3.33vw,25.6px)] font-bold leading-[29.44px] text-white">
          Technology in practice
        </h2>
        <p className="font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Proof appears only when approved for public use.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col items-start gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <TabletLines lines={c.lines} />
              </p>
              <span className="rounded-full border border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
                Evidence pending
              </span>
            </li>
          ))}
        </ul>
        <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#7fd0d9] bg-[rgba(0,0,0,0.35)] px-[16px] pb-[12px] pt-[20.42px]">
          <p className="font-inter text-[14.7px] font-normal leading-[23.55px] text-[#dcecee]">
            <TabletLines
              lines={[
                "No approved regulated-domain proof yet? See the architecture, claims hierarchy, Trust,",
                "Security, Privacy and Responsible AI routes, or contact sales. We don’t publish regulatory",
                "approvals, certifications, audit results, fines avoided, compliance percentages, customer",
                "logos, regulator names or market coverage.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
