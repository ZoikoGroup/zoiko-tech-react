import React from "react";
import { AlertTriangle } from "lucide-react";

interface ActorCard {
  title: string;
  imageSrc: string;
  description: string;
  warning: string;
}

const ACTORS: ActorCard[] = [
  {
    title: "Person",
    imageSrc: "/digital/22.png",
    description:
      "Subject reference, source, authentication, entitlement and delegation state.",
    warning: "Not inferred: employment status, legal proofing, biometrics",
  },
  {
    title: "Service / machine",
    imageSrc: "/digital/23.png",
    description: "Workload or system actor with an owner and scoped authority.",
    warning: "Not inferred: certificate, key or secret mechanism",
  },
  {
    title: "Organization",
    imageSrc: "/digital/24.png",
    description: "Tenant or legal-entity reference where the product needs it.",
    warning: "Not inferred: ownership, legal authority, regulated status",
  },
  {
    title: "External actor / guest",
    imageSrc: "/digital/25.png",
    description: "External source, sponsor, scope, expiry and review route.",
    warning: "Not inferred: federation, external directory integration",
  },
  {
    title: "Agent / automation",
    imageSrc: "/digital/26.png",
    description: "Agent identity tied to a principal and delegated authority.",
    warning: "Not inferred: legal identity, autonomy, hidden privilege",
  },
];

export default function CastOfSubjectsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16">
          <div className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase mb-4">
            PEOPLE, SERVICE, ORGANIZATION & EXTERNAL ACTORS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Meet the cast of subjects
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed">
            Five kinds of actor, each handled at source-backed abstraction, and
            each with a clear note on what we will not assume.
          </p>
        </div>

        {/* 5 Actor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full items-stretch">
          {ACTORS.map((actor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col items-center text-center">
                {/* Circular Image Thumbnail */}
                <div className="">
                  <img
                    src={actor.imageSrc}
                    alt={actor.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Actor Title */}
                <h3 className="text-base font-bold text-[#0B132B] mb-3">
                  {actor.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#4A5568] leading-relaxed mb-6">
                  {actor.description}
                </p>
              </div>

              {/* Warning Box */}
              <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-3 flex items-start space-x-2 text-[11px] text-[#92400E] text-left">
                <AlertTriangle className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                <span className="leading-tight font-medium">
                  {actor.warning}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
