import { FocusEvent, useCallback, useEffect, useRef, useState } from "react";
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

const phoneNumbers = [
  { label: "Company number (Valor): 9607140999", href: "tel:+919607140999" },
];

const Header = () => {
      // Hide top bar on scroll down, show at top
      useEffect(() => {
        const topBar = document.getElementById("main-topbar");
        let ticking = false;
        function handleScroll() {
          if (!topBar) return;
          if (!ticking) {
            window.requestAnimationFrame(() => {
              if (window.scrollY > 10) {
                topBar.classList.add("topbar-hide");
              } else {
                topBar.classList.remove("topbar-hide");
              }
              ticking = false;
            });
            ticking = true;
          }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    // Scroll trigger for shrinking navbar
    useEffect(() => {
      let lastScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");
      const container = document.getElementById("navbar-container");
      function onScroll() {
        if (!navbar || !container) return;
        if (window.scrollY > lastScrollY && window.scrollY > 30) {
          // Scrolling down
          navbar.classList.add("navbar-shrink");
          container.classList.add("navbar-shrink-container");
        } else {
          // Scrolling up
          navbar.classList.remove("navbar-shrink");
          container.classList.remove("navbar-shrink-container");
        }
        lastScrollY = window.scrollY;
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownCloseTimeout = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
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
    label: "Projects",
    path: "/projects"
  }, {
    label: "About Us",
    path: "/about"
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
  const syncHeaderHeight = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!headerRef.current) return;

    const { height } = headerRef.current.getBoundingClientRect();
    document.documentElement.style.setProperty("--header-height", `${Math.ceil(height)}px`);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) setOpenMobileDropdown(null);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    syncHeaderHeight();

    const handleResize = () => syncHeaderHeight();
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | null = null;
    if (headerRef.current && "ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => syncHeaderHeight());
      resizeObserver.observe(headerRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [syncHeaderHeight]);

  useEffect(() => {
    syncHeaderHeight();
  }, [isMenuOpen, openMobileDropdown, syncHeaderHeight]);

    return <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b-0 shadow-none rounded-none pointer-events-none">
      <div id="main-topbar" className="bg-[hsl(355_34%_33%)] text-white border-b border-border/60 py-2 topbar-transition">
        <div className="container flex flex-col gap-2 text-center text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-3 text-white/80 sm:justify-start sm:gap-6">
            {phoneNumbers.map((number) => (
              <a
                key={number.href}
                href={number.href}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{number.label}</span>
              </a>
            ))}
            <a href="mailto:valorbuildconllp@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              <span>valorbuildconllp@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm text-white/90 text-center sm:text-right" />
        </div>
      </div>

      <div className="container transition-all duration-300 py-5 lg:py-7 pointer-events-auto" id="navbar-container" style={{position:'relative',zIndex:2}}>
        <nav className="flex items-center justify-between gap-3 rounded-full px-4 py-2 transition-all duration-300 navbar-pill" id="navbar" style={{position:'relative',zIndex:2}}>

          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src="/valor_logo.png"
              alt="Valor Buildcon logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <div className="hidden sm:block">
              <div className="font-semibold navbar-lightblue">Valor Buildcon LLP</div>
              <div className="text-xs text-muted-foreground">Experience the Excellence</div>
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
                      {item.children.map(child => <Link key={child.path} to={child.path} className="dropdown-link px-5 py-2 text-sm font-medium transition-colors">
                            {child.label}
                          </Link>)}
                    </div>
                  </div>
                </div> : <Link key={item.path} to={item.path} className={cn("text-base font-semibold transition-colors hover:text-primary", isActive(item.path) ? "text-primary" : "text-muted-foreground")}> 
                  {item.label}
                </Link>)}

            {/* Get a Quote pill button */}
            <a
              href="/#contact"
              className="ml-2 rounded-full px-6 py-2 font-bold get-a-quote-btn bg-[#F0E9E0] border-2 border-[#F0E9E0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(355_34%_33%)] focus:ring-offset-2"
              style={{ whiteSpace: 'nowrap' }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 shrink-0 rounded-md border border-border/60 bg-background/80 backdrop-blur"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && <div id="mobile-nav" className="lg:hidden py-4 border-t border-border mt-4">
            <div className="flex flex-col gap-4 max-h-[calc(100vh-220px)] overflow-y-auto overscroll-contain pr-1">
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

              {/* Get a Quote pill button for mobile */}
              <a
                href="/#contact"
                className="mt-2 rounded-full px-6 py-2 font-bold get-a-quote-btn bg-[#F0E9E0] border-2 border-[#F0E9E0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(355_34%_33%)] focus:ring-offset-2 text-center"
                style={{ whiteSpace: 'nowrap', display: 'block' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </a>
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;