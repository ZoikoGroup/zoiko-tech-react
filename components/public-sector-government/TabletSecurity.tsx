import TabletLines from "./TabletLines";

const cards = [
  { icon: "security-shield", title: "Secure engineering", body: "Corporate and product-specific security evidence." },
  { icon: "security-lock", title: "Least privilege", body: "Explicit role and scope around public-service actions." },
  { icon: "database-alt", title: "Privacy by purpose", body: "Minimum necessary data for an approved service and role." },
  { icon: "network-deployment", title: "Reliability & recovery", body: "Observability, incident communication and supported recovery paths." },
];

export default function TabletSecurity() {
  return (
    <section
      id="security-t"
      className="w-full overflow-hidden pb-[72px] pt-[64px] font-poppins md:pb-[108px] md:pt-[93px] px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(119.39deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-[26px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">10 / SECURITY, PRIVACY &amp; RESILIENCE</p>
          <h2 className="pb-[0.52px] text-[24px] font-bold leading-[28px] tracking-[-1.3px] text-white sm:text-[29px] sm:leading-[33.35px]">
            <TabletLines lines={["Build public trust into", "the operating foundation."]} />
          </h2>
          <p className="max-w-[760px] pt-[4.8px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect secure engineering, privacy-conscious data use, least privilege and reliable operations.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-[10px] sm:grid-cols-2">
          {cards.map((c) => (
            <li key={c.title} className="flex">
              <a href="#" className="flex w-full flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-7">
                <span className="mb-[22px] flex size-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <img src={`/public-sector-government/tablet-icon-${c.icon}.svg`} alt="" className="size-[25px]" />
                </span>
                <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.body}</p>
                <span className="mt-auto flex min-h-[36px] items-center justify-between gap-3 py-2 text-[13px] leading-[20.8px] text-[#9cdee0]">
                  <span className="max-w-[80px] font-bold">Explore pathway</span>
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="border-l-[3px] border-[#8edade] bg-[rgba(255,255,255,0.04)] px-[23px] py-[19px] text-[14px] leading-[22.4px] text-[#c6dfe1]">
          Certifications, government authorization, procurement status and deployment assurances are not established by this prototype.
        </p>
      </div>
    </section>
  );
}
