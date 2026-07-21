import {
  ZoikotechBrandBanner,
  AboutZoikoTech,
  ServicesByIndustry,
  PortfolioCarousel,
  ProductEcosystemGrid,
  WhyZoiko,
  CaseStudies,
  TestimonialSlider,
  TalkToUsContact,
} from "@/components/home";

export default function HomePage() {
  return (
    <main>
      <ZoikotechBrandBanner />
      <AboutZoikoTech />
      <ServicesByIndustry />
      <PortfolioCarousel />
      <ProductEcosystemGrid />
      <WhyZoiko />
      <CaseStudies />
      <TestimonialSlider />
      <TalkToUsContact />
    </main>
  );
}
