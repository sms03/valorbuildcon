import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const phoneNumbers = [
  { label: "Company number (Valor): 9607140999", href: "tel:+919607140999" },
];

const Footer = () => {
  return <footer className="bg-primary text-primary-foreground rounded-t-2xl">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
                <img src="/valor_logo.png" alt="Valor logo" className="h-10 w-auto object-contain" />
                <div>
                  <div className="font-semibold text-sky-500 ">VALOR BUILDCON LLP</div>
                  <div className="text-xs opacity-80">Experience the Excellence</div>
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
                <Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
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
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  {phoneNumbers.map((number) => (
                    <a
                      key={number.href}
                      href={number.href}
                      className="opacity-80 hover:opacity-100"
                    >
                      {number.label}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0" />
                <a href="mailto:valorbuildconllp@gmail.com" className="opacity-80 hover:opacity-100">
                  valorbuildconllp@gmail.com
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
              {/*<Link to="/privacy" className="opacity-80 hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="opacity-80 hover:opacity-100">Terms of Service</Link>*/}
            </div>
          </div>
        </div>
      </div>
      {/* Big Valor Buildcon LLP text at the very end */}
      <div className="w-full flex justify-center items-center py-12">
        <span className="text-[3rem] md:text-[5rem] font-extrabold tracking-tight text-primary-foreground/10 select-none" style={{letterSpacing: '0.05em', lineHeight: 1}}>Valor Buildcon LLP</span>
      </div>
    </footer>;
};
export default Footer;