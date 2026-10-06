import Image from "next/image";

const layers = [
  {
    tag: "L1",
    title: "Product / service domain",
    body: (
      <>
        Customer-facing software, API, AI, <br className="hidden md:block" />
        communications, infrastructure or digital <br className="hidden md:block" />
        service context.
      </>
    ),
    question: "What is the company building or operating?",
    image: "/technology-saas-industry/tablet-code-editor-screen.webp",
    alt: "Source code displayed in a code editor",
  },
  {
    tag: "L2",
    title: "Developer / integration surface",
    body: (
      <>
        APIs, SDKs, models, events, webhooks, <br className="hidden md:block" />
        authentication and documentation at <br className="hidden md:block" />
        supported scope.
      </>
    ),
    question: "How do systems and developers connect?",
    image: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    alt: "Close-up of a circuit board with a processor chip",
  },
  {
    tag: "L3",
    title: "Shared technical controls",
    body: (
      <>
        Identity, security, data, cloud and <br className="hidden md:block" />
        infrastructure, governance and policy.
      </>
    ),
    question: "What shared controls prevent silos?",
    image: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    alt: "Analytics dashboard on a dark screen",
  },
  {
    tag: "L4",
    title: "Product / transaction systems",
    body: (
      <>
        Authoritative product, subscription, <br className="hidden md:block" />
        usage, customer or transaction systems <br className="hidden md:block" />
        where applicable.
      </>
    ),
    question: (
      <>
        Which systems own product and commercial <br className="hidden md:block" />
        state?
      </>
    ),
    image: "/technology-saas-industry/tablet-earth-night-lights.webp",
    alt: "Earth at night with city lights",
  },
  {
    tag: "L5",
    title: "Business operating systems",
    body: (
      <>
        HR, payroll, billing, workforce, <br className="hidden md:block" />
        communications and other approved <br className="hidden md:block" />
        operational platforms.
      </>
    ),
    question: "How does the company operate itself?",
    image: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    alt: "Green digital code rain",
  },
  {
    tag: "L6",
    title: "Reliability / support / evidence",
    body: (
      <>
        Observability, status, incidents, support, <br className="hidden md:block" />
        change and release, and evidence.
      </>
    ),
    question: "Can it be operated and trusted?",
    image: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    alt: "Laptop showing an analytics dashboard",
  },
  {
    tag: "L7",
    title: "Governance / maturity",
    body: (
      <>
        Product state, operator, market, <br className="hidden md:block" />
        regulatory and certification status, and <br className="hidden md:block" />
        the evidence registry.
      </>
    ),
    question: "What is public, available and provable?",
    image: "/technology-saas-industry/tablet-glowing-circuit-board.webp",
    alt: "Glowing teal circuit board",
  },
];

export default function Architecture() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85.44px] pt-[48px] md:pt-[60.645px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[22px] font-bold leading-[1.15] text-[#0a1416] sm:text-[25.6px] sm:leading-[29.44px]">
          Technology company operating <br className="hidden md:block" />
          architecture
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          Seven layers, from what you build to what is actually public and provable.
        </p>
        <ul className="grid grid-cols-1 gap-[18px] pb-[9.6px] pt-[7.6px] sm:grid-cols-2">
          {layers.map((layer) => (
            <li
              key={layer.tag}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white pb-5 shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={layer.image}
                  alt={layer.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start px-5 pt-[26px]">
                <span className="rounded-full border border-[#247780] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#247780]">
                  {layer.tag}
                </span>
                <h3 className="pt-[10.5px] font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {layer.title}
                </h3>
                <p className="pt-[6px] font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">{layer.body}</p>
                <small className="block pt-[10px] font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  {layer.question}
                </small>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-4 pb-3 pt-[11.045px] font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
          <strong className="font-bold">System-of-record rule.</strong> A Zoiko workflow, event or integration state
          never replaces the <br className="hidden md:block" />
          authoritative product, subscription, usage, payment, customer, deployment or support state{" "}
          <br className="hidden md:block" />
          owned by the responsible system. Derived context stays labeled and traceable.
        </div>
      </div>
    </section>
  );
}
