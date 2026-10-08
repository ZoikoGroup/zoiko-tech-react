import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const CARDS = [
  { title: "Thesis", text: "Approved problem and research question." },
  { title: "Ownership", text: "Accountable research/risk owner." },
  { title: "Review", text: "Evidence and governance checkpoints." },
  { title: "Limits", text: "No physical lab, certification or organizational structure inferred." },
];

export default function Labs() {
  return (
    <section id="labs" className="w-full bg-white py-14 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_439px] lg:gap-14`}>
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
              Frontier Labs
            </h2>
            <p className="pt-[4.295px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
              <Lines lines={["An umbrella exploratory lane, not an assumed", "facility or legal entity."]} />
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-rows-[183.19px_210.19px]">
            {CARDS.map((c) => (
              <article
                key={c.title}
                className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pb-[41px] pt-[31px]"
              >
                <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {c.title}
                </h3>
                <p className="max-w-[270px] font-poppins text-[15px] leading-[27px] text-[#587176]">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative mx-auto aspect-[439/524] w-full max-w-[439px] lg:-mb-[23px] lg:mt-[91.36px] lg:h-[524px] lg:self-start">
          <Image
            src="/frontier-technologies/labs-thesis-ownership-review-limits-illustration.webp"
            alt=""
            fill
            sizes="439px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
