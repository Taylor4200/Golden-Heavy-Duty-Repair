import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABanner() {
  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">
              Need emergency heavy duty repair?
            </h3>
            <p className="text-white mt-2 flex items-center">
              <Clock className="h-4 w-4 text-secondary mr-2" />
              Fastest on scene — serving the entire I-70 corridor
            </p>
          </div>
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black text-lg font-bold"
          >
            <a href="tel:+13032334270" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call Our Hotline
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
