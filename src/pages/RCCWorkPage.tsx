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
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import civilWorkImage from "@/assets/rcc-work.jpg";
import teamImage from "@/assets/team-work.jpg";
import { useContent } from "@/hooks/use-content";

const CivilWorkPage = () => {
  const civilServices = [
    {
      icon: Shield,
      title: "Excavation & Site Development",
      description: "Site clearing, excavation, and formation work for township and commercial developments.",
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

  const rccServices = [
    {
      icon: Building2,
      title: "Residential RCC Frames",
      description: "RCC frames, podium slabs, and amenity blocks executed across Pune's growth corridors.",
    },
    {
      icon: Layers,
      title: "Commercial Podiums & Basements",
      description: "Parking decks, waterproof podiums, and service basements for mixed-use campuses.",
    },
    {
      icon: Shield,
      title: "Structural Columns & Beams",
      description: "Precision RCC framing with consistent QA/QC and pour sequencing.",
    },
  ];

  const safetyMeasures = [
    "Daily toolbox talks and job-safety analysis for each activity",
    "PPE compliance tracking with digital checklists",
    "Barricading, traffic diversion, and signage for live sites",
    "Emergency response teams with first-aid and fire drills",
    "Scheduled equipment inspections and calibration records",
    "Joint safety and quality audits with clients and consultants",
  ];

  const materialTypes = [
    "Cement (OPC/PPC)",
    "Manufactured sand (M-sand)",
    "20 mm & 10 mm aggregates",
    "Admixtures & waterproofing compounds",
  ];

  const machineryStrengths = [
    { name: "Steel & Aluminum Formwork", detail: "12+ modular shuttering sets for towers and podiums" },
    { name: "Concrete Vibrators & Screeds", detail: "18 units covering slabs, cores, and podium decks" },
    { name: "Rebar Cutting & Bending Machines", detail: "4 automated stations for faster steel cycles" },
    { name: "Passenger & Material Hoists", detail: "3 hoists with 1.5T capacity for vertical transport" },
    { name: "Laser Levels & Total Stations", detail: "Advanced survey suite for millimeter-accurate layouts" },
    { name: "Transit Mixers & Pumps", detail: "15+ mixers and 4 pumps paired with in-house RMC plant" },
  ];

  const civilProjects = [
    { title: "Legacy Milestone", location: "Punawale", scope: "Excavation", status: "Completed" },
    { title: "Vilas Jawadekar", location: "Kate Wasti", scope: "Excavation", status: "Completed" },
    { title: "18 Magnitude", location: "Punawale", scope: "Excavation", status: "Completed" },
  ];

  const rccProjects = [
    { title: "Poodar School", location: "Punawale", scope: "RCC Work", status: "Completed" },
    { title: "DY Patil", location: "Ravet", scope: "RCC Work", status: "Completed" },
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
      name: "Vishwajit Biswas",
      role: "Engineer",
      focus: "Handles site execution, safety, and day-to-day coordination across civil scopes.",
    },
    {
      name: "Mahesh Chowre",
      role: "Engineer",
      focus: "Manages RCC activity planning, contractor coordination, and site reporting.",
    },
    {
      name: "Girish Desai",
      role: "Technical Head",
      focus: "Leads technical approvals, QA/QC standards, and execution methodology across projects.",
    },
  ];

  const { civilProjects: cmsCivilProjects, rccProjects: cmsRccProjects, galleryImages, team } = useContent<{
    civilProjects: typeof civilProjects;
    rccProjects: typeof rccProjects;
    galleryImages: typeof civilGalleryImages;
    team: Array<typeof civilTeam[number] & { photo?: string }>;
  }>("/content/rcc.json", {
    civilProjects,
    rccProjects,
    galleryImages: civilGalleryImages,
    team: civilTeam,
  });

  const rccMaterialImages = galleryImages.slice(0, 8);
  const civilWorkImages = galleryImages.slice(8);
  const leadMember = team.find((member) => member.name === "Girish Desai") ?? team[0];
  const subMembers = team.filter((member) => member.name !== leadMember?.name);

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
              Pune-focused RCC and infrastructure partner delivering podiums, towers, and amenity blocks
              with disciplined QA/QC and on-ground coordination.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919607140999">
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
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CIVIL SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Civil Work & Infrastructure Services
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
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
            {civilServices.map((service, index) => (
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

      <section className="py-20" style={{ background: '#F0E9E0' }}>
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              RCC SERVICES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              RCC Structural Works
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              RCC execution packages with disciplined shuttering, reinforcement, and pour sequencing.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-stagger="0.08"
            data-animate-targets="[data-rcc-card]"
          >
            {rccServices.map((service, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 hover:border-primary transition-colors rounded-lg"
                data-rcc-card
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
      <section className="py-20" style={{ background: '#F0E9E0' }}>
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PROJECT SHOWCASE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              RCC & Civil Work Highlights
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">RCC Work - Completed</h3>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                data-animate="fade-up"
                data-animate-delay="0.2"
                data-animate-stagger="0.1"
                data-animate-targets="[data-rcc-project-card]"
              >
                {cmsRccProjects.map((project, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="bg-card border border-border p-6 rounded-lg"
                    data-rcc-project-card
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                    <div className="flex flex-col text-muted-foreground text-sm gap-1">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="font-medium">{project.scope}</span>
                      <span>{project.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">RCC Materials Images</h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                data-animate="fade-up"
                data-animate-delay="0.25"
                data-animate-targets="[data-rcc-gallery-card]"
                data-animate-stagger="0.05"
              >
                {rccMaterialImages.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-64 overflow-hidden rounded-lg border border-border group"
                    data-rcc-gallery-card
                  >
                    <img
                      src={src}
                      alt={`RCC material image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">RCC Strength</h3>
              <div
                className="bg-card border border-border p-6 rounded-lg"
                data-animate="fade-up"
                data-animate-delay="0.3"
              >
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {materialTypes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Civil Work - Completed (Excavation)</h3>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-animate="fade-up"
                data-animate-delay="0.35"
                data-animate-stagger="0.1"
                data-animate-targets="[data-project-card]"
              >
                {cmsCivilProjects.map((project, index) => (
                  <div
                    key={`${project.title}-${index}`}
                    className="bg-card border border-border p-6 rounded-lg"
                    data-project-card
                  >
                    <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                    <div className="flex flex-col text-muted-foreground text-sm gap-1">
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="font-medium">{project.scope}</span>
                      <span>{project.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Civil Work Images</h3>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                data-animate="fade-up"
                data-animate-delay="0.4"
                data-animate-targets="[data-civil-gallery-card]"
                data-animate-stagger="0.05"
              >
                {civilWorkImages.map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="relative h-64 overflow-hidden rounded-lg border border-border group"
                    data-civil-gallery-card
                  >
                    <img
                      src={src}
                      alt={`Civil work image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/20 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Machinery Strength</h3>
              <p className="text-muted-foreground mb-6">
                Machinery inventory supporting excavation, formwork, and RCC execution.
              </p>
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                data-animate="fade-up"
                data-animate-delay="0.45"
                data-animate-targets="[data-equipment-card]"
                data-animate-stagger="0.06"
              >
                {machineryStrengths.map((item, index) => (
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

      {/* Leadership & Staff Section */}
      <section className="py-20" style={{ background: '#F0E9E0' }}>
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              LEADERSHIP & STAFF
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Civil Leadership & Core Site Team
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Photo placeholders below will be replaced with official portraits once the final image assets are shared.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
            {leadMember ? (
              <div
                className="bg-card border border-border rounded-2xl p-10"
                data-animate="fade-up"
                data-animate-delay="0.2"
              >
                {leadMember.photo ? (
                  <img
                    src={leadMember.photo}
                    alt={leadMember.name}
                    className="aspect-[4/3] w-full rounded-xl object-cover mb-6"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-center text-sm text-muted-foreground mb-6">
                    <span>Photo placeholder for {leadMember.name}</span>
                  </div>
                )}
                <p className="text-sm font-semibold text-secondary mb-2">Civil Leadership</p>
                <h3 className="text-3xl font-semibold text-foreground">{leadMember.name}</h3>
                <p className="text-primary font-medium mb-4">{leadMember.role}</p>
                <p className="text-muted-foreground leading-relaxed">{leadMember.focus}</p>
              </div>
            ) : null}

            <div
              className="grid grid-cols-1 gap-6"
              data-animate="fade-up"
              data-animate-delay="0.25"
              data-animate-targets="[data-civil-team]"
              data-animate-stagger="0.08"
            >
              {subMembers.map((member) => (
                <div key={member.name} className="bg-card border border-border rounded-xl p-6" data-civil-team>
                  <div className="flex items-center gap-4">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-16 w-16 rounded-lg object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center text-[10px] text-muted-foreground text-center px-2">
                        Photo
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-primary font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">{member.focus}</p>
                </div>
              ))}
            </div>
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
                <a href="tel:+919607140999">
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
