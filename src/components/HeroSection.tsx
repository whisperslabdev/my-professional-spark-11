import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-portrait.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm animate-fade-up">
                Leadership Expert • Top 40 Speaker • USAF Lt. Colonel (Ret.)
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-up animation-delay-200">
                Transform Your
                <span className="block gradient-text">Leadership Impact</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up animation-delay-400">
                Self-leadership isn't optional—it's the fuel that drives professional leadership 
                and transforms organizations from the inside out.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://calendly.com/info-3623/discussion-insight-overview" target="_blank" rel="noopener noreferrer">
                  Free Leadership Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                Watch Keynote
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-border animate-fade-up animation-delay-800">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Years at Pentagon</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Published Books</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up animation-delay-400">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-2xl blur-xl" />
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-transparent rounded-2xl" />
              
              <img
                src={heroImage}
                alt="Paul Lawrence Vann - Leadership Expert"
                className="relative rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover object-center"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl animate-float">
                <p className="text-sm font-medium text-muted-foreground">Trusted By</p>
                <p className="text-lg font-serif font-bold text-foreground">Fortune 500</p>
                <p className="text-xs text-primary">& Government Agencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
