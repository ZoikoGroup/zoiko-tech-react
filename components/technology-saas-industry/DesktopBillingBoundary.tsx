import type { ReactNode } from "react";

const cards: { title: ReactNode; body: ReactNode }[] = [
  {
    title: "Billing / invoicing",
    body: (
      <>
        Zoiko Billing at approved billing, <br className="hidden xl:block" />
        invoicing, usage and revenue- <br className="hidden xl:block" />
        operations scope.
      </>
    ),
  },
  {
    title: "Usage",
    body: (
      <>
        Usage and metering are product- <br className="hidden xl:block" />
        specific. No universal SaaS <br className="hidden xl:block" />
        metering promise.
      </>
    ),
  },
  {
    title: "Pricing / packaging",
    body: (
      <>
        No invented pricing, <br className="hidden xl:block" />
        entitlements, subscriptions, <br className="hidden xl:block" />
        contract or quote-to-cash <br className="hidden xl:block" />
        functionality.
      </>
    ),
  },
  {
    title: "Payments",
    body: (
      <>
        Payment state and operator are <br className="hidden xl:block" />
        kept separate from billing and <br className="hidden xl:block" />
        product-subscription state.
      </>
    ),
  },
  {
    title: (
      <>
        Revenue recognition / <br className="hidden xl:block" />
        accounting
      </>
    ),
    body: (
      <>
        No accounting, general ledger, <br className="hidden xl:block" />
        revenue recognition or audit <br className="hidden xl:block" />
        functionality implied without <br className="hidden xl:block" />
        source support.
      </>
    ),
  },
  {
    title: "Entitlements",
    body: (
      <>
        Routed to Identity &amp; Access or <br className="hidden xl:block" />
        the responsible product system, <br className="hidden xl:block" />
        only where documented.
      </>
    ),
  },
];

export default function BillingBoundary() {
  return (
    <section
      className="w-full px-[130px] py-24"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="max-w-[751.74px] font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Revenue, billing and monetization <br className="hidden xl:block" />
          boundary
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#dcecee]">
          Where Zoiko’s role ends and your product’s commercial systems begin.
        </p>
        <div className="grid grid-cols-4 grid-rows-[minmax(165.28px,auto)_minmax(184.59px,auto)] gap-[18px] pt-[1.91px]">
          {cards.map((card, i) => (
            <article
              key={i}
              className="flex min-w-0 flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {card.title}
              </h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
