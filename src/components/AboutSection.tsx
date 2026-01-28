import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="pt-0 pb-16 bg-background">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        {/* Side-by-side layout: Text left, Video right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
              About Michael Kearse
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Building Wealth Through <span className="gradient-text">Creative Financing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Michael Kearse is a Pennsylvania-based real estate investor who has cracked the code 
              on creative deal-making. With a background in project management and a passion for 
              innovative investing strategies, he specializes in seller financing, private capital, 
              and virtual property flipping.
            </p>
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://www.linkedin.com/in/wealthbuilding/" target="_blank" rel="noopener noreferrer">
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Video */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 md:w-80 lg:w-96 aspect-[9/16] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                <iframe
                  src="https://www.youtube.com/embed/3FocvaMcunA"
                  title="YouTube video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -top-2 -left-2 w-10 h-10 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-12">
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">100+</p>
            <p className="text-sm text-muted-foreground">Doors Acquired</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">$4M+</p>
            <p className="text-sm text-muted-foreground">Private Capital Raised</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif font-bold text-primary">60+</p>
            <p className="text-sm text-muted-foreground">Properties Managed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
