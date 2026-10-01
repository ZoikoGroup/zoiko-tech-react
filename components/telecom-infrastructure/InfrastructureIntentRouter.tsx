import React from "react";
import { ArrowRight } from "lucide-react";

interface TelecomPathCard {
  title: string;
  description: string;
  imageSrc: string;
}

const telecomPaths: TelecomPathCard[] = [
  {
    title: "Modernize OSS/BSS",
    description:
      "Connect and evolve operator systems without replacing everything at once.",
    imageSrc: "/tele/2.png",
  },
  {
    title: "Strengthen subscriber foundations",
    description:
      "Clarify subscriber, account and service state, and the systems that own it.",
    imageSrc: "/tele/3.png",
  },
  {
    title: "Standardize identity",
    description:
      "Authenticate subscribers, operators, services and integrations with clear authority.",
    imageSrc: "/tele/4.png",
  },
  {
    title: "Build cloud & digital foundations",
    description:
      "Use scalable digital infrastructure and shared platform foundations.",
    imageSrc: "/tele/5.png",
  },
  {
    title: "Connect APIs & systems",
    description:
      "Use APIs, events, webhooks, SDKs and observability instead of point-to-point.",
    imageSrc: "/tele/6.png",
  },
  {
    title: "Build communications services",
    description:
      "Use approved local-number, calling, routing and real-time communications.",
    imageSrc: "/tele/7.png",
  },
];

const builtForTags = [
  "MNO",
  "MVNO",
  "Communications provider",
  "Enterprise communications",
  "Technology / platform provider",
] as const;

export default function InfrastructureIntentRouter() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-6xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#247780] mb-3">
            Infrastructure Intent Router
          </p>
          <h1 className="text-4xl md:text-5xl max-w-4xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
            What are you trying to do with your telecom stack?
          </h1>
          <p className="text-lg max-w-xl text-gray-600 leading-relaxed">
            Start from the job in front of you. Each path leads to the relevant
            layer, platform evidence and specialist team.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {telecomPaths.map((card, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl h-[380px] flex flex-col justify-end p-6 border border-gray-200 shadow-sm transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${card.imageSrc})` }}
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {card.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link w-fit"
                >
                  <span>Choose path</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Built For Tags */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
          <span className="text-sm font-semibold text-gray-900 mr-1">
            Built for:
          </span>
          {builtForTags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium bg-gray-50 border border-gray-200/80 text-gray-700 shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
