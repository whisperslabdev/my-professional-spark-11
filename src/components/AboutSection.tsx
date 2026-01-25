import { Building2, TrendingUp, DollarSign, Users, GraduationCap, Award } from 'lucide-react';

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
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm">
                About Michael Kearse
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Building Wealth Through <span className="gradient-text">Creative Financing</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Michael Kearse is a Pennsylvania-based real estate investor who has cracked the code 
                on creative deal-making. With a background in project management and a passion for 
                innovative investing strategies, he specializes in seller financing, private capital, 
                and virtual property flipping.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His unique approach allows investors to build passive income without relying on 
                traditional bank loans. Michael sources off-market deals that others overlook and 
                structures win-win arrangements that benefit both buyers and lenders. Whether you're 
                a beginner or a seasoned investor, his strategies will challenge and inspire you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Credentials & Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-foreground">MBA</span>
                  <span className="block text-xs text-muted-foreground">Master of Business Administration</span>
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-foreground">PMP</span>
                  <span className="block text-xs text-muted-foreground">Project Management Professional</span>
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-foreground">CSPO</span>
                  <span className="block text-xs text-muted-foreground">Certified Scrum Product Owner</span>
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm font-medium text-foreground">SAFe® 4 Agilist</span>
                  <span className="block text-xs text-muted-foreground">Certified Agile Professional</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Pennsylvania Based</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Western PA & Ohio Markets</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Podcast Guest</span>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="group card-elevated p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="h-6 w-6 text-primary" />
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
