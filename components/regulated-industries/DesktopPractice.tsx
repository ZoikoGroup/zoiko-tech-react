import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Regulatory workflow", lines: ["Obligation and operational", "problem, control architecture,", "deployment, approved", "measurable result, evidence and", "permission."] },
  { title: "Identity / authority", lines: ["Authority or access problem,", "delegated-control architecture,", "approved operational result."] },
  { title: "Security / resilience", lines: ["Risk or operational challenge,", "control architecture, approved", "outcome, without overstated", "certification."] },
  { title: "AI governance", lines: ["Bounded AI use case, evaluation,", "human oversight, approval,", "approved result and limitations."] },
];

export default function DesktopPractice() {
  return (
    <section
      className="w-full px-[130px] pb-[120px] pt-[96px]"
      style={{ backgroundImage: "linear-gradient(141.45782348673853deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">Technology in practice</h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
          Proof appears only when approved for public use.
        </p>
        <ul className="flex items-stretch gap-[18px] pt-[1.9px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex min-w-0 flex-1 flex-col items-start overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="mb-[6px] w-full font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="mb-[6px] w-full pb-[4.2px] font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <DesktopLines lines={c.lines} />
              </p>
              <span className="whitespace-nowrap rounded-full border border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
                Evidence pending
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
