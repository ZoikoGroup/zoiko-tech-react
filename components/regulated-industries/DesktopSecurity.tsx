import Image from "next/image";
import DesktopLines from "./DesktopLines";

const cards = [
  { title: "Security", lines: ["Secure engineering, least", "privilege, threat prevention and", "authoritative security evidence."] },
  { title: "Privacy", lines: ["Purpose limitation, data", "minimization and privacy-", "conscious architecture."] },
  { title: "Reliability / resilience", lines: ["Observability, status", "communication, operational", "controls and recovery evidence."] },
  { title: "Incident / disclosure", lines: ["Authoritative Support, Status and", "Responsible Disclosure routes."] },
  { title: "Data / jurisdiction", lines: ["No sovereign, in-country or", "regulated-hosting claim without", "exact deployment evidence."] },
  { title: "Third parties", lines: ["Provider, subprocessor and", "integration evidence only from", "approved sources."] },
];

export default function DesktopSecurity() {
  return (
    <section
      className="w-full px-[130px] py-[96px]"
      style={{ backgroundImage: "linear-gradient(125.945deg, #000000 0%, #1c5c62 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-[20px]">
        <h2 className="font-sora text-[35.2px] font-bold leading-[40.48px] text-white">
          Security, privacy and resilience
        </h2>
        <ul className="grid grid-cols-4 gap-[18px] pt-[2px]">
          {cards.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-[6px] overflow-hidden rounded-[14px] border border-[rgba(127,208,217,0.35)] bg-[rgba(255,255,255,0.06)] p-[20px]"
            >
              <h3 className="font-sora text-[16.8px] font-bold leading-[19.32px] text-white">{c.title}</h3>
              <p className="font-inter text-[15.2px] leading-[24.32px] text-[#dcecee]">
                <DesktopLines lines={c.lines} />
              </p>
            </li>
          ))}
        </ul>
        <div className="relative h-[300px] w-full overflow-hidden rounded-[18px]">
          <Image
            src="/regulated-industries/desktop-security-operations.webp"
            alt="Cybersecurity operations team working in a control room"
            fill
            sizes="1180px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
