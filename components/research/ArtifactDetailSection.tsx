import React from "react";

const rows = [
  {
    left: {
      title: "Identity and purpose",
      description:
        "Title, type, stable identifier, state/current-version marker and approved summary.",
    },
    right: {
      title: "Method",
      description: "Public-safe preview and authoritative methodology route.",
    },
  },
  {
    left: {
      title: "Limitations",
      description:
        "One to three approved limitations or a clear full-artifact limitations route.",
    },
    right: {
      title: "Provenance",
      description:
        "Owner/source, published or reviewed date, version and correction/supersession reference.",
    },
  },
  {
    left: {
      title: "Related context",
      description:
        "Topic, approved technology/industry relevance and Trust or Responsible AI when material.",
    },
    right: {
      title: "Actions",
      description:
        "Open canonical artifact; copy canonical link; approved file download only. No drawer is populated with fabricated records.",
    },
  },
];

export default function ArtifactDetailSection() {
  return (
    <section
      id="artifact"
      className="w-full text-white py-16 md:py-20 lg:py-24"
      style={{
        background:
          "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(10, 37, 40, 1) 48%, rgba(36, 119, 128, 1) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-[850px] mb-10 md:mb-14">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-[49px] leading-[1.15] tracking-[-0.0204em] text-white mb-3">
            Artifact detail handoff
          </h2>
          <p className="font-poppins text-sm sm:text-base leading-[25.6px] text-[#C4D7D9]">
            The index points to proof; it does not replace the publication.
          </p>
        </div>

        {/* Bordered Outer Box */}
        <div className="rounded-[20px] border border-[rgba(131,183,191,0.33)] p-5 sm:p-6 lg:p-8 flex flex-col gap-6">
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Card */}
              <div className="rounded-[16px] border border-[rgba(131,183,191,0.33)] bg-black/20 p-6 flex flex-col gap-3">
                <h3 className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                  {row.left.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  {row.left.description}
                </p>
              </div>

              {/* Right Card */}
              <div className="rounded-[16px] border border-[rgba(131,183,191,0.33)] bg-black/20 p-6 flex flex-col gap-3">
                <h3 className="font-poppins font-bold text-lg sm:text-[19px] leading-[30.4px] text-white">
                  {row.right.title}
                </h3>
                <p className="font-poppins font-normal text-sm sm:text-[15px] leading-[25.5px] text-[#C3DDE0]">
                  {row.right.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
