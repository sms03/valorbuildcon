import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Factory, 
  Truck, 
  Beaker, 
  Settings, 
  Phone,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import rmcImage from "@/assets/rmc-plant.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import { useContent } from "@/hooks/use-content";

const RMCPlantPage = () => {
  const plantInfo = [
    { label: "Plant Capacity", value: "70 m³/hr" },
    { label: "Transit Mixers", value: "15+ Units" },
    { label: "Stationary Pumps", value: "4 Units" },
    { label: "Delivery Radius", value: "30 km" },
    { label: "Operating Hours", value: "24/7" },
    { label: "Location", value: "Jambe Goan, Mulshi" },
  ];

  const assets = [
    { icon: Factory, name: "Batching Infrastructure", description: "Twin-shaft batching with AI moisture correction" },
    { icon: Truck, name: "Transit Mixers", description: "15+ GPS-tracked mixers for synchronized pours" },
    { icon: Settings, name: "Stationary Pumps", description: "4 high-pressure pumps for podiums & high-rises" },
    { icon: Beaker, name: "Quality Lab", description: "In-house QA lab for slump, cube, and temperature control" },
  ];

  const qualityTests = [
    "Slump Test for Workability",
    "Compressive Strength Testing",
    "Cube Testing at 7 & 28 Days",
    "Water-Cement Ratio Control",
    "Aggregate Grading Analysis",
    "Temperature Monitoring",
  ];

  const clients = [
    "Millennium Samruddhi / Amara, Punawale",
    "Rohit Group, Kate Wasti",
    "Legacy Infinity Home",
    "18 Magnitude",
    "Namrata Group",
    "Rahuldeep Contractor",
    "Kolte Patil",
    "Vinode Wakadkar Associates",
    "Perfect Constructions",
  ];

  const rmcLeadership = [
    { name: "Virendra Anil Kate", role: "Founding Partner", focus: "Oversees overall RMC strategy and client relationships." },
    { name: "Abhayraje Gangadhar Vinode", role: "Operations Partner", focus: "Leads batching performance, fleet readiness, and QA/QC routines." },
    { name: "Abhilash Tukaram Kalokhe", role: "Projects Partner", focus: "Manages delivery schedules, billing, and coordination with developer sites." },
  ];

  const rmcStaff = [
    { name: "Plant Team Member 01", role: "Plant Supervisor", note: "Name & portrait to be provided", shift: "Day Shift" },
    { name: "Plant Team Member 02", role: "Dispatch Controller", note: "Awaiting final details", shift: "Night Shift" },
    { name: "Plant Team Member 03", role: "Maintenance Lead", note: "Client will confirm", shift: "Rotational" },
  ];

  const rmcGalleryImages = [
    "/images/rmc_work/IMG-20260113-WA0014.jpg",
    "/images/rmc_work/IMG-20260113-WA0019.jpg",
    "/images/rmc_work/IMG-20260113-WA0023.jpg",
    "/images/rmc_work/WhatsApp Image 2026-01-18 at 9.39.39 AM (3).jpeg",
    "/images/rmc_work/WhatsApp Image 2026-01-18 at 9.39.39 AM (4).jpeg",
    "/images/rmc_work/WhatsApp Image 2026-01-18 at 9.39.39 AM (5).jpeg",
    "/images/rmc_work/WhatsApp Image 2026-01-18 at 9.39.39 AM.jpeg",
    "/images/rmc_work/WhatsApp Image 2026-01-18 at 9.40.58 AM.jpeg",
  ];

  const { galleryImages, leadership, staff } = useContent<{
    galleryImages: typeof rmcGalleryImages;
    leadership: Array<typeof rmcLeadership[number] & { photo?: string }>;
    staff: Array<typeof rmcStaff[number] & { photo?: string }>;
  }>("/content/rmc.json", {
    galleryImages: rmcGalleryImages,
    leadership: rmcLeadership,
    staff: rmcStaff,
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={rmcImage} alt="RMC Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl" data-animate="fade-up" data-animate-duration="1" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              READY MIX CONCRETE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4">
              Pune RMC Plant With 70 m³/hr Output
            </h1>
            <p className="text-base sm:text-xl text-background/80 mb-6">
              Jambe Goan-based batching facility supplying consistent concrete within a
              30 km radius backed by disciplined logistics and QA/QC.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+919607140999">
                <Phone className="mr-2 h-5 w-5" />
                Order Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Plant Info Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PLANT INFORMATION
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Our RMC Plant Capacity
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Our modern batching plant combines real-time moisture correction, fleet tracking, and
              in-house lab validation to maintain mix integrity on every pour.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-plant-card]"
            data-animate-stagger="0.06"
          >
            {plantInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card border border-border p-4 sm:p-6 text-center rounded-lg"
                data-plant-card
              >
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">{info.value}</div>
                <div className="text-sm text-muted-foreground">{info.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="py-16 sm:py-20" style={{ background: '#F0E9E0' }}>
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR ASSETS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Equipment & Infrastructure
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-rmc-asset]"
            data-animate-stagger="0.08"
          >
            {assets.map((asset, index) => (
              <div
                key={index}
                className="bg-card border border-border p-5 sm:p-6 text-center rounded-lg"
                data-rmc-asset
              >
                <asset.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{asset.name}</h3>
                <p className="text-sm text-muted-foreground">{asset.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PLANT GALLERY
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Concrete Production On Ground
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Actual pouring, batching, and logistics visuals from the Valor Buildcon RMC operations team.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-rmc-gallery]"
            data-animate-stagger="0.05"
          >
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative h-52 sm:h-60 md:h-64 overflow-hidden rounded-lg border border-border group"
                data-rmc-gallery
              >
                <img
                  src={src}
                  alt={`RMC plant photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/20 transition-colors" />
                <div className="absolute bottom-4 left-4 text-xs font-medium text-background bg-foreground/60 px-3 py-1 rounded-full">
                  {`Batching Snapshot ${String(index + 1).padStart(2, "0")}`}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RMC Work Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              RMC WORK
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Ongoing Quality Consultancy (DCC Concrete Cons.)
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Current RMC quality consultancy and supply engagements across Punawale, Kate Wasti, and
              surrounding growth corridors.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-client-card]"
            data-animate-stagger="0.06"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card border border-border p-5 sm:p-6 text-center flex items-center justify-center h-24 rounded-lg"
                data-client-card
              >
                <span className="font-medium text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mix Design Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CONCRETE GRADES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Mix Design Options
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Final mix design combinations will be published once the client provides the
              official matrix. This placeholder ensures the layout is ready for the upcoming data.
            </p>
          </div>

          <div className="bg-card border border-dashed border-border rounded-2xl p-6 sm:p-8 text-center" data-animate="fade-up" data-animate-delay="0.25">
            <p className="text-muted-foreground">
              Mix design catalogue pending. Share the grade-wise details to replace this panel with
              the finalized options (M10 to SCC / special mixes).
            </p>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate="fade-right" data-animate-delay="0.1">
              <div className="inline-block bg-primary-foreground/20 px-4 py-1 text-sm font-medium mb-4 rounded">
                QUALITY ASSURANCE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Quality Control Lab
              </h2>
              <p className="opacity-80 mb-8">
                Our in-house laboratory is equipped with modern testing equipment to ensure 
                every batch of concrete meets the highest quality standards. We follow 
                strict IS code specifications for all our products.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityTests.map((test, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="opacity-90">{test}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg p-5">
                <p className="text-sm uppercase tracking-wide text-primary-foreground/70 mb-2">
                  Quality Lab Highlight
                </p>
                <p className="opacity-90">
                  Dedicated QA/QC lab with slump, cube, and temperature testing logs maintained for every pour.
                </p>
              </div>
            </div>
            <div data-animate="fade-left" data-animate-delay="0.2">
              <img src={qualityLab} alt="Quality Control Lab" className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 sm:py-20" style={{ background: '#F0E9E0' }}>
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Our Management Team
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-leader-card]"
            data-animate-stagger="0.08"
          >
            {leadership.map((member) => (
              <div
                key={member.name}
                className="bg-card border border-border p-5 sm:p-6 rounded-2xl"
                data-leader-card
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-[4/3] w-full rounded-xl object-cover mb-4"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[4/3] rounded-xl bg-muted flex items-center justify-center text-center text-sm text-muted-foreground mb-4">
                    <span>Photo placeholder for {member.name}</span>
                  </div>
                )}
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-secondary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RMC Staff Placeholder Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="text-left mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OPERATIONS TEAM
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              RMC Staff (Photos Coming Soon)
            </h2>
            <div className="w-16 h-1 bg-primary rounded mb-4" />
            <p className="text-muted-foreground max-w-2xl text-left">
              Placeholder cards reserve space for the confirmed team roster. Replace the content below as
              soon as the official photos and names are shared.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-staff-card]"
            data-animate-stagger="0.08"
          >
            {staff.map((staffMember) => (
              <div key={staffMember.name} className="bg-card border border-dashed border-border p-5 sm:p-6 rounded-xl" data-staff-card>
                {staffMember.photo ? (
                  <img
                    src={staffMember.photo}
                    alt={staffMember.name}
                    className="aspect-square w-full rounded-lg object-cover mb-4"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-square rounded-lg bg-muted flex items-center justify-center text-center text-sm text-muted-foreground mb-4">
                    <span>Photo placeholder</span>
                  </div>
                )}
                <h3 className="font-semibold text-foreground">{staffMember.name}</h3>
                <p className="text-sm text-secondary">{staffMember.role}</p>
                <div className="mt-3 text-sm text-muted-foreground">
                  {staffMember.note ? <p>{staffMember.note}</p> : null}
                  <p className="font-medium">{staffMember.shift}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-animate="fade-right" data-animate-delay="0.1">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                LOCATION
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Plant Location
              </h2>
              <div className="bg-muted h-[240px] sm:h-[300px] flex items-center justify-center border border-border rounded-lg">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Jambe Goan, Tal. Mulshi<br />
                    Pune, Maharashtra 411033
                  </p>
                </div>
              </div>
            </div>
            <div data-animate="fade-left" data-animate-delay="0.2">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                DELIVERY AREA
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                30 km Supply Radius
              </h2>
              <p className="text-muted-foreground mb-6">
                We deliver ready mix concrete within 30 km of Jambe Goan, covering Hinjawadi, PCMC,
                Baner, Wakad, Punawale, and neighboring growth pockets.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Hinjawadi Phases 1-3</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Wakad & Baner</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Ravet & Punawale</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>PCMC Industrial Belts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Mulshi & Talegaon Corridors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-12 sm:py-16 bg-secondary rounded-lg mx-3 sm:mx-4 mb-4"
        data-animate="scale"
        data-animate-duration="1"
        data-animate-delay="0.15"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-foreground mb-2">
                Need Quality Concrete?
              </h2>
              <p className="text-secondary-foreground/80">
                Order now and get timely delivery to your construction site.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary w-full sm:w-auto">
                <a href="tel:+919607140999">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
                <Link to="/#contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RMCPlantPage;
