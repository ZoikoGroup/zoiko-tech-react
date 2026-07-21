"use client";

import React from "react";

export default function ProductEcosystemGrid() {
  const categories = [
    {
      id: "01",
      name: "CORE INFRASTRUCTURE",
      badgeColor: "text-[#2b56f5] bg-[#eef2ff]",
      pillBg: "bg-[#eef2ff] text-[#2b56f5]",
      products: [
        {
          logo: "/home/ZoikoAI.png",
          title: "ZoikoAI",
          desc: "Governed autonomous agentic AI infrastructure",
          tag: "INFRASTRUCTURE",
        },
        {
          logo: "/home/ZoikoID.png",
          title: "ZoikoID",
          desc: "Digital identity, authentication & access infrastructure",
          tag: "INFRASTRUCTURE",
        },
        {
          logo: "/home/ZoikoNex.png",
          title: "ZoikoNex",
          desc: "Telecom-grade OSS/BSS infrastructure",
          tag: "INFRASTRUCTURE",
        },
        {
          logo: "/home/ZoikoAssure.png",
          title: "ZoikoAssure",
          desc: "Global compliance & regulatory platform",
          tag: "INFRASTRUCTURE",
        },
      ],
    },
    {
      id: "02",
      name: "FINANCIAL STACK",
      badgeColor: "text-[#10b981] bg-[#ecfdf5]",
      pillBg: "bg-[#ecfdf5] text-[#10b981]",
      products: [
        {
          logo: "/home/ZoikoPay.png",
          title: "ZoikoPay",
          desc: "Intelligent global payments platform",
          tag: "FINANCIAL",
        },
        {
          logo: "/home/ZoikoRemit.png",
          title: "ZoikoRemit",
          desc: "Cross-border remittance infrastructure",
          tag: "FINANCIAL",
        },
        {
          logo: "/home/ZoikoMoney.png",
          title: "ZoikoMoney",
          desc: "AI-driven responsible lending platform",
          tag: "FINANCIAL",
        },
        {
          logo: "/home/ZoikoSuite.png",
          title: "ZoikoSuite",
          desc: "Business operations & automation platform",
          tag: "FINANCIAL",
        },
      ],
    },
    {
      id: "03",
      name: "COMMERCE & INTELLIGENCE",
      badgeColor: "text-[#8b5cf6] bg-[#f5f3ff]",
      pillBg: "bg-[#f5f3ff] text-[#8b5cf6]",
      products: [
        {
          logo: "/home/Zoikorum.png",
          title: "Zoikorum",
          desc: "Global marketplace for vetted professional services",
          tag: "COMMERCE",
        },
        {
          logo: "/home/ZoikoAisle.png",
          title: "ZoikoAisle",
          desc: "AI retail intelligence & in-store optimization platform",
          tag: "COMMERCE",
        },
        {
          logo: "/home/ZoikoArc.png",
          title: "ZoikoArc",
          desc: "AI-powered travel & life orchestration platform",
          tag: "COMMERCE",
        },
        {
          logo: "/home/Zoikora.png",
          title: "Zoikora",
          desc: "Global relocation & mobility intelligence platform",
          tag: "COMMERCE",
        },
      ],
    },
    {
      id: "04",
      name: "CONSUMER & VERTICAL PLATFORMS",
      badgeColor: "text-[#f59e0b] bg-[#fffbeb]",
      pillBg: "bg-[#fffbeb] text-[#f59e0b]",
      products: [
        {
          logo: "/home/ZoikoTime.png",
          title: "ZoikoTime",
          desc: "AI productivity & workforce intelligence platform",
          tag: "CONSUMER",
        },
        {
          logo: "/home/ZoikoShield.png",
          title: "ZoikoShield",
          desc: "Cybersecurity, fraud protection & threat intelligence",
          tag: "CONSUMER",
        },
        {
          logo: "/home/ZoikoTV.png",
          title: "ZoikoTV",
          desc: "OTT platform for animals, science & technology",
          tag: "CONSUMER",
        },
        {
          logo: "/home/ZoikoSocial.png",
          title: "ZoikoSocial",
          desc: "Values-based social network for animal lovers",
          tag: "CONSUMER",
        },
      ],
    },
    {
      id: "05",
      name: "SPECIALIZED PLATFORMS",
      badgeColor: "text-[#06b6d4] bg-[#ecfeff]",
      pillBg: "bg-[#ecfeff] text-[#06b6d4]",
      products: [
        {
          logo: "/home/ZoikoPal.png",
          title: "ZoikoPal",
          desc: "AI companion for elderly care & wellbeing",
          tag: "SPECIALIZED",
        },
        {
          logo: "/home/DriverXtra.png",
          title: "DriverXtra",
          desc: "Driver-focused commerce marketplace",
          tag: "SPECIALIZED",
        },
        {
          logo: "/home/BetRithm.png",
          title: "BetRithm",
          desc: "AI-powered betting intelligence & analytics platform",
          tag: "SPECIALIZED",
        },
        {
          logo: "/home/ZoikoWebServices.png",
          title: "ZoikoWebServices",
          desc: "AI-powered digital infrastructure & web services",
          tag: "SPECIALIZED",
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#fafbfc] text-[#0f1124] px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes popUpEcosystem {
              0% { opacity: 0; transform: scale(0.92) translateY(18px); }
              70% { transform: scale(1.02) translateY(-2px); }
              100% { opacity: 1; transform: scale(1) translateY(0); }
            }
            .animate-pop-up-eco {
              animation: popUpEcosystem 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `,
        }}
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center animate-pop-up-eco">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0f4f8] border border-[#e1e8f0] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#207885]" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#5a6578]">
            PLATFORM ECOSYSTEM
          </span>
        </div>

        {/* Header Title */}
        <h2 className="text-3xl md:text-[42px] font-extrabold tracking-tight text-[#0f1124] text-center mb-4 leading-tight">
          The <span className="text-[#207885]">Zoiko Platform</span> Ecosystem
        </h2>

        {/* Narrative Subtitle */}
        <p className="text-[#6b719c] text-[14px] md:text-[15px] text-center font-normal max-w-2xl mb-2 leading-relaxed">
          A unified suite of AI-driven platforms powering identity, finance, compliance, commerce, and global operations.
        </p>
        <p className="text-[#8a91ab] text-[12.5px] text-center font-normal mb-10">
          Built on governed AI, enterprise-grade infrastructure, and global regulatory alignment.
        </p>

        {/* Filter Pills Header Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-[#eef2ff] text-[#2b56f5]">
            • Core Infrastructure
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-[#ecfdf5] text-[#10b981]">
            • Financial Stack
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-[#f5f3ff] text-[#8b5cf6]">
            • Commerce & Intelligence
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-[#fffbeb] text-[#d97706]">
            • Consumer & Vertical
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold bg-[#ecfeff] text-[#0891b2]">
            • Specialized Platforms
          </span>
        </div>

        {/* Categorized Rows Container */}
        <div className="w-full flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.id} className="w-full flex flex-col">
              
              {/* Category Header Bar with Divider */}
              <div className="flex items-center gap-3 mb-6 w-full">
                <span className="text-[12px] font-bold text-[#207885] tracking-tight">
                  {cat.id}
                </span>
                <span className="text-[12px] font-bold tracking-widest text-[#8a91ab] uppercase">
                  {cat.name}
                </span>
                <div className="h-[1px] bg-[#e2e8f0] grow ml-2" />
              </div>

              {/* 4-Column Product Cards Grid */}
              <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full">
                {cat.products.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-[calc(50%-0.625rem)] lg:w-1/4 bg-white border border-[#e8ecef] rounded-2xl p-5 min-h-[210px] flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer relative"
                  >
                    {/* Top Logo Container */}
                    <div className="h-12 w-full flex items-center justify-start mb-3">
                      <img
                        src={item.logo}
                        alt={item.title}
                        className="max-h-10 max-w-[140px] object-contain"
                        onError={(e) => {
                          // Fallback to text title if logo image isn't found yet
                          const target = e.target as HTMLElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector(".fallback-text")) {
                            const txt = document.createElement("span");
                            txt.className =
                              "fallback-text text-[18px] font-extrabold text-[#0f1124]";
                            txt.innerText = item.title;
                            parent.appendChild(txt);
                          }
                        }}
                      />
                    </div>

                    {/* Middle Description Paragraph */}
                    <p className="text-[12px] text-[#6b719c] font-normal leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    {/* Bottom Badge Tag & Arrow Icon */}
                    <div className="flex items-center justify-between pt-2">
                      <span
                        className={`text-[9.5px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase ${cat.pillBg}`}
                      >
                        {item.tag}
                      </span>

                      <div className="w-6 h-6 rounded-md bg-[#f0f4f8] group-hover:bg-[#207885] group-hover:text-white text-[#8a91ab] flex items-center justify-center transition-colors">
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M7 17L17 7M17 7H8M17 7V16"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}