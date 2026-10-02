import React from "react";
import {
  ArrowRight,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react";

interface ColumnItem {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  exploreText: string;
}

const columns: ColumnItem[] = [
  {
    title: "OSS/BSS & subscriber systems",
    description:
      "Subscriber, account, service and order concepts, each tied to its authoritative system and reconciliation path.",
    imageSrc: "/tele/8.png",
    tags: ["System of record", "State rail", "Interface owner"],
    exploreText: "Explore Telecom Operations & Monetization",
  },
  {
    title: "Identity & authority",
    description:
      "Subscriber, operator, service and delegated identities with clear owners, scopes and lifecycle.",
    imageSrc: "/tele/3.png",
    tags: ["Provision", "Change", "Revoke", "Review"],
    exploreText: "Explore Identity & Access",
  },
  {
    title: "Cloud & digital infrastructure",
    description:
      "Environment boundaries and shared foundations. Regions and hosting come only from approved documentation.",
    imageSrc: "/tele/5.png",
    tags: ["Environments", "Shared services", "Resilience"],
    exploreText: "Explore Cloud & Developer Infrastructure",
  },
  {
    title: "API, event & integration fabric",
    description:
      "Approved APIs, SDKs, events and webhooks with versioning, scoped access and visible failures.",
    imageSrc: "/tele/6.png",
    tags: ["APIs", "Events", "Versioning"],
    exploreText: "Explore Developer Platform",
  },
  {
    title: "Communications infrastructure",
    description:
      "Local numbers, calling, routing and real-time communications through Zoiko Local, within approved markets.",
    imageSrc: "/tele/7.png",
    tags: ["Local numbers", "Calling", "Routing"],
    exploreText: "Explore communications infrastructure",
  },
];

export default function FivePlacesSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#247780] mb-3">
            The Layers in Focus
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            Five places where operator stacks are won or lost
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Each layer keeps its own specialist page. This hub shows what it
            owns and how it connects to the rest.
          </p>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {columns.map((col, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200/80 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Column Card Image */}
                <div className="w-full h-32 rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${col.imageSrc})` }}
                  />
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                  {col.description}
                </p>

                {/* Tags / Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {col.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="inline-flex items-center px-2 py-1 rounded-md text-[11px] font-medium bg-gray-50 border border-gray-200 text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <a
                href="#"
                className="inline-flex items-center text-xs font-semibold text-gray-900 hover:text-emerald-600 transition-colors group pt-4 border-t border-gray-100"
              >
                <span className="flex-1">{col.exploreText}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 flex-shrink-0 transition-transform group-hover:translate-x-1 text-gray-400 group-hover:text-emerald-600" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Preview Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Preview Card: OSS/BSS system map */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                OSS/BSS system map
              </h4>
              <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                Specimen · Synthetic data
              </span>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Object</th>
                    <th className="pb-3 font-semibold">System of record</th>
                    <th className="pb-3 font-semibold">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs">
                  <tr>
                    <td className="py-3 font-medium text-gray-900">
                      Subscriber / account
                    </td>
                    <td className="py-3 text-gray-600">Billing system</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">
                      Service / entitlement
                    </td>
                    <td className="py-3 text-gray-600">ZoikoNex</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5" />
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">
                      Number inventory
                    </td>
                    <td className="py-3 text-gray-600">Zoiko Local</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5" />
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-gray-900">
                      Legacy CRM record
                    </td>
                    <td className="py-3 text-gray-600">Legacy CRM</td>
                    <td className="py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-50 text-rose-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1.5" />
                        Conflicting
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Interface Contract Sub-box */}
            <div className="bg-gray-50/80 rounded-xl p-4 border border-gray-100">
              <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-1">
                Interface contract
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1">
                ZoikoNex → Billing system · service.activated event
              </p>
              <p className="text-[11px] text-gray-500">
                On activation · v2 · Owner: Integration team · System owner: BSS
                lead
              </p>
            </div>
          </div>

          {/* Right Preview Card: Developer contract card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 tracking-tight">
                  Developer contract card
                </h4>
                <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                  Specimen · Synthetic data
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-5 gap-x-4 mb-8 text-xs">
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Interface
                  </span>
                  <span className="font-semibold text-gray-900">
                    Subscriber Service API
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Purpose
                  </span>
                  <span className="font-semibold text-gray-900">
                    Read service and entitlement state
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Environment
                  </span>
                  <span className="font-semibold text-gray-900">
                    Sandbox · Production
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Version
                  </span>
                  <span className="font-semibold text-gray-900">
                    v2 (current)
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Authentication
                  </span>
                  <span className="font-semibold text-emerald-600">
                    [Approved method]
                  </span>
                </div>
                <div>
                  <span className="block text-[11px] text-gray-400 mb-1">
                    Status
                  </span>
                  <span className="font-semibold text-gray-600">
                    ■ [Registry status]
                  </span>
                </div>
              </div>
            </div>

            {/* Links footer inside card */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-600">
              <a href="#" className="hover:underline">
                Docs
              </a>
              <a href="#" className="hover:underline">
                Changelog
              </a>
              <a href="#" className="hover:underline">
                System status
              </a>
            </div>
          </div>
        </div>

        {/* Footer Warning Notice */}
        <div className="flex items-center space-x-2 text-xs text-gray-500 pt-2">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
          <span>
            Number availability, emergency services, lawful intercept,
            recording, interconnect and licensing are never inferred from a
            generic communications descriptor.
          </span>
        </div>
      </div>
    </section>
  );
}
