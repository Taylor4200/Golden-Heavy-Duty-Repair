import { Helmet } from "react-helmet";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Reliable Truck Repair</title>
        <meta name="description" content="Contact Reliable Truck Repair for 24/7 emergency service, scheduling repairs, or requesting information. Call our hotline or fill out our contact form." />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Need truck repair services? Fill out the form below or call our 24/7 hotline for immediate assistance.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="bg-primary text-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>1234 Truck Service Drive<br />Anytown, USA 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Phone className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p>24/7 Hotline: (800) 555-1234<br />Office: (800) 555-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p>service@reliabletruckrepair.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Hours</h4>
                    <p>Emergency Service: 24/7/365<br />Shop Hours: Monday-Friday 7am-7pm<br />Saturday 8am-5pm</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-gray-300 h-64 rounded-lg shadow-md flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215373863412!2d-73.9874217!3d40.7520402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzA3LjMiTiA3M8KwNTknMTQuNyJX!5e0!3m2!1sen!2sus!4v1635346821154!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  className="border-0 rounded-lg"
                  allowFullScreen 
                  loading="lazy"
                  title="Map location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
