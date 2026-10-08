import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const NOTES = [
  {
    icon: "/guides-reports/icon-database.svg",
    title: "Research",
    text: "Technical papers, benchmarks and research outputs.",
  },
  {
    icon: "/guides-reports/icon-shield-check-cyan.svg",
    title: "Trust Center",
    text: "Authoritative security, privacy, compliance, accessibility and resilience evidence.",
  },
];

export default function Authority() {
  return (
    <section
      id="authority"
      className="w-full bg-[linear-gradient(121.07deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)] py-14 lg:pb-[75px] lg:pt-[74px]"
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Technical evidence and assurance", "have owners."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-[16px] leading-[25.6px] text-white">
            Research and Trust Center remain distinct from Guides &amp; Reports.
          </p>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-[45px]">
          <div className="relative aspect-[525/350] w-full overflow-hidden rounded-[15px]">
            <Image
              src="/guides-reports/authority-source-archive.webp"
              alt="Illustrative source archive and reviewed editorial documents"
              fill
              sizes="(min-width: 1024px) 561px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col gap-6 pb-[12.5px]">
            {NOTES.map((n) => (
              <li
                key={n.title}
                className="flex flex-col items-start gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px]"
              >
                <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                  <Image src={n.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="w-full pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">
                  {n.title}
                </h3>
                <p className="w-full font-poppins text-[15px] leading-[24px] text-white">{n.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
