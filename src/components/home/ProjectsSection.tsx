import { Building2, MapPin, Calendar } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { useContent } from "@/hooks/use-content";

const ProjectsSection = () => {
  const defaultProjects = [
    {
      image: project1,
      title: "Sunrise Commercial Complex",
      location: "Ahmedabad, Gujarat",
      type: "Commercial",
      year: "2023",
      area: "50,000 sq.ft",
    },
    {
      image: project2,
      title: "Green Valley Residency",
      location: "Gandhinagar, Gujarat",
      type: "Residential",
      year: "2024",
      area: "1,20,000 sq.ft",
    },
    {
      image: project3,
      title: "Metro Logistics Warehouse",
      location: "Sanand, Gujarat",
      type: "Industrial",
      year: "2023",
      area: "2,00,000 sq.ft",
    },
  ];

  const { projects } = useContent<{ projects: typeof defaultProjects }>(
    "/content/projects.json",
    { projects: defaultProjects }
  );

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-background"
      data-animate="fade-up"
      data-animate-duration="0.9"
    >
      <div className="container">
        <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            OUR PORTFOLIO
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-4" />
          <p className="text-muted-foreground max-w-2xl">
            Explore our portfolio of successfully completed projects across 
            residential, commercial, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border border-border overflow-hidden group rounded-lg"
              data-animate="fade-up"
              data-animate-delay={`${0.15 + index * 0.08}`}
            >
              <div className="relative h-52 sm:h-60 lg:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs sm:text-sm font-medium rounded">
                  {project.type}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Completed: {project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
