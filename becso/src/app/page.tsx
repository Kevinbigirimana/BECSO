import Hero from "@/components/home/Hero";
import Challenge from "@/components/home/Challenge";
import VisionMission from "@/components/home/VisionMission";
import Solution from "@/components/home/Solution";
import HowItWorks from "@/components/home/HowItWorks";
import Programs from "@/components/home/Programs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ImpactStats from "@/components/home/ImpactStats";
import WhyBurundi from "@/components/home/WhyBurundi";
import SDGAlignment from "@/components/home/SDGAlignment";
import Partners from "@/components/home/Partners";
import NewsInsights from "@/components/home/NewsInsights";
import FAQ from "@/components/home/FAQ";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Challenge />
      <VisionMission />
      <Solution />
      <HowItWorks />
      <Programs />
      <FeaturedProjects />
      <ImpactStats />
      <WhyBurundi />
      <SDGAlignment />
      <Partners />
      <NewsInsights />
      <FAQ />
      <CallToAction />
    </>
  );
}
