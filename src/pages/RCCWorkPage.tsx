import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Building2, 
  Layers, 
  Shield, 
  Users, 
  HardHat, 
  Ruler,
  Phone,
  ArrowRight,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import civilWorkImage from "@/assets/rcc-work.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import teamImage from "@/assets/team-work.jpg";

const CivilWorkPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Site Development & Earthwork",
      description: "Bulk excavation, grading, and soil stabilization that prepare every site for accelerated construction.",
    },
    {
      icon: Layers,
      title: "Roads & Pavements",
      description: "Concrete and bitumen roads, walkways, and hardscapes built for high load cycles and better longevity.",
    },
    {
      icon: Shield,
      title: "Drainage & Utilities",
      description: "Integrated storm-water drains, culverts, and underground utility corridors with minimal disruption.",
    },
    {
      icon: Ruler,
      title: "Survey & Layout Control",
      description: "Total-station layouts, level checks, and design coordination for flawless civil execution.",
    },
    {
      icon: HardHat,
      title: "Industrial Civil Works",
      description: "Machine foundations, plinths, equipment trenches, and high-tolerance industrial floors.",
    },
    {
      icon: Users,
      title: "Renovation & Restoration",
      description: "Retrofit, waterproofing, façade upgrades, and adaptive reuse of aging infrastructure.",
    },
  ];

  const howWeWork = [
    { step: "01", title: "Needs Assessment", description: "Detailed site study, geotech inputs, and compliance requirements." },
    { step: "02", title: "Design Coordination", description: "Working with architects and consultants to finalize buildable details." },
    { step: "03", title: "Execution & Monitoring", description: "Daily progress tracking with QA/QC labs and digital reporting." },
    { step: "04", title: "Handover & Support", description: "Commissioning, documentation, and post-handover maintenance plans." },
  ];

  const safetyMeasures = [
    "Daily toolbox talks and job-safety analysis for each activity",
    "PPE compliance tracking with digital checklists",
    "Barricading, traffic diversion, and signage for live sites",
    "Emergency response teams with first-aid and fire drills",
    "Scheduled equipment inspections and calibration records",
    "Joint safety and quality audits with clients and consultants",
  ];

  const assets = [
    { name: "Earthmoving Equipment", count: "18+" },
    { name: "Concrete & Asphalt Crews", count: "7" },
    { name: "Survey & QA Engineers", count: "15" },
    { name: "Modular Formwork Systems", count: "25+" },
    { name: "Trucks & Tippers", count: "30+" },
    { name: "Design & PMC Partners", count: "10+" },
  ];

  const projects = [
    { image: project1, title: "Smart City Streetscape", location: "Ahmedabad CBD", area: "12 km corridor" },
    { image: project2, title: "Industrial Civil Package", location: "Dahej SEZ", area: "1,50,000 sq.ft" },
    { image: project3, title: "Urban Drainage Upgrade", location: "Vadodara", area: "45 MLD network" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={civilWorkImage} alt="Civil work execution" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CIVIL WORKS & INFRASTRUCTURE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-background mb-4">
              Integrated Civil Construction & Infrastructure Services
            </h1>
            <p className="text-xl text-background/80 mb-6">
              From industrial floors to city roads, we plan and deliver end-to-end civil packages
              that improve safety, speed, and lifecycle performance.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Book Site Visit
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CIVIL SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Work & Infrastructure Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive civil contracting solutions powered by experienced crews, reliable equipment, and transparent reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card border border-border p-6 hover:border-primary transition-colors rounded-lg">
                <service.icon className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PROJECT SHOWCASE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recent Civil Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card border border-border overflow-hidden group rounded-lg">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                    <span className="mx-2">•</span>
                    <span>{project.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              DELIVERY APPROACH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Deliver Civil Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border p-6 h-full rounded-lg">
                  <div className="text-4xl font-bold text-secondary/30 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {index < howWeWork.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-muted" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Measures Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary-foreground/20 px-4 py-1 text-sm font-medium mb-4 rounded">
                SAFETY & QUALITY
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Safety Practices On Every Civil Site
              </h2>
              <p className="opacity-80 mb-8">
                Civil works often operate in live environments. Our integrated HSE and QA programs protect teams, neighbors, and project timelines.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {safetyMeasures.map((measure, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="opacity-90">{measure}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={teamImage} alt="Safety measures" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CAPACITY & REACH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Resources We Deploy
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {assets.map((asset, index) => (
              <div key={index} className="bg-card border border-border p-6 text-center rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">{asset.count}</div>
                <div className="text-sm text-muted-foreground">{asset.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted h-[400px] w-full flex items-center justify-center rounded-lg">
                <div className="text-center">
                  <Users className="h-20 w-20 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Director Photo</p>
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                LEADERSHIP
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Civil Leadership
              </h2>
              <h3 className="text-xl text-secondary mb-4">Mr. Vikram Patel</h3>
              <p className="text-muted-foreground mb-4">Managing Director, Valor Buildcon LLP</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 20 years in civil infrastructure, Mr. Vikram Patel guides Valor Buildcon to
                deliver smarter, faster, and safer works. His site-first leadership style empowers
                teams to collaborate with consultants, industries, and civic agencies across Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary rounded-lg mx-4 mb-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-secondary-foreground mb-2">
                Need a Civil Execution Partner?
              </h2>
              <p className="text-secondary-foreground/80">
                Let us plan site visits, cost options, and phasing strategies for your scope.
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                <a href="tel:+919876543210">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/#contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CivilWorkPage;
