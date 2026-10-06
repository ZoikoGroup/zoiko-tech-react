"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface StepPhotoCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface ActionCard {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const stepCards: StepPhotoCard[] = [
  {
    image: "/documentation/procedures-prerequisites.png",
    alt: "Team working together at a laptop",
    title: "Confirm prerequisites",
    description:
      "Appropriate authorized user, dependencies and sourced product state.",
  },
  {
    image: "/documentation/procedures-steps.png",
    alt: "Team reviewing documents",
    title: "Follow approved steps",
    description:
      "Action, target, input and expected system response; warnings before material side effects.",
  },
  {
    image: "/documentation/procedures-verify.png",
    alt: "Professionals using a laptop",
    title: "Verify the result",
    description:
      "Distinguish accepted, processing, downstream pending and completed only where the product supports those states.",
  },
];

const actionCards: ActionCard[] = [
  {
    image: "/documentation/procedures-recovery.png",
    alt: "Safe recovery",
    title: "Safe recovery",
    description:
      "Documented retry, input correction, waiting, reversal or escalation only. No permission workaround.",
  },
  {
    image: "/documentation/procedures-handoff.png",
    alt: "Safe handoff",
    title: "Safe handoff",
    description:
      "Article, product and non-sensitive error/state context; never credentials or private content.",
  },
];

export default function ProceduresSection() {
  return (
    <section id="procedures" className="w-full bg-white text-[#102D2F] py-16 sm:py-20 lg:py-[74px]">
      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[840px] mb-10 sm:mb-12"
        >
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[46px] leading-[1.15] tracking-[-0.0217em] text-[#102D2F] mb-3">
            A procedure ends with validation.
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#587176]">
            One bounded task, with documented inputs and supported recovery.
          </p>
        </motion.div>

        {/* Row 1 - 3 Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mb-8">
          {stepCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-[10px] border border-[#D5E5E5] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-[26px] flex flex-col gap-3 flex-1">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0">
                  <Image
                    src="/documentation/card-icon.svg"
                    alt="Document icon"
                    width={25}
                    height={25}
                  />
                </div>
                <h3 className="font-poppins font-bold text-lg sm:text-[20px] leading-[26px] text-[#102D2F]">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Row 2 - 2 Large Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {actionCards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx + 3) * 0.1 }}
              className="group bg-[#F1F7F8] rounded-[10px] border border-[#91BEC5]/35 p-[27px] pb-[42px] flex flex-col gap-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="relative w-full h-[220px] rounded-[10px] overflow-hidden bg-slate-100">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-[46px] h-[46px] rounded-[10px] bg-[#DEEFEF] flex items-center justify-center shrink-0">
                <Image
                  src="/documentation/card-icon.svg"
                  alt="Document icon"
                  width={25}
                  height={25}
                />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg sm:text-[21px] leading-[27.3px] text-[#102D2F] mb-2">
                  {card.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[24px] text-[#587176]">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
