const problems = [
  {
    title: (
      <>
        Product stack and business <br className="hidden md:block" />
        operations evolve in silos
      </>
    ),
    body: (
      <>
        Engineering, identity, billing, workforce <br className="hidden md:block" />
        and communications fragment as the <br className="hidden md:block" />
        company scales.
      </>
    ),
    meta: (
      <>
        Modernization &amp; Integration · Business <br className="hidden md:block" />
        Operations · Developer Platform
      </>
    ),
  },
  {
    title: "AI capability outruns governance",
    body: (
      <>
        Models and agents move faster than <br className="hidden md:block" />
        approval, evidence, access and human-
        <br className="hidden md:block" />
        accountability controls.
      </>
    ),
    meta: (
      <>
        AI &amp; Agentic Automation · AI Governance &amp; <br className="hidden md:block" />
        Assurance · Responsible AI
      </>
    ),
  },
  {
    title: (
      <>
        Developer ecosystems lack a <br className="hidden md:block" />
        common operating layer
      </>
    ),
    body: (
      <>
        APIs, SDKs, authentication, events, <br className="hidden md:block" />
        observability and support become <br className="hidden md:block" />
        inconsistent.
      </>
    ),
    meta: (
      <>
        Cloud &amp; Developer Infrastructure · Developer <br className="hidden md:block" />
        Platform
      </>
    ),
  },
  {
    title: (
      <>
        Identity, security and reliability <br className="hidden md:block" />
        become enterprise blockers
      </>
    ),
    body: (
      <>
        Enterprise buyers require deterministic <br className="hidden md:block" />
        access, evidence, status and resilience.
      </>
    ),
    meta: (
      <>
        Identity &amp; Access · Cybersecurity &amp; Resilience <br className="hidden md:block" />
        · Trust Center · Status
      </>
    ),
  },
];

export default function Problems() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.43px] pt-[48px] md:pt-[60.65px]"
      style={{
        backgroundImage: "linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[22.01px]">
        <h2 className="font-sora text-[22px] font-bold leading-[1.15] text-white sm:text-[25.6px] sm:leading-[29.44px]">
          Priority problems for technology <br className="hidden md:block" />
          companies
        </h2>
        <ul className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {problems.map((item, i) => (
            <li
              key={i}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-white/[0.06] p-5"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{item.title}</h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">{item.body}</p>
              <small className="block pt-1 font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9]">
                {item.meta}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
