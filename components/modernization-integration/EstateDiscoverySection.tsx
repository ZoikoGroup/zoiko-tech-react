import Link from "next/link";

type DiscoveryRow = {
  object: string;
  fields: string;
};

const discoveryData: DiscoveryRow[] = [
  {
    object: "System / service",
    fields: "Name, purpose, owner, operator, lifecycle state, criticality.",
  },
  {
    object: "Users / roles",
    fields: "Who depends on it; internal or external; access model.",
  },
  {
    object: "Interfaces",
    fields:
      "Inbound / outbound APIs, files, queues, events, webhooks or manual handoffs.",
  },
  {
    object: "Data",
    fields:
      "Authoritative records, sensitivity, retention, jurisdiction, synchronization.",
  },
  {
    object: "Dependencies",
    fields:
      "Upstream / downstream applications, jobs, processes and external parties.",
  },
  {
    object: "Operational profile",
    fields:
      "Availability needs, batch windows, peak periods, incident and support path.",
  },
  {
    object: "Change constraints",
    fields:
      "Blackout periods, regulatory deadlines, contractual and vendor constraints.",
  },
  {
    object: "Evidence",
    fields:
      "Architecture docs, interface contracts, logs, usage evidence, owner validation.",
  },
];

type BottomCardProps = {
  title: string;
  description: string;
};

const bottomCardsData: BottomCardProps[] = [
  {
    title: "System drawer",
    description:
      "Purpose, owner, dependencies, interfaces, data, risk and change notes.",
  },
  {
    title: "Risk rail",
    description:
      "Single points of failure, unsupported interfaces, unknown owners, duplicate capability, stale documentation.",
  },
  {
    title: "Actions",
    description:
      "Mark target state, assign owner, add dependency, attach evidence, flag unknown, export review.",
  },
];

export default function EstateDiscoverySection() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header Area */}
        <div className="mb-8 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 tracking-tight mb-4">
            Estate discovery and dependency map
          </h2>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            Before any modernization choice, know what exists, who depends on it
            and what it touches.
          </p>
        </div>

        {/* Discovery Table Container */}
        <div className="bg-white border border-[#D5E3E5] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] mb-12">
          {/* Table Header Caption */}
          <div className="px-6 py-4 bg-white border-b border-[#D5E3E5]">
            <span className="text-xs font-medium text-[#0A2023] tracking-wider uppercase">
              What discovery captures
            </span>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1C5C62] text-white">
                  <th className="py-4 px-6 font-semibold text-sm md:text-base w-1/3">
                    Discovery object
                  </th>
                  <th className="py-4 px-6 font-semibold text-sm md:text-base w-2/3">
                    Required fields / questions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E3E5]">
                {discoveryData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#F3F9FA]/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-950 text-sm md:text-base">
                      {row.object}
                    </td>
                    <td className="py-4 px-6 text-slate-600 text-sm md:text-base">
                      {row.fields}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {bottomCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-[#F3F9FA] border border-[#D5E3E5] p-8 rounded-3xl flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold text-slate-950 mb-3 tracking-tight">
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3.5 rounded-[14px] bg-[#247780] text-white hover:bg-[#15484c] transition-colors text-sm md:text-base font-medium shadow-md"
          >
            View discovery model
          </Link>
        </div>
      </div>
    </section>
  );
}
