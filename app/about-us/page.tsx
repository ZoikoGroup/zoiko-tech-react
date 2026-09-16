import AI from "@/components/about-us/AI";
import Ambition from "@/components/about-us/Ambition";
import Contact from "@/components/about-us/Contact";
import Credibility from "@/components/about-us/Credibility";
import Estate from "@/components/about-us/Estate";
import Founder from "@/components/about-us/Founder";
import Global from "@/components/about-us/Global";
import Governance from "@/components/about-us/Governance";
import Hero from "@/components/about-us/Hero";
import Industries from "@/components/about-us/Industries";
import PlatformCompany from "@/components/about-us/PlatformCompany";

import Thesis from "@/components/about-us/Thesis";

export default function Page() {
  return (
    <main>
      <Hero />
      <Thesis />
      <PlatformCompany />
      <Estate />
      <AI />
      <Industries />
      <Credibility />
      <Governance />
      <Global />
      <Founder />
      <Ambition />
      <Contact />
    </main>
  );
}