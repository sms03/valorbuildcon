import Layout from "@/components/layout/Layout";
import { Shield, Target, HardHat } from "lucide-react";

const pillars = [
  {
    name: "Virendra Anil Kate",
    title: "Founding Partner",
    focus: "Vision & Leadership",
    description:
      "Guides Valor Buildcon's long-term strategy, forging partnerships and cultivating a culture of craftsmanship across every site we touch.",
    icon: Shield,
    photoAlt: "Virendra Anil Kate portrait placeholder",
  },
  {
    name: "Abhayraje Gangadhar Vinode",
    title: "Operations Partner",
    focus: "Execution & Delivery",
    description:
      "Oversees civil execution, quality labs, and on-ground teams to ensure structures are delivered safely, precisely, and ahead of schedule.",
    icon: Target,
    photoAlt: "Abhayraje Gangadhar Vinode portrait placeholder",
  },
  {
    name: "Abhilash Tukaram Kalokhe",
    title: "Projects Partner",
    focus: "Client Success",
    description:
      "Leads client engagements and translates complex design intents into actionable construction programs across RCC and RMC projects.",
    icon: HardHat,
    photoAlt: "Abhilash Tukaram Kalokhe portrait placeholder",
  },
];

const About = () => {
  return (
    <Layout>
      <section
        className="bg-muted/20 py-16 border-b border-border"
        data-animate="fade-up"
        data-animate-duration="1"
        data-animate-delay="0.1"
      >
        <div className="container text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
            OUR STORY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            The Pillars Behind Valor Buildcon
          </h1>
          <p className="text-muted-foreground text-lg">
            Three visionaries drive our commitment to structural integrity, disciplined execution,
            and client-first collaboration. Together, they ensure every Valor Buildcon project stands as a
            benchmark for civil excellence.
          </p>
        </div>
      </section>

      <section
        className="container py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-animate="fade-up"
        data-animate-delay="0.2"
        data-animate-stagger="0.12"
        data-animate-targets="[data-pillar-card]"
      >
        {pillars.map(({ name, title, focus, description, icon: Icon, photoAlt }) => (
          <div
            key={name}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-4 shadow-sm"
            data-pillar-card
          >
            <div className="aspect-square w-full rounded-2xl bg-muted flex items-center justify-center text-center text-sm text-muted-foreground">
              <span>{photoAlt}</span>
            </div>
            <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide text-muted-foreground">{focus}</p>
              <h2 className="text-2xl font-semibold text-foreground">{name}</h2>
              <p className="text-primary font-medium">{title}</p>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">{description}</p>
          </div>
        ))}
      </section>

      <section className="container pb-16" data-animate="scale" data-animate-duration="1">
        <div className="bg-primary text-primary-foreground rounded-3xl p-10 md:p-14 flex flex-col gap-6">
          <h3 className="text-3xl font-semibold">Building Tomorrow's Landmarks</h3>
          <p className="text-primary-foreground/90 text-lg">
            From RCC civil works to precision RMC supply, our leadership collective keeps Valor Buildcon agile,
            responsive, and relentlessly focused on engineering trust for every stakeholder.
          </p>
        </div>
      </section>

      <section className="container pb-20" data-animate="fade-up" data-animate-delay="0.15">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <div className="space-y-5" data-animate="fade-right" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
              OUR LOCATION
            </div>
            <h3 className="text-3xl font-semibold text-foreground">Visit Our Operations Hub</h3>
            <p className="text-muted-foreground text-lg">
              Meet the Valor Buildcon team at our headquarters in Marunji, near Hinjawadi Phase 2, Pune. We welcome
              partners, clients, and collaborators to explore ongoing RCC and RMC initiatives firsthand.
            </p>
            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">Valor Buildcon LLP</p>
              <p>JPCJ+323, Kate Wasti, Punawale, Pimpri-Chinchwad, Dattwadi, Maharashtra 411033</p>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden shadow-lg border border-border min-h-[320px]"
            data-animate="fade-left"
            data-animate-delay="0.2"
          >
            <iframe
              title="Valor Buildcon HQ Map"
              src="https://www.google.com/maps?q=18.619755,73.730238&z=17&output=embed"
              className="w-full h-[320px] md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
