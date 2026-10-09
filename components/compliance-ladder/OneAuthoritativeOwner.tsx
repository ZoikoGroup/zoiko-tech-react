import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    image: "/comp/3.png",
    title: "Tax Ladder",
    text: "Tax-specific obligations and accountability remain distinct.",
  },
  {
    image: "/comp/4.png",
    title: "Controller",
    text: "Finance controls and evidence stewardship.",
  },
  {
    image: "/comp/5.png",
    title: "Audit Committee",
    text: "Independent oversight and challenge, not administrative editing.",
  },
  {
    image: "/comp/6.png",
    title: "CIO / CHRO / COO / Board",
    text: "Role-specific context without duplicated state engines.",
  },
  {
    image: "/comp/7.png",
    title: "Defining Properties",
    text: "Shared governed operations principles only when approved.",
  },
] as const;

export default function OneAuthoritativeOwner() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#241C59] tracking-tight mb-12">
          One responsibility, one authoritative owner.
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {CARDS.map((card, index) => (
            <div
              key={index}
              className="bg-[#FAF9FD] border border-[#B9B3D1] rounded-2xl p-6 flex flex-col justify-between shadow-sm"
            >
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
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

        {/* Bottom CTA Button */}
        <div>
          <Link
            href="/audit-commitee"
            className="bg-[#241C59] text-white font-medium text-sm px-6 py-3 rounded-lg shadow hover:bg-[#35235F] transition duration-200 inline-flex items-center gap-2"
          >
            Audit Committee design preview{" "}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
