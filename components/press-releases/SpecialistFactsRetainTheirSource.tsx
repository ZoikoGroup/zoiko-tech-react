import React from "react";

export default function SpecialistFactsRetainTheirSource() {
  const items = [
    {
      title: "Product / documentation / developers",
      description:
        "Current feature, interface and availability facts follow authoritative product and technical records.",
    },
    {
      title: "Trust / Status",
      description:
        "Certification, security, privacy and live health do not originate in press copy.",
    },
    {
      title: "Company / partners / careers",
      description:
        "Identity and relationships are approved, scoped and rights-cleared. No inferred coverage or endorsement.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section (Title and Description at the top) */}
        <div className="mb-12">
          <span className="text-[11px] tracking-widest text-[#6FD0F6] uppercase font-semibold block mb-2">
            13 / PRESS REleases
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
            Specialist facts retain their source
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
            A release does not strengthen a product, security or legal
            claim.
          </p>
        </div>

        {/* Content Layout with Image positioned after header and title/description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Illustration Graphic (/press/15.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/press/15.png"
                alt="Specialist facts retain their source 3D isometric illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Structured List */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="w-full space-y-8 divide-y divide-[#7FD0D933]">
              {items.map((item, index) => (
                <div key={index} className={index !== 0 ? "pt-8" : ""}>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
