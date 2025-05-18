import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative bg-primary">
      {/* Hero Background with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <div 
        className="h-[500px] md:h-[600px] bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&h=1100&q=80')",
          backgroundPosition: "center" 
        }}
      ></div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
        <div className="text-center max-w-4xl">
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              Golden Heavy Duty Repair
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-secondary">
              Fastest On Scene — Serving The Entire I-70 Corridor
            </p>
          </div>
          <p className="text-lg md:text-xl text-white mb-8">
            Keeping your trucks on the road is our priority. 24/7 service to minimize downtime.
          </p>
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
              <a href="tel:+18005551234" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call 24/7 Hotline
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
