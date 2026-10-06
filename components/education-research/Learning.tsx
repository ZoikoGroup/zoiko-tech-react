import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const cards = [
  {
    icon: "/education-research/evidence-icon-document.svg",
    title: "Learning objective & content",
    text: "Define the audience and approved source material.",
    cls: "xl:min-h-[260px]",
  },
  {
    icon: "/education-research/evidence-icon-author.svg",
    title: "Identity & access",
    text: "Connect supported institutional access architecture.",
    cls: "xl:min-h-[260px]",
  },
  {
    icon: "/education-research/icon-sparkle.svg",
    title: "Knowledge assistance",
    text: "Retrieval, explanation and collaboration only at supported scope.",
    cls: "xl:min-h-[258px]",
  },
  {
    icon: "/education-research/icon-institution.svg",
    title: "External institutional systems",
    text: "LMS, SIS, admissions, assessment and credential systems remain authoritative external systems.",
    cls: "xl:min-h-[258px]",
  },
];

export default function Learning() {
  return (
    <section
      id="learning"
      className="w-full py-14 lg:pb-[108px] lg:pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(122.33046288064615deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px] xl:max-w-none">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Connect learning experiences to", "institutional authority."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.495px] font-inter text-base leading-[25.6px] text-[#c4d7d9] xl:max-w-none">
            <Lines
              lines={[
                "Approved content, identity and communications can support learning-oriented experiences. Existing",
                "academic systems retain their responsibilities.",
              ]}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-[672px_minmax(0,1fr)] xl:gap-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 ${c.cls}`}
              >
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <div className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </div>
                </div>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-white">
                  {c.title}
                </h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              </article>
            ))}
          </div>

          <div className="relative mx-auto aspect-[667.5/606.5] w-full max-w-[667.5px] xl:-my-[34px] xl:w-[667.5px] xl:max-w-none">
            <Image
              src="/education-research/learning-network-illustration.webp"
              alt="Learning experiences connected to institutional systems"
              width={1100}
              height={825}
              sizes="(min-width: 1280px) 543px, 80vw"
              className="absolute left-1/2 top-1/2 h-auto w-[81.3%] -translate-x-1/2 -translate-y-1/2 rotate-[26.49deg]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
