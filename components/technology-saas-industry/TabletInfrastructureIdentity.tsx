const BR = <br className="hidden md:block" />;

const cards: { title: string; body: React.ReactNode }[] = [
  {
    title: "Cloud / digital infrastructure",
    body: (
      <>
        Corporate architecture and Zoiko Cloud {BR}only at approved scope. Zoiko Cloud is {BR}Finish, in the directory only when public-{BR}approved.
      </>
    ),
  },
  {
    title: "CoreX",
    body: (
      <>
        Shared control, evidence and {BR}transaction architecture, only if {BR}customer-facing and public-approved. {BR}Current state: Build.
      </>
    ),
  },
  {
    title: "Identity",
    body: (
      <>
        Person, workforce, customer, partner {BR}and service identities at approved {BR}scope.
      </>
    ),
  },
  {
    title: "Authorization",
    body: (
      <>
        Roles, entitlements and delegated {BR}authority stay explicit. Product-specific {BR}protocols are evidence-gated.
      </>
    ),
  },
  {
    title: "Service identity",
    body: (
      <>
        Machine-to-machine identity and {BR}credentials only where the product {BR}supports them.
      </>
    ),
  },
  {
    title: "Security",
    body: (
      <>
        Least privilege, secure engineering, {BR}threat prevention, resilience and {BR}responsible-disclosure routes.
      </>
    ),
  },
];

export default function InfrastructureIdentity() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[85.44px] pt-[60.44px]"
      style={{
        backgroundImage:
          "linear-gradient(135.01504305365307deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[22px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[29.44px] text-white">
          Infrastructure, identity and access
        </h2>

        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {c.title}
              </h3>
              <p className="font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                {c.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#7fd0d9] bg-[rgba(0,0,0,0.35)] px-4 pb-3 pt-[13px]">
          <p className="font-inter text-[14.7px] leading-[23.55px] text-[#dcecee]">
            <strong className="font-bold">Readiness gate.</strong> Zoiko Cloud is not a generic public-cloud claim just because it is {BR}architecturally relevant. Developer Platform and CoreX are Build. Public exposure needs {BR}approved pages, product-state wording, operator attribution and customer-facing scope.
          </p>
        </div>
      </div>
    </section>
  );
}
