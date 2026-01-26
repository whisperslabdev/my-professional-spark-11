import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

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

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-8 max-w-xl mx-auto">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Ready to Get Started?
                </h3>
              </div>
              <p className="text-muted-foreground mb-5">
                Connect with me on LinkedIn to discuss investment opportunities, 
                learn about the Virtual Wealth Flipping strategy, or explore partnership options.
              </p>
              <Button variant="hero" size="lg" className="group" asChild>
                <a href="https://www.linkedin.com/in/wealthbuilding/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
