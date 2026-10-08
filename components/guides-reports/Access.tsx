import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    img: "/guides-reports/access-open-by-default.webp",
    title: "Open by default where practical",
    text: "Web-readable value and open download without unnecessary forms.",
  },
  {
    img: "/guides-reports/access-approved-models.webp",
    title: "Approved access models",
    text: "Optional contact, justified high-value gate, customer-only or controlled request only under a governed policy.",
  },
  {
    img: "/guides-reports/access-privacy-form-recovery.webp",
    title: "Privacy & form recovery",
    text: "Collect only routing-required fields. Explain use; preserve entered data on failure. Marketing service failure must not block all reading value.",
  },
];

export default function Access() {
  return (
    <section id="access" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Access requirements should be", "clear."]} />
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#587176]">
            Value-proportionate access with separate, optional marketing consent.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex w-full flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px] lg:h-[447px]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image src={c.img} alt="" fill sizes="(min-width:1024px) 400px, (min-width:768px) 45vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 rounded-[10px] bg-[rgba(0,0,0,0.12)]" />
              </div>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
