import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

type Item = {
  title: string;
  text: string[];
  treatment: string;
  boundary: string;
  logo?: "pay" | "tech" | "sema";
  cls: string;
};

const ITEMS: Item[] = [
  { logo: "pay", title: "ZoikoPay / Billing", text: ["Approved adjacent financial and billing scenarios."], treatment: "Requires current confirmation", boundary: "Financial operator and market boundaries remain explicit.", cls: "lg:col-start-1 lg:row-start-1 lg:self-stretch" },
  { logo: "tech", title: "Shared foundations", text: ["Approved identity, regulatory and developer", "architecture."], treatment: "Requires current confirmation", boundary: "Public destinations and methods require documentation.", cls: "lg:col-start-2 lg:row-start-1 lg:self-start" },
  { logo: "sema", title: "Zoiko Local / Sema", text: ["Adjacent communications at approved use-case scope."], treatment: "Requires current confirmation", boundary: "No property-specific capability implied by association.", cls: "lg:col-start-3 lg:row-start-1 lg:h-[356px] lg:self-start" },
  { title: "Zoiko Rooms", text: ["Zoiko Realty Group platform for property and", "accommodation marketplace."], treatment: "Live — Group Attributed", boundary: "Parent / operator attribution is mandatory.", cls: "lg:col-start-1 lg:row-start-2 lg:self-start" },
  { title: "Property & Accommodation", text: ["Property discovery, transactions and compliance-aware experiences."], treatment: "Solution framing", boundary: "Exact marketplace and transaction features require evidence.", cls: "lg:col-start-2 lg:row-start-2 lg:h-[356px] lg:self-start" },
];

function Logo({ kind }: { kind: "pay" | "tech" | "sema" }) {
  if (kind === "pay")
    return (
      <div className="relative h-[44px] w-[130px] overflow-hidden">
        <Image src="/real-estate-property/platforms-zoikopay-logo.webp" alt="ZoikoPay" width={400} height={156} className="absolute left-[-7.6%] top-[-16.63%] h-[130.77%] w-[115.87%] max-w-none" />
      </div>
    );
  if (kind === "tech")
    return (
      <div className="relative h-[52px] w-[130px] overflow-hidden">
        <Image src="/real-estate-property/platforms-zoikotech-logo.webp" alt="ZoikoTech" width={400} height={165} className="absolute left-[-11.14%] top-0 h-full w-[122.26%] max-w-none" />
      </div>
    );
  return (
    <div className="relative h-[23px] w-[150px]">
      <Image src="/real-estate-property/platforms-zoikosema-logo.webp" alt="ZoikoSema" fill sizes="150px" className="object-cover" />
    </div>
  );
}

export default function Platforms() {
  return (
    <section id="platforms" className="w-full bg-white pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Group attribution. Supported roles", "and exact boundaries."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] font-inter text-base leading-[25.6px] text-[#587176]">
            <Lines
              lines={[
                "These descriptors follow the supplied wireframe. Current provider, market and feature scope still require",
                "authoritative records.",
              ]}
            />
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[375.75px_375.75px]">
          {ITEMS.map((it) => (
            <li key={it.title} className={`flex min-w-0 ${it.cls}`}>
              <article className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-6 lg:p-7">
                {it.logo && (
                  <div className="pb-[22px]">
                    <Logo kind={it.logo} />
                  </div>
                )}
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{it.title}</h3>
                <p className="pb-[22px] font-inter text-[15px] leading-6 text-[#587176]">
                  <Lines lines={it.text} />
                </p>
                <dl className="flex flex-col border-t border-[rgba(114,157,164,0.25)] pb-3 pt-[15px] font-inter text-xs leading-[19.2px]">
                  <dt className="text-[#4c7379]">Wireframe treatment</dt>
                  <dd className="text-[#102d2f]">{it.treatment}</dd>
                  <dt className="pt-3 text-[#4c7379]">Publication boundary</dt>
                  <dd className="text-[#102d2f]">{it.boundary}</dd>
                </dl>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
