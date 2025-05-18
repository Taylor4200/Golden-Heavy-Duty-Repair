import { Helmet } from "react-helmet";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services - Golden Heavy Duty Repair</title>
        <meta name="description" content="Comprehensive truck repair services including mobile repair, DOT inspections, brake service, engine diagnostics, and more." />
      </Helmet>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer comprehensive heavy duty truck repair and maintenance services to keep your vehicles running efficiently and safely.
          </p>
          
          <ServicesGrid />
        </div>
      </section>
    </>
  );
}
