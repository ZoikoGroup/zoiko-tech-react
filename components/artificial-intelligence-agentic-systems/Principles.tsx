import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "domain", title: "Domain context first", text: "Use real vocabulary, workflow scope and approved sources." },
  { icon: "execution", title: "Authority before action", text: "Explicit identity, permission, policy and owner." },
  { icon: "operational", title: "Evidence before certainty", text: "Unknown, conflicting or insufficient sources remain visible." },
  { icon: "proof", title: "Human accountability", text: "Consequential decisions and approvals retain accountable authority." },
  { icon: "evidence", title: "Recovery by design", text: "Denials, failures and changed state require reviewed next actions." },
];

export default function Principles() {
  return (
    <section
      id="principles"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(121.15654649497563deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Five architectural principles
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Control is structural, not a footer claim.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[rgba(141,185,196,0.33)] bg-[rgba(255,255,255,0.03)]"
            >
              <div className="flex flex-col gap-3 px-[26px] pb-[41px] pt-[26px]">
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image
                    src={`/artificial-intelligence-agentic-systems/practice-${c.icon}-icon.svg`}
                    alt=""
                    width={25}
                    height={25}
                  />
                </span>
                <h3 className="pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                  {c.title}
                </h3>
                <p className="font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
