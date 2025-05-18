import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Need emergency truck repair?
            </h3>
            <p className="text-white mt-2">
              Our mobile repair team is available 24/7
            </p>
          </div>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black text-lg"
          >
            <a href="tel:+18005551234" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call Our Hotline
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
