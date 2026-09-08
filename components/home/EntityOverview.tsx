const overviewItems = [
  {
    question: "What is Zoiko Tech?",
    answer:
      "Zoiko Tech Inc. is a California-headquartered global technology innovator, delivering modular SaaS blocks, sovereign telecom networks, payment processing stack, and governed enterprise artificial intelligence.",
  },
  {
    question: "Where is Zoiko Tech headquartered?",
    answer:
      "Our global administrative and strategic headquarters are located at 1401 21st Street, Suite R, Sacramento, California.",
  },
  {
    question: "Where is the European headquarters?",
    answer:
      "European operations are centralized at 167-169 Great Portland Street, London, United Kingdom.",
  },
  {
    question: "What does Zoiko Tech build?",
    answer:
      "We design, deploy, and support unified platforms including ZoikoPay, ZoikoNex, ZoikoTime, and Zoiko SWS, serving clients globally across cloud infrastructure, finance, telco, and healthcare.",
  },
  {
    question: "Is Zoiko Tech part of Zoiko Group?",
    answer:
      "Yes, Zoiko Tech is the foundational core technology division of Zoiko Group, aligning with its global focus on regulated enterprise systems.",
  },
  {
    question: "Does Zoiko Tech support developers?",
    answer:
      "Yes, robust SDK pipelines, gRPC protocols, and open sandbox integration gateways are provided natively across all core platform nodes.",
  },
];

export default function EntityOverview() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-r from-slate-950 via-teal-700 to-cyan-900 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:gap-16 xl:gap-20">
        
        {/* Section Heading */}
        <div className="flex w-full flex-col items-start gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-white">
            ENTITY OVERVIEW
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.2]">
            Zoiko Tech at a glance
          </h2>
        </div>

        {/* Overview Content */}
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-14">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {overviewItems.slice(0, 3).map((item) => (
              <div
                key={item.question}
                className="flex flex-col items-start gap-2"
              >
                <h3 className="text-xl font-bold text-white">
                  {item.question}
                </h3>

                <p className="text-base font-normal leading-6 text-slate-100">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {overviewItems.slice(3, 6).map((item) => (
              <div
                key={item.question}
                className="flex flex-col items-start gap-2"
              >
                <h3 className="text-xl font-bold text-white">
                  {item.question}
                </h3>

                <p className="text-base font-normal leading-6 text-slate-100">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}