import { Building2, TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  {
    icon: Building2,
    title: '100+ Doors Acquired',
    description: 'Built a substantial portfolio using creative strategies without traditional bank loans.',
  },
  {
    icon: DollarSign,
    title: '$4M+ Private Capital',
    description: 'Raised millions from private lenders by building trust and delivering consistent returns.',
  },
  {
    icon: TrendingUp,
    title: 'Virtual Wealth Flipping',
    description: 'Pioneered a strategy for acquiring and selling properties entirely online.',
  },
  {
    icon: Users,
    title: 'Lender-Focused Approach',
    description: 'Creating win-win deals that provide predictable returns for passive investors.',
  },
];


const AboutSection = () => {
  return (
    <section id="about" className="pt-0 pb-16 bg-background">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        {/* Main Intro with Image */}
        {/* Text Content */}
        <div className="text-center mb-10">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            About Michael Kearse
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Building Wealth Through <span className="gradient-text">Creative Financing</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Michael Kearse is a Pennsylvania-based real estate investor who has cracked the code 
            on creative deal-making. With a background in project management and a passion for 
            innovative investing strategies, he specializes in seller financing, private capital, 
            and virtual property flipping.
          </p>
        </div>
        
        {/* Video - centered */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="relative">
            <div className="w-64 md:w-72 aspect-[9/16] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
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
          <Button variant="hero" size="xl" className="group" asChild>
            <a href="https://www.linkedin.com/in/wealthbuilding/" target="_blank" rel="noopener noreferrer">
              Let's Connect
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group card-elevated p-5 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 mx-auto group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
