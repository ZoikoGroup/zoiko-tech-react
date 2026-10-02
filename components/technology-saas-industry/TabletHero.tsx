const flow = [
  { lines: ["Product / service"], accent: false },
  { lines: ["APIs / models /", "events"], accent: false },
  { lines: ["Identity / security /", "data / governance"], accent: true },
  { lines: ["Business operating", "systems"], accent: false },
];

const gates = ["Live", "Finish · public approval gated", "Build · not generally available"];

export default function Hero() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[61.44px] pt-[48px] md:pt-[60.44px]"
      style={{
        backgroundImage: "linear-gradient(135.04deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[960px]">
        <nav
          aria-label="Breadcrumb"
          className="pb-[24.75px] font-inter text-[13.6px] leading-[21.76px] text-[#7fd0d9]"
        >
          Home / Industries / Technology &amp; SaaS
        </nav>

        <span className="inline-flex rounded-full border border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
          Technology &amp; SaaS
        </span>

        <h1 className="pt-[18.06px] font-sora text-[28px] font-bold leading-[1.15] tracking-[-0.737px] text-white sm:text-[36.9px] sm:leading-[42.39px]">
          Build and operate technology <br className="hidden md:block" />
          products on foundations that keep <br className="hidden md:block" />
          scale, identity, governance and <br className="hidden md:block" />
          evidence connected.
        </h1>

        <p className="pt-[22.25px] font-inter text-[16px] leading-[1.6] text-[#dcecee] sm:text-[17.6px] sm:leading-[28.16px]">
          Zoiko Tech supports technology companies across AI, APIs, infrastructure,{" "}
          <br className="hidden md:block" />
          identity, developer tooling and operational platforms, with product maturity,{" "}
          <br className="hidden md:block" />
          integration, security and governance boundaries kept explicit.
        </p>

        <div className="pt-[18.59px]">
          <div className="pb-3">
            <a
              href="#"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-white bg-white px-6 py-2 text-center font-inter text-[16px] font-semibold text-black sm:inline-flex sm:w-auto sm:justify-start sm:py-0 sm:text-left"
            >
              Explore technology-company pathways
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-3">
            <a
              href="/contact-us"
              className="flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#7fd0d9] px-6 py-2 text-center font-inter text-[16px] font-semibold text-white sm:inline-flex sm:w-auto sm:justify-start sm:py-0 sm:text-left"
            >
              Discuss your platform architecture
            </a>
            <a
              href="/technology-saas"
              className="font-inter text-[16px] font-semibold leading-[25.6px] text-[#7fd0d9] underline decoration-solid [text-underline-position:from-font]"
            >
              Explore Technology &amp; SaaS Solutions →
            </a>
          </div>
        </div>

        <p className="font-inter text-[12.8px] leading-[20.48px] text-[#dcecee]">
          Developer-first. Maturity-aware. Governed. Integration-ready.
        </p>

        <div
          role="img"
          aria-label="Technology operating architecture from product and service through APIs, models and events, shared controls and business operating systems to observability and evidence"
          className="pt-[35px]"
        >
          <div className="flex flex-col items-stretch md:flex-row md:items-start">
            {flow.map((item, i) => (
              <div key={item.lines[0]} className="flex flex-col items-center md:contents">
                <span
                  className={`flex min-h-[69px] w-full items-start justify-center rounded-[10px] border border-[#7fd0d9]/50 px-[6px] pt-[11.25px] pb-[12.75px] text-center font-inter text-[13.4px] font-semibold leading-[21.5px] text-white md:w-auto md:flex-1 md:basis-0 ${
                    item.accent ? "bg-[rgba(36,119,128,0.6)]" : "bg-white/[0.07]"
                  }`}
                >
                  <span>
                    {item.lines.map((line, j) => (
                      <span key={line}>
                        {j > 0 && <> <br className="hidden md:block" /></>}
                        {line}
                      </span>
                    ))}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`py-[2px] text-center font-inter text-[13.4px] font-semibold leading-[21.5px] text-[#7fd0d9] max-md:rotate-90 md:pt-[11px] md:leading-[21.5px] ${
                    i === flow.length - 1 ? "md:pl-2" : "md:px-2"
                  }`}
                >
                  →
                </span>
              </div>
            ))}
          </div>
          <div className="mt-[7.5px] flex min-h-[47.5px] items-start justify-center rounded-[10px] border border-[#7fd0d9]/50 bg-white/[0.07] px-[6px] pt-[11px] pb-[12.5px] text-center font-inter text-[13.4px] font-semibold leading-[21.5px] text-white max-md:mt-0">
            Observability / evidence
          </div>
        </div>

        <ul className="flex flex-wrap gap-2 pt-[15px]">
          {gates.map((gate) => (
            <li
              key={gate}
              className="rounded-full border border-dashed border-[#7fd0d9] px-3 pb-[4.47px] pt-[3px] font-inter text-[12.8px] leading-[20.48px] text-[#7fd0d9]"
            >
              {gate}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
