import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

type Card = {
  title: string;
  text: string;
  maturity: string;
  boundary: string;
  place: string;
  logo?: "vertex" | "pay" | "billing";
  extra?: string;
};

const cards: Card[] = [
  {
    title: "ZoikoVertex",
    text: "Governed agentic marketing operating system.",
    maturity: "Requires current confirmation",
    boundary: "Governed marketing operations; no implied CRM, CDP or ad-network scope.",
    place: "lg:col-start-1 lg:row-start-1",
    logo: "vertex",
  },
  {
    title: "Zoiko Local",
    text: "Local numbers, calling, video, routing and AI-powered customer communications.",
    maturity: "Requires current confirmation",
    boundary: "Approved communications and market scope; no listings or POS implication.",
    place: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "ZoikoPay",
    text: "Payments and embedded financial infrastructure.",
    maturity: "Requires current confirmation",
    boundary: "Zoiko Financial Group attribution where relevant; operator and market claims require evidence.",
    place: "lg:col-start-3 lg:row-start-1",
    logo: "pay",
  },
  {
    title: "Zoiko Billing",
    text: "Billing, invoicing, usage and revenue operations.",
    maturity: "Requires current confirmation",
    boundary: "Approved recurring revenue scope; no universal order, inventory or accounting claim.",
    place: "lg:col-start-2 lg:row-start-1 lg:h-[402px]",
    logo: "billing",
  },
  {
    title: "Customer & Local Commerce",
    text: "Customer communications, marketing, commerce and digital experiences.",
    maturity: "Requires current confirmation",
    boundary: "Broad solution framing; deeper product roles remain evidence-gated.",
    place: "lg:col-start-2 lg:row-start-2",
  },
];

function Logo({ kind }: { kind: NonNullable<Card["logo"]> }) {
  if (kind === "vertex") {
    return (
      <div className="flex h-[59px] w-full flex-col justify-center pb-4">
        <div className="relative h-[23.4px] w-[167px]">
          <Image
            src="/retail-commerce/desktop-platforms-logo-zoikovertex.webp"
            alt="ZoikoVertex"
            fill
            sizes="167px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }
  if (kind === "pay") {
    return (
      <div className="relative h-[72px] w-[165px]">
        <Image
          src="/retail-commerce/desktop-platforms-logo-zoikopay.webp"
          alt="ZoikoPay"
          fill
          sizes="165px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div className="pb-4">
      <div className="relative h-[48.18px] w-[122px] overflow-hidden">
        <Image
          src="/retail-commerce/desktop-platforms-logo-zoikobilling.webp"
          alt="Zoiko Billing"
          width={600}
          height={600}
          sizes="188px"
          className="absolute left-[-29.13%] top-[-141.82%] h-[389.71%] w-[153.89%] max-w-none"
        />
      </div>
    </div>
  );
}

export default function Platforms() {
  return (
    <section id="platforms" className="w-full bg-white py-14 font-poppins md:pb-[94px] md:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-7 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780] lg:hidden">
            11 / PLATFORM EVIDENCE
          </p>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.8px] text-[#102d2f] md:text-[29px] md:leading-[33.35px] md:tracking-[-1.3px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Specialist roles.", "Evidence before capability claims."]}
              tablet={["Specialist roles.", "Evidence before capability claims."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#587176]">
            <Lines
              desktop={[
                "The supplied wireframe identifies these descriptors. Current maturity, operator and availability must be",
                "confirmed.",
              ]}
              tablet={[
                "The supplied wireframe identifies these descriptors. Current maturity, operator and availability must",
                "be confirmed.",
              ]}
            />
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[431.73px_431.73px] lg:items-start">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-6 md:p-7 ${c.place}`}
            >
              <span className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#deefef] lg:hidden">
                <Image src="/retail-commerce/tablet-platforms-icon-database.svg" alt="" width={25} height={25} />
              </span>
              {c.logo && (
                <div className="hidden lg:block">
                  <Logo kind={c.logo} />
                </div>
              )}
              <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
              <p className={`pb-[22px] text-[15px] leading-6 text-[#587176] ${c.logo ? "lg:pb-[46.5px]" : ""}`}>
                {c.text}
              </p>
              <dl className="mb-3 border-t border-[rgba(114,157,164,0.25)] pb-3 pt-[15px]">
                <dt className="text-[12px] leading-[19.2px] text-[#4c7379]">Maturity / availability</dt>
                <dd className="text-[12px] leading-[19.2px] text-[#102d2f]">{c.maturity}</dd>
                <dt className="pt-3 text-[12px] leading-[19.2px] text-[#4c7379]">Role / operator boundary</dt>
                <dd className="text-[12px] leading-[19.2px] text-[#102d2f]">{c.boundary}</dd>
              </dl>
              <a
                href="#"
                className="flex min-h-9 items-start py-2 text-[13px] font-bold leading-[20.8px] text-[#247780] lg:hidden"
              >
                Request platform evidence ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
