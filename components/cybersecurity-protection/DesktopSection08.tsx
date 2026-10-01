// Responsible disclosure banner
import Image from "next/image";
import DesktopLines from "./DesktopLines";

export default function DesktopSection08() {
  return (
    <section id="s08" className="relative hidden w-full overflow-hidden bg-[#001315] px-[80px] lg:flex lg:flex-col">
      <Image
        src="/cybersecurity-protection/desktop-disclosure-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[rgba(0,19,21,0.95)] via-[rgba(0,19,21,0.82)] via-[55%] to-[rgba(0,19,21,0.45)]" />
      <div className="relative mx-auto flex w-full max-w-[1280px] flex-wrap items-center gap-x-[126px] gap-y-[24px] px-[32px] py-[72px]">
        <div className="flex min-w-0 max-w-[680px] flex-1 flex-col gap-[12px]">
          <p className="font-poppins text-[11px] font-semibold uppercase leading-[16px] tracking-[1.76px] text-white">
            Responsible disclosure
          </p>
          <h2 className="font-plus-jakarta text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-white">
            Found a vulnerability? Tell us safely.
          </h2>
          <p className="font-poppins pt-[2px] text-[17px] leading-[27px] text-[#e2e8f0]">
            <DesktopLines
              lines={[
                "A dedicated route for good-faith security reporting, separate from customer",
                "support and incident status. Please don’t send secrets, unnecessary personal",
                "data or production datasets.",
              ]}
            />
          </p>
        </div>
        <div className="flex w-[409px] shrink-0 flex-col gap-[10px] rounded-[16px] border border-solid border-[rgba(52,212,202,0.45)] bg-[rgba(0,25,30,0.72)] p-[25px] shadow-[0px_18px_40px_0px_rgba(0,0,0,0.35)] backdrop-blur-[5px]">
          <a
            href="#"
            className="font-poppins flex min-h-[52px] w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#247780] px-[20px] py-[15.5px] text-[15px] font-semibold leading-[20px] text-white"
          >
            Report a security vulnerability
            <Image src="/cybersecurity-protection/desktop-arrow-white.svg" alt="" width={16} height={16} />
          </a>
          <a
            href="#"
            className="font-poppins flex min-h-[44px] w-full items-center py-[12px] text-[14px] font-medium leading-[20px] text-[#e2e8f0] underline"
          >
            Read the disclosure policy
          </a>
          <p className="font-poppins text-[12px] leading-[18px] text-[#cbd5e1]">
            <DesktopLines lines={["Need help with your account? Use Help Center. Checking an", "outage? Use System Status."]} />
          </p>
        </div>
      </div>
    </section>
  );
}
