import { Building2, TrendingUp, DollarSign, Users, GraduationCap, MapPin } from 'lucide-react';
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

const credentials = [
  { abbrev: 'MBA', full: 'Master of Business Administration' },
  { abbrev: 'PMP', full: 'Project Management Professional' },
  { abbrev: 'CSPO', full: 'Certified Scrum Product Owner' },
  { abbrev: 'SAFe® 4 Agilist', full: 'Certified Agile Professional' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Intro with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img 
                  src={heroPortrait} 
                  alt="Michael Kearse" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-lg -z-10"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              About Michael Kearse
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Building Wealth Through <span className="gradient-text">Creative Financing</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Michael Kearse is a Pennsylvania-based real estate investor who has cracked the code 
              on creative deal-making. With a background in project management and a passion for 
              innovative investing strategies, he specializes in seller financing, private capital, 
              and virtual property flipping.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group card-elevated p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                <achievement.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials & Market Focus - Two Column */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Credentials */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Credentials & Certifications
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div key={cred.abbrev} className="bg-card border border-border rounded-lg p-4">
                  <span className="text-lg font-bold text-foreground block">{cred.abbrev}</span>
                  <span className="text-xs text-muted-foreground">{cred.full}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Market Focus */}
          <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Market Focus
              </h3>
            </div>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <span className="text-lg font-bold text-foreground block">Western Pennsylvania</span>
                <span className="text-sm text-muted-foreground">Primary investment market with deep local expertise</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <span className="text-lg font-bold text-foreground block">Ohio Markets</span>
                <span className="text-sm text-muted-foreground">Expanding portfolio with high-yield opportunities</span>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                <span className="text-primary font-medium">🎙️ Featured Podcast Guest</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
