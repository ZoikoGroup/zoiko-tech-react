import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards: { title: string; text: string[]; pb: string; gap: string }[] = [
  {
    title: "Obligation / requirement",
    text: [
      "Source, jurisdiction or scope,",
      "effective period, owner and state",
      "where approved.",
    ],
    pb: "pb-[44.31px]",
    gap: "gap-[6.035px]",
  },
  {
    title: "Control",
    text: [
      "Control type, responsible owner,",
      "implementation and evidence",
      "state, and exceptions.",
    ],
    pb: "pb-[44.31px]",
    gap: "gap-[6.035px]",
  },
  {
    title: "Evidence",
    text: [
      "Source, period, freshness,",
      "scope, reviewer and linked",
      "control or claim.",
    ],
    pb: "pb-[44.31px]",
    gap: "gap-[6.035px]",
  },
  {
    title: "Exception",
    text: [
      "Reason, impact where approved,",
      "owner, remediation or",
      "compensating control, review",
      "date.",
    ],
    pb: "pb-[20px]",
    gap: "gap-[5.69px]",
  },
  {
    title: "Approval / sign-off",
    text: ["Authorized role, scope,", "conditions and time."],
    pb: "pb-[20px]",
    gap: "gap-[5.88px]",
  },
  {
    title: "Change event",
    text: ["A source, rule, product or market", "change that triggers re-review."],
    pb: "pb-[20px]",
    gap: "gap-[5.88px]",
  },
];

export default function DesktopWorkflows() {
  return (
    <section
      className="w-full overflow-hidden px-[130px] py-[96px]"
      style={{
        backgroundImage:
          "linear-gradient(130.9106358667296deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
      }}
    >
      <div className="relative mx-auto h-[594px] w-full max-w-[1180px]">
        <h2 className="absolute left-0 top-0 whitespace-nowrap font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Regulatory and compliance workflows
        </h2>
        <p className="absolute left-0 top-[61px] whitespace-nowrap pb-[0.59px] font-inter text-[16px] font-normal leading-[25.6px] text-[#dcecee]">
          Six objects, each with an owner, state and review path.
        </p>
        <ul className="absolute left-0 top-[107.59px] grid h-[485px] w-[581px] grid-cols-2 content-start items-start gap-[18px] pt-[2px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col items-start overflow-hidden rounded-[14px] border border-solid border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] px-[20px] pt-[20px] ${c.pb} ${c.gap}`}
            >
              <h3 className="w-full font-sora text-[16.8px] font-bold leading-[19.32px] text-white">
                {c.title}
              </h3>
              <p className="w-full pb-[0.625px] font-inter text-[15.2px] font-normal leading-[24.32px] text-[#dcecee]">
                <DesktopLines lines={c.text} />
              </p>
            </li>
          ))}
        </ul>
        <div className="absolute left-[627px] top-[44.02px] size-[581px]">
          <Image
            src="/regulated-industries/desktop-workflows-illustration.webp"
            alt=""
            width={1200}
            height={1200}
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
