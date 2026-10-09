import React from 'react';
import Image from 'next/image';

interface StepCard {
  title: string;
  description: string;
  status?: string;
}

const stepCards: StepCard[] = [
  {
    title: 'Define workload',
    description: 'Identify the platform or workload, business owner, data and identity context, markets and jurisdictions, and authoritative downstream systems.',
    status: 'Scope approved',
  },
  {
    title: 'Map deployment / responsibility',
    description: 'Define operator, deployment model, customer and external-provider boundaries, and support ownership.',
    status: 'Responsibility map approved',
  },
  {
    title: 'Map interfaces',
    description: 'Document APIs, events, auth and integration dependencies, and failure and recovery paths.',
    status: 'Interface contract approved',
  },
  {
    title: 'Map controls',
    description: 'Identity, security, data, governance, privacy, evidence and regulated- workload requirements.',
    status: 'Control design approved',
  },
  {
    title: 'Validate states',
    description: 'Test unavailable or stale registry, auth failure, event or API failure, degraded service, downstream mismatch and recovery.',
    status: 'Acceptance criteria met',
  },
  {
    title: 'Pilot',
    description: 'A bounded workload or integration using controlled or synthetic data where possible.',
    status: 'Pilot reviewed',
  },
  {
    title: 'Expand',
    description: 'Add workloads, markets or integrations only after readiness, operator, support, evidence and compliance approval.',
    status: 'Expansion approved',
  },
];

export default function ImplementationAndAdoption() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Implementation and adoption
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-[#FFFFFF0F] border border-[#7FD0D98C] border-t-[3px] flex flex-col gap-4 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white">
                {card.title}
              </h3>
              <p className="text-[15px] text-[#DCECEE] leading-relaxed">
                {card.description}
              </p>
              {card.status && (
                <div className="mt-auto pt-2 text-sm font-medium text-[#7FD0D9]">
                  {card.status}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Graph Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/41.png"
              alt="Implementation and adoption growth chart"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}