import { WRAP } from "./layout";
import Lines from "./Lines";

const PANELS = [
  { n: "01", title: "Project scope", text: "Actual approved research objective and output." },
  { n: "02", title: "Attribution", text: "Institution/person names only with publication approval." },
  { n: "03", title: "Rights & access", text: "Data, IP, source and artifact restrictions." },
  { n: "04", title: "Review", text: "Human ownership and publication decision remain explicit." },
];

export default function Collaboration() {
  return (
    <section
      id="collaboration"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(121.600260169125deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] lg:pb-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[36px] lg:text-[41px] lg:leading-[47.15px]">
            <Lines lines={["University collaboration"]} />
          </h2>
          <p className="pt-[5.01px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            A supported relationship type, not a named endorsement.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PANELS.map((p) => (
            <article
              key={p.n}
              className="flex flex-col gap-3 border-b border-t-2 border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">
                {p.n}
              </span>
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
