import { WRAP } from "./layout";

const CARDS = [
  { n: "01", title: "Scope", text: "Approved physical-system research question." },
  { n: "02", title: "Authority", text: "Human/operator ownership and safety review." },
  { n: "03", title: "Evidence", text: "Actual experiment conditions and limits." },
  { n: "04", title: "No product inference", text: "No robot, vehicle, drone, manipulator or safety-certified controller assumed." },
];

export default function Robotics() {
  return (
    <section
      id="robotics"
      className="w-full py-14 lg:pb-[70px] lg:pt-[69px]"
      style={{
        backgroundImage:
          "linear-gradient(114.32799931798765deg, rgb(0, 0, 0) 0%, rgb(10, 37, 40) 48%, rgb(36, 119, 128) 100%)",
      }}
    >
      <div className={`${WRAP} flex flex-col gap-[60px]`}>
        <div className="flex flex-col gap-[15.1px] pb-px">
          <h2 className="font-poppins text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[41px] md:leading-[47.15px]">
            Robotics &amp; Physical AI
          </h2>
          <p className="pt-[4.2px] font-poppins text-[16px] leading-[25.6px] text-[#c4d7d9]">
            Research does not establish autonomous hardware.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-rows-[183.19px_210.19px]">
          {CARDS.map((c) => (
            <article
              key={c.n}
              className="flex flex-col gap-3 border-b border-t-2 border-solid border-[rgba(129,180,191,0.27)] bg-[rgba(255,255,255,0.02)] px-[26px] pb-[41px] pt-[31px]"
            >
              <span className="font-poppins text-[11px] leading-[17.6px] tracking-[1px] text-[#72aab4]">
                {c.n}
              </span>
              <h3 className="pb-[0.59px] pt-[9.6px] font-poppins text-[22px] font-bold leading-[28.6px] text-white">
                {c.title}
              </h3>
              <p className="max-w-[360px] font-poppins text-[15px] leading-[27px] text-[#c4d7d9]">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
