import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  {
    icon: "/guides-reports/icon-document-cyan.svg",
    w: 25,
    h: 25,
    title: "Claim-source mapping",
    text: "Approved external or governed internal evidence; accurate third-party attribution.",
  },
  {
    icon: "/guides-reports/icon-database.svg",
    w: 25,
    h: 25,
    title: "Statistics & method",
    text: "No naked numbers. Preserve denominator, units, period, scope and assumptions.",
  },
  {
    icon: "/guides-reports/icon-shield-check-cyan.svg",
    w: 25,
    h: 25,
    title: "Product & Trust boundaries",
    text: "Current features defer to product/docs sources; assurance defers to Trust Center. Corrections re-review dependent claims.",
  },
  {
    icon: "/guides-reports/icon-clock.svg",
    w: 18.75,
    h: 20.835,
    title: "Version & currentness",
    text: "Show the reviewed version, effective date and freshness of evidence before citing it.",
  },
  {
    icon: "/guides-reports/icon-user-small.svg",
    w: 18.75,
    h: 20.835,
    title: "Review status",
    text: "Mark whether a claim is approved, pending review or superseded, with ownership visible.",
  },
  {
    icon: "/guides-reports/icon-refresh-cw.svg",
    w: 18.75,
    h: 20.835,
    title: "Corrections & updates",
    text: "Changes, clarifications and withdrawn claims should remain traceable and easy to review.",
  },
];

export default function Sources() {
  return (
    <section
      id="sources"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px]"
      style={{
        backgroundImage:
          "linear-gradient(112.84978289220652deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Every material claim needs a source.
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-white">
            Editorial resources do not replace authoritative product or trust evidence.
          </p>
        </div>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] p-[27px] lg:min-h-[236px]"
            >
              <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={c.icon} alt="" width={c.w} height={c.h} />
              </span>
              <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">
                {c.title}
              </h3>
              <p className="font-poppins text-[15px] leading-6 text-white">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
