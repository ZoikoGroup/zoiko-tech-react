import { SectionHeader, cardLight, EvidencePill, photo } from "./shared";

const proofs = [
  {
    img: photo.saasBoard4,
    title: "Case study",
    desc: (
      <>
        Customer or sector where
        <br />
        approved, problem, deployed
        <br />
        technology, architecture,
        <br />
        measurable result, evidence
        <br />
        source and approval state.
      </>
    ),
    pill: "Evidence pending",
  },
  {
    img: photo.circuit2,
    title: "Reference architecture",
    desc: (
      <>
        Problem context, systems
        <br />
        involved, control points,
        <br />
        integration pattern, operational
        <br />
        result.
      </>
    ),
    pill: "Available",
  },
  {
    img: photo.analytics2,
    title: "Technical benchmark",
    desc: (
      <>
        Methodology, environment,
        <br />
        metric, date, limitations, owner.
      </>
    ),
    pill: "Evidence pending",
  },
  {
    img: photo.decision3,
    title: "Deployment note",
    desc: (
      <>
        Scope, constraints,
        <br />
        implementation pattern, lessons,
        <br />
        current status.
      </>
    ),
    pill: "Evidence pending",
  },
];

export default function TechnologyInPractice() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          title="Technology in practice"
          subtitle="Proof appears only when approved for public use."
        />
        <div className="self-stretch flex flex-wrap gap-4">
          {proofs.map((p) => (
            <div
              key={p.title}
              className={`flex-1 min-w-[260px] h-96 pb-11 ${cardLight} flex flex-col items-start overflow-hidden`}
            >
              <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7">
                <img
                  src={p.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="self-stretch px-[21px] pt-[17px] zk-heading text-color-cyan-6 text-base font-bold leading-5">
                {p.title}
              </p>
              <p className="self-stretch px-[21px] pt-[3px] zk-body text-color-cyan-35-2 text-base font-normal leading-6">
                {p.desc}
              </p>
              <EvidencePill label={p.pill} className="mx-[21px] mt-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
