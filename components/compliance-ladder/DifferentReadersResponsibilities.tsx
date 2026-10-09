import Image from "next/image";

const CARDS_WITH_IMAGES = [
  {
    image: "/comp/9.png",
    title: "Compliance & legal",
    text: "Scope and interpretation require qualified approvers; no legal advice inferred.",
  },
  {
    image: "/comp/10.png",
    title: "Operations & IT",
    text: "Assigned remediation and technical dependencies do not redefine legal determinations.",
  },
  {
    image: "/comp/11.png",
    title: "Audit & executive oversight",
    text: "Approved high-level context, with restricted evidence protected.",
  },
] as const;

const CARDS_WITH_NUMBERS = [
  {
    id: "01",
    title: "Control owner",
    text: "Update assigned work; no self-approval where segregation applies.",
  },
  {
    id: "02",
    title: "Board reader",
    text: "Decision summary, not personnel-level evidence by default.",
  },
  {
    id: "03",
    title: "System administrator",
    text: "Technical access configuration cannot override legal or audit decisions.",
  },
] as const;

export default function DifferentReadersResponsibilities() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#241C59] tracking-tight mb-12">
          Different readers.
          <br />
          Different responsibilities.
        </h2>

        {/* Top 3 Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {CARDS_WITH_IMAGES.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAF9FD] border border-[#B9B3D1] rounded-xl flex flex-col  shadow-sm"
            >
              <div className="relative w-full h-48 mb-2 rounded-t-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col p-6">
                <h3 className="text-xl font-bold text-[#241C59] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 Cards with Number IDs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS_WITH_NUMBERS.map((card) => (
            <div
              key={card.id}
              className="bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm"
            >
              <span className="text-[#F0596B] font-mono text-xs font-semibold tracking-widest mb-4">
                {card.id}
              </span>

              <div>
                <h3 className="text-xl font-bold text-[#241C59] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
