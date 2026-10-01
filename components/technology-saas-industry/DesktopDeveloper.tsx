import Image from "next/image";

const cards = [
  {
    icon: "icon-code",
    title: "Build",
    body: "APIs, SDKs, model APIs, webhooks and events, authentication.",
  },
  {
    icon: "icon-book",
    title: "Learn",
    body: "Documentation, API reference, quickstarts, tutorials, architecture guides.",
  },
  {
    icon: "icon-flask-round",
    title: "Test",
    body: "Sandbox, sample apps and reference implementations only when external self-service is live.",
  },
  {
    icon: "icon-plug",
    title: "Ecosystem",
    body: "Integrations, technology partners, partner program, marketplace only when available.",
  },
  {
    icon: "icon-shield-check",
    title: "Readiness",
    body: "Developer Platform is a Build, technology-developer destination when ready.",
  },
  {
    icon: "icon-activity",
    title: "Operate",
    body: "Usage and metering where available, observability, status, changelog, developer support.",
  },
];

export default function Developer() {
  return (
    <section className="w-full bg-white px-[130px] py-24">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20.1px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-[#0a1416]">
          Developer platform and integration
        </h2>
        <p className="font-inter text-[16px] leading-[25.6px] text-[#4d6468]">
          Developer Platform is in Build. A public CTA follows registry
          approval.
        </p>
        <div className="grid grid-cols-3 gap-[18px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[300px] min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-white shadow-[0px_12px_30px_0px_rgba(0,0,0,0.22),0px_3px_8px_0px_rgba(0,0,0,0.12)]"
            >
              <div className="flex h-[160px] w-full shrink-0 items-center justify-center bg-[#d7e9ec]">
                <Image
                  src={`/technology-saas-industry/desktop-${card.icon}.svg`}
                  width={64}
                  height={64}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col gap-[6px] px-5 pb-6 pt-4">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {card.title}
                </h3>
                <p className="font-inter text-[15.2px] leading-[24.32px] text-[#4d6468]">
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
