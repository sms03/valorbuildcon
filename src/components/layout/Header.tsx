import { FocusEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavChild = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  path: string;
} | {
  label: string;
  children: NavChild[];
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownCloseTimeout = useRef<number | null>(null);
  const location = useLocation();
  const navItems: NavItem[] = [{
    label: "Home",
    path: "/"
  }, {
    label: "Services",
    children: [{
      label: "Civil Work",
      path: "/rcc-work"
    }, {
      label: "RMC Plant",
      path: "/rmc-plant"
    }]
  }, {
    label: "About Us",
    path: "/about"
  }, {
    label: "Projects",
    path: "/projects"
  }, {
    label: "Contact",
    path: "/#contact"
  }];
  const isActive = (path: string) => {
    if (path.startsWith("/#")) return false;
    return location.pathname === path;
  };
  const isParentActive = (children: NavChild[]) => children.some(child => isActive(child.path));
  const clearDropdownTimeout = () => {
    if (dropdownCloseTimeout.current) {
      window.clearTimeout(dropdownCloseTimeout.current);
      dropdownCloseTimeout.current = null;
    }
  };
  const scheduleDropdownClose = () => {
    clearDropdownTimeout();
    dropdownCloseTimeout.current = window.setTimeout(() => {
      setActiveDropdown(null);
      dropdownCloseTimeout.current = null;
    }, 120);
  };
  const handleDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget as Node | null;
    if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
      setActiveDropdown(null);
    }
  };
  useEffect(() => {
    if (!isMenuOpen) setOpenMobileDropdown(null);
  }, [isMenuOpen]);
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
            {navItems.map(item => "children" in item ? <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    clearDropdownTimeout();
                    setActiveDropdown(item.label);
                  }}
                  onMouseLeave={scheduleDropdownClose}
                  onFocusCapture={() => setActiveDropdown(item.label)}
                  onBlurCapture={handleDropdownBlur}
                >
                  <button
                    type="button"
                    className={cn("flex items-center gap-1 text-base font-semibold transition-colors hover:text-primary", (isParentActive(item.children) || activeDropdown === item.label) ? "text-primary" : "text-muted-foreground")}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div
                    className={cn(
                      "absolute left-0 top-full mt-3 min-w-[220px] rounded-2xl border border-border bg-background/95 backdrop-blur-sm shadow-lg",
                      activeDropdown === item.label ? "block" : "hidden"
                    )}
                    onMouseEnter={clearDropdownTimeout}
                    onMouseLeave={scheduleDropdownClose}
                  >
                    <div className="flex flex-col py-3">
                      {item.children.map(child => <Link key={child.path} to={child.path} className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors">
                            {child.label}
                          </Link>)}
                    </div>
                  </div>
                </div> : <Link key={item.path} to={item.path} className={cn("text-base font-semibold transition-colors hover:text-primary", isActive(item.path) ? "text-primary" : "text-muted-foreground")}>
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
              {navItems.map(item => "children" in item ? <div key={item.label} className="flex flex-col gap-2">
                    <button type="button" className="flex items-center justify-between text-base font-semibold text-muted-foreground hover:text-primary transition-colors" onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)}>
                      <span>{item.label}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", openMobileDropdown === item.label && "rotate-180")}/>
                    </button>
                    {openMobileDropdown === item.label && <div className="pl-4 border-l border-border/50 flex flex-col gap-2">
                        {item.children.map(child => <Link key={child.path} to={child.path} className={cn("text-base font-semibold transition-colors hover:text-primary", isActive(child.path) ? "text-primary" : "text-muted-foreground")} onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }}>
                            {child.label}
                          </Link>)}
                      </div>}
                  </div> : <Link key={item.path} to={item.path} className={cn("text-base font-semibold transition-colors hover:text-primary py-2", isActive(item.path) ? "text-primary" : "text-muted-foreground")} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link>)}
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;