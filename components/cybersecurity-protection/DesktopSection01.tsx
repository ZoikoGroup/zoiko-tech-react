// Hero
import Image from "next/image";
import DesktopLines from "./DesktopLines";

const bars = [
  { right: "right-[40.24px]", from: "rgba(52,212,202,0.5)" },
  { right: "right-[86.24px]", from: "rgba(52,212,202,0.38)" },
  { right: "right-[132.24px]", from: "rgba(52,212,202,0.26)" },
  { right: "right-[178.24px]", from: "rgba(52,212,202,0.14)" },
];

export default function DesktopSection01() {
  return (
    <section
      id="s01"
      className="relative w-full overflow-hidden bg-[#001315]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15.44%] top-0 h-full w-[130.87%]">
          <Image
            src="/cybersecurity-protection/desktop-hero-bg.webp"
            alt=""
            fill
            sizes="1920px"
            className="object-fill"
            priority
          />
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,19,21,0.96) 0%, rgba(0,19,21,0.8) 42%, rgba(0,19,21,0.3) 75%, rgba(0,19,21,0.5) 100%)",
        }}
      />
      <div className="absolute inset-[45.01%_0_0_0] bg-gradient-to-b from-[rgba(0,19,21,0)] via-[rgba(0,19,21,0.92)] via-70% to-[#001315]" />
      {bars.map((b) => (
        <div
          key={b.right}
          className={`pointer-events-none absolute top-[-40px] flex h-[300px] w-[181.512px] items-center justify-center ${b.right}`}
        >
          <div className="flex-none -skew-x-28 scale-y-88">
            <div
              className="h-[339.77px] w-[22px]"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${b.from}, rgba(52,212,202,0))`,
              }}
            />
          </div>
        </div>
      ))}

      <div className="relative mx-auto flex w-full max-w-[1440px] px-20">
        <div className="flex w-full max-w-[1280px] items-start gap-12 px-8 pb-14 pt-7 xl:gap-24">
          <div className="flex min-w-0 max-w-[720px] flex-1 flex-col items-start gap-[14px]">
            <h1 className="w-full pt-[8.975px] font-plus-jakarta text-[40px] font-extrabold leading-[1.3] tracking-[-2.04px] text-white xl:text-[55px] xl:leading-[71.4px]">
              <DesktopLines
                lines={[
                  "Protect digital operations",
                  "with security controls that",
                  "stay connected to",
                ]}
              />{" "}
              <br className="hidden xl:block" />
              <span className="text-[#4ddcad]">
                <DesktopLines lines={["identity, evidence and", "resilience."]} />
              </span>
            </h1>
            <p className="max-w-[620px] pt-[10px] font-poppins text-[19px] leading-[30px] text-[#e2e8f0]">
              <DesktopLines
                lines={[
                  "Zoiko Tech connects secure engineering, identity, least privilege,",
                  "threat prevention, security operations, privacy, evidence and",
                  "resilience into a governed protection architecture for enterprise",
                  "systems and platforms.",
                ]}
              />
            </p>
            <div className="flex w-full flex-wrap items-center gap-x-3 gap-y-3 pt-[22px]">
              <a
                href="#s02"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[6px] bg-[#247780] px-6 py-4 font-poppins text-[16px] font-semibold leading-5 text-white"
              >
                Explore security pathways
                <Image
                  src="/cybersecurity-protection/desktop-arrow-white.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
              <a
                href="/contact-us"
                className="inline-flex min-h-[52px] items-center rounded-[6px] border border-white bg-white/[0.06] px-6 py-4 font-poppins text-[16px] font-semibold leading-5 text-white"
              >
                Discuss your security architecture
              </a>
            </div>
          </div>
          <div className="relative mt-10 h-[527px] w-[37.7%] shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src="/cybersecurity-protection/desktop-hero-team-photo.webp"
              alt="Security team reviewing systems at a workstation"
              fill
              sizes="458px"
              className="rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
