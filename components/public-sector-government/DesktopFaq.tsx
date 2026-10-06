import Image from "next/image";
import DesktopLines from "./DesktopLines";

const questions = [
  "What does Zoiko Tech provide for Public Sector & Government?",
  "Does Zoiko provide a complete government-services platform?",
  "Which public-sector products are available?",
  "Can Zoiko AI make government decisions automatically?",
  "Does Zoiko have government certifications or sovereign hosting?",
  "How is accessibility handled?",
  "How do we start?",
];

export default function DesktopFaq() {
  return (
    <section
      id="questions"
      className="flex w-full flex-col items-center pb-[94px] pt-[93px] font-poppins px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: "linear-gradient(120.73deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-start gap-9">
        <div className="flex min-w-0 flex-1 flex-col gap-9">
          <h2 className="text-[44px] font-bold leading-[50.6px] tracking-[-1.3px] text-white">
            <DesktopLines lines={["Clear answers for", "a focused evaluation."]} />
          </h2>
          <ul className="flex max-w-[950px] flex-col">
            {questions.map((q) => (
              <li key={q} className="border-b border-[rgba(121,153,157,0.33)]">
                <div className="flex min-h-[48px] items-center justify-between gap-6 pb-[23.7px] pt-[23.5px]">
                  <h3 className="min-w-0 text-[17px] font-bold leading-[27.2px] text-white">{q}</h3>
                  <span aria-hidden="true" className="shrink-0 text-[17px] font-bold leading-[27.2px] text-white">+</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[502/681] w-[41.83%] shrink-0 rounded-[24px] border border-white opacity-90">
          <Image
            src="/public-sector-government/desktop-faq-team-meeting.webp"
            alt=""
            fill
            sizes="502px"
            className="rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
