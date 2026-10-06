import Image from "next/image";
import { WRAP } from "./layout";

const flow = [
  { icon: "/retail-commerce/desktop-icon-user.svg", title: ["Customer", "intent"], text: "Approved channel" },
  { icon: "/retail-commerce/desktop-adjacent-icon-phone.svg", title: ["Communication"], text: "Necessary context" },
  { icon: "/retail-commerce/desktop-contact-icon-network.svg", title: ["System", "handoff"], text: "Commerce / payment" },
  { icon: "/retail-commerce/desktop-adjacent-icon-shield.svg", title: ["Outcome"], text: "Authoritative response" },
  { icon: "/retail-commerce/tablet-icon-document.svg", title: ["Support &", "evidence"], text: "Accountable owner" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="w-full bg-[linear-gradient(119.5deg,#000_0%,#0a2528_48%,#247780_100%)] pb-20 pt-12 md:pb-[85px] lg:bg-[linear-gradient(126deg,#000_0%,#0a2528_48%,#247780_100%)] lg:pb-[61px]"
    >
      <div className={`${WRAP} flex flex-col gap-8 md:gap-[42px] lg:gap-0`}>
        {/* Breadcrumb: mobile + tablet only */}
        <nav aria-label="Breadcrumb" className="font-poppins text-[12px] leading-[19.2px] text-[#b4cece] lg:hidden">
          <ol className="flex flex-wrap items-center gap-x-[14px]">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true" className="opacity-50">/</li>
            <li><a href="#pathways">Industries</a></li>
            <li aria-hidden="true" className="opacity-50">/</li>
            <li>Retail &amp; Commerce</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.5fr_1fr] md:gap-[10px] lg:min-h-[686px] lg:grid-cols-[1.1fr_1fr] lg:gap-8">
          {/* Copy */}
          <div className="flex flex-col items-start gap-[15px] pb-3 lg:gap-[14.9px]">
            <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
              RETAIL &amp; COMMERCE
            </p>
            <h1 className="font-poppins text-[34px] font-bold leading-[1.1] tracking-[-2px] text-white sm:text-[40px] md:text-[44px] md:leading-[47.52px] lg:text-[48px] lg:leading-[52px] xl:text-[62px] xl:leading-[66.96px]">
              Connect customer<br className="hidden md:block" /> journeys to the<br className="hidden md:block" /> systems that<br className="hidden md:block" /> actually{" "}
              <span className="text-[#8edbdb]">
                complete<br className="hidden md:block" /> and operate the<br className="hidden md:block" /> transaction.
              </span>
            </h1>
            <p className="max-w-[640px] pt-[10px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Zoiko Tech supports retail and commerce organizations with technology across customer communications, governed marketing intelligence, payments, customer operations and digital commerce — designed to preserve source, consent, operator and system-of-record boundaries.
            </p>
            <div className="flex w-full flex-col items-stretch gap-3 pb-[11px] pt-[13px] sm:w-auto sm:items-start lg:w-full lg:flex-row lg:flex-wrap">
              <a
                href="#pathways"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-transparent bg-white px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-[#0a3639]"
              >
                Explore retail pathways<span className="lg:hidden">&nbsp;↗</span>
              </a>
              <a
                href="/contact-us"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 text-center font-poppins text-[14px] font-bold leading-[22.4px] text-white"
              >
                Discuss your commerce architecture
              </a>
            </div>
            <a
              href="/customer-and-local-commerce"
              className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#9adddf]"
            >
              Explore Customer &amp; Local Commerce →
            </a>
            <p className="max-w-[640px] pt-[14px] font-poppins text-[12px] leading-[19.2px] text-[#c4d7d9] lg:hidden">
              Journey-aware. Operator-clear. Permission-conscious. Integration-ready.
            </p>
          </div>

          {/* Art */}
          <div className="flex flex-col items-stretch pb-[7px]">
            <Image
              src="/retail-commerce/desktop-hero-connected-workflow-illustration.webp"
              alt="Teal connected workflow illustration showing a shared operating foundation and adjacent systems"
              width={1200}
              height={1200}
              priority
              sizes="(min-width: 1280px) 535px, (min-width: 768px) 40vw, 90vw"
              className="mx-auto h-auto w-full max-w-[420px] md:max-w-none lg:max-w-[535px]"
            />
            <div className="flex flex-col items-center gap-[10px] border-t border-[#59848a] pt-[24.5px]">
              <p className="text-center font-poppins text-[10px] leading-4 tracking-[2px] text-[#a6ced0]">
                CONNECTED CUSTOMER OPERATIONS
              </p>
              <p className="text-center font-poppins text-[14px] leading-[22.4px] text-[#c4d7d9] lg:hidden">
                Intent → Communication → Handoff → Outcome → Evidence
              </p>
            </div>
          </div>
        </div>

        {/* Flow strip: mobile + tablet only */}
        <ol className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-3 lg:hidden">
          {flow.map((f, i) => (
            <li
              key={f.text}
              className={`flex flex-col gap-1 border-t border-[rgba(137,197,202,0.4)] px-[10px] pb-6 pt-[18px] md:px-2 ${i === flow.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" width={25} height={25} className="size-[25px]" />
              </span>
              <strong className="block pt-2 font-poppins text-[15px] font-bold leading-6 text-white">
                {f.title.map((t, j) => (
                  <span key={t}>
                    {j > 0 && <br />}
                    {t}
                  </span>
                ))}
              </strong>
              <span className="font-poppins text-[12px] leading-[19.2px] text-[#bbd8db]">{f.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
