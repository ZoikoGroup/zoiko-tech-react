const CARDS: { title: string; lines: string[] }[] = [
  {
    title: "Billing / invoicing",
    lines: [
      "Zoiko Billing at approved billing,",
      "invoicing, usage and revenue-operations",
      "scope.",
    ],
  },
  {
    title: "Usage",
    lines: [
      "Usage and metering are product-",
      "specific. No universal SaaS metering",
      "promise.",
    ],
  },
  {
    title: "Pricing / packaging",
    lines: [
      "No invented pricing, entitlements,",
      "subscriptions, contract or quote-to-cash",
      "functionality.",
    ],
  },
  {
    title: "Payments",
    lines: [
      "Payment state and operator are kept",
      "separate from billing and product-",
      "subscription state.",
    ],
  },
  {
    title: "Revenue recognition / accounting",
    lines: [
      "No accounting, general ledger, revenue",
      "recognition or audit functionality implied",
      "without source support.",
    ],
  },
  {
    title: "Entitlements",
    lines: [
      "Routed to Identity & Access or the",
      "responsible product system, only where",
      "documented.",
    ],
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              {" "}
              <br className="hidden md:block" />
            </>
          )}
        </span>
      ))}
    </>
  );
}

export default function BillingBoundary() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[60.65px]"
      style={{
        backgroundImage:
          "linear-gradient(134.9983696987077deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(21px,5vw,25.6px)] font-bold leading-[1.15] text-white">
          Revenue, billing and monetization <br className="hidden md:block" />
          boundary
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
          Where Zoiko’s role ends and your product’s commercial systems begin.
        </p>
        <ul className="mt-[7.6px] grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="flex flex-col gap-[6.035px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {card.title}
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <Lines lines={card.lines} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
