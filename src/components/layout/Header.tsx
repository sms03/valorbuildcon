import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    label: "Home",
    path: "/"
  }, {
    label: "Civil Work",
    path: "/rcc-work"
  }, {
    label: "RMC Plant",
    path: "/rmc-plant"
  }, {
    label: "About Us",
    path: "/about"
  }, {
    label: "Projects",
    path: "/#projects"
  }, {
    label: "Contact",
    path: "/#contact"
  }];
  const isActive = (path: string) => {
    if (path.startsWith("/#")) return false;
    return location.pathname === path;
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(34_33%_91%)] border-b border-border shadow-sm">
      <div className="bg-[hsl(355_34%_33%)] text-white border-b border-border/60 py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-white/80">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@valorbuildcon.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@valorbuildcon.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm text-white/90">
            Building Excellence Since 2010
          </div>
        </div>
      </div>

      <div className="container py-7">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/valor_logo.png"
              alt="Valor Buildcon logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground">Valor Buildcon LLP</div>
              <div className="text-xs text-muted-foreground">Construction Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary", isActive(item.path) ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4">
              {navItems.map(item => <Link key={item.path} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary py-2", isActive(item.path) ? "text-primary" : "text-muted-foreground")} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>)}
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;