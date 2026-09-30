import { SectionHeader, ThumbCard, thumb } from "./shared";

const cards = [
  {
    img: thumb.inventory,
    title: "Inventory AI systems",
    desc: (
      <>
        Know which AI systems, models,<br />
        agents and use cases exist, who<br />
        owns them and where they run.
      </>
    ),
  },
  {
    img: thumb.approve,
    title: "Approve AI use",
    desc: (
      <>
        Classify impact, define<br />
        conditions and record who<br />
        authorized deployment.
      </>
    ),
  },
  {
    img: thumb.agent,
    title: "Govern agent behavior",
    desc: (
      <>
        Control data, tools, actions,<br />
        delegated authority and<br />
        escalation.
      </>
    ),
  },
  {
    img: thumb.evaluate,
    title: "Evaluate before release",
    desc: (
      <>
        Test quality, policy, safety and<br />
        operational behavior against use-<br />
        case-specific criteria.
      </>
    ),
  },
  {
    img: thumb.prove,
    title: "Prove governance",
    desc: (
      <>
        Preserve evidence, limitations,<br />
        approval and change history.
      </>
    ),
  },
  {
    img: thumb.operate,
    title: "Operate AI safely",
    desc: (
      <>
        Monitor behavior, incidents,<br />
        exceptions, changes and re-<br />
        approval requirements.
      </>
    ),
  },
];

export default function WhatDoYouNeedToGovern() {
  return (
    <section className="w-full px-8 md:px-32 py-24 bg-color-white-solid">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader
          title="What do you need to govern?"
          subtitle="Choose the closest intent and jump to the matching part of the governance model."
        />
        <div className="flex flex-wrap gap-4">
          {cards.map((c) => (
            <ThumbCard
              key={c.title}
              img={c.img}
              title={c.title}
              desc={c.desc}
              pb="pb-5"
              gap="gap-[3.30px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
