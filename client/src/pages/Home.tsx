import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Golden Heavy Duty Repair - Fast, Professional Service</title>
        <meta name="description" content="Golden Heavy Duty Repair provides 24/7 mobile and in-shop truck repair services along the I-70 corridor. Emergency roadside assistance, certified mechanics, and fleet discounts." />
      </Helmet>
      
      <HeroSection />
      <ServiceHighlights />
      <CTABanner />
    </>
  );
}
