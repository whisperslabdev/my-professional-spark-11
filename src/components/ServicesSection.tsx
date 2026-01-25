import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Lightbulb, TrendingUp, Users2, Calendar } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Leadership Core Competency Programs',
    description: 'Award-winning, proprietary system to develop your entire staff of leaders, managers, employees, and contractors.',
    features: ['Emotional Intelligence', 'Remote Leadership', 'Organizational Resiliency'],
    highlighted: true,
  },
  {
    icon: Users2,
    title: 'C-Suite Executive Development',
    description: 'Specialized coaching for C-Suite leaders to develop future-focused workplaces and retain top talent.',
    features: ['Leadership Assessments', 'Strategic Planning', 'ROI Optimization'],
    highlighted: false,
  },
  {
    icon: Lightbulb,
    title: 'Diversity-Train-The-Trainer',
    description: 'SHRM-certified DEI training programs to help organizations build inclusive, high-performing cultures.',
    features: ['Certified Curriculum', 'Cultural Competency', 'Inclusive Leadership'],
    highlighted: false,
  },
  {
    icon: TrendingUp,
    title: 'Employee Upskilling & Retention',
    description: 'Close skill gaps, improve employee journeys, and reduce attrition by providing professional growth opportunities.',
    features: ['Skills Gap Analysis', 'Career Development', 'Engagement Metrics'],
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Services & Programs
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Transform Your Organization
          </h2>
          <p className="text-lg text-muted-foreground">
            Results-focused leadership consulting and development programs designed 
            to help your organization achieve a competitive advantage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                service.highlighted
                  ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30'
                  : 'card-elevated border border-border hover:border-primary/20'
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-8 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  service.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                }`}>
                  <service.icon className={`h-7 w-7 ${service.highlighted ? '' : 'text-primary'}`} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://calendly.com/info-3623/discussion-insight-overview" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Leadership Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">
              20-minute Zoom session
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
