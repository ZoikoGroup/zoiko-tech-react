import TabletLines from "./TabletLines";

const boxBase =
  "flex items-center justify-center rounded-[10px] border border-[rgba(127,208,217,0.5)] px-[6px] py-[12px] text-center font-inter text-[13.1px] font-semibold leading-[20.99px] text-white";
const boxLight = `${boxBase} bg-[rgba(255,255,255,0.07)]`;
const boxStrong = `${boxBase} bg-[rgba(36,119,128,0.6)]`;
const arrow =
  "hidden w-[29.12px] shrink-0 items-center justify-center font-inter text-[13.1px] font-semibold leading-[20.99px] text-[#7fd0d9] sm:flex";

const steps: { lines: string[]; strong?: boolean }[] = [
  { lines: ["Sector /", "jurisdiction"] },
  { lines: ["Obligation /", "policy source"] },
  { lines: ["Identity /", "authority"] },
  { lines: ["Control /", "workflow"], strong: true },
  { lines: ["Evidence"] },
];

export default function TabletHero() {
  return (
    <section
      className="w-full overflow-hidden px-[5%] pb-[85px] pt-[60px]"
      style={{ backgroundImage: "linear-gradient(135deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto w-full max-w-[960px]">
        <nav
          aria-label="Breadcrumb"
          className="pb-[24.75px] font-inter text-[13.6px] font-normal leading-[21.76px] text-[#7fd0d9]"
        >
          Home / Industries / Regulated Industries
        </nav>

        <span className="inline-flex rounded-full border border-[#7fd0d9] px-[10px] pb-[2.47px] pt-px font-inter text-[12.8px] font-semibold leading-[20.48px] text-[#7fd0d9]">
          Regulated Industries
        </span>

        <h1 className="max-w-[618.72px] pt-[18.06px] font-sora text-[clamp(28px,4.8vw,36.9px)] font-bold leading-[1.149] tracking-[-0.737px] text-white">
          <TabletLines
            lines={[
              "Operate across regulated",
              "environments with clearer",
              "controls, evidence and",
              "accountability.",
            ]}
          />
        </h1>

        <p className="max-w-[776.94px] pt-[22.32px] font-inter text-[17.6px] font-normal leading-[28.16px] text-[#dcecee]">
          <TabletLines
            lines={[
              "Zoiko Tech supports organizations operating under material regulatory, security,",
              "privacy, identity and governance requirements by connecting obligations, controls,",
              "evidence and accountable workflows — while keeping jurisdiction, operator and",
              "claim boundaries explicit.",
            ]}
          />
        </p>

        <div className="flex flex-wrap items-center pt-[18.59px]">
          <a
            href="#"
            className="mb-[12px] mr-[12px] flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-white bg-white px-[24px] text-center font-inter text-[16px] font-semibold text-black sm:w-auto sm:justify-start"
          >
            Explore regulated requirements
          </a>
          <div className="flex w-full flex-wrap items-center sm:contents">
            <a
              href="#"
              className="mb-[12px] mr-[12px] flex min-h-[48px] w-full items-center justify-center rounded-[10px] border-2 border-[#7fd0d9] px-[24px] text-center font-inter text-[16px] font-semibold text-white sm:w-auto sm:justify-start"
            >
              Discuss your regulated operating architecture
            </a>
            <a
              href="#"
              className="mb-[12px] p-[12px] font-inter text-[16px] font-semibold leading-[25.6px] text-[#7fd0d9] underline"
            >
              Explore Trust Center →
            </a>
          </div>
        </div>

        <p className="font-inter text-[12.8px] font-normal leading-[20.48px] text-[#dcecee]">
          Jurisdiction-aware. Evidence-led. Operator-clear. Human-accountable.
        </p>

        <div
          role="img"
          aria-label="Operating-control map from sector and jurisdiction through obligation, identity, control, evidence and review to assurance"
          className="pb-[25px] pt-[35px]"
        >
          <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-5 sm:gap-0">
            {steps.map((s, i) => (
              <div key={i} className="flex">
                <div className={`${s.strong ? boxStrong : boxLight} min-h-[68px] flex-1`}>
                  <span>
                    <TabletLines lines={s.lines} />
                  </span>
                </div>
                <span className={arrow} aria-hidden="true">
                  →
                </span>
              </div>
            ))}
          </div>
          <div className="mt-[8px] flex flex-col gap-[8px] sm:flex-row sm:gap-0">
            <div className={`${boxLight} min-h-[47px] flex-1`}>Review / exception</div>
            <span className={arrow} aria-hidden="true">
              →
            </span>
            <div className={`${boxLight} min-h-[47px] flex-1`}>Assurance / trust route</div>
          </div>
        </div>

        <div className="w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#7fd0d9] bg-[rgba(0,0,0,0.35)] px-[16px] pb-[12px] pt-[11px] font-inter text-[14.7px] leading-[23.55px] text-[#dcecee]">
          <b className="font-bold">A footer discovery route, not a sector list.</b>{" "}
          <TabletLines
            lines={[
              "“Regulated Industries” is a cross-industry hub for",
              "regulated operating context. Zoiko Tech’s Industries remain true economic sectors, and no",
              "separate list of “regulated sectors” is created here.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
