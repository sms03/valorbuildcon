import { Building2, Briefcase } from "lucide-react";

const TestimonialsSection = () => {
  const partners = [
    {
      name: "Larsen & Toubro",
      sector: "Infrastructure",
      focus: "High-rise civil works",
      description: "Delivered structural frames for premium residential towers with accelerated timelines and zero-compromise safety.",
    },
    {
      name: "Adani Realty",
      sector: "Real Estate",
      focus: "Mixed-use townships",
      description: "Executed RCC packages and supplied RMC for large-format township amenities across Ahmedabad.",
    },
    {
      name: "Tata Projects",
      sector: "Industrial",
      focus: "Industrial foundations",
      description: "Supported critical infrastructure builds with precision batching and on-site pour management.",
    },
    {
      name: "Godrej Properties",
      sector: "Residential",
      focus: "Premium residences",
      description: "Provided turnkey civil work execution for boutique residential blocks and lifestyle clubs.",
    },
    {
      name: "Shapoorji Pallonji",
      sector: "Commercial",
      focus: "Corporate campuses",
      description: "Managed structural cores and concrete logistics for sustainable office campuses.",
    },
    {
      name: "Hiranandani Communities",
      sector: "Townships",
      focus: "Bulk concrete supply",
      description: "Operated dedicated batching setups to fuel large-scale township infrastructure.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            TRUSTED PARTNERS
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Companies We Have Worked With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with India’s most respected developers and infrastructure leaders,
            supporting them from mix-design to final pour on marquee projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-card border border-border p-8 rounded-lg flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">{partner.name}</div>
                  <div className="text-sm text-muted-foreground">{partner.sector}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed flex-1">
                {partner.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                <Briefcase className="h-4 w-4 text-primary" />
                <span>{partner.focus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
