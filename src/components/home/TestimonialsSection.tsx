import { Building2 } from "lucide-react";
import DirectionalMarquee from "@/components/ui/DirectionalMarquee";

const TestimonialsSection = () => {
  const partnerNames = [
    "Larsen & Toubro",
    "Adani Realty",
    "Tata Projects",
    "Godrej Properties",
    "Shapoorji Pallonji",
    "Hiranandani Communities",
    "Kolte Patil Life Republic",
    "Legacy Life Spaces",
    "Millennium Developers",
    "18 Magnitude",
    "Garve Developers",
    "Rahuldeep Contractor",
    "Vinode Wakadkar Associates",
    "Perfect Construction",
    "Namrata Group",
    "Sahil Group",
  ];

  return (
    <section
      className="py-16 sm:py-20"
      style={{ background: '#F0E9E0' }}
      data-animate="fade-up"
      data-animate-duration="0.9"
    >
      <div className="container">
        <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            TRUSTED PARTNERS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Companies We Have Worked With
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground max-w-2xl">
            We collaborate with India’s most respected developers and infrastructure leaders,
            supporting them from mix-design to final pour on marquee projects.
          </p>
        </div>

        <DirectionalMarquee items={partnerNames} direction="left" speed={80} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
