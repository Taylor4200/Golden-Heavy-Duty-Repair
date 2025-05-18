import { Link } from "wouter";
import { Truck, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Truck className="h-8 w-8 text-secondary mr-3" />
              <span className="text-white font-bold text-xl">
                Reliable Truck Repair
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Keeping your trucks on the road with fast, reliable repair services. 
              Available 24/7 for emergency roadside assistance.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-secondary transition duration-300"
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
                <Link href="/" className="text-gray-400 hover:text-secondary transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-secondary transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-secondary transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-400 hover:text-secondary transition duration-300">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-secondary transition duration-300">
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
                <span className="text-gray-400">
                  1234 Truck Service Drive<br />Anytown, USA 12345
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-400">(800) 555-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-secondary mt-1 mr-3" />
                <span className="text-gray-400">service@reliabletruckrepair.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Reliable Truck Repair. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
