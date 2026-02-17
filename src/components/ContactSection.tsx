import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 bg-secondary/20">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
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
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-10 md:p-14 max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <MessageSquare className="h-7 w-7 text-primary" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                  Ready to Get Started?
                </h3>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                Connect with me on LinkedIn to discuss investment opportunities, 
                learn about the Virtual Wealth Flipping strategy, or explore partnership options.
              </p>
              <Button variant="hero" size="lg" className="group text-base px-8 py-6" asChild>
                <a href="https://calendly.com/virtualwealthflip" target="_blank" rel="noopener noreferrer">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
