import React from "react";

export default function FeaturedStory() {
  const stories = [
    {
      image: "/news/1.png",
      title: "Eligibility",
      description:
        "Only a public record explicitly marked featured in the approved registry.",
    },
    {
      image: "/news/2.png",
      title: "Count",
      description: "Maximum one featured record. Never a rotating carousel.",
    },
    {
      image: "/news/3.png",
      title: "Type",
      description:
        "The source-approved content type. An editorial or update is never relabeled as a Press Release.",
    },
    {
      image: "/news/4.png",
      title: "Date",
      description:
        "Publication date is mandatory. Updated or corrected state is visible when it applies.",
    },
    {
      image: "/news/1.png",
      title: "Headline",
      description:
        "The registry headline, or an approved display headline tied to the same record and version.",
    },
    {
      image: "/news/2.png",
      title: "Summary",
      description: "A short approved dek. No invented outcome or claim.",
    },
    {
      image: "/news/3.png",
      title: "Image",
      description:
        "Optional. Needs an approved asset record, rights, alt text and crop.",
    },
    {
      image: "/news/4.png",
      title: "Call to action",
      description: "Read article. No form gate.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Featured story
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            One approved record at a time, and only when the registry marks it
            eligible. No carousel, no rotation.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows of 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              {/* Image Container */}
              <div className="w-full h-36 bg-gray-100 overflow-hidden border-b border-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
