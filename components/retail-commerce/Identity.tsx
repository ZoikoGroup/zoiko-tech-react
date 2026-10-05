import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const cards = [
  {
    icon: "/retail-commerce/desktop-icon-user.svg",
    title: "Identity context",
    text: "Anonymous, known or authenticated states at supported product scope.",
  },
  {
    icon: "/retail-commerce/desktop-identity-icon-lock.svg",
    title: "Consent & permission",
    text: "Communication and marketing purposes remain distinct where required.",
  },
  {
    icon: "/retail-commerce/desktop-identity-icon-database.svg",
    title: "Minimum necessary data",
    text: "Expose only the information needed by the role and workflow.",
  },
  {
    icon: "/retail-commerce/desktop-adjacent-icon-shield.svg",
    title: "Derived vs authoritative",
    text: "Label inferred context and recommendations as derived.",
  },
];

const specimen = [
  ["Identity state", "Anonymous specimen customer"],
  ["Permitted purpose", "Sample inquiry handling"],
  ["Marketing permission", "Not granted"],
  ["Cross-system context", "Minimum necessary reference only"],
  ["Sensitive records", "Excluded from generic journey views"],
];

export default function Identity() {
  return (
    <section
      id="identity"
      className="w-full bg-[linear-gradient(120deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 font-poppins md:pb-[94px] md:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <p className="text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8] lg:hidden">
            10 / IDENTITY, CONSENT &amp; CUSTOMER DATA
          </p>
          <h2 className="text-[26px] font-bold leading-[1.15] tracking-[-0.8px] text-white md:text-[29px] md:leading-[33.35px] md:tracking-[-1.3px] lg:text-[36px] lg:leading-[42px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines
              desktop={["Use the context needed.", "Respect the purpose permitted."]}
              tablet={["Use the context needed.", "Respect the purpose permitted."]}
            />
          </h2>
          <p className="max-w-[760px] pt-[5px] text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Connect identity and purpose-specific permissions to the customer journey.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 pt-7 md:grid-cols-2 md:pt-9 lg:grid-cols-4 xl:grid-cols-[repeat(4,274px)]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-[10px] border border-[rgba(255,255,255,0.19)] bg-[rgba(255,255,255,0.04)] p-6 md:p-7 lg:min-h-[287px]"
            >
              <span className="mb-[22px] flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="pb-3 text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
              <p className="pb-[22px] text-[15px] leading-6 text-[#c4d7d9]">{c.text}</p>
              <a
                href="#"
                className="mt-auto flex min-h-9 items-center justify-between py-2 text-[13px] font-bold leading-[20.8px] text-[#9cdee0] lg:hidden"
              >
                <span className="whitespace-nowrap">Explore pathway</span>
                <span aria-hidden="true" className="font-normal">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col rounded-[12px] border border-[rgba(117,166,172,0.47)] bg-[rgba(5,27,32,0.85)] p-5 shadow-[0_18px_50px_rgba(0,30,37,0.06)] md:p-[26px] lg:hidden">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(120,152,156,0.27)] pb-[18px]">
            <h3 className="text-[18px] font-bold leading-[23.4px] text-white">Permission / purpose panel</h3>
            <span className="rounded-[20px] border border-[#719ea4] px-[9px] py-[3px] text-[10px] leading-4 tracking-[0.3px] text-[#a1dade]">
              Synthetic specimen
            </span>
          </div>
          <dl>
            {specimen.map(([k, v], i) => (
              <div
                key={k}
                className={`grid grid-cols-1 gap-1 py-4 md:grid-cols-[0.8fr_1.2fr] md:gap-5 ${
                  i < specimen.length - 1 ? "border-b border-[rgba(120,152,156,0.19)]" : ""
                }`}
              >
                <dt className="text-[13px] leading-[20.8px] text-[#9bc2c6]">{k}</dt>
                <dd className="text-[13px] leading-[20.8px] text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden aspect-[1156/653] w-full overflow-hidden lg:mt-0 lg:block xl:w-[1156px]">
          <Image
            src="/retail-commerce/desktop-identity-shield-illustration.webp"
            alt=""
            fill
            sizes="(min-width: 1280px) 1156px, 896px"
            className="object-cover object-[50%_68.5%]"
          />
        </div>
      </div>
    </section>
  );
}
