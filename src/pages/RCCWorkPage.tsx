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
import teamImage from "@/assets/team-work.jpg";

const CivilWorkPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Residential RCC Frames",
      description: "G+20 structural frames, podium slabs, and amenity blocks executed across Pune's western corridor.",
    },
    {
      icon: Layers,
      title: "Commercial Podiums & Basements",
      description: "Post-tension slabs, parking decks, and waterproof podiums for mixed-use campuses.",
    },
    {
      icon: Shield,
      title: "Drainage & Utility Corridors",
      description: "UG drainage, rainwater harvesting pits, and utility sleeves for large-format townships.",
    },
    {
      icon: Ruler,
      title: "Survey, Layout & QA",
      description: "Digital layout control, cube testing coordination, and documentation for consultants.",
    },
    {
      icon: HardHat,
      title: "Industrial Foundations",
      description: "Machine bases, heavy-duty floors, and HT bolt layouts for manufacturing clients.",
    },
    {
      icon: Users,
      title: "Turnkey Infrastructure",
      description: "Approach roads, boundary walls, and streetscape upgrades for large developers.",
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

  const equipmentList = [
    { name: "Steel & Aluminum Formwork", detail: "12+ modular shuttering sets for towers and podiums" },
    { name: "Concrete Vibrators & Screeds", detail: "18 units covering slabs, cores, and podium decks" },
    { name: "Rebar Cutting & Bending Machines", detail: "4 automated stations for faster steel cycles" },
    { name: "Passenger & Material Hoists", detail: "3 hoists with 1.5T capacity for vertical transport" },
    { name: "Laser Levels & Total Stations", detail: "Advanced survey suite for millimeter-accurate layouts" },
    { name: "Transit Mixers & Pumps", detail: "15+ mixers and 4 pumps paired with in-house RMC plant" },
  ];

  const projects = [
    { image: "/images/civil_rcc_work/IMG-20260113-WA0000.jpg", title: "Life Republic Podium Works", location: "Hinjawadi, Pune", company: "Kolte Patil Life Republic" },
    { image: "/images/civil_rcc_work/IMG-20260113-WA0001.jpg", title: "Legacy Avenue RCC Shells", location: "Pimpri-Chinchwad", company: "Legacy Life Spaces" },
    { image: "/images/civil_rcc_work/IMG-20260113-WA0002.jpg", title: "Commercial Utility Upgrade", location: "Baner, Pune", company: "Millennium Developers" },
  ];

  const civilGalleryImages = [
    "/images/civil_rcc_work/IMG-20260113-WA0000.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0001.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0002.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0003.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0004.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0005.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0006.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0007.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0008.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0009.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0010.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0011.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0012.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0013.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0015.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0016.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0017.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0018.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0020.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0021.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0022.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0024.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0025.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0026.jpg",
    "/images/civil_rcc_work/IMG-20260113-WA0027.jpg",
    "/images/civil_rcc_work/WhatsApp Image 2026-01-17 at 9.37.56 AM (1).jpeg",
    "/images/civil_rcc_work/WhatsApp Image 2026-01-17 at 9.37.56 AM (2).jpeg",
    "/images/civil_rcc_work/WhatsApp Image 2026-01-17 at 9.37.56 AM (3).jpeg",
    "/images/civil_rcc_work/WhatsApp Image 2026-01-17 at 9.37.56 AM.jpeg",
  ];

  const civilTeam = [
    {
      name: "Mahesh Chavre",
      role: "Civil Delivery Lead",
      focus: "Leads RCC execution, crew deployment, and coordination with consultants across all active projects.",
    },
    {
      name: "Vishwajit Biswas",
      role: "Senior Site Manager",
      focus: "Oversees day-to-day site safety, QA/QC logs, and contractor interfaces for township scopes.",
    },
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
          <div className="max-w-3xl" data-animate="fade-up" data-animate-duration="1" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CIVIL WORKS & INFRASTRUCTURE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-background mb-4">
              Integrated Civil Construction & Infrastructure Services
            </h1>
            <p className="text-xl text-background/80 mb-6">
              Pune-focused RCC and infrastructure partner with 7 years of execution experience,
              delivering podiums, towers, and amenity blocks with disciplined QA/QC.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+918855860707">
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
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CIVIL SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Work & Infrastructure Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive RCC, podium, and infrastructure contracting packages tailored for Pune's leading developers and industries.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-stagger="0.08"
            data-animate-targets="[data-service-card]"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 hover:border-primary transition-colors rounded-lg"
                data-service-card
              >
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
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PROJECT SHOWCASE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Recent Civil Engagements
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-stagger="0.1"
            data-animate-targets="[data-project-card]"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border border-border overflow-hidden group rounded-lg"
                data-project-card
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <div className="flex flex-col text-muted-foreground text-sm gap-1">
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </span>
                    <span className="font-medium">{project.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              SITE GALLERY
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Execution In Progress
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-time captures from the latest roadwork, drain upgrades, and industrial civil scopes handled by our teams.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-gallery-card]"
            data-animate-stagger="0.05"
          >
            {civilGalleryImages.map((src, index) => (
              <div
                key={src}
                className="relative h-64 overflow-hidden rounded-lg border border-border group"
                data-gallery-card
              >
                <img
                  src={src}
                  alt={`Civil work photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute bottom-4 left-4 text-xs font-medium text-background bg-foreground/60 px-3 py-1 rounded-full">
                  {`Site Capture ${String(index + 1).padStart(2, "0")}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              DELIVERY APPROACH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Deliver Civil Works
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-process-card]"
            data-animate-stagger="0.08"
          >
            {howWeWork.map((item, index) => (
              <div key={index} className="relative" data-process-card>
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
            <div data-animate="fade-right" data-animate-delay="0.1">
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
            <div data-animate="fade-left" data-animate-delay="0.2">
              <img src={teamImage} alt="Safety measures" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CAPACITY & REACH
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Machines & Tools In-House
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-equipment-card]"
            data-animate-stagger="0.06"
          >
            {equipmentList.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-lg"
                data-equipment-card
              >
                <div className="text-lg font-semibold text-foreground mb-2">{item.name}</div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Staff Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              LEADERSHIP & STAFF
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Civil Leadership & Core Site Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Photo placeholders below will be replaced with official portraits once the final image assets are shared.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-civil-team]"
            data-animate-stagger="0.08"
          >
            {civilTeam.map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-8" data-civil-team>
                <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-center text-sm text-muted-foreground mb-6">
                  <span>Photo placeholder for {member.name}</span>
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 bg-secondary rounded-lg mx-4 mb-4"
        data-animate="scale"
        data-animate-duration="1"
        data-animate-delay="0.15"
      >
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
                <a href="tel:+918855860707">
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
