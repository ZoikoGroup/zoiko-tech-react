import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    image: "/public-sector-government/tablet-accessibility-laptop-team.webp",
    alt: "Professionals working together at a laptop",
    icon: "/public-sector-government/tablet-icon-channel-user.svg",
    title: ["Inclusive service", "design"],
    text: "Plain language, necessary information and clear instructions help people understand the next step.",
  },
  {
    image: "/public-sector-government/tablet-accessibility-document-review.webp",
    alt: "Team reviewing documents together",
    icon: "/public-sector-government/tablet-icon-results-document.svg",
    title: ["Assisted service", "pathways"],
    text: "Consider human help and alternate channels where the responsible program supports them.",
  },
  {
    image: "/public-sector-government/tablet-accessibility-workflow-review.webp",
    alt: "Colleagues reviewing a workflow",
    icon: "/public-sector-government/tablet-icon-security-shield.svg",
    title: ["Testable", "accessibility"],
    text: "Keyboard access, semantic structure, clear errors and manageable cognitive load belong in acceptance criteria.",
  },
];

const rows = [
  ["Service / jurisdiction", "Sample service / context requires confirmation"],
  ["Progress", "Information → review → status"],
  ["Required information", "One missing input — explanation needed"],
  ["Current state", "More information required"],
  ["Next step", "Provide the missing item or contact service support"],
  ["Assisted route", "Available only where the program supports it"],
];

export default function TabletAccessibility() {
  return (
    <section
      id="accessibility-t"
      className="w-full overflow-hidden pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(118.2deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[35px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            04 / ACCESSIBLE SERVICE DELIVERY
          </span>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-white">
            Make access part of the architecture.
          </h2>
          <p className="max-w-[760px] pt-[4.3px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <TabletLines
              lines={[
                "Design toward WCAG 2.2 AA with visible focus, readable content and usable primary controls.",
                "Accessibility compliance requires testing and review.",
              ]}
            />
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-[22px] pt-px sm:grid-cols-2 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.alt} className="flex">
              <article className="flex w-full flex-col overflow-hidden rounded-[10px] border border-white/[0.19] bg-white/[0.04] pb-[24px]">
                <div className="relative h-[170px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 768px) 230px, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-[12px] p-[18px]">
                  <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                  </span>
                  <h3 className="pt-[2px] text-[20px] font-bold leading-[26px] text-white">
                    <TabletLines lines={c.title} />
                  </h3>
                  <p className="text-[15px] leading-[24px] text-[#c4d7d9]">{c.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex flex-wrap items-start justify-between gap-x-[12px] gap-y-[10px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-white">
              <TabletLines lines={["Accessible service", "journey"]} />
            </h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-1 gap-x-[20px] gap-y-[4px] py-[16px] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] ${
                  i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="text-[13px] leading-[20.8px] text-[#9bc2c6]">{k}</dt>
                <dd className="text-[13px] leading-[20.8px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
