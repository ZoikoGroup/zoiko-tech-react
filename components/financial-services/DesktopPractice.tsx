import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Financial operations", body: ["Operating problem → control architecture", "→", "deployment → approved result."] },
  { title: "Payments & embedded finance", body: ["Operating need → operator and integration", "pattern → evidenced outcome."] },
  { title: "Remittance", body: ["Market context → operator boundary →", "approved availability and result."] },
  { title: "Compliance & evidence", body: ["Obligation → control and workflow → approved", "assurance outcome."] },
];

export default function DesktopPractice() {
  return (
    <section
      id="practice"
      className="w-full bg-[linear-gradient(124.04deg,#000_0%,#0a2528_48%,#247780_100%)] px-10 pb-[94px] pt-[93px] xl:px-[120px]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Proof should be specific.", "And approved for public use."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Customer stories and measured outcomes will appear only when their evidence is approved.
          </p>
        </div>
        <ul className="grid w-[794px] max-w-full grid-cols-2 grid-rows-[234px_243px] gap-5">
          {cards.map((c) => (
            <li
              key={c.title}
              className="min-w-0 rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-[28px]"
            >
              <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src="/financial-services/desktop-icon-file-text.svg" alt="" width={25} height={25} />
                </span>
              </div>
              <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="font-poppins text-[15px] font-normal leading-[24px] text-[#c4d7d9]">
                <DesktopLines lines={c.body} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
