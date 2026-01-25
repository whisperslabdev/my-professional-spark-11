import { Award, Mic, BookOpen, Users, Shield, GraduationCap } from 'lucide-react';

const achievements = [
  {
    icon: Mic,
    title: 'International Speaker',
    description: 'Keynotes for Fortune 500 companies, government agencies, and military organizations worldwide.',
  },
  {
    icon: BookOpen,
    title: '#1 Best-Selling Author',
    description: 'EIPPY Award winner and author of "Leadership Is Influence" and 4 other acclaimed books.',
  },
  {
    icon: Shield,
    title: 'USAF Lt. Colonel (Ret.)',
    description: '20+ years of military service including 12 consecutive years at the Pentagon.',
  },
  {
    icon: Users,
    title: 'SHRM Certified DEI Trainer',
    description: 'Certified Diversity-Train-The-Trainer helping organizations build inclusive cultures.',
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
                About Paul Lawrence Vann
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Leadership Is <span className="gradient-text">Influence</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 30 years of expertise in leadership development, Paul Lawrence Vann 
                is the Founder and CEO of Wealth Building Academy, LLC. He specializes in 
                working with C-Suite leaders to develop future-focused workplaces, retain top 
                talent, and improve return on investment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A retired United States Air Force Lieutenant Colonel who served 12 consecutive years 
                at the Pentagon, Paul brings a unique blend of military discipline and corporate 
                excellence to his leadership development programs. He uses a proprietary system to 
                develop leadership core competencies including emotional intelligence, remote 
                leadership, and organizational resiliency.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm text-muted-foreground">M.S. Contracts & Acquisition</span>
                  <span className="block text-xs text-primary">Florida Institute of Technology</span>
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm text-muted-foreground">M.A. Business Management</span>
                  <span className="block text-xs text-primary">Central Michigan University</span>
                </div>
                <div className="bg-card border border-border rounded-lg px-4 py-2">
                  <span className="text-sm text-muted-foreground">B.A. Business Administration</span>
                  <span className="block text-xs text-primary">Shaw University</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Georgetown Fellow</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Toastmasters Award Winner</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Podcast Host</span>
              </div>
              <div className="bg-card border border-border rounded-lg px-4 py-2">
                <span className="text-sm text-muted-foreground">Kappa Alpha Psi</span>
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
