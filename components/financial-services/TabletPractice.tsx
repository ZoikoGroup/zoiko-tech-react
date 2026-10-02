import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  { title: ["Financial operations"], lines: ["Operating problem → control architecture", "→ deployment → approved result."] },
  { title: ["Payments & embedded", "finance"], lines: ["Operating need → operator and integration", "pattern → evidenced outcome."] },
  { title: ["Remittance"], lines: ["Market context → operator boundary →", "approved availability and result."] },
  { title: ["Compliance & evidence"], lines: ["Obligation → control and workflow →", "approved assurance outcome."] },
];

export default function TabletPractice() {
  return (
    <section
      id="practice-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px] font-poppins"
      style={{ backgroundImage: "linear-gradient(119.37deg, rgb(0,0,0) 0%, rgb(10,37,40) 48%, rgb(36,119,128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex w-full max-w-[820px] flex-col gap-[15.2px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            14 / TECHNOLOGY IN PRACTICE
          </span>
          <h2 className="pb-[0.5px] text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines lines={["Proof should be specific.", "And approved for public use."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Customer stories and measured outcomes will appear only when their evidence is approved.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title.join(" ")} className="flex">
              <article className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7">
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src="/financial-services/tablet-practice-document-icon.svg" alt="" width={25} height={25} />
                  </span>
                </div>
                <span className="w-full rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
                  Evidence pending
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">
                  <TabletLines lines={c.title} />
                </h3>
                <p className="pb-[22px] text-[15px] font-normal leading-6 text-[#c4d7d9]">
                  <TabletLines lines={c.lines} />
                </p>
                <a href="#" className="mt-auto flex min-h-9 items-start py-2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0]">
                  Discuss the architecture ↗
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
