import { WRAP } from "./layout";

const CARDS = [
  { title: "Registry unavailable", text: "No invented active project, owner or prototype maturity." },
  { title: "State", text: "Idea, research, prototype, evaluation, validated research, candidate or graduated only when verified." },
  { title: "Evidence", text: "Method, limitations and approved source." },
  { title: "Commercial boundary", text: "No pricing, SLA, launch date or purchase claim before formal graduation." },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full py-14 lg:py-[70px]"
      style={{
        backgroundImage:
          "linear-gradient(126.8160135673755deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-5`}>
        <div className="flex max-w-[800px] flex-col gap-[15.1px] pb-[15.99px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            Exploration portfolio
          </h2>
          <p className="pt-[4.195px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            No approved public experiment registry supplied.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:min-h-[292.78px] lg:grid-cols-4">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-10 pt-[31px]"
            >
              <h3 className="max-w-[233px] pt-[9.5px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                {c.title}
              </h3>
              <p className="max-w-[233px] font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
