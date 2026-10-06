import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const P = "/travel-mobility-transportation/";
const CARDS: { icon: string; title: string; lines: string[] }[] = [
  { icon: "icon-user.svg", title: "User identity", lines: ["Anonymous, known and authenticated context at", "supported scope."] },
  { icon: "icon-lock.svg", title: "Delegated authority", lines: ["Explicit permission when someone acts for another traveler or organization."] },
  { icon: "icon-database.svg", title: "Journey & location data", lines: ["Minimize sensitive context and restrict role-based access."] },
  { icon: "icon-document.svg", title: "Retained evidence", lines: ["Material authorization and handoff events recorded where supported."] },
];

export default function Identity() {
  return (
    <section
      id="identity"
      className="w-full bg-[linear-gradient(131.38deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 md:py-20 lg:pb-[94px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[38px] xl:text-[44px] xl:leading-[50.6px]">
            <Lines lines={["Purpose-bound data.", "Explicit permission to act."]} />
          </h2>
          <p className="max-w-[760px] pt-[5px] font-inter text-base leading-[25.6px] text-[#c4d7d9]">
            Use only the information and authority supported by the journey and responsible product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,666fr)_minmax(0,564fr)] lg:gap-0">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {CARDS.map((c) => (
              <li
                key={c.title}
                className="flex flex-col rounded-[10px] border border-white/[0.19] bg-white/[0.04] p-7"
              >
                <span className="mb-[22px] flex size-[46px] shrink-0 items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)]">
                  <Image src={`${P}${c.icon}`} alt="" width={25} height={25} />
                </span>
                <h3 className="pb-3 font-poppins text-[20px] font-bold leading-[26px] text-white">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#c4d7d9]">
                  {c.lines.join(" ")}
                </p>
              </li>
            ))}
          </ul>
          <div className="mx-auto w-full max-w-[564px] lg:mx-0 lg:mt-[23px] lg:max-w-none">
            <Image
              src={`${P}identity-shield-illustration.webp`}
              alt=""
              width={1130}
              height={848}
              sizes="(min-width: 1440px) 590px, (min-width: 1024px) 45vw, 90vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
