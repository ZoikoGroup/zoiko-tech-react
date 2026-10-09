import React from "react";
import Image from "next/image";

interface WorkloadCard {
  title: string;
  description: string;
}

const workloadCards: WorkloadCard[] = [
  {
    title: 'What does "regulated workloads" mean here?',
    description:
      "It is a workload context from the source descriptor for Zoiko Cloud. It doesn't by itself establish legal eligibility, certification or deployment approval.",
  },
  {
    title: "Can a regulated customer deploy here?",
    description:
      "Answered only from the exact product, deployment, jurisdiction, market and evidence registry state.",
  },
  {
    title: "What if evidence is missing?",
    description:
      'We don\'t render "compliant" or "approved." We route to Trust, Contact Sales or specialist review.',
  },
  {
    title: "How are claims worded?",
    description:
      "Certified / Attested, then Compliant only where legally verified, then Aligned / Designed to, then Roadmap / Target. Unknown / Not claimed when absent.",
  },
];

export default function RegulatedWorkloads() {
  return (
    <div className="w-full bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white flex justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What &ldquo;regulated workloads&rdquo; does and doesn&rsquo;t mean
          </h1>
        </div>

        {/* Main Content Layout: Cards Grid on Left, Feature Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cards Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workloadCards.map((card, index) => (
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
              </div>
            ))}
          </div>

          {/* Right Side Illustration Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full h-72 sm:h-96 relative">
              <Image
                src="/cloud/bg33.png"
                alt="Regulated Workloads Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Network Image Section */}
        <div className="w-full relative mt-8 flex justify-center">
          <div className="w-full max-w-7xl h-64 sm:h-80 relative">
            <Image
              src="/cloud/34.png"
              alt="Network Infrastructure Evidence"
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
