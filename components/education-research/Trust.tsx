import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { img: "trust-purpose-limitation", title: "Purpose limitation", text: "Use data only for the approved research or learning purpose." },
  { img: "trust-data-minimization", title: "Data minimization", text: "Expose only necessary information for the workflow and role." },
  { img: "trust-restricted-data", title: "Restricted data", text: "Explicit handling for participant, student-adjacent and unpublished information." },
  { img: "trust-rights-licensing", title: "Rights & licensing", text: "Visible permitted use for sources, datasets and outputs." },
  { img: "trust-identity-access", title: "Identity & access", text: "Role, project, institution and partner scope." },
  { img: "trust-retention-security", title: "Retention & security", text: "Approved rules and authoritative security evidence; no generic compliance promise." },
];

export default function Trust() {
  return (
    <section id="trust" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex flex-col gap-[14.8px]">
          <h2 className="max-w-[820px] font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            Protect purpose, privacy and <br className="hidden xl:block" />research <br className="hidden xl:block" />
            rights.
          </h2>
          <p className="pt-[5.2px] font-inter text-base leading-[25.6px] text-[#587176]">
            Govern sensitive and restricted material at project and institution boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[328px]">
          {cards.map((c) => (
            <article
              key={c.title}
              className="flex flex-col gap-5 rounded-[10px] border border-[#dae8e8] bg-[#f3f8f8] p-5 md:p-7"
            >
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={`/education-research/${c.img}.webp`}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="pb-3 font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
