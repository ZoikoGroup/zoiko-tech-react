import Image from "next/image";
import TabletLines from "./TabletLines";

const photos = [
  {
    photo: "tablet-operations-billing-photo",
    icon: "tablet-practice-document-icon",
    title: ["Billing & revenue"],
    text: ["Billing, invoicing, usage and", "revenue operations within", "approved Zoiko Billing", "scope."],
    pad: "pb-[52px]",
  },
  {
    photo: "tablet-operations-payroll-photo",
    icon: "tablet-operations-icon-user",
    title: ["Payroll &", "workforce", "payments"],
    text: ["Payroll operations and", "workforce payments within", "approved country and", "product scope."],
    pad: "",
  },
  {
    photo: "tablet-operations-recurring-photo",
    icon: "tablet-adjacent-network-icon",
    title: ["Recurring finance", "operations"],
    text: ["Required inputs, exception", "owners and authorized", "release across recurring", "processes."],
    pad: "pb-[26px]",
  },
];

const cycle = ["Prepare", "Validate", "Review / approve", "Execute / release", "Verify", "Close / evidence"];

const rows: [string, string][] = [
  ["Cycle / owner", "Sample monthly workflow / Finance operations"],
  ["Readiness", "Missing input — assigned for review"],
  ["Release", "Awaiting authorized approval"],
  ["Verification", "Authoritative result not received"],
];

export default function TabletOperations() {
  return (
    <section
      id="operations-t"
      className="w-full overflow-hidden px-[5%] pb-[94px] pt-[93px]"
      style={{
        backgroundImage:
          "linear-gradient(118.78deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-[36px]">
        <div className="flex max-w-[820px] flex-col gap-[15.2px]">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            06 / BILLING, PAYROLL &amp; FINANCIAL OPERATIONS
          </p>
          <h2 className="pb-[0.52px] font-poppins text-[clamp(24px,5vw,29px)] font-bold leading-[1.15] tracking-[-1.3px] text-white">
            <TabletLines
              lines={["Bring recurring financial cycles", "into a controlled operating rhythm."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[4.095px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect readiness, approvals, specialist-system handoffs and outcome verification at the
            supported workflow level.
          </p>
        </div>

        <ul className="flex flex-col items-stretch gap-[22px] sm:flex-row sm:items-start">
          {photos.map((p) => (
            <li
              key={p.photo}
              className={`min-w-0 flex-1 overflow-hidden rounded-[10px] border border-[#d5e5e5] bg-[#102d2f] ${p.pad}`}
            >
              <article>
                <div className="relative h-[170px] w-full overflow-hidden">
                  <Image
                    src={`/financial-services/${p.photo}.webp`}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-[12px] p-[18px]">
                  <span className="flex w-[38px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[6.5px]">
                    <Image src={`/financial-services/${p.icon}.svg`} alt="" width={25} height={25} />
                  </span>
                  <h3 className="pt-[2px] font-poppins text-[20px] font-bold leading-[26px] text-white">
                    <TabletLines lines={p.title} />
                  </h3>
                  <p className="font-poppins text-[15px] leading-[24px] text-[#c4d7d9]">
                    <TabletLines lines={p.text} />
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <ol className="grid grid-cols-2 gap-[12px] sm:grid-cols-3">
          {cycle.map((label, i) => (
            <li
              key={label}
              className="flex flex-col items-start gap-[7px] border-t-2 border-[#247780] bg-[#102d2f] px-[10px] py-[18px]"
            >
              <span className="font-poppins text-[13px] leading-[20.8px] text-[#247780]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-poppins text-[13px] font-bold leading-[20.8px] text-white">{label}</span>
            </li>
          ))}
        </ol>

        <div className="rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-[26px] shadow-[0px_18px_50px_0px_rgba(0,30,37,0.06)]">
          <div className="flex flex-wrap items-start justify-between gap-[12px] border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="font-poppins text-[18px] font-bold leading-[23.4px] text-white">
              Recurring cycle / specimen
            </h3>
            <span className="shrink-0 rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] font-poppins text-[10px] leading-[16px] tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {rows.map(([label, value], i) => (
              <div
                key={label}
                className={`grid grid-cols-1 gap-x-[20px] gap-y-[4px] py-[16px] sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] ${
                  i < rows.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="font-poppins text-[13px] leading-[20.8px] text-[#9bc2c6]">{label}</dt>
                <dd className="font-poppins text-[13px] leading-[20.8px] text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
