import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Factory, 
  Truck, 
  Beaker, 
  Settings, 
  Users, 
  Shield,
  Phone,
  Building2,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import rmcImage from "@/assets/rmc-plant.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import teamImage from "@/assets/team-work.jpg";

const RMCPlantPage = () => {
  const plantInfo = [
    { label: "Plant Capacity", value: "60 m³/hr" },
    { label: "Storage Silos", value: "4 x 100 MT" },
    { label: "Transit Mixers", value: "15+ Units" },
    { label: "Delivery Radius", value: "50 km" },
    { label: "Operating Hours", value: "24/7" },
    { label: "Lab Facility", value: "In-house" },
  ];

  const assets = [
    { icon: Factory, name: "Batching Plant", description: "Fully automated 60 m³/hr capacity plant" },
    { icon: Truck, name: "Transit Mixers", description: "Fleet of 15+ modern transit mixers" },
    { icon: Beaker, name: "Testing Lab", description: "NABL certified in-house laboratory" },
    { icon: Settings, name: "Pumping Equipment", description: "Concrete pumps for high-rise delivery" },
  ];

  const concreteGrades = [
    { grade: "M10", application: "PCC, Leveling" },
    { grade: "M15", application: "Flooring, Footings" },
    { grade: "M20", application: "Residential RCC Work" },
    { grade: "M25", application: "Beams, Columns" },
    { grade: "M30", application: "Commercial Buildings" },
    { grade: "M35", application: "High-rise Structures" },
    { grade: "M40", application: "Bridges, Flyovers" },
    { grade: "M45+", application: "Special Structures" },
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
    "Adani Group",
    "L&T Construction",
    "Shapoorji Pallonji",
    "Tata Projects",
    "NCC Limited",
    "Lodha Group",
    "Godrej Properties",
    "GIDC Projects",
  ];

  const managementTeam = [
    { name: "Mr. Vikram Patel", role: "Managing Director", experience: "20+ Years" },
    { name: "Mr. Suresh Kumar", role: "Plant Manager", experience: "15+ Years" },
    { name: "Mr. Rahul Sharma", role: "Quality Head", experience: "12+ Years" },
    { name: "Mrs. Priya Mehta", role: "Operations Manager", experience: "10+ Years" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={rmcImage} alt="RMC Plant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl" data-animate="fade-up" data-animate-duration="1" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              READY MIX CONCRETE
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-background mb-4">
              Quality Concrete, Delivered On Time
            </h1>
            <p className="text-xl text-background/80 mb-6">
              State-of-the-art RMC plant delivering consistent quality concrete with 
              precision mix designs to construction sites across the region.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href="tel:+918855860707">
                <Phone className="mr-2 h-5 w-5" />
                Order Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Plant Info Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              PLANT INFORMATION
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our RMC Plant Capacity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our modern batching plant is equipped with latest technology to produce 
              high-quality concrete meeting all IS specifications.
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
                className="bg-card border border-border p-6 text-center rounded-lg"
                data-plant-card
              >
                <div className="text-2xl font-bold text-primary mb-2">{info.value}</div>
                <div className="text-sm text-muted-foreground">{info.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR ASSETS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Equipment & Infrastructure
            </h2>
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
                className="bg-card border border-border p-6 text-center rounded-lg"
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

      {/* Mix Design Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              CONCRETE GRADES
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Mix Design Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a wide range of concrete grades designed to meet specific 
              project requirements and structural specifications.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-grade-card]"
            data-animate-stagger="0.05"
          >
            {concreteGrades.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 rounded-lg"
                data-grade-card
              >
                <div className="text-2xl font-bold text-primary mb-2">{item.grade}</div>
                <div className="text-sm text-muted-foreground">{item.application}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-animate="fade-right" data-animate-delay="0.1">
              <div className="inline-block bg-primary-foreground/20 px-4 py-1 text-sm font-medium mb-4 rounded">
                QUALITY ASSURANCE
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
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
            </div>
            <div data-animate="fade-left" data-animate-delay="0.2">
              <img src={qualityLab} alt="Quality Control Lab" className="w-full h-[400px] object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Supply to Companies Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              OUR CLIENTS
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Companies We Supply To
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are proud to be the trusted RMC supplier for leading construction 
              companies across Gujarat.
            </p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-client-card]"
            data-animate-stagger="0.06"
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 text-center flex items-center justify-center h-24 rounded-lg"
                data-client-card
              >
                <span className="font-medium text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
            <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
              LEADERSHIP
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Management Team
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-animate="fade-up"
            data-animate-delay="0.2"
            data-animate-targets="[data-leader-card]"
            data-animate-stagger="0.08"
          >
            {managementTeam.map((member, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 text-center rounded-lg"
                data-leader-card
              >
                <div className="w-20 h-20 bg-muted mx-auto mb-4 flex items-center justify-center rounded-full">
                  <Users className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-secondary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.experience} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div data-animate="fade-right" data-animate-delay="0.1">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                LOCATION
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Plant Location
              </h2>
              <div className="bg-muted h-[300px] flex items-center justify-center border border-border rounded-lg">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Google Map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Industrial Area, Sector 12<br />
                    Ahmedabad, Gujarat - 380015
                  </p>
                </div>
              </div>
            </div>
            <div data-animate="fade-left" data-animate-delay="0.2">
              <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
                DELIVERY AREA
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Delivery Radius
              </h2>
              <p className="text-muted-foreground mb-6">
                We deliver ready mix concrete within a 50 km radius of our plant, covering 
                major areas including Ahmedabad, Gandhinagar, Sanand, and surrounding regions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Ahmedabad City & Suburbs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Gandhinagar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Sanand Industrial Area</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Bavla & Changodar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span>Naroda & Vatva</span>
                </div>
              </div>
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
                Need Quality Concrete?
              </h2>
              <p className="text-secondary-foreground/80">
                Order now and get timely delivery to your construction site.
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
