import TabletLines from "./TabletLines";

const cards = [
  { icon: "/public-sector-government/tablet-icon-user.svg", title: ["People &", "workforce"], text: "Identity, organization and assignment at supported scope." },
  { icon: "/public-sector-government/tablet-icon-lock.svg", title: ["Representative", "authority"], text: "Explicit scope, effective period and revocation where supported." },
  { icon: "/public-sector-government/tablet-icon-building.svg", title: ["Vendor", "boundaries"], text: "External organization and contract scope remain clear." },
  { icon: "/public-sector-government/tablet-icon-code.svg", title: ["Service", "identities"], text: "Machine-to-machine identity where supported." },
];

const rows = [
  ["Actor", "Sample service representative"],
  ["Role", "Authorized reviewer — specimen"],
  ["Representative scope", "Assigned request only"],
  ["Authority state", "Needs confirmation"],
  ["Effective / expiry", "Not established"],
  ["Audit history", "Review event retained"],
];

export default function TabletIdentity() {
  return (
    <section id="identity-t" className="w-full overflow-hidden bg-white pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            05 / IDENTITY &amp; DELEGATED AUTHORITY
          </span>
          <h2 className="text-[clamp(24px,5vw,29px)] font-bold leading-[33.35px] tracking-[-1.3px] text-[#102d2f]">
            Make the right to act explicit.
          </h2>
          <p className="max-w-[760px] pt-[4.3px] text-[16px] leading-[25.6px] text-[#587176]">
            <TabletLines
              lines={[
                "A person, official, representative or integration should carry only the authority supported by the",
                "service and product.",
              ]}
            />
          </p>
        </div>

        <div className="flex flex-col gap-[20px] pt-[10px]">
          <ul className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
            {cards.map((c) => (
              <li key={c.title.join(" ")} className="flex">
                <a
                  href="#"
                  className="flex w-full flex-col items-start rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
                >
                  <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.icon} alt="" width={25} height={25} className="size-[25px]" />
                  </span>
                  <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
                    <TabletLines lines={c.title} />
                  </h3>
                  <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
                  <span className="mt-auto flex min-h-[36px] w-full items-center justify-between text-[13px] leading-[20.8px] text-[#247780]">
                    <span className="font-bold">Explore pathway</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] shadow-[0px_18px_25px_0px_rgba(0,30,37,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-x-[12px] gap-y-[10px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">
                <TabletLines lines={["Identity /", "delegation panel"]} />
              </h3>
              <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-1 gap-x-[20px] gap-y-[4px] py-[16px] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="text-[13px] leading-[20.8px] text-[#648287]">{k}</dt>
                  <dd className="text-[13px] leading-[20.8px] text-[#102d2f]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="border-l-[3px] border-[#247780] bg-[#eaf5f5] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#48666a]">
          <TabletLines
            lines={[
              "Zoiko iD and Zoiko Access are listed as Build in the supplied wireframe. Specific authentication and identity-",
              "proofing capabilities require dedicated evidence.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
