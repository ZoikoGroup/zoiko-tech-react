import { WRAP } from "./layout";

const panels = [
  { title: "Contracts", text: "Approved APIs/model interfaces only." },
  { title: "Test", text: "Supported sandbox or prototype access, not invented self service." },
  { title: "Instrumentation", text: "Public-safe supported measurement." },
  { title: "Release", text: "No fabricated code, datasets, credentials or repositories." },
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(123.183deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[70px] lg:pt-[69px]"
    >
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            Developer / prototype layer
          </h2>
          <p className="pt-[5px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Only actually public documented interfaces.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-4">
          {panels.map((p) => (
            <li
              key={p.title}
              className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] lg:min-h-[180px]"
            >
              <h3 className="pb-[0.6px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{p.title}</h3>
              <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
