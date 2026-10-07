import React from "react";

export default function OfficialReleaseArchive() {
  const archiveItems = [
    {
      title: "Archive ordering",
      description:
        "Newest approved publication date/time first, with governed pagination.",
    },
    {
      title: "Source metadata",
      description:
        "Exact release title, date, publishing entity where material, topic and currentness from the registry.",
    },
    {
      title: "No false urgency",
      description:
        "No trending badges, popularity ranking, breaking-news ticker or view counts.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading and Archive List */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Header Section */}
            <div className="mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3 text-white">
                The official release archive
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Reverse chronology is the stable default.
              </p>
            </div>

            {/* List / Cards Layout */}
            <div className="w-full space-y-6 divide-y divide-[#7FD0D926]">
              {archiveItems.map((item, index) => (
                <div
                  key={index}
                  className={`${index !== 0 ? "pt-6" : ""} flex flex-col items-start`}
                >
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Isometric 3D Illustration Graphic (/press/5.png) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/press/5.png"
                alt="The official release archive 3D illustration"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
