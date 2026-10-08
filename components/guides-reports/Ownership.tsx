import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  {
    icon: "/guides-reports/icon-user-teal.svg",
    title: "Editorial owner",
    text: "Accountable internal content owner; named attribution only when approved.",
    cls: "",
  },
  {
    icon: "/guides-reports/icon-document-teal.svg",
    title: "Subject-matter review",
    text: "Approved name/title or public-safe role; no fabricated expert badge.",
    cls: "",
  },
  {
    icon: "/guides-reports/icon-shield-check-teal.svg",
    title: "Applicable review",
    text: "Legal, security, privacy and product review only where required and actually completed.",
    cls: "md:col-span-2",
  },
];

function Pill({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-[10px] rounded-full border border-[rgba(145,191,197,0.33)] bg-white px-[14px] py-[10px]">
      <Image src={icon} alt="" width={18} height={18} />
      <p className="whitespace-nowrap font-poppins text-[13px] font-semibold leading-[18px] text-[#102d2f]">
        {label}
      </p>
    </div>
  );
}

export default function Ownership() {
  return (
    <section id="ownership" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-[15.4px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            <Lines lines={["Accountability without invented", "authority."]} />
          </h2>
          <p className="pt-[4.6px] font-poppins text-base leading-[25.6px] text-[#587176]">
            Owners and reviewers are real governed roles.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,666fr)_minmax(0,510fr)]">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-rows-[251px_1fr]">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className={`flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px] ${c.cls}`}
              >
                <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[#deefef]">
                  <Image src={c.icon} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="font-poppins text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-6 overflow-hidden rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-5 py-8 lg:h-[502px]">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Pill icon="/guides-reports/badge-pen-tool.svg" label="Editorial owner" />
              <Pill icon="/guides-reports/badge-shield-check.svg" label="Subject-matter review" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="relative aspect-[470/320] w-full overflow-hidden rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-white lg:aspect-auto lg:h-[320px]">
                <Image
                  src="/guides-reports/ownership-editorial-desk.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 504px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Pill icon="/guides-reports/badge-check-circle.svg" label="Applicable review" />
              <Pill icon="/guides-reports/badge-lock.svg" label="Governance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
