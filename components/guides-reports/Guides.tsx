import Image from "next/image";
import { WRAP } from "./layout";

const NOTES = [
  {
    icon: "/guides-reports/icon-user-outline.svg",
    title: "Goal & audience",
    text: "Define the problem, intended reader and prerequisites.",
  },
  {
    icon: "/guides-reports/icon-hierarchy-cyan.svg",
    title: "Structured guidance",
    text: "Approved steps, alternatives, decision gates and practical verification; editorial guidance is not automated product behavior.",
  },
  {
    icon: "/guides-reports/icon-document-cyan.svg",
    title: "Source & currentness",
    text: "Authoritative docs/trust/research references and reviewed version; synthetic examples labeled explicitly.",
  },
];

export default function Guides() {
  return (
    <section
      id="guides"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px]"
      style={{
        backgroundImage:
          "linear-gradient(112.20847588287539deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            A guide supports a task or decision.
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-white">
            Useful steps, dependencies and review points.
          </p>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,526px)_minmax(0,530px)] lg:justify-between">
          <ul className="flex flex-col gap-6">
            {NOTES.map((n) => (
              <li
                key={n.title}
                className="flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pb-[42px] pt-[27px]"
              >
                <div className="flex items-center gap-[10px]">
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={n.icon} alt="" width={25} height={25} />
                  </span>
                  <h3 className="pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">
                    {n.title}
                  </h3>
                </div>
                <p className="font-poppins text-[15px] leading-6 text-white">{n.text}</p>
              </li>
            ))}
          </ul>
          <div className="relative mx-auto aspect-square w-full max-w-[530px] lg:-mt-4">
            <Image
              src="/guides-reports/guides-isometric-hub.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 530px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
