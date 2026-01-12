import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      data-animate="fade-up"
      data-animate-duration="1"
      data-animate-once="true"
    >
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/heros_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          {/* Civil Work Section */}
          <div
            className="bg-card/20 border border-border/30 p-8 lg:p-12 flex flex-col justify-center rounded-lg"
            data-animate="fade-up"
            data-animate-delay="0.1"
          >
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 w-fit rounded">
              STRUCTURAL EXCELLENCE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4">
              Civil Work
            </h2>
            <p className="text-background/80 text-lg mb-6 leading-relaxed">
              Expert Reinforced Cement Concrete structural work for residential, 
              commercial, and industrial projects. We deliver strength and durability 
              that stands the test of time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/rcc-work">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RMC Plant Section */}
          <div
            className="bg-card/20 border border-border/30 p-8 lg:p-12 flex flex-col justify-center rounded-lg"
            data-animate="fade-up"
            data-animate-delay="0.2"
          >
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 w-fit rounded">
              CONCRETE SOLUTIONS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-background mb-4">
              RMC Plant
            </h2>
            <p className="text-background/80 text-lg mb-6 leading-relaxed">
              State-of-the-art Ready Mix Concrete plant delivering consistent quality 
              concrete with precision mix designs. Serving construction sites across 
              the region with timely delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link to="/rmc-plant">
                  Read More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div
          className="mt-8 bg-primary text-primary-foreground p-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg"
          data-animate="fade-up"
          data-animate-delay="0.35"
        >
          <div className="text-center sm:text-left">
            <p className="text-sm opacity-80">Need a quote for your project?</p>
            <p className="font-semibold">Contact us today for a free consultation</p>
          </div>
          <Button asChild variant="contact" size="lg">
            <a href="tel:+918855860707">
              <Phone className="mr-2 h-5 w-5" />
              +91 88558 60707
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
