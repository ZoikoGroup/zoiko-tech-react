import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    icon: "/guides-reports/icon-document-cyan.svg",
    title: "No match / empty / unavailable",
    text: "Distinct explanations; clear filters or authoritative recovery, without fabricating resources.",
  },
  {
    icon: "/guides-reports/icon-hierarchy-cyan.svg",
    title: "Broken file / form provider",
    text: "Remove broken download; retain web value and approved retry/request path.",
  },
  {
    icon: "/guides-reports/icon-lock.svg",
    title: "Restricted / historical",
    text: "Respect access rules, supersession and withdrawal. No-JavaScript reading stays usable when real content exists.",
  },
];

export default function Recovery() {
  return (
    <section
      id="recovery"
      className="w-full bg-[linear-gradient(121.44deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 lg:pb-[75px] lg:pt-[74px]"
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Recover honestly when something", "changes."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-[16px] leading-[25.6px] text-white">
            Unavailable is not the same as empty, and stale is not current.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <li
              key={c.title}
              className={`flex flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px] lg:min-h-[251px] ${i === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">
                {c.title}
              </h3>
              <p className="w-full font-poppins text-[15px] leading-[24px] text-white">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
