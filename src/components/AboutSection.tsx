import { Building2, TrendingUp, DollarSign, Users } from 'lucide-react';
import heroPortrait from '@/assets/hero-portrait.jpg';

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
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Intro with Image */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
              About Michael Kearse
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
              Building Wealth Through <span className="gradient-text">Creative Financing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Michael Kearse is a Pennsylvania-based real estate investor who has cracked the code 
              on creative deal-making. With a background in project management and a passion for 
              innovative investing strategies, he specializes in seller financing, private capital, 
              and virtual property flipping.
            </p>
          </div>
          
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Michael Kearse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
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
