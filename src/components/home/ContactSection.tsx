import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const phoneNumbers = [
  { label: "+91 88558 60707", href: "tel:+918855860707" },
  { label: "+91 77450 03646", href: "tel:+917745003646" },
];

type ContactInfoItem = {
  icon: typeof Phone;
  title: string;
  content: string | string[];
  links?: string[];
};

const contactInfo: ContactInfoItem[] = [
  {
    icon: Phone,
    title: "Phone",
    content: phoneNumbers.map((number) => number.label),
    links: phoneNumbers.map((number) => number.href),
  },
  {
    icon: Mail,
    title: "Email",
    content: "valorbuildconllp@gmail.com",
    links: ["mailto:valorbuildconllp@gmail.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    content: "JPCJ+323, Kate Wasti, Punawale, Pimpri-Chinchwad, Dattwadi, Maharashtra 411033",
    links: ["https://maps.app.goo.gl/pH2chMFMZ5iY3uwz6"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Inquiry: ${formData.subject}`.trim();
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      "",
      "Message:",
      formData.message,
    ];
    const mailtoHref = `mailto:valorbuildconllp@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailtoHref;
    toast({
      title: "Email Client Opened",
      description: "Your email client should open with your message. Please press send to complete the request.",
    });
  };
  return (
    <section
      id="contact"
      className="py-20 bg-background"
      data-animate="fade-up"
      data-animate-duration="0.9"
    >
      <div className="container">
        <div className="text-center mb-12" data-animate="fade-up" data-animate-delay="0.1">
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium mb-4 rounded">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Get in touch with us for a free consultation 
            and quote. Our team is ready to help you build your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-4 bg-card border border-border hover:border-primary transition-colors rounded-lg"
                data-animate="fade-up"
                data-animate-delay={`${0.2 + index * 0.05}`}
              >
                <div className="bg-primary/10 p-3 rounded-md">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  {Array.isArray(item.content) ? (
                    <div className="mt-1 flex flex-col gap-1">
                      {item.content.map((value, idx) => (
                        item.links?.[idx] ? (
                          <a
                            key={value}
                            href={item.links[idx]}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p key={value} className="text-sm text-muted-foreground">
                            {value}
                          </p>
                        )
                      ))}
                    </div>
                  ) : item.links?.[0] ? (
                    <a
                      href={item.links[0]}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className="lg:col-span-2 bg-card border border-border p-8 rounded-lg"
            data-animate="fade-left"
            data-animate-delay="0.25"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234567890"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project inquiry"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project requirements..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div
          className="mt-12 overflow-hidden rounded-lg border border-border"
          data-animate="scale"
          data-animate-delay="0.35"
        >
          <iframe
            src="https://www.google.com/maps?q=18.619755,73.730238&z=17&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Valor Buildcon Location"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
