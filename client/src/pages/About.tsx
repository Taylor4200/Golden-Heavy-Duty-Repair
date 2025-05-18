import { Helmet } from "react-helmet";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Reliable Truck Repair</title>
        <meta name="description" content="Family-owned truck repair business with certified mechanics serving truckers 24/7. Over 15 years of experience in the trucking industry." />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* About Content */}
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">About Reliable Truck Repair</h2>
              <p className="text-gray-700 mb-4 text-lg">
                For over 15 years, Reliable Truck Repair has been the trusted partner for truckers and fleet managers throughout the region. As a family-owned business, we understand the importance of personalized service and building lasting relationships with our customers.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                Our team of certified mechanics has extensive experience with all truck makes and models. We're committed to providing high-quality repairs with minimal downtime, whether you need emergency roadside assistance or scheduled maintenance.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                We're proud to serve truckers 24/7, because we know that in your business, time is money. Our goal is to keep you moving safely and efficiently.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Check className="text-secondary text-xl mr-2" />
                  <span className="font-medium">Family-Owned</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-secondary text-xl mr-2" />
                  <span className="font-medium">ASE-Certified Mechanics</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-secondary text-xl mr-2" />
                  <span className="font-medium">24/7 Availability</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-secondary text-xl mr-2" />
                  <span className="font-medium">15+ Years Experience</span>
                </div>
              </div>
              
              <Button 
                asChild
                size="lg" 
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
            
            {/* About Image */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Reliable Truck Repair Team" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
