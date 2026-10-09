import React from "react";

export default function AuditRoleBoundaries() {
  const roles = [
    {
      number: "01",
      title: "Committee member",
      description:
        "Authorized summaries and governed questions;\ncannot silently edit source evidence.",
    },
    {
      number: "02",
      title: "Committee chair",
      description:
        "Agenda/priorities within actual charter; no\nadministrative override inferred.",
    },
    {
      number: "03",
      title: "Management owner",
      description:
        "Own responses and remediation; cannot\nindependently attest own actions.",
    },
    {
      number: "04",
      title: "Internal audit liaison",
      description:
        "Authorized findings/evidence with\nprovenance\nseparate from management.",
    },
    {
      number: "05",
      title: "Controller / Finance",
      description:
        "Relevant finance response and\nauthorization;\ncannot speak for committee.",
    },
    {
      number: "06",
      title: "Compliance / Risk",
      description:
        "Assigned risk/control context; no legal\nsufficiency\nclaim.",
    },
    {
      number: "07",
      title: "Invited viewer",
      description:
        "Restricted subset only; expiry/revocation\nonly in\napproved service.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#241C59] via-[#35235F] to-[#733557] py-20 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-12">
          Every role has a boundary.
        </h2>

        {/* Grid of Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF06] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Number */}
              <span className="text-[#F0596B] font-mono text-xs font-semibold tracking-widest mb-4">
                {role.number}
              </span>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {role.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
