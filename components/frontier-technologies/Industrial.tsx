import { WRAP } from "./layout";

const cards = [
  { title: "Question", text: "Approved operating constraint and thesis." },
  { title: "Operator", text: "Responsible physical/industrial authority." },
  { title: "Safety", text: "Bounded evaluation and stop conditions." },
  { title: "No capability inference", text: "No OT, plant control, predictive maintenance or hardware deployment assumed." },
];

export default function Industrial() {
  return (
    <section id="industrial" className="w-full bg-[image:linear-gradient(121.48440181440529deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[800px] flex-col gap-[15px] pb-1.5 lg:pb-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-[36px] lg:text-[41px] lg:leading-[47.15px] text-white">Industrial AI</h2>
          <p className="pt-[5px] font-poppins text-[16px] font-normal leading-[25.6px] text-[#c4d7d9]">Advisory research is separate from industrial control.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <li key={c.title} className="flex flex-col gap-3 border-b border-t-2 border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] lg:min-h-[265px]">
              <span className="font-poppins text-[11px] font-normal leading-[17.6px] tracking-[1px] text-[#72aab4]">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{c.title}</h3>
              <p className="font-poppins text-[15px] font-normal leading-[27px] text-[#c4d7d9]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
