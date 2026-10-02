import Image from "next/image";
import TabletLines from "./TabletLines";

const cards = [
  {
    icon: "/financial-services/tablet-icon-user.svg",
    title: "Human & service identity",
    text: "Keep people, integrations and machine identity explicit where supported.",
  },
  {
    icon: "/financial-services/tablet-icon-lock.svg",
    title: "Least privilege & separation of duties",
    text: "Define who may prepare, approve, release, review or administer.",
  },
];

const rows = [
  ["Actor", "Sample operations reviewer"],
  ["Role", "Reviewer"],
  ["Scope", "Assigned workflow / test environment"],
  ["Delegated authority", "Review only"],
  ["Release rights", "Not granted"],
  ["Evidence", "Authority decision retained"],
];

export default function TabletIdentity() {
  return (
    <section
      id="identity-t"
      className="w-full overflow-hidden bg-white px-[5%] pb-[70px] pt-[70px] font-poppins md:pb-[94px] md:pt-[93px]"
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-9">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            07 / IDENTITY, ACCESS &amp; DELEGATED AUTHORITY
          </span>
          <h2 className="text-[clamp(24px,4.5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f]">
            Make financial authority explicit.
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#587176]">
            Connect identity, role and approved scope to sensitive financial actions.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {cards.map((c) => (
              <li key={c.title} className="flex">
                <a
                  href="#"
                  className="flex w-full flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
                >
                  <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                  <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                  <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
                  <span className="mt-auto flex min-h-[36px] items-center justify-between gap-2 py-2 text-[13px] leading-[20.8px] text-[#247780]">
                    <span className="font-bold">Explore pathway</span>
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-[12px] border border-[#d3e5e6] bg-white p-[26px] shadow-[0px_18px_25px_rgba(0,30,37,0.06)]">
            <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="text-[18px] font-bold leading-[23.4px] text-[#102d2f]">
                <TabletLines lines={["Authority panel"]} />
              </h3>
              <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[0.8fr_1.2fr] gap-5 py-4 text-[13px] leading-[20.8px] ${
                    i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                  }`}
                >
                  <dt className="text-[#648287]">{k}</dt>
                  <dd className="text-[#102d2f]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
