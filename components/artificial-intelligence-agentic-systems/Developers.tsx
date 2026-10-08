import Image from "next/image";
import { WRAP } from "./layout";

const cards = [
  { title: "Build", text: "Approved APIs, SDKs and model interfaces only.", photo: "developers-build" },
  { title: "Learn", text: "Current documentation and source-owned reference.", photo: "developers-learn" },
  { title: "Test", text: "Sandbox/examples only when external access is live.", photo: "developers-test" },
  { title: "Operate", text: "Supported observability, status and integration recovery.", photo: "developers-operate" },
  { title: "Boundaries", text: "No invented endpoint, event, credential flow, package or tool authority.", photo: "developers-boundaries" },
];

export default function Developers() {
  return (
    <section
      id="developers"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{ backgroundImage: "linear-gradient(115.79936442237425deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)" }}
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex max-w-[850px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            Developer &amp; integration layer
          </h2>
          <p className="pt-1 font-poppins text-base leading-[25.6px] text-[#c4d7d9]">
            Interfaces require public-ready technical contracts.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="flex flex-col gap-3 overflow-hidden rounded-xl border border-[rgba(141,185,196,0.33)] bg-[rgba(255,255,255,0.03)] px-[26px] pb-[41px] pt-[26px]">
              <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-[10px]">
                <Image src={`/artificial-intelligence-agentic-systems/${c.photo}.webp`} alt="" fill sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
              </div>
              <h3 className="w-full pb-[0.59px] pt-[9px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">{c.title}</h3>
              <p className="w-full font-poppins text-[15px] leading-[25.5px] text-[#c4d7d9]">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
