import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  {
    icon: "/financial-services/desktop-icon-user.svg",
    title: ["Human & service", "identity"],
    body: ["Keep people, integrations and", "machine identity explicit where", "supported."],
  },
  {
    icon: "/financial-services/desktop-icon-lock.svg",
    title: ["Least privilege &", "separation of duties"],
    body: ["Define who may prepare,", "approve, release, review or", "administer."],
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

export default function DesktopIdentity() {
  return (
    <section id="identity" className="w-full bg-white pb-[94px] pt-[93px] font-poppins">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-[36px] px-10 xl:px-0">
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <span className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#247780]">
            07 / IDENTITY, ACCESS &amp; DELEGATED AUTHORITY
          </span>
          <h2 className="pb-[0.59px] text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-[#102d2f]">
            Make financial authority explicit.
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#587176]">
            Connect identity, role and approved scope to sensitive financial actions.
          </p>
        </div>

        <div className="flex items-center justify-center gap-[44px]">
          <div className="flex min-w-0 flex-1 items-start justify-center gap-[20px]">
            {cards.map((c) => (
              <a
                key={c.icon}
                href="#"
                className="flex min-w-0 flex-1 flex-col rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-[28px]"
              >
                <div className="flex h-[68px] w-[46px] flex-col pb-[22px]">
                  <span className="flex size-[46px] items-center justify-center rounded-[10px] bg-[#deefef]">
                    <Image src={c.icon} alt="" width={25} height={25} />
                  </span>
                </div>
                <h3 className="pb-[12px] text-[20px] font-bold leading-[26px] text-[#102d2f]">
                  <DesktopLines lines={c.title} />
                </h3>
                <p className="pb-[22px] text-[15px] leading-[24px] text-[#587176]">
                  <DesktopLines lines={c.body} />
                </p>
                <span className="relative block h-[36.8px] min-h-[36px] w-full">
                  <span className="absolute left-0 top-[17px] w-[104.156px] -translate-y-1/2 text-[13px] font-bold leading-[20.8px] text-[#247780]">
                    Explore pathway
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col rounded-[12px] border border-[#a1dade] bg-white p-[26px] shadow-[0px_18px_25px_rgba(0,30,37,0.06)]">
            <div className="flex items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
              <h3 className="w-[133px] shrink-0 text-[18px] font-bold leading-[23.4px] text-[#102d2f]">
                Authority panel
              </h3>
              <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#247780]">
                Synthetic specimen
              </span>
            </div>
            <dl>
              {rows.map(([k, v], i) => (
                <div
                  key={k}
                  className={`grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-[20px] py-[16px] text-[13px] leading-[20.8px] ${
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
