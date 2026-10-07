import React from "react";

export default function ArticleCardContract() {
  const cards = [
    {
      image: "/news/7.png",
      title: "record_id",
      description: "A stable public reference. Private CMS IDs aren't exposed.",
    },
    {
      image: "/news/8.png",
      title: "type_label",
      description: "Approved content type. Required.",
    },
    {
      image: "/news/9.png",
      title: "publication_date",
      description: "Required and machine-readable.",
    },
    {
      image: "/news/10.png",
      title: "Updated / corrected label",
      description: "Shown when a material update or correction exists.",
    },
    {
      image: "/news/11.png",
      title: "headline",
      description: "Approved public headline. Required.",
    },
    {
      image: "/news/12.png",
      title: "dek / summary",
      description:
        "An optional approved summary that doesn't create a new claim.",
    },
    {
      image: "/news/13.png",
      title: "topic and entity tags",
      description:
        "Approved taxonomy and canonical entities only, with the count kept small.",
    },
    {
      image: "/news/14.png",
      title: "image / thumbnail",
      description:
        "Optional rights-approved asset with meaningful alt text, or decorative treatment.",
    },
  ];

  return (
    <section className="w-full bg-white text-gray-900 font-sans px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3 leading-[1.1]">
            Article card contract
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl">
            What every card in the index carries.
          </p>
        </div>

        {/* 4-Column Grid Layout (2 Rows of 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((item, index) => (
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
                <h3 className="text-base font-bold text-gray-900 tracking-tight mb-2 font-mono">
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
