import { Helmet } from "react-helmet";
import HeroSection from "@/components/home/HeroSection";
import ServiceHighlights from "@/components/home/ServiceHighlights";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Reliable Truck Repair - Fast, Professional Service</title>
        <meta name="description" content="Reliable Truck Repair provides 24/7 mobile and in-shop truck repair services. Emergency roadside assistance, certified mechanics, and fleet discounts." />
      </Helmet>
      
      <HeroSection />
      <ServiceHighlights />
      <CTABanner />
    </>
  );
}
