import { Link } from "wouter";
import { Truck, Wrench, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative flex items-center justify-center mr-3">
                <Truck className="h-8 w-8 text-white" />
                <Wrench className="h-4 w-4 text-secondary absolute bottom-0 right-0" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  Golden
                </span>
                <span className="text-white font-bold text-lg leading-tight">
                  Heavy Duty Repair
                </span>
              </div>
            </div>
            <p className="text-gray-200 mb-4">
              Keeping your trucks on the road with fast, professional repair services. 
              Available 24/7 for emergency roadside assistance along the I-70 corridor.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-secondary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-secondary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-secondary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-200 hover:text-secondary transition duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-secondary transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-200">
                  1234 Truck Service Drive<br />Anytown, USA 12345
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-200">(800) 555-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-200">service@goldenheavydutyrepair.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} Golden Heavy Duty Repair. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
