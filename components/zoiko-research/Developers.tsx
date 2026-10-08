import { WRAP } from "./layout";

const panels = [
  { n: "01", title: "Code", text: "Actual approved repository/version/rights." },
  { n: "02", title: "Data", text: "Intentionally released dataset with access rules." },
  { n: "03", title: "Docs / interfaces", text: "Current authoritative technical contracts." },
  { n: "04", title: "Unavailable", text: "No invented downloads, APIs, SDKs, model zoo or open-source program." },
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(121.56deg,#000000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[70px] lg:pt-[69px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-[16.01px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            Developer / technical handoff
          </h2>
          <p className="pt-[5px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Released implementation material only.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {panels.map((p, i) => (
            <article
              key={p.n}
              className={`flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pt-[31px] ${
                i === 3 ? "pb-[41px] lg:self-start" : "pb-[68px] lg:self-stretch"
              }`}
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
              <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                {p.title}
              </h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
