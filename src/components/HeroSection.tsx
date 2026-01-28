import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 md:px-20 lg:px-32 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary font-medium tracking-wider uppercase text-sm animate-fade-up">
                Real Estate Investor • Creative Financing Expert • MBA, PMP
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-up animation-delay-200">
                How to Generate <span className="gradient-text">$15,000-$75,000</span>
                <span className="block">in Passive Income Annually</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up animation-delay-400">
                Real estate deals you don't have to swing a hammer for. Discover how to build 
                passive income through creative financing and seller-financed properties.
              </p>

            {/* Video Box */}
            <div className="mt-8 animate-fade-up animation-delay-500">
              <div className="relative aspect-[9/16] max-w-xs mx-auto rounded-xl bg-card shadow-md overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/3FocvaMcunA"
                  title="YouTube video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up animation-delay-600">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://www.linkedin.com/in/wealthbuilding/" target="_blank" rel="noopener noreferrer">
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Learn My Strategy
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 animate-fade-up animation-delay-800">
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
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
