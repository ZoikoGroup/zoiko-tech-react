import TabletLines from "./TabletLines";

const card =
  "flex flex-col gap-[5.54px] overflow-hidden rounded-[14px] border border-[#d5e3e5] bg-[#f3f9fa] p-[20px]";
const label = "font-inter text-[14.4px] font-semibold leading-[23px] text-[#0a1416]";
const field =
  "min-h-[48px] w-full rounded-[10px] border border-[#9bb5b8] bg-white px-[12px] font-inter text-[14.4px] font-semibold text-[#0a1416] outline-none placeholder:text-[#757575] focus:border-[#247780]";
const select = `${field} appearance-none pl-[16px] pr-[28px]`;

export default function TabletContext() {
  return (
    <section className="w-full overflow-hidden bg-white px-[5%] pb-[85px] pt-[60px]">
      <div className="mx-auto w-full max-w-[960px]">
        <h2 className="font-sora text-[clamp(22px,3.33vw,25.6px)] font-bold leading-[1.15] text-[#0a1416]">
          Start with your sector and jurisdiction
        </h2>
        <p className="mt-[14.2px] max-w-[706.56px] font-inter text-[16px] font-normal leading-[25.6px] text-[#4d6468]">
          <TabletLines
            lines={[
              "These inputs route you to the right industry, solution and trust context. They never",
              "determine which laws or controls apply to you.",
            ]}
          />
        </p>

        <div className="mt-[14.2px] grid grid-cols-1 gap-[18px] pt-[7.8px] sm:grid-cols-2">
          <label className={card}>
            <span className={label}>Industry</span>
            <input type="text" className={field} placeholder="Choose from the approved Industries taxonomy" />
          </label>
          <label className={card}>
            <span className={label}>Country / region / jurisdiction</span>
            <input type="text" className={field} placeholder="For routing and review only" />
          </label>
          <label className={card}>
            <span className={label}>Organization / operator type</span>
            <select className={select} defaultValue="other">
              <option value="other">Other / unsure</option>
            </select>
          </label>
          <label className={card}>
            <span className={label}>Regulated activity</span>
            <input type="text" className={field} placeholder="High-level description, not a compliance conclusion" />
          </label>
          <label className={card}>
            <span className={label}>Environment</span>
            <select className={select} defaultValue="unknown">
              <option value="unknown">Unknown</option>
            </select>
          </label>
        </div>

        <div className="mt-[14.2px] w-full rounded-br-[10px] rounded-tr-[10px] border-l-4 border-[#247780] bg-[#e6f2f4] px-[16px] pb-[12px] pt-[20.6px] font-inter text-[14.7px] leading-[23.55px] text-[#4d6468]">
          <b className="font-bold">No automatic applicability engine.</b>{" "}
          <TabletLines
            lines={[
              "This page doesn’t infer which laws, licenses, regimes or",
              "controls apply based on industry, country, company size or activity. Anything we can’t",
              "confirm from an approved source reads “Requires review.” Your context carries into the",
              "Contact Sales and solution routes in privacy-safe form.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
