"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IndustryCard {
  id: number;
  title: string;
  image: string;
  href: string;
  features: string[];
}

const CARDS: IndustryCard[] = [
  {
    id: 1,
    title: "Telecoms",
    image: "/home/card 1.png",
    href: "#",
    features: [
      "OSS/BSS (ZcikoNex)",
      "eSIM solutions",
      "Smart billing",
      "Fraud detection",
      "Partner API integrations",
    ],
  },
  {
    id: 2,
    title: "Financial Services",
    image: "/home/card 2.png",
    href: "#",
    features: [
      "Embedded finance APIs",
      "AI risk dashboards",
      "Real-time compliance (KYC/AML)",
      "Digital onboarding",
      "Cloud-secure workloads",
    ],
  },
  {
    id: 3,
    title: "SMBs",
    image: "/home/card 3.png",
    href: "#",
    features: [
      "Web design and optimisation",
      "CRM and cloud setup",
      "Branding and logo design",
      "Marketing automation",
      "Cybersecurity & backups",
    ],
  },
  {
    id: 4,
    title: "Government & NGOs",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop",
    href: "#",
    features: [
      "Citizen portals",
      "Accessible design",
      "Data dashboards",
      "E-signature platforms",
      "Sustainability monitoring",
    ],
  },
  {
    id: 5,
    title: "Education & Media",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    href: "#",
    features: [
      "E-learning platforms",
      "Streaming tech",
      "AR/VR for training",
      "Multilingual content systems",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
} as const;

export default function ServicesByIndustry() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const totalDots = 5;
  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const visibleCards = [
    CARDS[currentIndex % CARDS.length],
    CARDS[(currentIndex + 1) % CARDS.length],
    CARDS[(currentIndex + 2) % CARDS.length],
  ];

  return (
    <section className="w-full bg-[#f4f4f4] py-12 px-4 sm:px-8 lg:px-16 overflow-hidden select-none">
      <div className="max-w-[1200px] mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-[#2b2b2b] text-[28px] sm:text-[32px] font-bold tracking-tight mb-10"
        >
          Services by Industry
        </motion.h2>

        {/* Carousel Container */}
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {visibleCards.map((card, idx) => (
                <motion.div
                  key={`${card.id}-${currentIndex}-${idx}`}
                  variants={cardVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col h-[550px] w-full max-w-[380px] rounded-none overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
                >
                  <a
                    href={card.href}
                    className="relative flex-1 block w-full h-full overflow-hidden"
                  >
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                    />

                    {/* Default Banner at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-[#619a9e]/85 backdrop-blur-[2px] flex items-center px-6 transition-opacity duration-300 group-hover:opacity-0">
                      <span className="text-white text-[22px] sm:text-[24px] font-bold tracking-wide">
                        {card.title}
                      </span>
                    </div>

                    {/* Hover Overlay - Expands to 100% Height */}
                    <div className="absolute inset-0 bg-[#3b7d85]/85 backdrop-blur-[3px] flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-white text-[22px] sm:text-[24px] font-bold tracking-wide mb-3">
                          {card.title}
                        </h3>

                        <ul className="space-y-1.5 text-white/95 text-sm sm:text-base font-medium">
                          {card.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-white/80">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Footer Navigation: Dots & Counter */}
        <div className="mt-8 flex items-center justify-between max-w-[1200px] mx-auto px-1">
          {/* Pagination Dots */}
          <div className="flex items-center space-x-2.5">
            {Array.from({ length: totalDots }).map((_, dotIndex) => {
              const isActive = currentIndex % totalDots === dotIndex;
              return (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(dotIndex)}
                  aria-label={`Go to slide ${dotIndex + 1}`}
                  className={`rounded-full transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "w-3 h-3 bg-[#1d6b71]"
                      : "w-2 h-2 bg-[#b8c4c5] hover:bg-[#8da3a5]"
                  }`}
                />
              );
            })}
          </div>

          {/* Slide Indicator Text */}
          <div className="text-[#2b2b2b] text-sm font-semibold tracking-wider">
            {(currentIndex % CARDS.length) + 1} / {CARDS.length}
          </div>
        </div>
      </div>
    </section>
  );
}
