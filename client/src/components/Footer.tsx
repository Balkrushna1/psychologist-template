import { siteConfig } from "@/data/siteConfig";
import { Link } from "wouter";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-heading font-bold mb-4 text-white">
              {siteConfig.shortName}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/insurance" className="text-gray-400 hover:text-primary transition-colors">Insurance & Fees</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">Mental Health Blog</Link></li>
              <li><a href="/#contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 4).map((service, idx) => (
                <li key={idx} className="text-gray-400">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{siteConfig.address}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
