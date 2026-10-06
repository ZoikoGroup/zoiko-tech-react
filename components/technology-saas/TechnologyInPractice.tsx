import { SectionHeader, cardLight, EvidencePill, asset } from "./shared";

const proofs = [
  {
    img: asset("photo-1550751827-4bd374c3f58b.png"),
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
    img: asset("photo-1461749280684-dccba630e2f6.png"),
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
    img: asset("photo-1451187580459-43490279c0fa.png"),
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
    img: asset("photo-1526374965328-7f61d4dc18c5.png"),
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
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        <SectionHeader
          title="Technology in practice"
          subtitle="Proof appears only when approved for public use."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {proofs.map((p) => (
            <div
              key={p.title}
              className={`h-full pb-5 ${cardLight} flex flex-col rounded-2xl overflow-hidden`}
            >
              <div className="relative w-full h-36 shrink-0 bg-linear-63 from-color-black-solid to-color-cyan-7 rounded-t-2xl overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="px-5 pt-3 flex flex-col flex-1 gap-2">
                <p className="zk-heading text-color-cyan-6 text-base font-bold leading-5">
                  {p.title}
                </p>
                <p className="zk-body text-color-cyan-35-2 text-xs font-normal leading-5">
                  {p.desc}
                </p>
                <div className="mt-auto pt-2">
                  <EvidencePill label={p.pill} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
