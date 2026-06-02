import React from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/5d7b4269-522a-42c4-a078-a5da144baf98_1780140602285.png";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();

  const links = [
    { name: "Home", href: "/" },
    { name: "T-Shirts", href: "/categories" },
    { name: "Customize", href: "/customize" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-gray-900 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Phone size={11} className="text-primary" />
              +91 7417406959
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={11} className="text-primary" />
              contact@radhedigital.com
            </span>
          </div>
          <span className="text-gray-400">We Print Your Ideas – Fast Delivery Across India</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="w-full bg-white border-b-2 border-primary shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ minHeight: "96px" }}>

            {/* Logo — generous space, no fixed width cap */}
            <Link href="/" data-testid="link-logo" className="flex items-center flex-shrink-0 py-1">
              <img
                src={logoImg}
                alt="Radhe Digital T-Shirt Printing"
                style={{ height: "130px", width: "auto", maxWidth: "300px", objectFit: "contain" }}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-7">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-colors uppercase ${
                    location === link.href
                      ? "text-primary border-b-2 border-primary pb-0.5"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/customize">
                <Button
                  className="font-bold px-7 py-2 bg-primary text-white hover:bg-red-700 rounded-none uppercase tracking-wider text-sm"
                  data-testid="button-order-now"
                >
                  Order Now
                </Button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-red-50 focus:outline-none"
                data-testid="button-mobile-menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-semibold uppercase tracking-wide ${
                    location === link.href
                      ? "bg-red-50 text-primary"
                      : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/customize" onClick={() => setIsOpen(false)}>
                  <Button className="w-full font-bold bg-primary text-white hover:bg-red-700 uppercase tracking-wider py-5">
                    Order Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
