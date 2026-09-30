import { SectionHeader, cardDark, agentAuthorityImg, body, thCell, thText, tdCell, tdTextStrong, tdText } from "./shared";

const cards = [
  {
    title: "Actor identity",
    desc: (
      <>
        Named agent, workflow or
        <br />
        service identity with an
        <br />
        accountable human owner.
      </>
    ),
  },
  {
    title: "Tool allowlist",
    desc: (
      <>
        Approved systems, APIs,
        <br />
        functions and connectors the
        <br />
        agent may invoke.
      </>
    ),
  },
  {
    title: "Data scope",
    desc: (
      <>
        Permitted sources, fields,
        <br />
        sensitivity classes and
        <br />
        jurisdictions.
      </>
    ),
  },
  {
    title: "Action class",
    desc: (
      <>
        Read, draft, update,
        <br />
        communicate, transact, approve /
        <br />
        submit, delete / irreversible.
      </>
    ),
  },
  {
    title: "Limits",
    desc: (
      <>
        Value, volume, frequency, record
        <br />
        scope, environment, time or
        <br />
        geography.
      </>
    ),
  },
  {
    title: "Approval gate",
    desc: (
      <>
        Which action needs human
        <br />
        authorization, by whom and
        <br />
        under what condition.
      </>
    ),
  },
  {
    title: (
      <>
        Stop / containment
      </>
    ),
    desc: (
      <>
        An authorized path to pause or
        <br />
        disable agent action.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: (
      <>
        Exception / escalation
      </>
    ),
    desc: (
      <>
        When the agent must stop and
        <br />
        hand off to a human reviewer.
      </>
    ),
    pb: "pb-11",
  },
];

const modeRows = [
  ["Assist", "Generate, retrieve, summarize, classify.", "Human decides and acts."],
  ["Recommend", "Propose options or actions.", "Human chooses or rejects."],
  ["Prepare", "Assemble an action or transaction without executing.", "Human reviews and confirms."],
  ["Execute with approval", "Execute only after explicit approval.", "Authorized approver releases the action."],
  ["Execute within bounds", "Execute pre-authorized low-risk actions within explicit limits.", "Human owns policy, monitoring, exceptions and revoke authority."],
];

export default function AgentAuthorityControls() {
  return (
    <section
      className="w-full px-8 md:px-32 py-24"
      style={{
        backgroundImage: "linear-gradient(157deg, #000000 0%, #0c2729 100%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto pb-3 flex flex-col gap-5">
        <SectionHeader light title="Agent authority and action controls" />
        <div className="relative self-stretch">
          <div className="w-full md:w-[582px] flex flex-wrap content-start gap-4">
            {cards.map((c, i) => (
              <div
                key={i}
                className={`w-[283px] p-5 ${c.pb ? `px-5 pt-5 ${c.pb}` : ""} ${cardDark} flex flex-col items-start gap-1.5 overflow-hidden`}
              >
                <div className="self-stretch">
                  <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                    {c.title}
                  </p>
                </div>
                <div className="w-full max-w-[670.68px] pb-[0.63px]">
                  <p className={`${body} text-color-cyan-90`}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            src={agentAuthorityImg.src}
            alt={agentAuthorityImg.alt}
            className="hidden md:block absolute left-[662px] top-0 w-[518px] h-[619px] rounded-2xl border border-teal-300/75 object-cover"
          />
        </div>

        <div className="self-stretch pt-2">
          <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
            Authority modes
          </p>
        </div>
        <div className="self-stretch rounded-xl outline outline-1 -outline-offset-1 outline-color-cyan-67/35 overflow-hidden">
          <div className="min-w-[600px] overflow-x-auto">
            <div className="flex">
              <div className={`w-48 shrink-0 ${thCell}`}>
                <p className={thText}>Mode</p>
              </div>
              <div className={`w-[472.78px] shrink-0 ${thCell}`}>
                <p className={thText}>System behavior</p>
              </div>
              <div className={`flex-1 ${thCell}`}>
                <p className={thText}>Human authority</p>
              </div>
            </div>
            {modeRows.map(([mode, behavior, authority]) => (
              <div key={mode} className="flex">
                <div className={`w-48 shrink-0 ${tdCell}`}>
                  <p className={tdTextStrong}>{mode}</p>
                </div>
                <div className={`w-[472.78px] shrink-0 ${tdCell}`}>
                  <p className={tdText}>{behavior}</p>
                </div>
                <div className={`flex-1 ${tdCell}`}>
                  <p className={tdText}>{authority}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
