import Image from "next/image";

const BR = <br className="hidden md:block" />;

const cards: {
  title: React.ReactNode;
  body: React.ReactNode;
  boundary: React.ReactNode;
  img: string;
  alt: string;
}[] = [
  {
    title: "Workforce · ZoikoTime",
    body: <>Workforce assurance, verification and {BR}performance intelligence.</>,
    boundary: <>Boundary: no inferred employee surveillance {BR}or generic time billing.</>,
    img: "/technology-saas-industry/tablet-glowing-circuit-board.webp",
    alt: "Glowing teal circuit board",
  },
  {
    title: "HR · Zoiko HR",
    body: <>Global human resources and workforce {BR}operations.</>,
    boundary: <>Boundary: approved HR scope.</>,
    img: "/technology-saas-industry/tablet-code-editor-screen.webp",
    alt: "Source code on a monitor",
  },
  {
    title: "Payroll · Zoiko Payroll",
    body: <>Global payroll operations and workforce {BR}payments.</>,
    boundary: <>Boundary: country, payment and filing scope {BR}stays product-specific.</>,
    img: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    alt: "Processor chip on a circuit board",
  },
  {
    title: "Billing · Zoiko Billing",
    body: <>Billing, invoicing, usage and revenue {BR}operations.</>,
    boundary: <>Boundary: no inferred general ledger, ERP or {BR}payment-processor scope.</>,
    img: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    alt: "Analytics dashboard on a screen",
  },
  {
    title: "Communications · Zoiko Sema",
    body: <>Governed communications for {BR}messaging, meetings, calls and {BR}intelligent workflows.</>,
    boundary: <>Boundary: Sema admin controls don’t {BR}automatically apply to other products.</>,
    img: "/technology-saas-industry/tablet-earth-night-lights.webp",
    alt: "Earth at night with city lights",
  },
  {
    title: <>Marketing operations · {BR}ZoikoVertex</>,
    body: <>Governed agentic marketing operating {BR}system.</>,
    boundary: <>Boundary: no inferred CRM, CDP or ad-{BR}network ownership.</>,
    img: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    alt: "Green digital code rain",
  },
];

export default function BusinessOs() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.44px] pt-[60.43px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Business operating systems
        </h2>
        <p className="font-inter text-base font-normal leading-[25.6px] text-[#4d6468]">
          How a technology company runs itself, at each platform’s approved scope.
        </p>

        <ul className="grid grid-cols-1 gap-[18px] pt-[7.6px] sm:grid-cols-2">
          {cards.map((c, i) => (
            <li
              key={i}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(134.99999880589337deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-[5.9px] px-5 pb-5 pt-[10px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {c.title}
                </h3>
                <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  {c.body}
                </p>
                <small className="block pt-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  {c.boundary}
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
