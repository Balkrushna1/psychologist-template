import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about", type: "scroll" },
    { name: "Services", to: "services", type: "scroll" },
    { name: "Resources", to: "resources", type: "scroll" },
    { name: "Contact", to: "contact", type: "scroll" },
  ];

  const pageLinks = [
    { name: "Home", href: "/" },
    { name: "Insurance & Fees", href: "/insurance" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="font-heading font-bold text-2xl text-primary tracking-tight">
            {siteConfig.shortName}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Context-aware navigation */}
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-foreground/80 hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                ))}
                <div className="h-4 w-px bg-border mx-2" />
                <Link href="/insurance" className="text-foreground/80 hover:text-primary font-medium transition-colors">
                  Fees
                </Link>
                <Link href="/blog" className="text-foreground/80 hover:text-primary font-medium transition-colors">
                  Blog
                </Link>
              </>
            ) : (
              pageLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors ${
                    location === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))
            )}

            <button
              onClick={() => window.location.href = isHome ? "#contact" : "/#contact"}
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {isHome && navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </ScrollLink>
              ))}
              
              <Link
                href="/insurance"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Insurance & Fees
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>

              <div className="pt-4 mt-4 border-t border-border">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = isHome ? "#contact" : "/#contact";
                  }}
                  className="w-full px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
