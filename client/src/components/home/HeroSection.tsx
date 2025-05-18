import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import the logo and truck image
import goldLogo from "@/assets/golden-logo-transparent.png";
import truckImage from "@/assets/golden-truck.png";

export default function HeroSection() {
  return (
    <div className="relative bg-primary">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90 z-10"></div>
      
      <div 
        className="h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${truckImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover" 
        }}
      ></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <img 
                src={goldLogo} 
                alt="Golden Heavy Duty Repair Logo" 
                className="h-32 md:h-40 mx-auto"
              />
            </div>
            <p className="text-lg md:text-xl text-white mb-2">
              Keeping your trucks on the road is our priority. 24/7 service to minimize downtime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-black text-lg font-bold"
            >
              <Link href="/contact">Request Service</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="bg-white hover:bg-gray-100 text-primary border-none text-lg font-bold"
            >
              <a href="tel:+13032334270" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call 24/7 Hotline
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
