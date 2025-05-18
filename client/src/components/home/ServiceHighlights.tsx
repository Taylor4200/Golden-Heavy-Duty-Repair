import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Truck, Award, DollarSign } from "lucide-react";

export default function ServiceHighlights() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Why Choose Golden Heavy Duty Repair?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Emergency Service */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-primary">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Truck className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-primary">
              Emergency Roadside Service
            </h3>
            <p className="text-center text-gray-600">
              24/7 mobile repair service. We come to your location to get you back on the road quickly.
            </p>
          </div>

          {/* Certified Mechanics */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-secondary">
            <div className="bg-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Award className="text-black h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-primary">
              Certified Mechanics
            </h3>
            <p className="text-center text-gray-600">
              Our team of ASE-certified technicians have the expertise to handle any truck repair needs.
            </p>
          </div>

          {/* Fleet Discounts */}
          <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 border-t-4 border-primary">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3 text-primary">
              Fleet Discounts
            </h3>
            <p className="text-center text-gray-600">
              Special pricing and maintenance plans for commercial fleets of all sizes.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-black font-bold"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
