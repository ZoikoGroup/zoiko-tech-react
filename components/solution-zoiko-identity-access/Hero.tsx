"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
      delay: customDelay,
    },
  }),
};

const chainPillClass =
  "font-inter font-semibold text-[13.6px] leading-[21.76px] text-white text-center bg-[rgba(36,119,128,0.6)] border border-[rgba(127,208,217,0.5)] rounded-[10px] px-[8px] py-[11px] flex-1 flex items-center justify-center";

const flowBoxClass =
  "font-inter font-semibold text-[13.6px] leading-[21.76px] text-white text-center bg-[rgba(255,255,255,0.07)] border border-[rgba(127,208,217,0.5)] rounded-[10px] px-[8px] py-[11px] flex-1 flex items-center justify-center";

const arrowClass = "font-inter font-semibold text-[13.6px] text-[#7fd0d9] px-[4px]";

export default function Hero() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:pt-[95px] lg:pb-[104px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(136.93deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
            className="flex items-center justify-between gap-[64px]"
          >
            <div className="shrink-0 w-[692px] max-w-full flex flex-col items-start">
              <span className="font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px]">
                Identity &amp; Access
              </span>

              <h1 className="font-plus-jakarta font-bold text-[54.4px] leading-[62.56px] tracking-[-1.088px] text-white mt-[25px]">
                Make identity, access and
                <br />
                delegated authority explicit across the systems you operate.
              </h1>

              <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[33px] max-w-[695px]">
                Zoiko Tech&rsquo;s Identity &amp; Access architecture is
                designed around trusted identities for people and systems,
                scoped authorization, least privilege, delegated authority,
                lifecycle control and evidence — so access decisions remain
                understandable and governable as the technology estate grows.
              </p>

              <div className="flex flex-wrap items-center gap-[12px] mt-[19px]">
                <a
                  href="#discuss-identity-architecture"
                  className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
                >
                  Discuss your identity architecture
                </a>
                <a
                  href="#explore-identity-technology"
                  className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
                >
                  Explore Identity Technology
                </a>
              </div>
            </div>

            <div className="shrink-0 w-[424px] h-[424px]">
              <img
                src="/solution-zoiko-identity-access/hero-identity-access-illustration.png"
                alt="Identity and access architecture illustration: identity card, lock, and connected database, app grid, and cloud resource nodes"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="w-full max-w-[1180px] mx-auto bg-[rgba(10,46,42,0.5)] rounded-[20px] flex flex-col items-center justify-center gap-[16px] py-[24px] px-[16px] mt-[24px]"
          >
            <div className="flex flex-wrap gap-[8px] items-stretch justify-center w-full">
              <span className={chainPillClass}>Delegation</span>
              <span className={chainPillClass}>Review</span>
              <span className={chainPillClass}>Revocation</span>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full">
              <span className={flowBoxClass}>Identity</span>
              <span className={arrowClass}>→</span>
              <span className={flowBoxClass}>Authentication</span>
              <span className={arrowClass}>→</span>
              <span className={flowBoxClass}>Authorization / entitlement</span>
              <span className={arrowClass}>→</span>
              <span className={flowBoxClass}>Resource</span>
              <span className={arrowClass}>→</span>
              <span className={flowBoxClass}>Evidence</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[40px] pb-[46px] px-[24px] sm:pt-[60.44px] sm:pb-[69.43px] sm:px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(133.65deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto flex flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.05}
          >
            <p className="font-inter font-normal text-[13.6px] leading-[21.76px] text-[#7fd0d9] break-words">
              Home / Solutions / Identity &amp; Access
            </p>

            <span className="inline-block font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[10px] py-[1px] mt-[25px]">
              Identity &amp; Access
            </span>

            <h1 className="font-sora font-bold text-[28px] sm:text-[36.9px] leading-[34px] sm:leading-[42.39px] tracking-[-0.737px] text-white mt-[18px]">
              Make identity, access and delegated authority explicit across
              the systems you operate.
            </h1>

            <p className="font-inter font-normal text-[17.6px] leading-[28.16px] text-[#dcecee] mt-[22px]">
              Zoiko Tech&rsquo;s Identity &amp; Access architecture is
              designed around trusted identities for people and systems,
              scoped authorization, least privilege, delegated authority,
              lifecycle control and evidence — so access decisions remain
              understandable and governable as the technology estate grows.
            </p>

            <div className="flex flex-wrap items-center gap-[12px] mt-[19px]">
              <a
                href="#discuss-identity-architecture"
                className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
              >
                Discuss your identity architecture
              </a>
              <a
                href="#explore-identity-technology"
                className="font-inter font-semibold text-[16px] text-white border-2 border-[#7fd0d9] rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/10 transition-colors duration-200"
              >
                Explore Identity Technology
              </a>
            </div>

            <a
              href="#explore-cybersecurity-resilience"
              className="font-inter font-semibold text-[16px] leading-[25.6px] text-[#7fd0d9] underline mt-[12px] inline-block"
            >
              Explore Cybersecurity &amp; Resilience →
            </a>

            <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-[#dcecee] mt-[12px]">
              Identity-aware. Least-privilege by design. Delegation made
              explicit. Evidence preserved.
            </p>

            <div className="flex flex-wrap gap-[8px] mt-[27px]">
              {["Users", "Administrators", "Services", "Integrations", "AI / agents"].map(
                (actor) => (
                  <span
                    key={actor}
                    className="font-inter font-normal text-[13.6px] leading-[21.76px] text-[#7fd0d9] border border-[#7fd0d9] rounded-full px-[14px] py-[5px]"
                  >
                    {actor}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.15}
            className="flex flex-col gap-[16px] mt-[35px]"
          >
            <div className="flex flex-wrap items-center gap-[8px]">
              <span className={`${flowBoxClass} flex-1 min-w-[110px]`}>Identity</span>
              <span className={arrowClass}>→</span>
              <span className={`${flowBoxClass} flex-1 min-w-[110px]`}>Authentication</span>
              <span className={arrowClass}>→</span>
              <span className={`${flowBoxClass} flex-1 min-w-[110px]`}>
                Authorization / entitlement
              </span>
              <span className={arrowClass}>→</span>
              <span className={`${flowBoxClass} flex-1 min-w-[110px]`}>Resource</span>
            </div>
            <span className={flowBoxClass}>Evidence</span>

            <div className="flex flex-wrap gap-[8px] justify-center pt-[19px]">
              <span className={`${chainPillClass} min-w-[150px]`}>Delegation</span>
              <span className={`${chainPillClass} min-w-[150px]`}>Review</span>
              <span className={`${chainPillClass} min-w-[150px]`}>Revocation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
