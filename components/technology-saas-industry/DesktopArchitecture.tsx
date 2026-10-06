import Image from "next/image";
import Lines from "./DesktopLines";

const IMG = "/technology-saas-industry/desktop";

const layers = [
  {
    image: `${IMG}-code-editor-closeup.webp`,
    alt: "Source code in a dark editor",
    icon: `${IMG}-icon-layers.svg`,
    title: ["Product / service domain"],
    body: [
      "Customer-facing software, API, AI, communications, infrastructure or digital service context.",
    ],
    question: ["What is the company building or", "operating?"],
  },
  {
    image: `${IMG}-circuit-board-chip.webp`,
    alt: "Circuit board with processor",
    icon: `${IMG}-icon-arch-code.svg`,
    title: ["Developer / integration", "surface"],
    body: [
      "APIs, SDKs, models, events, webhooks, authentication and documentation at supported scope.",
    ],
    question: ["How do systems and developers", "connect?"],
  },
  {
    image: `${IMG}-analytics-dashboard-screen.webp`,
    alt: "Analytics dashboard on a dark screen",
    icon: `${IMG}-icon-arch-shield.svg`,
    title: ["Shared technical controls"],
    body: [
      "Identity, security, data, cloud and",
      "infrastructure, governance and policy.",
    ],
    question: ["What shared controls prevent silos?"],
  },
  {
    image: `${IMG}-earth-night-lights.webp`,
    alt: "Earth at night with glowing city lights",
    icon: `${IMG}-icon-database.svg`,
    title: ["Product / transaction", "systems"],
    body: [
      "Authoritative product, subscription, usage, customer or transaction systems where",
      "applicable.",
    ],
    question: ["Which systems own product and", "commercial state?"],
  },
  {
    image: `${IMG}-matrix-code-rain.webp`,
    alt: "Streams of green code",
    icon: `${IMG}-icon-building.svg`,
    title: ["Business operating", "systems"],
    body: [
      "HR, payroll, billing, workforce,communications and other approved operational platforms.",
    ],
    question: ["How does the company operate", "itself?"],
  },
  {
    image: `${IMG}-laptop-analytics.webp`,
    alt: "Laptop showing an analytics dashboard",
    icon: `${IMG}-icon-arch-activity.svg`,
    title: ["Reliability / support /", "evidence"],
    body: [
      "Observability, status, incidents, support, change and release,and evidence.",
    ],
    question: ["Can it be operated and trusted?"],
  },
];

export default function Architecture() {
  return (
    <section className="w-full bg-white px-[130px] pb-[120px] pt-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora max-w-[751.73px] text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          <Lines lines={["Technology company operating", "architecture"]} />
        </h2>
        <p className="font-inter text-base leading-[25.6px] text-[#4d6468]">
          Seven layers, from what you build to what is actually public and
          provable.
        </p>

        <ul className="grid w-full grid-cols-3 gap-[18px] xl:auto-rows-[443px]">
          {layers.map((l) => (
            <li
              key={l.title[0]}
              className="flex min-w-0 flex-col gap-5 rounded-[14px] border border-[#d5e3e5] bg-white p-6 [filter:drop-shadow(0px_12px_15px_rgba(0,0,0,0.22))_drop-shadow(0px_3px_4px_rgba(0,0,0,0.12))]"
            >
              <div
                className="relative h-[188px] w-full shrink-0 overflow-hidden rounded-[14px]"
                style={{
                  backgroundImage:
                    "linear-gradient(131.61deg, #000000 0%, #247780 100%)",
                }}
              >
                <Image
                  src={l.image}
                  alt={l.alt}
                  fill
                  sizes="(min-width: 1440px) 334px, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(36,119,128,0.08)]">
                    <Image src={l.icon} alt="" width={20} height={20} />
                  </span>
                  <h3 className="font-sora min-w-0 flex-1 text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                    <Lines lines={l.title} />
                  </h3>
                </div>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {l.body.length > 1 ? <Lines lines={l.body} /> : l.body[0]}
                </p>
                <small className="font-inter block text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  <Lines lines={l.question} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
