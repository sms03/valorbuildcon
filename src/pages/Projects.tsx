import Layout from "@/components/layout/Layout";
import ProjectsSection from "@/components/home/ProjectsSection";
import { Link } from "react-router-dom";
import { Building2, HardHat, Shield, MapPin } from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Delivered Structures",
    description: "Industrial, residential, and commercial footprints commissioned since 2010.",
  },
  {
    value: "2.4M sq.ft",
    label: "Concrete Placed",
    description: "Across RCC superstructures, warehouses, townships, and civic developments.",
  },
  {
    value: "14",
    label: "Cities Covered",
    description: "Pan-Gujarat delivery network with turnkey execution teams on standby.",
  },
];

const projectFocus = [
  {
    title: "Industrial & Logistics",
    description:
      "Heavy-duty floors, high-bay warehouses, and utility corridors engineered for long design life.",
    icon: Building2,
  },
  {
    title: "Urban Residential",
    description:
      "Premium mid-rise and township developments with integrated RCC, finishing, and RMC supply.",
    icon: Shield,
  },
  {
    title: "Civic & Infrastructure",
    description:
      "Bridges, public amenities, and institutional campuses executed with disciplined compliance.",
    icon: HardHat,
  },
];

const Projects = () => {
  return (
    <Layout>
      <section
        className="py-6 sm:py-8 border-b border-border"
        style={{ background: '#F0E9E0' }}
        data-animate="fade-up"
        data-animate-duration="1"
        data-animate-delay="0.1"
      >
        <div className="container max-w-3xl mx-auto space-y-6 text-left">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
            PROJECT SHOWCASE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
            Civil Works That Anchor Growth
          </h1>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">
            Every Valor Buildcon engagement blends structural precision with site agility. Explore the RCC and RMC
            programs we have delivered for developers, industries, and public institutions across Gujarat.
          </p>
        </div>
      </section>

      <section className="container py-12 sm:py-16 grid gap-8">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          data-animate="fade-up"
          data-animate-delay="0.15"
          data-animate-targets="[data-stat-card]"
          data-animate-stagger="0.12"
        >
          {stats.map(({ value, label, description }) => (
            <div
              key={label}
              className="bg-card border border-border rounded-2xl p-5 sm:p-6 shadow-sm space-y-3"
              data-stat-card
            >
              <p className="text-3xl sm:text-4xl font-semibold text-primary">{value}</p>
              <h3 className="text-lg font-medium text-foreground">{label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          data-animate="fade-up"
          data-animate-delay="0.25"
          data-animate-targets="[data-focus-card]"
          data-animate-stagger="0.12"
        >
          {projectFocus.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col gap-4"
              data-focus-card
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4" />
                Gujarat & Western India
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProjectsSection />

      <section
        className="container pb-16 sm:pb-20"
        data-animate="scale"
        data-animate-duration="1"
        data-animate-delay="0.2"
      >
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-10 md:p-14 flex flex-col gap-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-wide uppercase text-primary-foreground/80">Ready to collaborate?</p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Bring your next landmark to life with Valor Buildcon.</h3>
            <p className="text-primary-foreground/90 text-base sm:text-lg">
              Share drawings, mix designs, or schedule requirements—our RCC and RMC specialists will revert with a
              build-ready engagement plan.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/#contact" className="inline-flex items-center justify-center rounded-full bg-primary-foreground text-primary font-semibold px-6 py-3 w-full sm:w-auto">
              Discuss your project
            </Link>
            <Link to="/rcc-work" className="inline-flex items-center justify-center rounded-full bg-primary/20 text-primary-foreground font-semibold px-6 py-3 border border-primary-foreground/20 w-full sm:w-auto">
              Explore RCC capabilities
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
