import Image from "next/image";
import DesktopLines from "./DesktopLines";

const photos = [
  {
    photo: "/financial-services/desktop-operations-photo-documents.webp",
    alt: "Business professionals reviewing financial documents",
    icon: "/financial-services/desktop-icon-file-text.svg",
    title: "Billing & revenue",
    body: ["Billing, invoicing, usage and revenue operations", "within approved Zoiko Billing scope."],
  },
  {
    photo: "/financial-services/desktop-operations-photo-laptop.webp",
    alt: "Team reviewing work together on a laptop",
    icon: "/financial-services/desktop-operations-icon-user.svg",
    title: "Payroll & workforce payments",
    body: ["Payroll operations and workforce payments within", "approved country and product scope."],
  },
  {
    photo: "/financial-services/desktop-operations-photo-team.webp",
    alt: "Financial team discussing a workflow",
    icon: "/financial-services/desktop-icon-network.svg",
    title: "Recurring finance operations",
    body: ["Required inputs, exception owners and", "authorized release across recurring processes."],
  },
];

const steps = ["Prepare", "Validate", "Review / approve", "Execute / release", "Verify", "Close / evidence"];

const rows = [
  ["Cycle / owner", "Sample monthly workflow / Finance operations"],
  ["Readiness", "Missing input — assigned for review"],
  ["Release", "Awaiting authorized approval"],
  ["Verification", "Authoritative result not received"],
];

export default function DesktopOperations() {
  return (
    <section
      id="operations"
      className="flex w-full flex-col items-center justify-center px-10 pb-[94px] pt-[93px] font-poppins xl:px-[120px]"
      style={{
        backgroundImage:
          "linear-gradient(119.56144344675766deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-9">
        <div className="flex w-full max-w-[820px] flex-col items-start gap-[14.8px]">
          <p className="w-full text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            06 / BILLING, PAYROLL &amp; FINANCIAL OPERATIONS
          </p>
          <h2 className="w-full text-[36px] font-bold leading-[1.15] tracking-[-1.3px] text-white xl:text-[44px] xl:leading-[50.6px]">
            <DesktopLines
              lines={["Bring recurring financial cycles", "into a controlled operating rhythm."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[4.5px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            <DesktopLines
              lines={[
                "Connect readiness, approvals, specialist-system handoffs and outcome verification at the supported",
                "workflow level.",
              ]}
            />
          </p>
        </div>

        <ul className="flex w-full items-start justify-center gap-[22px]">
          {photos.map((p) => (
            <li
              key={p.title}
              className="flex min-w-0 flex-1 flex-col items-start self-stretch overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-[#102d2f]"
            >
              <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
                <Image
                  src={p.photo}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1280px) 385px, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-3 p-[26px]">
                <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[6.5px]">
                  <Image src={p.icon} alt="" width={25} height={25} className="size-[25px]" />
                </span>
                <h3 className="w-full pt-[2px] text-[20px] font-bold leading-[26px] text-[#102d2f]">{p.title}</h3>
                <p className="w-full text-[15px] leading-[24px] text-[#c4d7d9]">
                  {p.body[0]}
                  <br />
                  {p.body[1]}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ol className="flex w-full items-start justify-center gap-3">
          {steps.map((s, i) => (
            <li
              key={s}
              className="flex min-w-0 flex-1 flex-col items-start gap-[7px] border-t-2 border-[#247780] bg-[#102d2f] px-[10px] py-[18px]"
            >
              <span className="w-full pb-[0.8px] text-[13px] leading-[20.8px] text-[#247780]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[13px] font-bold leading-[20.8px] text-white">{s}</span>
            </li>
          ))}
        </ol>

        <div className="flex w-full flex-col items-start rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex w-full items-start justify-between gap-4 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <div className="relative h-[35.39px] w-[233px] shrink-0">
              <h3 className="absolute left-0 top-[11.5px] w-full -translate-y-1/2 text-[18px] font-bold leading-[23.4px] text-white">
                <DesktopLines lines={["Recurring cycle /", "specimen"]} />
              </h3>
            </div>
            <span className="whitespace-nowrap rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          {rows.map(([k, v], i) => (
            <div
              key={k}
              className={`grid w-full grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-5 py-[16px] text-[13px] leading-[20.8px] ${
                i < rows.length - 1 ? "h-[53.8px] border-b border-[rgba(120,152,156,0.19)]" : "h-[52.8px]"
              }`}
            >
              <span className="text-[#9bc2c6]">{k}</span>
              <strong className="font-normal text-white">{v}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
