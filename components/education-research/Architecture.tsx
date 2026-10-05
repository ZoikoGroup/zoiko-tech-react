import { WRAP } from "./layout";

const layers = [
  ["L1", "Objective / program context", "Research question, project or learning objective.", "What is the work trying to achieve?"],
  ["L2", "Authoritative sources / artifacts", "Publication, dataset, benchmark, content or institutional system.", "What is authoritative?"],
  ["L3", "Identity / access / rights", "Role, project scope and permitted source use.", "Who may access and use it?"],
  ["L4", "Intelligence / analysis / preparation", "Search, summarize, compare or prepare at supported scope.", "How is technology assisting?"],
  ["L5", "Human academic / research review", "Authorized people validate interpretation and output.", "Who owns the judgment?"],
  ["L6", "Collaboration / publication / delivery", "Approved sharing, technical output or learning experience.", "How is it shared?"],
  ["L7", "Evidence / version / integration", "Citations, history, states and documented interfaces.", "Can it be reviewed?"],
];

export default function Architecture() {
  return (
    <section id="architecture" className="w-full bg-white py-14 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="font-poppins pb-[0.59px] text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px] lg:tracking-[-1.3px]">
            From objective to reviewed evidence.
          </h2>
          <p className="pt-[5px] font-inter text-[16px] leading-[25.6px] text-[#587176]">
            Seven layers preserve source, rights and institutional authority.
          </p>
        </div>
        <ul className="flex flex-col gap-[10px]">
          {layers.map(([level, title, text, question]) => (
            <li
              key={level}
              className="grid grid-cols-[48px_minmax(0,1fr)] gap-x-4 gap-y-1 rounded-[8px] border border-[#ddeaea] bg-[#f4f9f9] px-[22px] py-[18px] lg:min-h-[70.8px] lg:grid-cols-[48px_minmax(0,1.1fr)_minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center lg:gap-5"
            >
              <span className="row-span-3 flex items-center justify-center self-start rounded-[30px] border border-[#90b8bd] p-[5px] font-inter text-[13px] leading-[20.8px] text-[#247780] lg:row-span-1 lg:self-center">
                {level}
              </span>
              <h3 className="col-start-2 font-poppins text-[16px] font-bold leading-[20.8px] text-[#102d2f]">{title}</h3>
              <p className="col-start-2 font-inter text-[14px] leading-[22.4px] text-[#587176] lg:col-start-3">{text}</p>
              <strong className="col-start-2 font-poppins text-[13px] font-bold leading-[20.8px] text-[#247780] lg:col-start-4">
                {question}
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
