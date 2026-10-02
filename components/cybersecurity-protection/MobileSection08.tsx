// Responsible disclosure (vulnerability reporting)
import Image from "next/image";
import MobileLines from "./MobileLines";

export default function MobileSection08() {
  return (
    <section id="s08-m" className="relative w-full overflow-hidden bg-[#001315] font-poppins">
      <Image
        src="/cybersecurity-protection/mobile-disclosure-gate-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,19,21,0.95)] via-[rgba(0,19,21,0.82)] via-[55%] to-[rgba(0,19,21,0.45)]" />
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col gap-[32px] px-[32px] py-[72px]">
        <div className="flex w-full max-w-[680px] flex-col gap-[11.3px]">
          <p className="text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
            Responsible disclosure
          </p>
          <h2 className="font-plus-jakarta text-[28px] font-bold leading-[33.6px] tracking-[-0.56px] text-white">
            <MobileLines lines={["Found a vulnerability? Tell", "us safely."]} />
          </h2>
          <p className="pt-[2.69px] text-[17px] leading-[27px] text-[#e2e8f0]">
            <MobileLines
              lines={[
                "A dedicated route for good-faith",
                "security reporting, separate from",
                "customer support and incident status.",
                "Please don’t send secrets, unnecessary",
                "personal data or production datasets.",
              ]}
            />
          </p>
        </div>
        <div className="flex w-[343px] max-w-full flex-col gap-[10px] rounded-[16px] border border-[rgba(52,212,202,0.45)] bg-[rgba(0,25,30,0.72)] p-[25px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.35)] backdrop-blur-[5px]">
          <a
            href="#"
            className="flex min-h-[52px] w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[15px] text-center text-[15px] font-semibold leading-[20px] text-white"
          >
            Report a security vulnerability
            <Image src="/cybersecurity-protection/mobile-icon-arrow-right-white.svg" alt="" width={16} height={16} className="shrink-0" />
          </a>
          <a
            href="#"
            className="flex min-h-[44px] w-full items-center py-[12px] text-[14px] font-medium leading-[20px] text-[#e2e8f0] underline decoration-solid"
          >
            Read the disclosure policy
          </a>
          <p className="text-[12px] leading-[18px] text-[#cbd5e1]">
            <MobileLines
              lines={[
                "Need help with your account? Use Help Center.",
                "Checking an outage? Use System Status.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}
