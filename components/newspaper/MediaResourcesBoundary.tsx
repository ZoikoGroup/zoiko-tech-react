import React from "react";

export default function MediaResourcesBoundary() {
  const cards = [
    {
      title: "Article media",
      description:
        "Only an asset linked to the article and approved for public use.",
      subtext:
        "Media Resources owns: the approved asset library and rights metadata.",
    },
    {
      title: "Brand assets",
      description: "Linked only if relevant.",
      subtext:
        "Media Resources owns: logos, brand assets, fact sheets and the media kit where authorized.",
    },
    {
      title: "Executive assets",
      description: "Never exposed by assumption.",
      subtext:
        "Media Resources owns: approved bios, headshots and media where rights and currentness permit.",
    },
    {
      title: "Download",
      description:
        "Article media may be view-only unless asset rights permit download.",
      subtext:
        "Media Resources owns: download rules, formats and attribution guidance.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#000000] via-[#0A2528] to-[#247780] text-white overflow-hidden font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 text-white">
            Media Resources boundary
          </h2>
        </div>

        {/* 2-Column Grid Layout on Left with 3D Graphic Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 4 Information Cards (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF0F",
                  borderColor: "#7FD0D959",
                }}
                className="border rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                {item.subtext && (
                  <p className="text-teal-300 text-[11px] leading-relaxed font-medium pt-3 border-t border-teal-500/20">
                    {item.subtext}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: 3D Asset Graphic Preview */}
          <div
            className="lg:col-span-5 rounded-2xl overflow-hidden"
          >
            <img
              src="/news/24.png"
              alt="Media Resources boundary ecosystem overview"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
