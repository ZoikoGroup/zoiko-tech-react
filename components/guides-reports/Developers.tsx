import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    icon: "/guides-reports/icon-code-teal.svg",
    title: "Documentation",
    text: "Current product/platform specifications and supported behavior.",
  },
  {
    icon: "/guides-reports/icon-hierarchy-teal.svg",
    title: "Developer Resources",
    text: "Actual APIs, SDKs, tools and integration guidance when public-ready.",
  },
  {
    icon: "/guides-reports/icon-shield-check-teal.svg",
    title: "No inferred releases",
    text: "A guide does not create a repository, endpoint or generally available capability.",
  },
];

export default function Developers() {
  return (
    <section id="developers" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-9 lg:gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Editorial guidance and canonical", "docs stay separate."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-base leading-[25.6px] text-[#587176]">
            Configuration, exact APIs and product behavior belong in authoritative implementation destinations.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px]"
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] py-[10.5px]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">{c.title}</h3>
              <p className="font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
