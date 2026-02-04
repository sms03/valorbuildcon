import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const contactNumbers = [
  { label: "Company number (Valor): 9607140999", href: "tel:+919607140999" },
];

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[100vh] flex items-center py-12 sm:py-16 -mt-[90px] sm:-mt-[125px] z-[1]"
      data-animate="fade-up"
      data-animate-duration="1"
      data-animate-once="true"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="hidden md:block w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/heros_video.mp4" type="video/mp4" />
        </video>
        <img
          src={heroImage}
          alt="Valor Buildcon team at work"
          className="block md:hidden w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/70 md:from-black/50 md:via-black/20 md:to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Civil Work Section */}
          <div
            className="bg-card/20 border border-border/30 p-5 sm:p-8 lg:p-12 flex flex-col justify-center rounded-lg backdrop-blur-sm"
            data-animate="fade-up"
            data-animate-delay="0.1"
          >
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 w-fit rounded">
              <span className="hero-dark-grey">STRUCTURAL EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="civil-rmc-title">Civil Work</span>
            </h2>
            <p className="text-background/80 text-base sm:text-lg mb-6 leading-relaxed">
              Expert Reinforced Cement Concrete structural work for residential, 
              commercial, and industrial projects. We deliver strength and durability 
              that stands the test of time.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/rcc-work" className="maroon-link">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 maroon-link" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RMC Plant Section */}
          <div
            className="bg-card/20 border border-border/30 p-5 sm:p-8 lg:p-12 flex flex-col justify-center rounded-lg backdrop-blur-sm"
            data-animate="fade-up"
            data-animate-delay="0.2"
          >
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 w-fit rounded">
              <span className="hero-dark-grey">CONCRETE SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="civil-rmc-title">RMC Plant</span>
            </h2>
            <p className="text-background/80 text-base sm:text-lg mb-6 leading-relaxed">
              State-of-the-art Ready Mix Concrete plant delivering consistent quality 
              concrete with precision mix designs. Serving construction sites across 
              the region with timely delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link to="/rmc-plant" className="maroon-link">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5 maroon-link" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div
          className="mt-8 bg-primary text-primary-foreground p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg"
          data-animate="fade-up"
          data-animate-delay="0.35"
        >
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base opacity-80">Need a quote for your project?</p>
            <p className="font-semibold text-base sm:text-lg">Contact us today for a free consultation</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {contactNumbers.map((number) => (
              <Button
                key={number.href}
                asChild
                variant="contact"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href={number.href} className="flex w-full items-center justify-center gap-2 text-sm sm:text-base leading-snug text-center">
                  <Phone className="h-5 w-5" />
                  {number.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
