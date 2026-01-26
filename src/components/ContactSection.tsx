import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, ArrowRight, MessageSquare, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Let's Build <span className="gradient-text">Wealth Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're interested in investing, partnering on deals, or learning 
              the Virtual Wealth Flipping strategy — I'd love to connect.
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-8">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3">
                    Connect With Me
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Reach out on LinkedIn or send me a message. I respond to all inquiries 
                    and love connecting with fellow investors.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/wealthbuilding/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">LinkedIn</p>
                      <p className="text-foreground font-medium text-sm">@wealthbuilding</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="text-foreground font-medium text-sm">Pennsylvania (Western PA & Ohio)</p>
                    </div>
                  </div>
                </div>

                {/* Credentials */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Credentials</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-card border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">MBA</span>
                    <span className="bg-card border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">PMP</span>
                    <span className="bg-card border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">CSPO</span>
                    <span className="bg-card border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">SAFe® 4</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="p-5 rounded-xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <h4 className="text-base font-serif font-bold text-foreground">
                      Ready to Get Started?
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Connect with me on LinkedIn to discuss investment opportunities, 
                    learn about the Virtual Wealth Flipping strategy, or explore partnership options.
                  </p>
                  <Button variant="hero" size="lg" className="w-full group" asChild>
                    <a href="https://www.linkedin.com/in/wealthbuilding/" target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Specializing in Western PA & Ohio Markets</p>
                  <p>Open to remote partnerships nationwide</p>
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
