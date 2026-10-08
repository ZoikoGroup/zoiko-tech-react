import Image from "next/image";
import { WRAP } from "./layout";

const items = [
  { n: "01", t: "Catalog state", d: "Research registry not connected; inventory was not supplied." },
  { n: "02", t: "No fabricated feature", d: "One current governed feature only when eligible; none is shown here." },
  { n: "03", t: "Discovery contract", d: "Public metadata search, type/state/topic filters and source-defined sort." },
  { n: "04", t: "Honest availability", d: "No fake publication cards, scores, titles, authors, counts or citation metrics." },
];

export default function Library() {
  return (
    <section
      id="library"
      className="w-full py-14 lg:py-[70px]"
      style={{
        backgroundImage:
          "linear-gradient(121.94162456240616deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:gap-x-[67px] lg:gap-y-0`}>
        <div className="flex flex-col">
          <div className="flex flex-col gap-[15px] pb-4">
            <h2 className="font-poppins text-3xl font-bold leading-[1.15] tracking-[-1px] text-white md:text-4xl lg:text-[41px] lg:leading-[47.15px]">
              Research library
            </h2>
            <p className="pt-[4.3px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
              Only approved public artifact records can populate discovery.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-0">
            {items.map((i) => (
              <article
                key={i.n}
                className="flex flex-col gap-3 rounded-[10px] border border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px] lg:h-[237px]"
              >
                <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{i.n}</span>
                <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{i.t}</h3>
                <p className="font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">{i.d}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative mx-auto aspect-[472/564] w-full max-w-[472px] lg:mx-0 lg:mt-[79.7px] lg:self-start">
          <Image
            src="/zoiko-research/library-isometric-modules-illustration.webp"
            alt="Isometric illustration of catalog state, governed feature, discovery contract and availability modules"
            fill
            sizes="(min-width: 1024px) 472px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
