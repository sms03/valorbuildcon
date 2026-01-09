import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useGsapAnimations from "@/hooks/use-gsap-animations";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  useGsapAnimations();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace("#", "");
    if (!targetId) return;

    const element = document.getElementById(targetId);
    if (!element) return;

    const headerOffset = window.innerWidth < 768 ? 100 : 140;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition > 0 ? offsetPosition : 0,
      behavior: "smooth",
    });
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[120px] md:pt-[140px] page-transition">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
