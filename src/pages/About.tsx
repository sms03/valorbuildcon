import Layout from "@/components/layout/Layout";
import { Shield, Target, HardHat } from "lucide-react";
import { useContent } from "@/hooks/use-content";

const pillars = [
  {
    name: "Virendra Anil Kate",
    title: "Founding Partner",
    focus: "Vision & Leadership",
    description:
      "Guides Valor Buildcon's long-term strategy, forging partnerships and cultivating a culture of craftsmanship across every site we touch.",
  },
  {
    name: "Abhayraje Gangadhar Vinode",
    title: "Operations Partner",
    focus: "Execution & Delivery",
    description:
      "Oversees civil execution, quality labs, and on-ground teams to ensure structures are delivered safely, precisely, and ahead of schedule.",
  },
  {
    name: "Abhilash Tukaram Kalokhe",
    title: "Projects Partner",
    focus: "Client Success",
    description:
      "Leads client engagements and translates complex design intents into actionable construction programs across RCC and RMC projects.",
  },
];

const pillarIcons = [Shield, Target, HardHat];

const About = () => {
  const { pillars: cmsPillars } = useContent<{
    pillars: Array<typeof pillars[number] & { photo?: string }>;
  }>("/content/about.json", { pillars });

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
            OUR STORY
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
            The Pillars Behind Valor Buildcon
          </h1>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground text-base sm:text-lg">
            Three visionaries drive our commitment to structural integrity, disciplined execution,
            and client-first collaboration. Together, they ensure every Valor Buildcon project stands as a
            benchmark for civil excellence.
          </p>
        </div>
      </section>

      <section
        className="container py-12 sm:py-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        data-animate="fade-up"
        data-animate-delay="0.2"
        data-animate-stagger="0.12"
        data-animate-targets="[data-pillar-card]"
      >
        {cmsPillars.map(({ name, title, focus, description, photo }, index) => {
          const Icon = pillarIcons[index % pillarIcons.length];
          const photoAlt = `${name} portrait placeholder`;
          return (
          <div
            key={name}
            className="bg-card border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm"
            data-pillar-card
          >
            {photo ? (
              <img
                src={photo}
                alt={name}
                className="aspect-square w-full rounded-2xl object-cover"
                loading="lazy"
              />
            ) : (
              <div className="aspect-square w-full rounded-2xl bg-muted flex items-center justify-center text-center text-sm text-muted-foreground">
                <span>{photoAlt}</span>
              </div>
            )}
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
          );
        })}
      </section>

      <section className="container pb-16" data-animate="scale" data-animate-duration="1">
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 sm:p-10 md:p-14 flex flex-col gap-6">
          <h3 className="text-2xl sm:text-3xl font-semibold">Building Tomorrow's Landmarks</h3>
          <p className="text-primary-foreground/90 text-base sm:text-lg">
            From RCC civil works to precision RMC supply, our leadership collective keeps Valor Buildcon agile,
            responsive, and relentlessly focused on engineering trust for every stakeholder.
          </p>
        </div>
      </section>

      <section className="container pb-16 sm:pb-20" data-animate="fade-up" data-animate-delay="0.15">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 sm:gap-8 items-center">
          <div className="space-y-5" data-animate="fade-right" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium rounded">
              OUR LOCATION
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">Visit Our Operations Hub</h3>
            <p className="text-muted-foreground text-base sm:text-lg">
              Meet the Valor Buildcon team at our headquarters in Marunji, near Hinjawadi Phase 2, Pune. We welcome
              partners, clients, and collaborators to explore ongoing RCC and RMC initiatives firsthand.
            </p>
            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">Valor Buildcon LLP</p>
              <p>JPCJ+323, Kate Wasti, Punawale, Pimpri-Chinchwad, Dattwadi, Maharashtra 411033</p>
            </div>
          </div>
          <div
            className="rounded-3xl overflow-hidden shadow-lg border border-border min-h-[240px] sm:min-h-[320px]"
            data-animate="fade-left"
            data-animate-delay="0.2"
          >
            <iframe
              title="Valor Buildcon HQ Map"
              src="https://www.google.com/maps?output=embed&q=JPCJ%2B323%2C%20Kate%20Wasti%2C%20Punawale%2C%20Pimpri-Chinchwad%2C%20Dattwadi%2C%20Maharashtra%20411033"
              className="w-full h-[240px] sm:h-[320px] md:h-[420px]"
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
