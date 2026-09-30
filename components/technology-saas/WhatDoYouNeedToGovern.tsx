import { SectionHeader, ThumbCard, photo } from "./shared";

const entries = [
  {
    img: photo.saasBoard,
    title: "Modernize legacy systems",
    desc: (
      <>
        Connect and modernize without
        <br />a risky all-at-once replacement.
      </>
    ),
    pb: "pb-11",
  },
  {
    img: photo.analytics,
    title: "Consolidate SaaS sprawl",
    desc: (
      <>
        Reduce fragmented tools and
        <br />duplicated control layers.
      </>
    ),
    pb: "pb-11",
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
    pb: "pb-5",
  },
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
    pb: "pb-5",
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
    pb: "pb-5",
  },
];

export default function WhatDoYouNeedToGovern() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-5">
        <SectionHeader
          center
          title="Where do you want to start?"
          subtitle="Five entry points. Pick the closest one and jump to the matching section."
        />
        <div className="self-stretch flex flex-wrap justify-center gap-4">
          {entries.map((e) => (
            <div key={e.title} className="w-96">
              <ThumbCard img={e.img} title={e.title} desc={e.desc} pb={e.pb} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
