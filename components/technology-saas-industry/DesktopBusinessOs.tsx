import Image from "next/image";
import type { ReactNode } from "react";

const cards: {
  photo: string;
  title: ReactNode;
  body: ReactNode;
  boundary: ReactNode;
}[] = [
  {
    photo: "neon-circuit-board",
    title: "Workforce · ZoikoTime",
    body: (
      <>
        Workforce assurance, <br className="hidden xl:block" />
        verification and performance <br className="hidden xl:block" />
        intelligence.
      </>
    ),
    boundary: (
      <>
        Boundary: no inferred employee <br className="hidden xl:block" />
        surveillance or generic time billing.
      </>
    ),
  },
  {
    photo: "code-editor-closeup",
    title: "HR · Zoiko HR",
    body: (
      <>
        Global human resources and <br className="hidden xl:block" />
        workforce operations.
      </>
    ),
    boundary: "Boundary: approved HR scope.",
  },
  {
    photo: "circuit-board-chip",
    title: "Payroll · Zoiko Payroll",
    body: (
      <>
        Global payroll operations and <br className="hidden xl:block" />
        workforce payments.
      </>
    ),
    boundary: (
      <>
        Boundary: country, payment and <br className="hidden xl:block" />
        filing scope stays product-specific.
      </>
    ),
  },
  {
    photo: "analytics-dashboard-screen",
    title: "Billing · Zoiko Billing",
    body: (
      <>
        Billing, invoicing, usage and <br className="hidden xl:block" />
        revenue operations.
      </>
    ),
    boundary: (
      <>
        Boundary: no inferred general ledger, <br className="hidden xl:block" />
        ERP or payment-processor scope.
      </>
    ),
  },
  {
    photo: "earth-night-lights",
    title: (
      <>
        Communications · Zoiko <br className="hidden xl:block" />
        Sema
      </>
    ),
    body: (
      <>
        Governed communications for <br className="hidden xl:block" />
        messaging, meetings, calls and <br className="hidden xl:block" />
        intelligent workflows.
      </>
    ),
    boundary: (
      <>
        Boundary: Sema admin controls don’t <br className="hidden xl:block" />
        automatically apply to other <br className="hidden xl:block" />
        products.
      </>
    ),
  },
  {
    photo: "matrix-code-rain",
    title: (
      <>
        Marketing operations · <br className="hidden xl:block" />
        ZoikoVertex
      </>
    ),
    body: (
      <>
        Governed agentic marketing <br className="hidden xl:block" />
        operating system.
      </>
    ),
    boundary: (
      <>
        Boundary: no inferred CRM, CDP or <br className="hidden xl:block" />
        ad-network ownership.
      </>
    ),
  },
];

export default function BusinessOs() {
  return (
    <section className="w-full bg-white px-[130px] py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Business operating systems
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          How a technology company runs itself, at each platform’s approved
          scope.
        </p>
        <div className="flex h-[401px] w-full items-center gap-[18px] overflow-x-auto overflow-y-hidden rounded-[20px] border-x-2 border-[#247780] pt-[1.91px]">
          {cards.map((card) => (
            <article
              key={card.photo}
              className="flex h-[328px] w-[281.5px] shrink-0 flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div
                className="relative h-[140px] w-full shrink-0 overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
                }}
              >
                <Image
                  src={`/technology-saas-industry/desktop-${card.photo}.webp`}
                  fill
                  sizes="282px"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[6px] px-5 pb-5 pt-[10px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.body}
                </p>
                <p className="pt-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#247780]">
                  {card.boundary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
