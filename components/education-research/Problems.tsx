import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    icon: "/education-research/evidence-icon-document.svg",
    title: <>Provenance gets lost</>,
    text: "Conclusions become separated from source version, citation, rights and review.",
  },
  {
    icon: "/education-research/icon-sparkle.svg",
    title: <>AI obscures judgment</>,
    text: "Generated summaries can be mistaken for validated research or educational truth.",
  },
  {
    icon: "/education-research/icon-org-chart-light.svg",
    title: (
      <>
        Systems stay
        <br className="hidden xl:block" /> fragmented
      </>
    ),
    text: "Identity, content, communications and institutional systems need supported handoffs.",
  },
  {
    icon: "/education-research/icon-lock.svg",
    title: (
      <>
        Collaboration crosses
        <br className="hidden xl:block" /> boundaries
      </>
    ),
    text: "Restricted sources and unpublished work require explicit access and sharing rules.",
  },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="w-full bg-[linear-gradient(110.75deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px] xl:max-w-none">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px] lg:tracking-[-1.3px]">
            <Lines lines={["Knowledge work needs connected", "context."]} />
          </h2>
          <p className="pt-[5.2px] font-inter text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Four recurring problems shape the operating architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <article
              key={i}
              className="flex flex-col items-center rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7 lg:h-[284px]"
            >
              <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="font-poppins mb-3 w-full text-center text-[20px] font-bold leading-[26px] text-white">
                {c.title}
              </h3>
              <p className="w-full text-center font-inter text-[15px] leading-[24px] text-[#c4d7d9]">{c.text}</p>
            </article>
          ))}
        </div>
        <div className="relative h-[220px] w-full overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.19)] md:h-[280px] lg:h-[360px]">
          <Image
            src="/education-research/problems-team-library.webp"
            alt="Researchers and students collaborating around a laptop in a library"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
