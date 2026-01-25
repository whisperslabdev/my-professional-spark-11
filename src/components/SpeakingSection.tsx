import { Button } from '@/components/ui/button';
import { Mic, Building2, GraduationCap, Shield, ArrowRight } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    name: 'Fortune 500 Companies',
    description: 'Inspiring corporate leaders to develop high-performing teams.',
  },
  {
    icon: Shield,
    name: 'Government & Military',
    description: 'Leadership excellence for public service organizations.',
  },
  {
    icon: GraduationCap,
    name: 'Universities & Colleges',
    description: 'Preparing the next generation of leaders.',
  },
];

const topics = [
  'Leadership Development',
  'Employee Engagement',
  'Diversity & Inclusion',
  'Talent Retention',
  'Organizational Culture',
  'Motivational Keynotes',
];

const SpeakingSection = () => {
  return (
    <section id="speaking" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Mic className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Top 40 Speaker</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                Book Paul for Your <span className="gradient-text">Next Event</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Paul Lawrence Vann delivers dynamic, results-focused keynotes and workshops 
                that inspire audiences to take action and transform their leadership approach. 
                Available for in-person and virtual events worldwide.
              </p>
            </div>

            {/* Topics */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Popular Speaking Topics</h3>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Request Speaking Inquiry
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Speaker Kit
              </Button>
            </div>
          </div>

          {/* Audiences */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Trusted By</h3>
            
            {audiences.map((audience, index) => (
              <div
                key={audience.name}
                className="group flex items-start gap-6 p-6 rounded-xl card-elevated border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <audience.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">
                    {audience.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <p className="text-3xl font-serif font-bold text-primary mb-1">500+</p>
                <p className="text-sm text-muted-foreground">Speaking Engagements</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border">
                <p className="text-3xl font-serif font-bold text-primary mb-1">20+</p>
                <p className="text-sm text-muted-foreground">Countries Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
