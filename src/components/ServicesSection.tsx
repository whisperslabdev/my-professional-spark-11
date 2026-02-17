import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Wallet, TrendingUp, Handshake, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Virtual Wealth Flipping',
    description: 'Learn how to acquire and sell properties entirely online without ever stepping foot on the property.',
    features: ['Off-Market Deals', 'No Rehab Required', 'Remote Investing'],
    highlighted: true,
  },
  {
    icon: Wallet,
    title: 'Private Lending Opportunities',
    description: 'Turn your idle capital into predictable returns with secured real estate investments.',
    features: ['12% Interest Returns', 'First Lien Position', 'Passive Income'],
    highlighted: false,
  },
  {
    icon: TrendingUp,
    title: 'Seller Financing Strategies',
    description: 'Discover how to structure creative deals using seller financing and wraps to create cash flow.',
    features: ['No Bank Loans', '30-Year Terms', 'Monthly Cash Flow'],
    highlighted: false,
  },
  {
    icon: Handshake,
    title: 'Deal Sourcing & Partnerships',
    description: 'Partner on real estate deals or learn how to find off-market opportunities others overlook.',
    features: ['Joint Ventures', 'Deal Analysis', 'Market Insights'],
    highlighted: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Investment Opportunities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Build Wealth Creatively
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to invest passively or learn creative real estate strategies, 
            there's an opportunity for you to grow your wealth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                service.highlighted
                  ? 'bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30'
                  : 'card-elevated border border-border hover:border-primary/20'
              }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Signature Strategy
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  service.highlighted ? 'bg-primary text-primary-foreground' : 'bg-primary/10'
                }`}>
                  <service.icon className={`h-6 w-6 ${service.highlighted ? '' : 'text-primary'}`} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
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
              <a href="https://calendly.com/virtualwealthflip" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" />
                Let's Discuss Opportunities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">
              Free strategy call available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
