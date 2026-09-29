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

const callingItems = [
  {
    title: "Internal calling",
    lines: ["A communication mode where", "supported."],
  },
  {
    title: "External calling",
    lines: ["Approved external routes only."],
  },
  {
    title: "Local numbers",
    lines: [
      "With approved geography, operator and",
      "regulatory context.",
    ],
  },
  {
    title: "Routing & video",
    lines: ["At product-approved level only."],
  },
];

export default function Calling() {
  return (
    <section className="w-full">
      {/* ============ DESKTOP (lg and up) — 1440w design, fully independent from tablet ============ */}
      <div
        className="hidden lg:flex lg:flex-col lg:items-center lg:py-[100px] lg:px-[130px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(136.87deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col items-start gap-[20px]"
        >
          <div className="flex gap-[40px] items-center justify-center w-full">
            <div className="flex-1 min-w-0 flex flex-col items-start gap-[19.9px]">
              <h2 className="font-sora font-bold text-[35.2px] leading-[40.48px] text-white">
                Calling and business communications
              </h2>

              <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686px]">
                Calling is part of the communication model. External routes,
                numbers and markets appear only where approved.
              </p>

              <div className="grid grid-cols-2 gap-[16px] w-full">
                {callingItems.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start"
                  >
                    <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                      {item.title}
                    </h3>
                    <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                      {item.lines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < item.lines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-[536px] h-[280px] rounded-[14px] overflow-hidden">
              <img
                src="/solution-zoiko-communications-collaboration/calling-business-video-call-photo.png"
                alt="Professional taking a business video call"
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>

          <div className="bg-black/35 border-l-4 border-[#7fd0d9] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[11px] pb-[12px] max-w-[742.84px] w-full">
            <p className="text-[#dcecee] text-[14.7px] leading-[23.55px] max-w-[631.41px]">
              <span className="font-inter font-bold">
                Telecom and regulatory boundary.
              </span>{" "}
              <span className="font-inter font-normal">
                Number availability, emergency calling, licensing, recording
                consent, messaging registration, portability and geographic
                coverage are not implied. Confirm current availability with
                authoritative product and regulatory sources.
              </span>
            </p>
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pt-[7px] pb-[8.47px]">
                Calling / local communications view (specimen states)
              </p>
              <div className="flex w-full">
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[334.66px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Capability
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[365.08px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Market
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[478.27px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    State
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[334.66px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Local numbers
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[365.08px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Sample market A
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[478.27px]">
                  <span className="inline-flex items-start bg-[#fff5d6] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#6b4e00]">
                    Requires review
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[334.66px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    External calling
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[365.08px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Sample market B
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[478.27px]">
                  <span className="inline-flex items-start bg-[#e6f2f4] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#14484e]">
                    Not currently published
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ============ TABLET & MOBILE (below lg) — 768w design, fully independent from desktop ============ */}
      <div
        className="flex lg:hidden flex-col items-start pt-[60.43px] pb-[61.45px] px-[38.4px] w-full"
        style={{
          backgroundImage:
            "linear-gradient(135.01deg, rgb(0, 0, 0) 0%, rgb(28, 92, 98) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.05}
          className="w-full max-w-[1180px] mx-auto flex flex-col gap-[20px] items-start"
        >
          <div className="flex flex-col gap-[14.2px] items-start w-full">
            <h2 className="font-sora font-bold text-[25.6px] leading-[29.44px] text-white max-w-[507.73px]">
              Calling and business communications
            </h2>

            <p className="font-inter font-normal text-[16px] leading-[25.6px] text-[#dcecee] max-w-[686.38px]">
              Calling is part of the communication model. External routes,
              numbers and markets appear only where approved.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[16px] w-full">
              {callingItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/[0.06] border border-[rgba(127,208,217,0.35)] rounded-[14px] p-[20px] flex flex-col gap-[6px] items-start"
                >
                  <h3 className="font-sora font-bold text-[16.8px] leading-[19.32px] text-white w-full">
                    {item.title}
                  </h3>
                  <p className="font-inter font-normal text-[15.2px] leading-[24.32px] text-[#dcecee] w-full">
                    {item.lines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.lines.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <figure
            className="border border-[rgba(127,208,217,0.4)] rounded-[16px] overflow-hidden relative w-full min-h-[280px]"
            style={{
              backgroundImage:
                "linear-gradient(134.88deg, rgb(0, 0, 0) 0%, rgb(36, 119, 128) 100%)",
            }}
          >
            <img
              src="/solution-zoiko-communications-collaboration/calling-business-video-call-photo.png"
              alt="Professional taking a business video call"
              className="w-full h-[280px] object-cover"
            />
            <figcaption
              className="absolute bottom-0 left-0 right-0 px-[14px] py-[8px] font-inter font-normal text-[12.5px] leading-[19.97px] text-white"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
              }}
            >
              Business calling within explicit market boundaries
            </figcaption>
          </figure>

          <div className="bg-black/35 border-l-4 border-[#7fd0d9] rounded-tr-[10px] rounded-br-[10px] px-[16px] pt-[11px] pb-[12px] w-full">
            <p className="text-[#dcecee] text-[14.7px] leading-[23.55px] max-w-[631.41px]">
              <span className="font-inter font-bold">
                Telecom and regulatory boundary.
              </span>{" "}
              <span className="font-inter font-normal">
                Number availability, emergency calling, licensing, recording
                consent, messaging registration, portability and geographic
                coverage are not implied. Confirm current availability with
                authoritative product and regulatory sources.
              </span>
            </p>
          </div>

          <div className="border border-[rgba(127,208,217,0.35)] rounded-[12px] w-full overflow-auto">
            <div className="min-w-[520px] w-full">
              <p className="font-inter font-normal text-[12.8px] leading-[20.48px] text-white opacity-85 px-[14px] pt-[7px] pb-[8.47px]">
                Calling / local communications view (specimen states)
              </p>
              <div className="flex w-full">
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[195.8px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Capability
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[213.59px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    Market
                  </span>
                </div>
                <div className="bg-black/40 border-b border-[#d5e3e5] px-[14px] pt-[9px] pb-[10.05px] w-[279.83px]">
                  <span className="font-inter font-semibold text-[14.7px] leading-[23.55px] text-white">
                    State
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[195.8px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Local numbers
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[213.59px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Sample market A
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[279.83px]">
                  <span className="inline-flex items-start bg-[#fff5d6] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#6b4e00]">
                    Requires review
                  </span>
                </div>
              </div>
              <div className="flex w-full">
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[195.8px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    External calling
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] py-[10px] w-[213.59px]">
                  <span className="font-inter font-normal text-[14.7px] leading-[23.55px] text-[#dcecee]">
                    Sample market B
                  </span>
                </div>
                <div className="border-b border-[rgba(127,208,217,0.2)] px-[14px] pt-[11.5px] pb-[9.58px] w-[279.83px]">
                  <span className="inline-flex items-start bg-[#e6f2f4] rounded-[6px] px-[9px] pb-[1.47px] font-inter font-semibold text-[12.8px] leading-[20.48px] text-[#14484e]">
                    Not currently published
                  </span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#explore-calling"
            className="font-inter font-semibold text-[16px] text-black bg-white border-2 border-white rounded-[10px] px-[24px] min-h-[48px] flex items-center hover:bg-white/90 transition-colors duration-200"
          >
            Explore calling
          </a>
        </motion.div>
      </div>
    </section>
  );
}
