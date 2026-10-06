import Image from "next/image";
import Link from "next/link";
import Lines from "./Lines";
import { WRAP } from "./layout";

export default function CrossIndustry() {
  return (
    <section id="cross-industry" className="w-full bg-white py-14 md:py-20 lg:pb-[112px] lg:pt-[93px]">
      <div className={`${WRAP} flex flex-col gap-7`}>
        <div className="flex max-w-[820px] flex-col gap-[14.8px]">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1.3px] text-[#102d2f] md:text-[38px] lg:text-[44px] lg:leading-[50.6px]">
            <Lines lines={["Your operating model may cross", "more than one industry."]} />
          </h2>
          <p className="max-w-[760px] pt-[5.2px] font-poppins text-base leading-[25.6px] text-[#587176]">
            Start with the closest economic sector or describe the operational problem you need to solve.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2 lg:gap-11">
          <div className="flex flex-col gap-[11.295px] pb-4">
            <h3 className="font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">More than one sector?</h3>
            <p className="font-poppins text-base leading-[25.6px] text-[#587176]">
              Use the industry context that best describes your work, then evaluate the relevant systems and boundaries.
            </p>
          </div>
          <div className="flex flex-col gap-[11.295px] pb-4">
            <h3 className="font-poppins text-xl font-bold leading-[26px] text-[#102d2f]">Category not listed?</h3>
            <p className="font-poppins text-base leading-[25.6px] text-[#587176]">
              Free-text searches do not create new sectors. Capability, software-category and customer-size labels stay outside the industry taxonomy.
            </p>
          </div>
        </div>
        <div className="relative h-[200px] w-full overflow-hidden rounded-[5px] md:h-[260px] lg:h-[320px]">
          <Image
            src="/view-all-industries/cross-industry-team-meeting.webp"
            alt="Colleagues collaborating around a whiteboard in a modern office"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover object-[50%_28%]"
          />
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-start">
          <Link
            href="/contact-us"
            className="flex min-h-12 items-center justify-center rounded-[5px] border border-transparent bg-[#247780] px-[21px] py-3 font-poppins text-sm font-bold leading-[22.4px] text-white"
          >
            Contact Sales
          </Link>
          <Link
            href="#solutions"
            className="flex min-h-12 items-center justify-center rounded-[5px] border border-[#80c5cb] px-[21px] py-3 font-poppins text-sm font-bold leading-[22.4px] text-[#102d2f]"
          >
            Explore solutions
          </Link>
          <Link
            href="/technology-saas-industry"
            className="flex min-h-11 items-start py-[9px] font-poppins text-sm font-bold leading-[22.4px] text-[#247780]"
          >
            Explore technology →
          </Link>
        </div>
      </div>
    </section>
  );
}
