import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    label: "Home",
    path: "/"
  }, {
    label: "RCC Work",
    path: "/rcc-work"
  }, {
    label: "RMC Plant",
    path: "/rmc-plant"
  }, {
    label: "About Us",
    path: "/#about"
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@valorbuildcom.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@valorbuildcom.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm">
            Building Excellence Since 2010
          </div>
        </div>
      </div>

      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-bold text-xl px-3 py-2">
              VALOR
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-foreground">BUILDCON LLP</div>
              <div className="text-xs text-muted-foreground">Construction Excellence</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={cn("text-sm font-medium transition-colors hover:text-primary", isActive(item.path) ? "text-primary" : "text-muted-foreground")}>
                {item.label}
              </Link>)}
            <Button asChild>
              <Link to="/#contact">Get Quote</Link>
            </Button>
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
              <Button asChild className="w-full mt-2">
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;