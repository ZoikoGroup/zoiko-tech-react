import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Build", lines: ["Developer Platform, approved", "APIs, SDKs, model APIs,", "webhooks and events,", "authentication."] },
  { title: "Learn", lines: ["Documentation, API reference,", "quickstarts, architecture guides."] },
  { title: "Test", lines: ["Sandbox, samples and reference", "implementations only when", "external self-service is live."] },
  { title: "Operate", lines: ["Observability, status, usage and", "metering where available,", "changelog, developer support."] },
];

export default function DesktopDeveloper() {
  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(129.39857909216056deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[22px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Integration and developer layer
        </h2>
        <ul className="grid h-[348.56px] grid-cols-4 grid-rows-[165.28px_165.28px] gap-[18px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex h-[165.28px] min-w-0 flex-col gap-[6px] self-start overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap pt-[2px]">
          <a
            href="#"
            className="mb-[12px] mr-[12px] flex min-h-[48px] items-center whitespace-nowrap rounded-[10px] border-2 border-white bg-white px-[24px] font-inter text-[16px] font-semibold text-black"
          >
            Explore Developer Platform
          </a>
          <a
            href="#"
            className="mb-[12px] mr-[12px] flex min-h-[48px] items-center whitespace-nowrap rounded-[10px] border-2 border-[#7fd0d9] px-[24px] font-inter text-[16px] font-semibold text-white"
          >
            Documentation
          </a>
        </div>
        <div className="relative h-[300px] w-full overflow-hidden rounded-[18px]">
          <Image src="/regulated-industries/desktop-developer-team.webp" alt="" fill sizes="1180px" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
