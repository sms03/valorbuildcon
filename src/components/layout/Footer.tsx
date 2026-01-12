import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary-foreground text-primary font-bold text-xl px-3 py-2">
                VALOR
              </div>
              <div>
                <div className="font-semibold">BUILDCON LLP</div>
                <div className="text-xs opacity-80">Construction Excellence</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A trusted name in construction industry, specializing in RCC structural work 
              and Ready Mix Concrete solutions. Building India's infrastructure with 
              quality and commitment since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              </li>
              <li>
                <Link to="/rcc-work" className="opacity-80 hover:opacity-100 transition-opacity">RCC Work</Link>
              </li>
              <li>
                <Link to="/rmc-plant" className="opacity-80 hover:opacity-100 transition-opacity">RMC Plant</Link>
              </li>
              <li>
                <Link to="/#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="opacity-80 hover:opacity-100 transition-opacity">Our Projects</Link>
              </li>
              <li>
                <Link to="/#contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="opacity-80">
                  JPCJ+323, Kate Wasti, Punawale, Pimpri-Chinchwad, Dattwadi, Maharashtra 411033<br />
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0" />
                <a href="tel:+919876543210" className="opacity-80 hover:opacity-100">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
              <a href="mailto:info@valorbuildcon.com" className="opacity-80 hover:opacity-100">
                  info@valorbuildcon.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0" />
                <span className="opacity-80">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-80">
              © {new Date().getFullYear()} Valor Buildcon LLP. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="opacity-80 hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="opacity-80 hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;