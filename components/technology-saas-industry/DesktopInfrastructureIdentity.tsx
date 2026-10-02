import Image from "next/image";

const items = [
  {
    icon: "icon-cloud",
    title: (
      <>
        Cloud / digital <br className="hidden xl:block" />
        infrastructure
      </>
    ),
    body: "Corporate architecture and Zoiko Cloud only at approved scope. Zoiko Cloud is Finish, in the directory only when public-approved.",
  },
  {
    icon: "icon-share",
    title: "CoreX",
    body: "Shared control, evidence and transaction architecture, only if customer-facing and public-approved. Current state: Build.",
  },
  {
    icon: "icon-user-check",
    title: "Identity",
    body: "Person, workforce, customer, partner and service identities at approved scope.",
  },
  {
    icon: "icon-key",
    title: "Authorization",
    body: "Roles, entitlements and delegated authority stay explicit. Product-specific protocols are evidence-gated.",
  },
  {
    icon: "icon-cpu",
    title: "Service identity",
    body: "Machine-to-machine identity and credentials only where the product supports them.",
  },
  {
    icon: "icon-shield",
    title: "Security",
    body: "Least privilege, secure engineering, threat prevention, resilience and responsible-disclosure routes.",
  },
];

export default function InfrastructureIdentity() {
  return (
    <section
      className="w-full px-[130px] pb-[120px] pt-24"
      style={{
        backgroundImage:
          "linear-gradient(138.96deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[43px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Infrastructure, identity and access
        </h2>
        <ul className="grid grid-cols-3 gap-x-[33px] gap-y-[18px]">
          {items.map((item) => (
            <li
              key={item.icon}
              className="flex min-h-[194px] min-w-0 flex-col gap-2 overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-[72px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)]">
                  <Image
                    src={`/technology-saas-industry/desktop-${item.icon}.svg`}
                    width={40}
                    height={40}
                    alt=""
                  />
                </div>
                <h3 className="min-w-0 flex-1 font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                  {item.title}
                </h3>
              </div>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
