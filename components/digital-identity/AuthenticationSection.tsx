import React from "react";
import { AlertTriangle, Check, X, HelpCircle, ShieldAlert } from "lucide-react";

interface AuthStateCard {
  title: string;
  description: string;
  variant:
    | "authenticated"
    | "unauthenticated"
    | "needsStep"
    | "expired"
    | "reviewRequired"
    | "unknown";
}

const AUTH_CARDS: AuthStateCard[] = [
  {
    title: "Authenticated",
    description: "The responsible system says so, with time and source.",
    variant: "authenticated",
  },
  {
    title: "Unauthenticated",
    description: "No current authentication from the source.",
    variant: "unauthenticated",
  },
  {
    title: "Needs step",
    description: "A further step is required before deciding.",
    variant: "needsStep",
  },
  {
    title: "Expired",
    description: "Authentication validity has passed.",
    variant: "expired",
  },
  {
    title: "Review required",
    description: "A person must look before access proceeds.",
    variant: "reviewRequired",
  },
  {
    title: "Unknown",
    description: "Source unavailable or silent; never upgraded to authorized.",
    variant: "unknown",
  },
];

const CARD_STYLES: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    icon: React.ReactNode;
  }
> = {
  authenticated: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#E6F4F1]",
    badgeText: "text-[#2b7a78]",
    icon: <Check className="w-3.5 h-3.5 text-[#2b7a78]" />,
  },
  unauthenticated: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#EDF2F7]",
    badgeText: "text-[#4A5568]",
    icon: <X className="w-3.5 h-3.5 text-[#4A5568]" />,
  },
  needsStep: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#F3E8FF]",
    badgeText: "text-[#9333EA]",
    icon: <ShieldAlert className="w-3.5 h-3.5 text-[#9333EA]" />,
  },
  expired: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#D97706]",
    icon: <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />,
  },
  reviewRequired: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#FEF3C7]",
    badgeText: "text-[#D97706]",
    icon: <AlertTriangle className="w-3.5 h-3.5 text-[#D97706]" />,
  },
  unknown: {
    bg: "bg-white",
    border: "border-gray-100",
    text: "text-[#0B132B]",
    badgeBg: "bg-[#EDF2F7]",
    badgeText: "text-[#4A5568]",
    icon: <HelpCircle className="w-3.5 h-3.5 text-[#4A5568]" />,
  },
};

export default function AuthenticationSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Step Info, Header & Photo */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Step Indicator */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-[#2b7a78] font-bold text-xs tracking-widest uppercase">
              STEP 2 OF 7 · AUTHENTICATION
            </span>
          </div>
          <div className="flex items-center space-x-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2b7a78]/40"></span>
            <span className="w-6 h-2 rounded-full bg-[#2b7a78]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          </div>

          {/* Heading & Description */}
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0B132B] tracking-tight leading-[1.1] mb-6">
            Authentication is a state, not a method we invent
          </h2>
          <p className="text-[#4A5568] text-base leading-relaxed mb-8">
            No method names, assurance scores or device fingerprinting unless
            current documentation defines them.
          </p>

          {/* Authentication Image Thumbnail Card */}
          <div className="w-full max-w-[340px] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100">
            <div className="relative w-full h-[220px]">
              <img
                src="/digital/16.png"
                alt="Authentication state"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Grid of Auth States & Boundary Warning Box */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* 6 State Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUTH_CARDS.map((card, index) => {
              const style = CARD_STYLES[card.variant];
              return (
                <div
                  key={index}
                  className={`${style.bg} border ${style.border} rounded-xl p-5 shadow-sm flex flex-col justify-between`}
                >
                  <div className="mb-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${style.badgeBg} ${style.badgeText} mb-3`}
                    >
                      <span className="mr-1.5 shrink-0">{style.icon}</span>
                      {card.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Authentication Boundary Warning Box */}
          <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-xl p-4 flex items-start space-x-3 text-xs text-[#92400E]">
            <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
            <span className="leading-relaxed font-medium">
              Authentication boundary. Authentication alone does not grant
              access, prove legal identity or establish entitlement.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
