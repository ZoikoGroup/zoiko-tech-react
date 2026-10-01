import { SectionHeader, ThumbCard, photo } from "./shared";

const row1Entries = [
  {
    img: photo.saasBoard,
    title: "Modernize legacy systems",
    desc: (
      <>
        Connect and modernize without
        <br />
        a risky all-at-once replacement.
      </>
    ),
  },
  {
    img: photo.analytics,
    title: "Consolidate SaaS sprawl",
    desc: (
      <>
        Reduce fragmented tools and
        <br />
        duplicated control layers.
      </>
    ),
  },
  {
    img: photo.circuit,
    title: "Build with governed AI",
    desc: (
      <>
        Introduce AI and agents with
        <br />
        policy, evidence and human
        <br />
        control.
      </>
    ),
  },
];

const row2Entries = [
  {
    img: photo.team,
    title: "Create a developer platform",
    desc: (
      <>
        Standardize APIs, integrations,
        <br />
        identity, eventing and
        <br />
        observability.
      </>
    ),
  },
  {
    img: photo.approval,
    title: "Unify operations",
    desc: (
      <>
        Bring HR, payroll, billing,
        <br />
        communications and compliance
        <br />
        onto shared foundations.
      </>
    ),
  },
];

export default function WhatDoYouNeedToGovern() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        <SectionHeader
          center
          title="Where do you want to start?"
          subtitle="Five entry points. Pick the closest one and jump to the matching section."
        />

        <div className="self-stretch flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row1Entries.map((e) => (
              <ThumbCard
                key={e.title}
                img={e.img}
                title={e.title}
                desc={e.desc}
                pb="pb-5"
              />
            ))}
          </div>

          {/* Row 2: 2 cards centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {row2Entries.map((e) => (
              <div key={e.title} className="w-full md:w-[501px] max-w-[501px]">
                <ThumbCard
                  img={e.img}
                  title={e.title}
                  desc={e.desc}
                  pb="pb-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
