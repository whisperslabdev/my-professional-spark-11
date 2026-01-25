import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Youtube, Podcast, ArrowRight, Calendar } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to develop a future-focused workforce? Book a free leadership assessment 
              to discover how we can help you retain top talent and maximize performance.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground">
                    Reach out directly or schedule a complimentary 20-minute leadership assessment.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="mailto:info@paulvannspeaks.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-medium">info@paulvannspeaks.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+12404165077"
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-medium">(240) 416-5077</p>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Connect Online</p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.linkedin.com/in/wealthbuilding/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                    <a
                      href="https://www.youtube.com/@LeadershipIsInfluence"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
                    >
                      <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
                    >
                      <Podcast className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <h4 className="text-lg font-serif font-bold text-foreground">
                      Free Leadership Assessment
                    </h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Get a 20-minute Zoom session with insight you need to develop a future-focused 
                    workforce. 100% guaranteed to provide actionable strategies.
                  </p>
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <a href="https://calendly.com/info-3623/discussion-insight-overview" target="_blank" rel="noopener noreferrer">
                      Book Your Assessment
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Washington DC-Baltimore Area</p>
                  <p>Available for virtual sessions worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
