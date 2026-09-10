import {
  AI,
  Ambition,
  Contact,
  Credibility,
  Estate,
  Founder,
  Global,
  Governance,
  Hero,
  Industries,
  Platform,
  Thesis,
} from "@/components/about-us";

export default function Page() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Platform />
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