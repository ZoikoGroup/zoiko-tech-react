import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { title: "Define", text: "Question, assumptions, owner and source.", img: "/frontier-technologies/lifecycle-define-computer-photo.webp" },
  { title: "Prototype / evaluate", text: "Only verified state, documented scope and conditions.", img: "/frontier-technologies/lifecycle-prototype-phone-photo.webp" },
  { title: "Evidence / review", text: "Method, limitations and governance decision.", img: "/frontier-technologies/lifecycle-evidence-students-photo.webp" },
  { title: "Graduate / archive", text: "Explicit formal gate; a paper alone does not graduate a product.", img: "/frontier-technologies/lifecycle-graduate-library-photo.webp" },
];

export default function Lifecycle() {
  return (
    <section id="lifecycle" className="w-full bg-white py-14 md:py-16 lg:pb-[70px] lg:pt-[69px]">
      <div className={`${WRAP} flex flex-col gap-10 lg:gap-[60px]`}>
        <div className="flex max-w-[669px] flex-col gap-[15.1px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[40px] tracking-[-1px] md:text-[36px] lg:text-[41px] lg:leading-[47.15px] text-[#102d2f]">Research lifecycle</h2>
          <p className="pt-[4.2px] font-poppins text-[16px] font-normal leading-[25.6px] text-[#587176]">Thesis → experiment → evidence → review → decision.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <li key={c.title} className="flex flex-col overflow-hidden rounded-[10px] border border-[#b5d0d5] bg-white pb-[27px]">
              <div className="relative h-[190px] w-full shrink-0 overflow-hidden">
                <Image src={c.img} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="mt-[7.6px] flex flex-col gap-3 p-6">
                <h3 className="pb-[0.59px] pt-[7.09px] font-poppins text-[22px] font-bold leading-[28.6px] text-[#102d2f]">{c.title}</h3>
                <p className="font-poppins text-[15px] font-normal leading-[27px] text-[#587176]">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
