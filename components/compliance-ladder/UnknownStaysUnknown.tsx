import Image from "next/image";

const CARDS = [
  {
    id: "01",
    title: "Not assessed / In review",
    text: "Neutral task/review status, no certification implication.",
  },
  {
    id: "02",
    title: "Awaiting owner / Action required",
    text: "Responsible next step, not regulatory conclusion.",
  },
  {
    id: "03",
    title: "Stale / Source unavailable",
    text: "Date/version warning; no current or compliant fallback.",
  },
  {
    id: "04",
    title: "Restricted / Out of scope",
    text: "Minimum disclosure and source-approved rationale; no hidden record leakage.",
  },
] as const;

export default function UnknownStaysUnknown() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557]">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-8 md:pt-24 lg:px-0 lg:pt-[140px]">
        <h2 className="font-poppins text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
          Unknown stays unknown.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:mt-[72px] lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="group flex flex-col rounded-[24px] border border-white/15 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.07]"
            >
              <span className="font-poppins text-[13px] font-normal leading-none text-[#F0516F]">
                {card.id}
              </span>

              <h3 className="mt-4 font-poppins text-[22px] font-semibold leading-[1.35] text-white">
                {card.title}
              </h3>

              <p className="mt-2 font-poppins text-[15px] font-light leading-[1.75] text-white/75">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-10 w-full md:mt-14 lg:mt-[60px]">
        <Image
          src="/audit/6.png"
          alt="Decorative bottom wave graphic"
          width={2576}
          height={600}
          priority
          className="block h-auto w-full select-none object-cover"
        />
      </div>
    </section>
  );
}
