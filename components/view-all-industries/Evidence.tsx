import Image from "next/image";
import Lines from "./Lines";
import { WRAP } from "./layout";

export default function Evidence() {
  return (
    <section
      id="evidence"
      className="w-full bg-[linear-gradient(110.78deg,#000_0%,#0a2528_48%,#247780_100%)] py-14 lg:pb-[108px] lg:pt-[93px]"
    >
      <div className={`${WRAP} flex flex-col gap-[26px]`}>
        <div className="flex max-w-[820px] flex-col gap-[15px]">
          <h2 className="pb-[0.59px] font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1.3px] text-white md:text-[36px] lg:text-[44px] lg:leading-[50.6px]">
            Proof follows its approved source.
          </h2>
          <p className="max-w-[760px] pt-[5px] font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            <Lines lines={["No approved public customer stories or industry evidence registry entries were supplied for this directory."]} />
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-[10px] md:grid-cols-2 md:gap-11 lg:h-[165px] lg:items-center">
          <div className="flex flex-col gap-[11.295px] pb-4">
            <h3 className="font-poppins text-xl font-bold leading-[26px] text-white">Customer and research evidence</h3>
            <p className="font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
              Publish only attributable, approved stories, technical research and measured outcomes with an explicit sector relationship.
            </p>
          </div>
          <div className="flex flex-col gap-[11.295px] pb-4">
            <h3 className="font-poppins text-xl font-bold leading-[26px] text-white">Trust evidence</h3>
            <p className="font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
              Use authoritative trust references rather than distributing unsupported certification or compliance badges across sector cards.
            </p>
          </div>
        </div>
      </div>
      <div className={WRAP}>
        <div className="relative h-[200px] overflow-hidden rounded-[24px] md:h-[280px] lg:h-[364px]">
          <Image
            src="/view-all-industries/evidence-team-meeting.webp"
            alt="Colleagues reviewing evidence documents around a meeting table"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
