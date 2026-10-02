import { SectionHeader, cardDark, body, primaryBtn, ghostBtn, gradDarkToTeal } from "./shared";

const pillars = [
  {
    title: "Responsible AI",
    desc: (
      <>
        Governance, human oversight,<br />
        evaluation and accountable<br />
        deployment.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Security",
    desc: (
      <>
        Identity, least privilege, tool and<br />
        credential boundaries, secure<br />
        integration, incident response,<br />
        containment.
      </>
    ),
  },
  {
    title: "Privacy",
    desc: (
      <>
        Purpose limitation, data<br />
        minimization, sensitive-data<br />
        boundaries, retention.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Compliance",
    desc: (
      <>
        Applicable obligations and<br />
        evidence only where legally and<br />
        product-wise verified.
      </>
    ),
    pb: "pb-11",
  },
  {
    title: "Reliability",
    desc: (
      <>
        System and tool health, failure<br />
        handling, versioning, rollback,<br />
        ownership.
      </>
    ),
    pb: "pb-10",
  },
  {
    title: (
      <>
        Accessibility / human-<br />
        centered design
      </>
    ),
    desc: (
      <>
        Review interfaces, notices and<br />
        human decision points are<br />
        accessible and understandable.
      </>
    ),
  },
];

export default function ResponsibleAiSecurityPrivacy() {
  return (
    <section
      id="responsible-ai"
      className="w-full px-8 md:px-32 py-24"
      style={gradDarkToTeal}
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-5">
        <SectionHeader light title="Responsible AI, security and privacy" />
        <div className="self-stretch flex flex-wrap content-start gap-4">
          {pillars.map((c, i) => (
            <div
              key={i}
              className={`w-[283px] px-4 pt-5 ${c.pb ?? "p-5"} ${cardDark} flex flex-col items-start gap-1.5 overflow-hidden`}
            >
              <div className="self-stretch">
                <p className="zk-heading text-color-white-solid text-base font-bold leading-5">
                  {c.title}
                </p>
              </div>
              <div className="w-full max-w-[670.68px] pb-[0.63px]">
                <p className={`${body} tracking-tight text-color-cyan-90`}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap content-start pt-2">
          <div className="min-h-14 pr-3 pb-3">
            <a href="#contact-sales" className={primaryBtn}>
              Responsible AI
            </a>
          </div>
          <div className="min-h-14 pr-3 pb-3">
            <a href="#trust-center" className={ghostBtn}>
              Trust Center
            </a>
          </div>
          <div className="min-h-14 pr-3 pb-3">
            <a href="#security" className={ghostBtn}>
              Security
            </a>
          </div>
          <div className="min-h-14 pr-3 pb-3">
            <a href="#privacy" className={ghostBtn}>
              Privacy
            </a>
          </div>
          <div className="min-h-14 pr-3 pb-3">
            <a href="#regulatory-compliance" className={ghostBtn}>
              Regulatory &amp; Compliance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
