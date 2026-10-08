import { WRAP } from "./layout";
import Lines from "./Lines";

const panels = [
  { n: "01", title: "Purpose", text: "Approved use and minimum necessary data." },
  { n: "02", title: "Rights", text: "Consent/IP/source access and output-sharing boundaries." },
  { n: "03", title: "Sensitive domains", text: "Location, language, education and industrial context reviewed." },
  { n: "04", title: "Publication", text: "No private data, partners or confidential experiment detail leaked." },
];

export default function Data() {
  return (
    <section
      id="data"
      className="w-full bg-[linear-gradient(120.043deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[70px] lg:pt-[69px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-[60px]`}>
        <div className="flex w-full flex-col gap-[15.1px] lg:w-[330px] lg:shrink-0">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            <Lines lines={["Data, privacy &", "rights"]} />
          </h2>
          <p className="pt-[4.9px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Restricted project information stays restricted.
          </p>
        </div>
        <ul className="grid min-w-0 flex-1 grid-cols-1 items-start gap-5 md:grid-cols-2 lg:h-[440.38px] lg:grid-rows-[210.19px_210.19px]">
          {panels.map((p, i) => (
            <li
              key={p.n}
              className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pt-[31px] ${i === 0 ? "pb-[68px]" : "pb-[41px]"}`}
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{p.title}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
