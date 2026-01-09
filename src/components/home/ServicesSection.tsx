import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Layers, Shield, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import rccImage from "@/assets/rcc-work.jpg";
import rmcImage from "@/assets/rmc-plant.jpg";

const ServicesSection = () => {
  const rccServices = [
    { icon: Building2, title: "Foundation Work", description: "Strong foundations for multi-story buildings" },
    { icon: Layers, title: "Slab Casting", description: "Precision slab work with quality finish" },
    { icon: Shield, title: "Column & Beam", description: "Structural framing with optimal strength" },
  ];

  const rmcServices = [
    { icon: Factory, title: "Mix Design", description: "Custom concrete mix for every requirement" },
    { icon: Truck, title: "Timely Delivery", description: "Transit mixers for on-time delivery" },
    { icon: Wrench, title: "Quality Testing", description: "In-house lab for quality assurance" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            OUR SERVICES
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From structural RCC work to ready mix concrete supply, we provide end-to-end 
            construction services with quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RCC Work Card */}
          <div className="bg-card border border-border overflow-hidden group rounded-lg">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={rccImage} 
                alt="RCC structural work" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-background">Civil Work</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground mb-6">
                Our expert team delivers superior Reinforced Cement Concrete structural 
                work for all types of construction projects. We use premium materials and 
                follow strict quality protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {rccServices.map((service) => (
                  <div key={service.title} className="text-center p-4 bg-muted/50 rounded-md">
                    <service.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-medium text-foreground text-sm">{service.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full">
                <Link to="/rcc-work">
                  Learn More About RCC Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RMC Plant Card */}
          <div className="bg-card border border-border overflow-hidden group rounded-lg">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={rmcImage} 
                alt="RMC Plant facility" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-background">RMC Plant</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art Ready Mix Concrete plant produces high-quality 
                concrete with precise mix designs. We ensure consistent quality and 
                timely delivery to construction sites.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {rmcServices.map((service) => (
                  <div key={service.title} className="text-center p-4 bg-muted/50 rounded-md">
                    <service.icon className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <h4 className="font-medium text-foreground text-sm">{service.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="w-full">
                <Link to="/rmc-plant">
                  Learn More About RMC Plant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
