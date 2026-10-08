import Image from "next/image";
import { WRAP } from "./layout";

export default function Library() {
  return (
    <section
      id="library"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px] bg-[linear-gradient(118.27deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-[35.01px]`}>
        <div className="flex w-full max-w-[830px] flex-col gap-4">
          <p className="font-poppins text-[12px] font-bold leading-[19.2px] tracking-[2px] text-[#86d4d8]">
            05 / GUIDES &amp; REPORTS
          </p>
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            The resource library.
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-white">
            Real artifacts and meaningful web content control publication.
          </p>
        </div>
        <div className="flex w-full max-w-[900px] flex-col items-start gap-[11.3px] rounded-[15px] border border-solid border-[rgba(133,189,197,0.4)] px-6 pb-[47.51px] pt-[35px] md:px-[35px]">
          <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
            <Image src="/guides-reports/icon-document-cyan.svg" alt="" width={25} height={25} />
          </span>
          <h3 className="w-full pt-[9.7px] font-poppins text-[22px] font-bold leading-[1.3] text-white md:text-[28px] md:leading-[36.4px]">
            Resource catalog unavailable.
          </h3>
          <p className="w-full font-poppins text-[16px] leading-[25.6px] text-white">
            This local prototype is not connected to the governed resource registry. No approved guide/report inventory or
            download files were supplied. This does not establish that no resources exist.
          </p>
          <p className="w-full pb-[13.2px] pt-[3.99px] font-poppins text-[16px] leading-[25.6px] text-white">
            Publication cards and downloads will appear only when their content, source, currentness and access state are
            verified.
          </p>
          <a href="#" className="font-poppins text-[14px] font-bold leading-[22.4px] text-[#a3d9de]">
            Explore the Research preview →
          </a>
        </div>
      </div>
    </section>
  );
}
