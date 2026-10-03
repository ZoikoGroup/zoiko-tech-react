import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { photo: "desktop-accessibility-laptop-photo.webp", alt: "Professionals working together at a laptop", icon: "desktop-icon-user-light.svg", title: "Inclusive service design", body: "Plain language, necessary information and clear instructions help people understand the next step.", pb: true },
  { photo: "desktop-accessibility-documents-photo.webp", alt: "Team reviewing documents together", icon: "desktop-icon-file-text-light.svg", title: "Assisted service pathways", body: "Consider human help and alternate channels where the responsible program supports them.", pb: true },
  { photo: "desktop-accessibility-workflow-photo.webp", alt: "Colleagues reviewing a workflow", icon: "desktop-icon-shield-check-light.svg", title: "Testable accessibility", body: "Keyboard access, semantic structure, clear errors and manageable cognitive load belong in acceptance criteria.", pb: false },
];

const rows = [
  ["Service / jurisdiction", "Sample service / context requires confirmation"],
  ["Progress", "Information → review → status"],
  ["Required information", "One missing input — explanation needed"],
  ["Current state", "More information required"],
  ["Next step", "Provide the missing item or contact service support"],
  ["Assisted route", "Available only where the program supports it"],
];

export default function DesktopAccessibility() {
  return (
    <section
      id="accessibility"
      className="w-full pb-[94px] pt-[93px] px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage:
          "linear-gradient(120.69269537532045deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[35px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            Make access part of the architecture.
          </h2>
          <p className="max-w-[760px] pt-[4.295px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Design toward WCAG 2.2 AA with visible focus, readable content and usable primary controls. Accessibility",
                "compliance requires testing and review.",
              ]}
            />
          </p>
        </div>
        <ul className="flex items-stretch justify-center gap-[22px] pt-px">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex min-h-[436px] min-w-0 flex-1 flex-col overflow-hidden rounded-[10px] bg-[#072025] ${c.pb ? "pb-6" : ""}`}
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                <Image
                  src={`/public-sector-government/${c.photo}`}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1264px) 385px, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[6.5px]">
                  <Image src={`/public-sector-government/${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pt-0.5 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="font-poppins text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex items-start justify-between gap-6 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="w-[232px] font-poppins text-[18px] font-bold leading-[23.4px] text-white">Accessible service journey</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {rows.map(([label, value], i) => (
              <div
                key={label}
                className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-5 py-4 ${i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""}`}
              >
                <dt className="font-poppins text-[13px] leading-[20.8px] text-[#9bc2c6]">{label}</dt>
                <dd className="font-poppins text-[13px] leading-[20.8px] text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
