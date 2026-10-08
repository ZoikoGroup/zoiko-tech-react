import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    icon: "/guides-reports/icon-document-cyan.svg",
    title: "Published / updated",
    text: "Approved initial publication and substantive changes, with history where policy requires.",
  },
  {
    icon: "/guides-reports/icon-hierarchy-cyan.svg",
    title: "Superseded / archived",
    text: "Current replacement prominent; historical state explicit and removed from featured prominence.",
  },
  {
    icon: "/guides-reports/icon-shield-check-cyan.svg",
    title: "Withdrawn / unknown",
    text: "No ready-to-download or current label. Unknown metadata fails closed; do not guess.",
  },
];

export default function Currentness() {
  return (
    <section
      id="currentness"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px] bg-[linear-gradient(118.22deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Know whether guidance is still", "current."]} />
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-white">
            Versions and states remain distinguishable.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-6 text-white">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
