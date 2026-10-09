const fs = require('fs');
const path = require('path');

// --- Refactor Developer Resources ---
const devDataPath = path.join(__dirname, 'components/developer-resources/data.ts');
let devDataStr = fs.readFileSync(devDataPath, 'utf8');
devDataStr = devDataStr.replace('export const devData = ', '');
// using eval to parse the object string
const devData = eval('(() => { return ' + devDataStr + ' })()');

const devOutDir = path.join(__dirname, 'components/developer-resources');

const createLightSectionCards = (name, data, columns = 3) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">${data.subtitle.replace(/\n/g, '\\n')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ${columns === 2 ? 'lg:grid-cols-2' : columns === 3 ? 'lg:grid-cols-3' : columns === 4 ? 'lg:grid-cols-4' : columns === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'} gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className={\`flex flex-col bg-white border border-[#e5e7eb] rounded overflow-hidden \${!card.image && 'p-6'}\`}>
              {card.image && (
                <div className="w-full h-[180px] relative mb-6">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
              )}
              <div className={\`flex flex-col \${card.image && 'px-6 pb-6'}\`}>
                <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const createDarkSectionCards = (name, data, columns = 2) => {
  const items = data.cards || data.items || [];
  return `import Image from "next/image";

export default function ${name}() {
  const items = ${JSON.stringify(items, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle.replace(/\n/g, '\\n')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ${columns === 2 ? 'lg:grid-cols-2' : columns === 3 ? 'lg:grid-cols-3' : columns === 4 ? 'lg:grid-cols-4' : columns === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-2'} gap-6">
          {items.map((card, idx) => (
            <article key={idx} className="flex flex-col bg-[#052528] rounded p-8 border border-[#16474b]">
              <h3 className="text-[16px] font-bold text-[#86d4d8] leading-[22px] mb-3 whitespace-pre-wrap">{card.title}</h3>
              <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
            </article>
          ))}
        </div>
        ${data.image ? `
        <div className="mt-12 relative w-full h-[300px] lg:h-[400px] rounded overflow-hidden">
          <Image src="${data.image}" alt="section image" fill className="object-cover" />
        </div>` : ''}
      </div>
    </section>
  );
}
`;
};

const createDarkSectionListArt = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const items = ${JSON.stringify(data.items, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle.replace(/\n/g, '\\n')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            {items.map((item, idx) => (
              <article key={idx} className="flex flex-col">
                <h3 className="text-[16px] font-bold text-[#86d4d8] leading-[22px] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{item.desc}</p>
              </article>
            ))}
          </div>
          
          ${data.image ? `
          <div className="relative w-full h-[300px] lg:h-[400px]">
             <Image src="${data.image}" alt="section image" fill className="object-contain lg:object-right" />
          </div>` : ''}
        </div>
      </div>
    </section>
  );
}
`;
};

const createLightSectionListArt = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const items = ${data.items ? JSON.stringify(data.items, null, 2) : 'null'};
  const faqs = ${data.faqs ? JSON.stringify(data.faqs, null, 2) : 'null'};
  
  return (
    <section className="w-full bg-white py-[80px] font-poppins overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">${data.subtitle.replace(/\n/g, '\\n')}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-8">
            {items ? items.map((item, idx) => (
              <article key={idx} className="flex flex-col">
                <h3 className="text-[16px] font-bold text-[#102d2f] leading-[22px] mb-2">{item.title}</h3>
                <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{item.desc}</p>
              </article>
            )) : faqs && (
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-[#e5e7eb] pb-4">
                    <span className="text-[16px] font-bold text-[#102d2f]">{faq}</span>
                    <span className="text-[20px] font-bold text-[#102d2f]">+</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          ${data.image ? `
          <div className="relative w-full h-[300px] lg:h-[400px]">
             <Image src="${data.image}" alt="section image" fill className="object-contain lg:object-right" />
          </div>` : ''}
        </div>
      </div>
    </section>
  );
}
`;
};

const createJourneySection = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const stages = ${JSON.stringify(data.stages, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle.replace(/\n/g, '\\n')}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stages.map((stage, idx) => (
            <article key={idx} className="flex flex-col bg-[#052528] rounded p-6 h-full border border-[#16474b] items-center text-center">
              <div className="w-[48px] h-[48px] relative mb-6">
                <Image src={stage.image} alt={stage.title} fill className="object-contain" />
              </div>
              <h3 className="text-[16px] font-bold text-white leading-[22px] mb-2 whitespace-pre-wrap">{stage.title}</h3>
              <p className="text-[13px] text-[#c4d7d9] leading-[19.5px] whitespace-pre-wrap">{stage.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const devComponents = [
  { name: 'DeveloperTaskRouter', data: devData.router, gen: (n,d) => createLightSectionCards(n,d,3) },
  { name: 'DeveloperResourceRegistry', data: devData.registry, gen: createDarkSectionListArt },
  { name: 'ApiInterfaceLayer', data: devData.apis, gen: (n,d) => createLightSectionCards(n,d,2) },
  { name: 'SdkPackageLayer', data: devData.sdks, gen: (n,d) => createDarkSectionCards(n,d,2) },
  { name: 'IntegrationsEvents', data: devData.integrations, gen: (n,d) => createLightSectionCards(n,d,2) },
  { name: 'AuthenticationAccess', data: devData.auth, gen: (n,d) => createDarkSectionCards(n,d,2) },
  { name: 'QuickstartsSamples', data: devData.testing, gen: (n,d) => createLightSectionCards(n,d,2) },
  { name: 'JourneyStages', data: devData.journey, gen: createJourneySection },
  { name: 'VersionChangeDeprecation', data: devData.changes, gen: createLightSectionListArt },
  { name: 'UsageObservability', data: devData.operations, gen: (n,d) => createDarkSectionCards(n,d,2) },
  { name: 'SecurityPrivacy', data: devData.security, gen: createLightSectionListArt },
  { name: 'ThreeDestinations', data: devData.boundaries, gen: (n,d) => createDarkSectionCards(n,d,3) },
  { name: 'EscalateSupport', data: devData.support, gen: createLightSectionListArt },
  { name: 'ExplicitStates', data: devData.states, gen: (n,d) => createDarkSectionCards(n,d,2) },
  { name: 'ClearAnswers', data: devData.questions, gen: createLightSectionListArt }
];

let devImports = `import Hero from "@/components/developer-resources/Hero";\nimport ContactSection from "@/components/developer-resources/ContactSection";\n`;
let devTags = `<Hero />\n`;

devComponents.forEach(c => {
  const code = c.gen(c.name, c.data);
  fs.writeFileSync(path.join(devOutDir, `${c.name}.tsx`), code);
  devImports += `import ${c.name} from "@/components/developer-resources/${c.name}";\n`;
  devTags += `      <${c.name} />\n`;
});
devTags += `      <ContactSection />`;

const devPageCode = `import { Metadata } from "next";
${devImports}
export const metadata: Metadata = {
  title: "Developer Resources | Zoiko Tech",
  description: "Find approved Zoiko Tech APIs, SDKs, integration guides and developer tools.",
};

export default function DeveloperResourcesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      ${devTags}
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'app/developer-resources/page.tsx'), devPageCode);


// --- Refactor Media Resources ---
const mediaDataPath = path.join(__dirname, 'components/media-resources/data.ts');
let mediaDataStr = fs.readFileSync(mediaDataPath, 'utf8');
mediaDataStr = mediaDataStr.replace('export const mediaSections = ', '');
// using eval to parse the object string
const mediaSections = eval('(() => { return ' + mediaDataStr + ' })()');

const mediaOutDir = path.join(__dirname, 'components/media-resources');

const createMediaLightCards = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">${data.subtitle ? data.subtitle.replace(/\n/g, '\\n') : ''}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col bg-white">
              {card.image && (
                <div className="w-full h-[180px] relative mb-6 rounded overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const createMediaLightIconCards = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section className="w-full bg-white py-[80px] font-poppins">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-[#102d2f] leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#587176] leading-[25.6px] whitespace-pre-wrap">${data.subtitle ? data.subtitle.replace(/\n/g, '\\n') : ''}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col border border-[#e5e7eb] rounded p-6">
              {card.image && (
                <div className="w-[64px] h-[64px] relative mb-6">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
              )}
              <div className="flex flex-col">
                <h3 className="text-[20px] font-bold text-[#102d2f] leading-[26px] mb-2">{card.title}</h3>
                <p className="text-[15px] text-[#587176] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const createMediaDarkCards = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle ? data.subtitle.replace(/\n/g, '\\n') : ''}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col bg-[#052528] rounded p-6 h-full border border-[#16474b]">
              <div className="flex flex-col h-full">
                <h3 className="text-[16px] font-bold text-[#86d4d8] leading-[22px] mb-3 whitespace-pre-wrap">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const createMediaDarkIconCards = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle ? data.subtitle.replace(/\n/g, '\\n') : ''}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="flex flex-col bg-[#052528] rounded p-6 h-full border border-[#16474b]">
              {card.image && (
                <div className="w-[48px] h-[48px] relative mb-6">
                  <Image src={card.image} alt={card.title} fill className="object-contain" />
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-[16px] font-bold text-[#86d4d8] leading-[22px] mb-3 whitespace-pre-wrap">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
`;
};

const createMediaDarkListArt = (name, data) => {
  return `import Image from "next/image";

export default function ${name}() {
  const cards = ${JSON.stringify(data.cards, null, 2)};
  return (
    <section 
      className="w-full py-[80px] font-poppins overflow-hidden"
      style={{ background: "linear-gradient(135deg, #000000 0%, #0a2528 48%, #247780 100%)" }}
    >
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="flex flex-col mb-12">
          <h2 className="text-[45px] font-bold text-white leading-[51.75px] tracking-[-1px] mb-2 whitespace-pre-wrap">${data.title.replace(/\n/g, '\\n')}</h2>
          <p className="text-[16px] text-[#c4d7d9] leading-[25.6px] whitespace-pre-wrap">${data.subtitle ? data.subtitle.replace(/\n/g, '\\n') : ''}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => (
              <article key={idx} className="flex flex-col bg-transparent h-full">
                <div className="w-8 h-8 rounded-full bg-[#16474b] flex items-center justify-center text-[#86d4d8] font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-[16px] font-bold text-white leading-[22px] mb-2 whitespace-pre-wrap">{card.title}</h3>
                <p className="text-[15px] text-[#c4d7d9] leading-[25.5px] whitespace-pre-wrap">{card.desc}</p>
              </article>
            ))}
          </div>
          
          ${data.image ? `
          <div className="relative w-full h-[300px] lg:h-[400px]">
             <Image src="${data.image}" alt="section image" fill className="object-contain lg:object-right" />
          </div>` : ''}
        </div>
      </div>
    </section>
  );
}
`;
};

const mapMediaComponent = (section) => {
  const nameMap = {
    '1338:4848': 'QuickResourceFinder',
    '1338:4668': 'CurrentResourceHighlights',
    '1338:4054': 'PrimaryCompanyLogos',
    '1365:1010': 'VerifiedCompanyFacts',
    '1338:4638': 'VersionExpiryReplacement',
    '1338:4385': 'MediaProductImagery',
    '1348:1011': 'LeadershipMedia',
    '1338:3901': 'MediaKitBundle',
    '1338:4185': 'SecondaryCampaignBrands',
    '1338:3857': 'ClearAnswersQuestions',
    '1338:4812': 'AssetDownloadHandoffs',
    '1338:4685': 'ResourceSupportPaths',
    '1338:4832': 'MediaDeskContact',
    '1338:3870': 'NextStepsDestination'
  };
  const name = nameMap[section.id] || "MediaSection" + section.id.replace(':', '');
  
  let code = '';
  if (section.type === 'light-image-cards') code = createMediaLightCards(name, section);
  if (section.type === 'light-icon-cards') code = createMediaLightIconCards(name, section);
  if (section.type === 'dark-cards') code = createMediaDarkCards(name, section);
  if (section.type === 'dark-icon-cards') code = createMediaDarkIconCards(name, section);
  if (section.type === 'dark-list-art') code = createMediaDarkListArt(name, section);
  
  return { name, code };
};

let mediaImports = `import Hero from "@/components/media-resources/Hero";\n`;
let mediaTags = `<Hero />\n`;

mediaSections.forEach(s => {
  const c = mapMediaComponent(s);
  if (!c.code) return;
  fs.writeFileSync(path.join(mediaOutDir, c.name + '.tsx'), c.code);
  mediaImports += `import ${c.name} from "@/components/media-resources/${c.name}";\n`;
  mediaTags += `      <${c.name} />\n`;
});

const mediaPageCode = `import { Metadata } from "next";
${mediaImports}
export const metadata: Metadata = {
  title: "Media Resources | Zoiko Tech",
  description: "Find approved logos, verified company facts and public-use media assets.",
};

export default function MediaResourcesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      ${mediaTags}
    </div>
  );
}
`;
fs.writeFileSync(path.join(__dirname, 'app/media-resources/page.tsx'), mediaPageCode);

console.log("Refactoring complete.");
