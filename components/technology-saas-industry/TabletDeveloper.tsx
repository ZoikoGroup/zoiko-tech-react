import Image from "next/image";

const BR = <br className="hidden md:block" />;

const cards: { title: string; body: React.ReactNode; img: string; alt: string }[] = [
  {
    title: "Build",
    body: <>APIs, SDKs, model APIs, webhooks and {BR}events, authentication.</>,
    img: "/technology-saas-industry/tablet-code-editor-screen.webp",
    alt: "Source code on a monitor",
  },
  {
    title: "Learn",
    body: <>Documentation, API reference, {BR}quickstarts, tutorials, architecture {BR}guides.</>,
    img: "/technology-saas-industry/tablet-circuit-board-chip.webp",
    alt: "Processor chip on a circuit board",
  },
  {
    title: "Test",
    body: <>Sandbox, sample apps and reference {BR}implementations only when external {BR}self-service is live.</>,
    img: "/technology-saas-industry/tablet-analytics-dashboard-screen.webp",
    alt: "Analytics dashboard on a screen",
  },
  {
    title: "Operate",
    body: <>Usage and metering where available, {BR}observability, status, changelog, {BR}developer support.</>,
    img: "/technology-saas-industry/tablet-earth-night-lights.webp",
    alt: "Earth at night with city lights",
  },
  {
    title: "Ecosystem",
    body: <>Integrations, technology partners, {BR}partner program, marketplace only when {BR}available.</>,
    img: "/technology-saas-industry/tablet-matrix-code-rain.webp",
    alt: "Green digital code rain",
  },
  {
    title: "Readiness",
    body: <>Developer Platform is a Build, {BR}technology-developer destination when {BR}ready.</>,
    img: "/technology-saas-industry/tablet-laptop-analytics-dashboard.webp",
    alt: "Laptop showing analytics charts",
  },
];

const actions = ["View docs", "Rotate credential", "Configure webhook", "Contact support"];

const rowCls =
  "flex flex-col gap-1 border-t border-[rgba(127,208,217,0.25)] pb-[11px] pt-[10px] sm:flex-row sm:gap-[14px]";
const labelCls =
  "font-sora text-[14.4px] font-semibold leading-[23px] text-[#7fd0d9] sm:w-[190px] sm:shrink-0";
const valueCls = "min-w-0 flex-1 font-inter text-[14.4px] leading-[23px] text-[#dcecee]";

export default function Developer() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[61.44px] pt-[60.44px]">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[14.4px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[29.44px] text-[#0a1416]">
          Developer platform and integration
        </h2>
        <p className="font-inter text-base font-normal leading-[25.6px] text-[#4d6468]">
          Developer Platform is in Build. A public CTA follows registry approval.
        </p>

        <ul className="grid grid-cols-1 gap-[18px] pt-[7.61px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
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
              <div className="flex flex-col gap-[6px] px-5 pb-5 pt-[10px]">
                <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-[#0a1416]">
                  {c.title}
                </h3>
                <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#4d6468]">
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="rounded-[16px] px-[22px] pb-[22px] pt-[41.59px] drop-shadow-[0px_16px_20px_rgba(0,0,0,0.28)]"
          style={{
            backgroundImage:
              "linear-gradient(134.18745089286878deg, rgb(0, 0, 0) 0%, rgb(13, 47, 51) 100%)",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-[10px] gap-y-2 pb-[16.73px]">
            <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
              Developer console
            </h3>
            <span className="rounded-full border border-[#7fd0d9] px-[10px] py-[2px] font-sora text-[12.8px] font-semibold leading-[14.72px] text-[#7fd0d9]">
              Specimen · synthetic data
            </span>
          </div>

          <div>
            <div className={rowCls}>
              <b className={labelCls}>Project</b>
              <span className={valueCls}>
                Sample project · Staging · Owner: Platform team · Status: Active · {BR}Data class: Internal
              </span>
            </div>
            <div className={rowCls}>
              <b className={labelCls}>Credentials</b>
              <span className={valueCls}>
                <code className="inline-block rounded-[6px] bg-[rgba(255,255,255,0.1)] px-2 font-inter text-[13.6px] leading-[21px]">
                  sk_••••••••••••
                </code>{" "}
                masked · no real secrets
              </span>
            </div>
            <div className={rowCls}>
              <b className={labelCls}>API / event health</b>
              <span className={valueCls}>
                Endpoint family: orders · Last event: specimen time · Status: {BR}Healthy
              </span>
            </div>
            <div className={rowCls}>
              <b className={labelCls}>Usage / limits</b>
              <span className={valueCls}>Shown only if the product supports metering or quota</span>
            </div>
            <div className={rowCls}>
              <b className={labelCls}>Observability</b>
              <span className={valueCls}>
                Latency, error and availability evidence only from approved {BR}sources
              </span>
            </div>
            <div className={rowCls}>
              <b className={labelCls}>Actions</b>
              <div className="flex min-w-0 flex-1 flex-wrap gap-x-3 gap-y-2 pt-[6px]">
                {actions.map((a) => (
                  <a
                    key={a}
                    href="#"
                    className="rounded-[8px] border border-[#7fd0d9] px-[14px] py-[6px] font-inter text-[13.1px] leading-[20.99px] text-[#7fd0d9]"
                  >
                    {a}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-[7.6px] sm:flex-row sm:flex-wrap">
          <a
            href="/developer-portal"
            className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#247780] bg-[#247780] px-6 text-center font-inter text-base font-semibold text-white"
          >
            Developer Resources
          </a>
          <a
            href="#"
            className="flex min-h-[48px] items-center justify-center rounded-[10px] border-2 border-[#247780] px-6 text-center font-inter text-base font-semibold text-[#247780]"
          >
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}
