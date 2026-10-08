import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

const panels = [
  { n: "01", title: "Architecture rationale", text: "Actual research supports the relevant technology relationship." },
  { n: "02", title: "Evaluation", text: "Method and approved result under defined conditions." },
  { n: "03", title: "Collaboration", text: "Specific approved scope, no implied institutional endorsement." },
  { n: "04", title: "Evidence pending", text: "No records supplied; no fabricated scientific validation or commercial outcome." },
];

const faqs = [
  "Is this Resources > Research?",
  "Are all papers peer reviewed?",
  "Do benchmarks prove leadership?",
  "Are university partners listed?",
  "Does research prove product availability?",
  "Where is exploratory work?",
];

export default function Practice() {
  return (
    <section id="practice" className="w-full bg-white py-14 lg:py-[70px]">
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex max-w-[610px] flex-col gap-[15.1px]">
            <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-[#102d2f] md:text-[41px] md:leading-[47.15px]">
              Research in practice
            </h2>
            <p className="pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#587176]">
              Attributable evidence before examples or outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
            {panels.map((p) => (
              <article
                key={p.n}
                className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[#f0f7f8] px-[26px] pb-[41px] pt-[31px]"
              >
                <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">{p.n}</span>
                <h3 className="pb-[0.59px] pt-[9.59px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">
                  {p.title}
                </h3>
                <p className="max-w-[380px] font-poppins text-[15px] leading-[27px] text-[#587176]">{p.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-10 lg:block lg:h-[616px]">
          <div className="flex w-full flex-col gap-[14.845px] pb-[36px] lg:w-[475px]">
            <div className="hidden h-[20px] lg:block" aria-hidden="true" />
            <h2 className="pb-[0.535px] font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] md:leading-[43.7px]">
              <Lines lines={["Understand the evidence", "before relying on it."]} />
            </h2>
          </div>
          <ul className="flex w-full flex-col lg:absolute lg:left-0 lg:top-[159.38px] lg:w-[507px] lg:max-w-[950px]">
            {faqs.map((q) => (
              <li key={q} className="border-b border-solid border-[rgba(121,153,157,0.33)]">
                <p className="flex min-h-[48px] items-center pb-[23.69px] pt-[23.5px] font-poppins text-[17px] font-bold leading-[27.2px] text-[#102d2f]">
                  {q}
                </p>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[720/480] w-full overflow-hidden rounded-[18px] lg:absolute lg:left-[43.08%] lg:right-[-3.08%] lg:top-[calc(50%+80.38px)] lg:w-auto lg:-translate-y-1/2">
            <Image
              src="/zoiko-research/research-evidence-manifests-illustration.webp"
              alt="Illustrative research evidence manifests, source archive and reviewed version history"
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <figure className="flex flex-col items-center gap-[11px] border-t border-solid border-[rgba(132,181,191,0.33)] pt-[30px]">
          <figcaption className="pb-[0.59px] text-center font-poppins text-[11px] leading-[17.6px] text-[#b8d6dc]">
            Source, method and version architecture · Illustration, not research proof
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
