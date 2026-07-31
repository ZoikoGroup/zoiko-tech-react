"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlobalVisionSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/global-vision/hero.png"
          alt="Global Vision Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] lg:min-h-[600px] max-w-6xl items-center px-6 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[20px] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] max-w-180 font-normal text-left text-white">
              At <strong className="font-semibold">ZoikoTech</strong>, we
              believe technology must be a force for planetary stewardship,
              social inclusion, and principled governance. Our global vision
              reflects this ethos — a future where intelligent platforms advance
              human well-being, protect the environment, and enable cross-border
              innovation with integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
