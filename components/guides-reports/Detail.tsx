import Image from "next/image";
import { WRAP } from "./layout";

const CARDS = [
  { icon: "/guides-reports/icon-document-cyan.svg", title: "Meaningful web content", text: "Standalone summary/body or substantial preview, structured headings and practical takeaways.", pb: "pb-[42px]" },
  { icon: "/guides-reports/icon-database.svg", title: "Source & limitations", text: "Material claims, assumptions, method and currentness remain visible.", pb: "pb-[66px]" },
  { icon: "/guides-reports/icon-hierarchy-cyan.svg", title: "Optional format", text: "Download supports the reading experience; it is not the only route to essential information.", pb: "pb-[66px]" },
];

export default function Detail() {
  return (
    <section
      id="detail"
      className="w-full py-14 lg:pb-[75px] lg:pt-[74px] bg-[linear-gradient(121.59deg,rgb(0,0,0)_0%,rgb(10,37,40)_48%,rgb(36,119,128)_100%)]"
    >
      <div className={`${WRAP} flex flex-col gap-[35px]`}>
        <div className="flex w-full max-w-[830px] flex-col gap-4">
          <h2 className="font-poppins text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white md:text-[40px] lg:text-[45px] lg:leading-[51.75px]">
            Reading value comes first.
          </h2>
          <p className="pt-1 font-poppins text-[16px] leading-[25.6px] text-white">
            A title, cover and form are not a substantive resource.
          </p>
        </div>
        <ul className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {CARDS.map((c) => (
            <li
              key={c.title}
              className={`flex flex-col items-start gap-3 rounded-[10px] border border-solid border-[rgba(145,191,197,0.33)] bg-[rgba(255,255,255,0.03)] px-[27px] pt-[27px] ${c.pb} lg:min-h-[251px]`}
            >
              <span className="flex w-[46px] items-center justify-center rounded-[10px] bg-[rgba(98,198,202,0.1)] py-[10.5px]">
                <Image src={c.icon} alt="" width={25} height={25} />
              </span>
              <h3 className="w-full pt-[10px] font-poppins text-[21px] font-bold leading-[27.3px] text-white">{c.title}</h3>
              <p className="w-full font-poppins text-[15px] leading-[24px] text-white">{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
