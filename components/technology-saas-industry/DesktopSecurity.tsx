const cards = [
  {
    title: "Security",
    text: (
      <>
        Secure engineering, identity, <br className="hidden xl:block" />
        least privilege, resilience and <br className="hidden xl:block" />
        responsible disclosure at <br className="hidden xl:block" />
        approved scope.
      </>
    ),
  },
  {
    title: "Privacy",
    text: (
      <>
        Purpose limitation, data <br className="hidden xl:block" />
        minimization and privacy- <br className="hidden xl:block" />
        conscious architecture.
      </>
    ),
  },
  {
    title: "Compliance",
    text: (
      <>
        Evidence and regulatory routes. <br className="hidden xl:block" />
        “Compliant” only when legally <br className="hidden xl:block" />
        verified.
      </>
    ),
  },
  {
    title: "AI governance",
    text: (
      <>
        Human oversight, evaluation and <br className="hidden xl:block" />
        accountable deployment.
      </>
    ),
  },
  {
    title: "Accessibility",
    text: (
      <>
        WCAG 2.2 AA minimum for the <br className="hidden xl:block" />
        public experience.
      </>
    ),
  },
  {
    title: "Claims hierarchy",
    text: (
      <>
        From strongest to weakest, each <br className="hidden xl:block" />
        clearly distinct.
      </>
    ),
  },
];

export default function Security() {
  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(143deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Security, privacy and Responsible AI
        </h2>
        <ul className="grid grid-cols-4 gap-[18px] pt-[2px]">
          {cards.map((c, i) => (
            <li
              key={c.title}
              className={`flex min-w-0 flex-col gap-[5.9px] overflow-hidden rounded-[14px] border border-solid border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-5 ${
                i < 4 ? "min-h-[165px]" : "min-h-[163px]"
              }`}
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
