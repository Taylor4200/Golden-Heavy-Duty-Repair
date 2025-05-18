import { Helmet } from "react-helmet";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Golden Heavy Duty Repair</title>
        <meta name="description" content="Contact Golden Heavy Duty Repair for 24/7 emergency service, scheduling repairs, or requesting information. Call our hotline or fill out our contact form." />
      </Helmet>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Contact Us</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Need heavy duty truck repair services? Fill out the form below or call our 24/7 hotline for immediate assistance along the I-70 corridor.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="lg:w-1/2">
              <div className="bg-primary text-white p-8 rounded-lg shadow-md mb-8 border-t-4 border-secondary">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p>6337 Wolff St<br />Arvada, CO 80003</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Phone className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p>24/7 Hotline: (303) 233-4270<br />Office: (303) 233-4270</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-secondary mt-1 mr-4" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p>service@goldenheavydutyrepair.com</p>
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
              <div className="bg-gray-300 h-64 rounded-lg shadow-md flex items-center justify-center border border-primary">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.770247252821!2d-105.06692992412664!3d39.76968589940632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c891ad68a9ee8%212x1a2e5858d9c8dfc3!2sGolden%20Heavy%20Duty%20Repair%20-%2024%2F7%20Mobile%20Truck%20And%20Trailer%20Repair!5e0!3m2!1sen!2sus!4v1715535565952!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  className="border-0 rounded-lg"
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Golden Heavy Duty Repair location map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
