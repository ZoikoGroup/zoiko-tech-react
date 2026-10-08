import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  {
    photo: "/guides-reports/governance-resource-record-photo.webp",
    title: "Resource record",
    text: "Identity, summary, purpose, audience/topic, canonical route, state, owner, sources, version and approval.",
    pb: "lg:pb-[42px]",
    overlay: true,
  },
  {
    photo: "/guides-reports/governance-artifact-gating-photo.webp",
    title: "Artifact & gating records",
    text: "Actual assets, formats, version, health/accessibility and explicit access policy.",
    pb: "lg:pb-[66px]",
    overlay: false,
  },
  {
    photo: "/guides-reports/governance-release-gates-photo.webp",
    title: "Release gates",
    text: "Substance, sources, ownership, web readability, download QA, privacy, canonical/SEO, accessibility and safe analytics.",
    pb: "lg:pb-[42px]",
    overlay: true,
  },
];

export default function Governance() {
  return (
    <section id="governance" className="w-full bg-white py-14 lg:pb-[75px] lg:pt-[74px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[38px] lg:text-[45px] lg:leading-[51.75px]">
            Publish through a governed registry.
          </h2>
          <p className="pt-[4px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
            Approved content, download health and access policy must agree.
          </p>
        </div>
        <ul className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col gap-3 rounded-[10px] border border-[rgba(145,191,197,0.33)] bg-[#f2f8f9] px-[27px] pb-[42px] pt-[27px] ${c.pb}`}
            >
              <div className="relative h-[180px] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={c.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                {c.overlay && <div className="absolute inset-0 bg-[rgba(16,45,47,0.08)]" />}
              </div>
              <h3 className="w-full pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-[#102d2f]">
                {c.title}
              </h3>
              <p className="w-full font-poppins text-[15px] leading-[24px] text-[#587176]">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
