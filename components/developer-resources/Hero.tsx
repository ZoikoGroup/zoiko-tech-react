import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const data = {
    eyebrow: "RESOURCES · DEVELOPER RESOURCES",
    title: <><span className="whitespace-nowrap">Build against what</span><br /><span className="whitespace-nowrap">is <span style={{ color: "rgba(148, 207, 213, 1)" }}>actually released.</span></span></>,
    description: <><span className="whitespace-nowrap">Find approved Zoiko Tech APIs, SDKs, integration guides and developer tools,</span><br /><span className="whitespace-nowrap">then follow the current technical contract, version and operational route for</span><br /><span className="whitespace-nowrap">each resource. Unreleased or unsupported surfaces are not presented as</span><br /><span className="whitespace-nowrap">available.</span></>,
    buttons: ["Explore developer resources ↓", "Start by task"],
    image: "/images/developer-resources/1338-2873.png"
  };
  return (
    <section
      className="w-full relative overflow-hidden font-poppins pt-[120px] pb-[95px] flex justify-center"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-8 md:px-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-[24px]">
            <span
              className="font-bold text-[12px] uppercase"
              style={{
                color: "#86d4d8",
                lineHeight: "19.2px",
                letterSpacing: "2px",
              }}
            >
              {data.eyebrow}
            </span>

            <h1
              className="font-bold text-[66px] m-0 p-0 text-white"
              style={{
                lineHeight: "71.28px",
                letterSpacing: "-1.5px",
              }}
            >
              {data.title}
            </h1>

            <p
              className="text-[16px] font-normal m-0 p-0"
              style={{
                color: "#c4d7d9",
                lineHeight: "25.6px",
              }}
            >
              {data.description}
            </p>

            <div className="flex flex-row items-center gap-6 mt-[8px]">
              <Link
                href="#"
                className="bg-white font-bold text-[14px] flex items-center justify-center gap-[8px] px-[24px] py-[12px] rounded hover:opacity-90 transition-opacity"
                style={{
                  color: "#0a3639",
                  lineHeight: "22.4px",
                }}
              >
                {data.buttons[0]}
              </Link>
              
              <Link
                href="#"
                className="font-bold text-[14px] flex items-center justify-center px-[24px] py-[12px] rounded border border-[rgba(196,215,217,0.33)] hover:opacity-80 transition-opacity"
                style={{
                  color: "#ffffff",
                  lineHeight: "22.4px",
                }}
              >
                {data.buttons[1]}
              </Link>
            </div>
          </div>

          {/* Hero Art */}
          <div className="flex justify-end w-full relative h-[400px] lg:h-[500px]">
            <Image
              src={data.image}
              alt="Hero Art"
              fill sizes="100vw"
              className="object-contain lg:object-right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
