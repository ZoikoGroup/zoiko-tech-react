import Lines from "./Lines";
import { WRAP } from "./layout";

const rows = [
  ["RC-101", "Service inquiry", "Assigned", "Customer operations", "Confirm required information"],
  ["RC-102", "Commerce handoff", "Pending confirmation", "Integration owner", "Check authoritative return state"],
  ["RC-103", "Payment / order mismatch", "Needs review", "Finance reviewer", "Review both system outcomes"],
];

const heads = [
  { label: "Reference", w: "w-[11.7%] md:w-[13.7%] lg:w-[11.7%]" },
  { label: "Intent", w: "w-[23.1%] md:w-[22.1%] lg:w-[23.1%]" },
  { label: "State", w: "w-[19.3%] md:w-[19.8%] lg:w-[19.3%]" },
  { label: "Owner", w: "w-[19.1%]" },
  { label: "Next action", w: "w-[26.8%] md:w-[25.3%] lg:w-[26.8%]" },
];

export default function Operations() {
  return (
    <section
      id="operations"
      className="w-full bg-[linear-gradient(119deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 font-poppins md:pb-[94px] md:pt-[93px] xl:bg-[linear-gradient(121deg,#000_0%,#0a2528_48%,#247780_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-7 md:gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            08 / CUSTOMER OPERATIONS &amp; RESOLUTION
          </p>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.8px] text-white md:text-[29px] md:leading-[33.35px] md:tracking-[-1.3px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Every exception needs", "an owner and a recovery path."]}
              tablet={["Every exception needs", "an owner and a recovery path."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Preserve the customer intent, receiving system, next action and definitive resolution reference.
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-[12px] border border-[#d4e5e6] bg-[#0e3337] p-5 md:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-white">Customer operations queue</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <label className="flex w-full flex-col sm:w-[260px]" htmlFor="queue-filter">
              <span className="pb-[7px] text-[12px] font-bold leading-[19.2px] text-white">Filter by state</span>
              <select
                id="queue-filter"
                defaultValue="all"
                className="min-h-[46px] w-full appearance-none rounded-[5px] border border-[#ccdedf] bg-[#f8fbfb] py-[13px] pl-[15px] pr-[27px] text-[14px] font-bold leading-4 text-[#20474b]"
              >
                <option value="all">All states</option>
                <option value="assigned">Assigned</option>
                <option value="pending">Pending confirmation</option>
                <option value="review">Needs review</option>
              </select>
            </label>
            <p id="queue-count" className="text-[13px] leading-[20.8px] text-[#c4d7d9] sm:pb-[13px]">
              3 specimen requests
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] table-fixed border-collapse text-left md:min-w-0">
              <thead>
                <tr className="bg-[#247780]">
                  {heads.map((h) => (
                    <th key={h.label} scope="col" className={`${h.w} p-[14px] text-[13px] font-bold leading-[20.8px] text-white`}>
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]}>
                    {r.map((c, i) => (
                      <td
                        key={i}
                        className="border-b border-[#e0eaea] px-[14px] py-[18px] align-middle text-[13px] leading-[20.8px] text-white"
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
