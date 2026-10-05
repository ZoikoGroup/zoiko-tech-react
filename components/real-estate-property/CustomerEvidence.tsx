import Image from "next/image";
import { WRAP } from "./layout";
import Lines from "./Lines";

const CARDS = [
  { img: "evidence-customer-property-identity", alt: "Two people touring a modern living room", title: "Customer & property identity", body: "Legal, customer and commercial image rights cleared." },
  { img: "evidence-actual-deployment", alt: "Engineers working in a data center", title: "Actual deployment", body: "Approved platform, integration and operator scope." },
  { img: "evidence-measured-outcomes", alt: "Professional reviewing results on a tablet", title: "Measured outcomes", body: "Evidence-backed results with reviewed financial and compliance wording." },
];

export default function CustomerEvidence() {
  return (
    <section id="customer-evidence" className="w-full bg-white py-14 md:py-16 lg:pb-[94px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-9`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[40px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Permission to publish.", "Traceable deployment and results."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.19px] font-inter text-base leading-[25.6px] text-[#587176]">
            Customer identity, property imagery and operational outcomes need explicit approval.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-6 rounded-[10px] border border-solid border-[#dae8e8] bg-[#f3f8f8] p-7 drop-shadow-[0px_4px_5px_rgba(0,0,0,0.2)] lg:h-[420px]"
            >
              <div className="relative h-[180px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image
                  src={`/real-estate-property/${c.img}.webp`}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col gap-3">
                <h3 className="font-poppins text-[20px] font-bold leading-[26px] text-[#102d2f]">{c.title}</h3>
                <p className="font-inter text-[15px] leading-6 text-[#587176]">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
