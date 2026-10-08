import Image from "next/image";
import { WRAP } from "./layout";

const P = "/artificial-intelligence-agentic-systems";

const CARDS = [
  { icon: "practice-domain-icon", title: "Inform / recommend", text: "Human interprets; authorized person accepts, rejects or modifies." },
  { icon: "practice-execution-icon", title: "Prepare", text: "Draft context or action for authorized review/release." },
  { icon: "practice-proof-icon", title: "Approval-required execution", text: "Prepare, block, seek authorization, then execute." },
  { icon: "practice-evidence-icon", title: "Unsupported / prohibited", text: "No execution when policy, authority, evidence or capability is insufficient." },
];

export default function Authority() {
  return (
    <section
      id="authority"
      className="w-full bg-[linear-gradient(120.24463279801132deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10`}>
        <div className="flex min-w-0 flex-1 flex-col gap-[35px]">
          <div className="flex max-w-[850px] flex-col gap-4">
            <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
              Human authority & approval
            </h2>
            <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
              Informing, recommending and acting are different modes.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col gap-3 overflow-hidden rounded-xl border border-solid border-[rgba(141,185,196,0.33)] bg-white/[0.03] px-[26px] pb-[41px] pt-[26px] lg:min-h-[228px]"
              >
                <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#62c6ca]/10 py-[10.5px]">
                  <Image src={`${P}/${c.icon}.svg`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{c.title}</h3>
                <p className="font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-full max-w-[509px] lg:mx-0 lg:mt-[42px] lg:w-[509px] lg:flex-none">
          <Image
            src={`${P}/authority-approval-illustration.webp`}
            alt="Illustration of a reviewer approving an AI-prepared request"
            width={1100}
            height={917}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
