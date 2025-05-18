import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative flex items-center justify-center mr-3">
            <Truck className="h-8 w-8 text-primary" />
            <Wrench className="h-4 w-4 text-secondary absolute bottom-0 right-0" />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-bold text-lg md:text-xl leading-tight">
              Golden
            </span>
            <span className="text-primary font-bold text-lg md:text-xl leading-tight">
              Heavy Duty Repair
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 hover:text-secondary transition duration-300 ${
                location === link.href ? "active-page" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        } bg-white shadow-lg`}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <Link
              key={`mobile-${link.href}`}
              href={link.href}
              className={`py-2 hover:text-secondary transition duration-300 border-b border-gray-100 ${
                location === link.href ? "active-page" : ""
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
