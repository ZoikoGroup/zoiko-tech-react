import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="w-full relative overflow-hidden font-poppins pt-[120px] pb-[120px] flex justify-center"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)",
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto px-8 md:px-8 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
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
              RESOURCES · MEDIA RESOURCES
            </span>

            <h1
              className="font-bold text-[66px] m-0 p-0 text-white"
              style={{
                lineHeight: "71.28px",
                letterSpacing: "-1.5px",
              }}
            >
              Official Zoiko Tech<br />
              <span style={{ color: "rgba(153, 209, 214, 1)" }}>media resources.</span>
            </h1>

            <p
              className="text-[16px] font-normal m-0 p-0"
              style={{
                color: "#c4d7d9",
                lineHeight: "25.6px",
              }}
            >
              <span className="whitespace-nowrap">Find approved logos, verified company facts and public-use media assets</span><br />
              <span className="whitespace-nowrap">with currentness, rights and usage guidance. For formal company</span><br />
              <span className="whitespace-nowrap">statements, use Press Releases; for broader news, use Newspaper.</span>
            </p>

            <p
              className="text-[12px] font-normal m-0 p-0 line-clamp-2"
              style={{
                color: "#8FBCC6",
                lineHeight: "19.2px",
              }}
            >
              Only current, approved public resources may be downloadable. No approved asset inventory was supplied for this prototype.
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
                Browse resource requirements <ArrowDown size={16} />
              </Link>
              
              <Link
                href="#"
                className="font-bold text-[14px] flex items-center justify-center px-[24px] py-[12px] rounded border border-[#85c4c9] hover:opacity-80 transition-opacity"
                style={{
                  color: "#ffffff",
                  lineHeight: "22.4px",
                }}
              >
                Company fact requirements
              </Link>
            </div>
          </div>

          {/* Hero Art */}
          <div className="flex justify-end w-full relative">
            <Image
              src="/images/media-resources/hero-art.png"
              alt="Illustrative document manifests, source archive and version history"
              width={560}
              height={460}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
