import { CheckCircle, Target, Eye, Award } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const partnerCompanies = [
  "Legacy Life Spaces",
  "Millennium Developers",
  "Kolte Patil Life Republic",
  "18 Magnitude",
  "Garve Developers",
  "Rohit Group",
  "Rahuldeep Contractor",
  "Vinode Wakadkar Associates",
  "Perfect Construction",
  "Namrata Group",
  "Sahil Group",
];

const AboutSection = () => {
  const stats = [
    { value: "5+", label: "Projects Delivered / Upcoming" },
    { value: "10+", label: "Trusted Developer Partners" },
    { value: "24/7", label: "Quality Monitoring" },
  ];

  const certificates = [
    { name: "QT", file: "/certificates/000_QT.pdf#toolbar=0&navpanes=0&scrollbar=0" },
    { name: "Employee Compensation Quote", file: "/certificates/Employee_Compensation_Quote.pdf#toolbar=0&navpanes=0&scrollbar=0" },
    { name: "MSME Certificate Detailed", file: "/certificates/MSME%20Certificate-Detailed.pdf#toolbar=0&navpanes=0&scrollbar=0" },
  ];

  const values = [
    { icon: Target, title: "Our Mission", description: "To deliver superior construction solutions with uncompromising quality, safety, and timely execution." },
    { icon: Eye, title: "Our Vision", description: "To be the most trusted construction partner in India, known for innovation and reliability." },
    { icon: Award, title: "Our Values", description: "Integrity, excellence, safety, and sustainable practices in every project we undertake." },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-background"
      data-animate="fade-up"
      data-animate-duration="0.9"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative" data-animate="fade-right" data-animate-delay="0.1">
            <img 
              src={teamImage} 
              alt="Valor Buildcon team at construction site" 
              className="w-full h-64 sm:h-[400px] lg:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden md:block rounded-lg">
              <div className="text-2xl font-bold">Certificates</div>
              <div className="text-sm opacity-80">ISO & QA Documentation</div>
            </div>
          </div>

          {/* Content Side */}
          <div data-animate="fade-left" data-animate-delay="0.15">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              ABOUT VALOR BUILDCON
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Building India's Infrastructure With Expertise & Trust
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Valor Buildcon LLP is a Pune-based construction company delivering high-quality RCC
              structural work and Ready Mix Concrete solutions. We have delivered 5+ turnkey
              projects to date with additional scopes currently underway across residential,
              commercial, and industrial segments.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our state-of-the-art RMC plant, combined with our skilled workforce and 
              modern equipment, enables us to meet the most demanding project requirements 
              while maintaining the highest standards of quality and safety.
            </p>

            <div className="space-y-3">
              {[
                "Certificates available for viewing",
                "RCC + RMC delivery across Pune Metropolitan Region",
                "5+ completed and upcoming scopes with rigorous QA/QC routines",
                `Trusted by ${partnerCompanies.slice(0, 5).join(", ")}, and more regional developers`,
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card border border-border p-4 sm:p-6 text-center rounded-lg"
              data-animate="fade-up"
              data-animate-delay={`${0.2 + index * 0.05}`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">Certificates</h3>
              <p className="text-muted-foreground">View our available certifications and documentation.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
            {certificates.map((certificate, index) => (
              <a
                key={certificate.name}
                href={certificate.file}
                target="_blank"
                rel="noreferrer noopener"
                className="group bg-card border border-border p-5 rounded-lg transition hover:border-primary/50"
                data-animate="fade-up"
                data-animate-delay={`${0.25 + index * 0.05}`}
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-foreground group-hover:text-primary">
                      {certificate.name}
                    </div>
                    <div className="text-sm text-muted-foreground">View certificate</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {values.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border p-6 sm:p-8 rounded-lg"
              data-animate="fade-up"
              data-animate-delay={`${0.35 + index * 0.08}`}
            >
              <item.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
