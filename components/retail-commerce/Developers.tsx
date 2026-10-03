import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const TABLET_BR = "hidden md:block lg:hidden";

const CARDS = [
  {
    title: "Build",
    icon: "/retail-commerce/desktop-adjacent-icon-code.svg",
    href: "/developer-portal",
    body: <>Approved APIs, SDKs, webhooks, events<br className={TABLET_BR} /> and authentication.</>,
  },
  {
    title: "Learn",
    icon: "/retail-commerce/tablet-icon-document.svg",
    href: "/developer-portal",
    body: <>Documentation, API references and<br className={TABLET_BR} /> architecture guides.</>,
  },
  {
    title: "Test",
    icon: "/retail-commerce/desktop-adjacent-icon-shield.svg",
    href: "/sandbox-access",
    body: (
      <Lines
        desktop={["External sandbox and sample", "apps only when access is live."]}
        tablet={["External sandbox and sample apps only", "when access is live."]}
      />
    ),
  },
  {
    title: "Operate",
    icon: "/retail-commerce/desktop-contact-icon-network.svg",
    href: "/status-dashboard",
    body: <>Supported usage, observability, status and<br className={TABLET_BR} /> developer assistance.</>,
  },
];

const SPECIMEN = [
  ["Source → target", "Sample customer workflow → external commerce system"],
  ["Transfer state", "Awaiting authoritative response"],
  ["Last success", "Specimen timestamp only"],
  ["Failure / retry owner", "Assigned integration reviewer"],
  ["Payload", "No customer or payment data displayed"],
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 font-poppins md:pb-[108px] md:pt-[93px] lg:bg-[linear-gradient(122.3deg,#000_0%,#0a2528_48%,#247780_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-9 lg:gap-[25px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15.2px] lg:gap-[14.8px]">
          <span className="text-xs font-bold uppercase leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            12 / INTEGRATION &amp; DEVELOPER LAYER
          </span>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[29px] md:leading-[33.35px] lg:text-[36px] lg:leading-[1.15] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Connect the right system.", "Observe the authoritative response."]}
              tablet={["Connect the right system.", "Observe the authoritative response."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-base leading-[25.6px] text-[#c4d7d9]">
            Document interface scope, identity, ownership and handoff health for each integration.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:pt-9">
          {CARDS.map((c) => (
            <li key={c.title} className="flex">
              <a
                href={c.href}
                className="flex w-full flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7 lg:items-center lg:text-center"
              >
                <span className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                    <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                  </span>
                </span>
                <h3 className="pb-3 text-xl font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9] lg:pb-0">{c.body}</p>
                <span className="mt-auto flex min-h-[36px] w-full items-center justify-between pt-2 text-[13px] leading-[20.8px] text-[#9cdee0] lg:hidden">
                  <b className="font-bold">Explore pathway</b>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] px-[26px] pb-[26px] pt-[26px] shadow-[0_18px_50px_0_rgba(0,30,37,0.06)] md:pb-[52px] lg:hidden">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-lg font-bold leading-[23.4px] text-white">Integration health</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {SPECIMEN.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-1 gap-1 py-4 text-[13px] leading-[20.8px] md:grid-cols-[0.8fr_1.2fr] md:gap-5 ${
                  i < SPECIMEN.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="text-[#9bc2c6]">{k}</dt>
                <dd className="text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="border-l-[3px] border-[#8edade] bg-white/[0.04] px-[23px] py-[19px] text-sm leading-[22.4px] text-[#c6dfe1] lg:hidden">
          Named commerce, payment, POS, marketplace and advertising integrations require current documentation.
          <br className="hidden md:block" /> No vendor support is inferred.
        </p>

        <div className="relative hidden h-[360px] overflow-hidden rounded-[10px] lg:block">
          <Image
            src="/retail-commerce/desktop-developers-team-photo.webp"
            alt=""
            fill
            sizes="(min-width:1280px) 1180px, 100vw"
            className="object-cover object-[50%_33%]"
          />
        </div>
      </div>
    </section>
  );
}
