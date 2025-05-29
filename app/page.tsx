import TestimonialCarousel from "@/components/TestimonialCarousel";
import Hero from "@/components/Hero";
import HowApplyVisa from "@/components/HowApplyVisa";
import PostStudyOpportunities from "@/components/PostStudyOpportunities";
import ServicesCards from "@/components/ServiceCards";
import WhyGermanLanguage from "@/components/WhyGermanLanguage";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-[1700px] mx-auto">
        <WhyGermanLanguage />
        <ServicesCards />
        <PostStudyOpportunities />
        <HowApplyVisa />
      </div>
      <TestimonialCarousel />
    </div>
  );
}
