import { CheckCircle, ArrowRight, DollarSign, Home, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Source Off-Market Deals',
    description: 'Find properties that others overlook in Western Pennsylvania and Ohio markets.',
  },
  {
    number: '02',
    title: 'Secure Private Capital',
    description: 'Borrow from private lenders at competitive rates with first lien position security.',
  },
  {
    number: '03',
    title: 'Acquire Creatively',
    description: 'Purchase properties using seller financing — no traditional bank loans required.',
  },
  {
    number: '04',
    title: 'Sell with Owner Financing',
    description: 'Create long-term cash flow by selling with wraparound mortgages and monthly payments.',
  },
];

const StrategySection = () => {
  return (
    <section id="strategy" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            The Virtual Wealth Flipping Method
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            How I Build Passive Income
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven system for acquiring properties online, creating cash flow, and building 
            generational wealth — all without swinging a hammer.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              <div className="relative bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="text-5xl font-serif font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Example Deal */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                <Home className="h-6 w-6 text-primary" />
                Recent Deal Example
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Purchased for <span className="text-foreground font-semibold">$57,000</span> (listed at $65k)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Borrowed from private lender at <span className="text-foreground font-semibold">12% interest</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">No personal guarantee, 1st lien position</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Sold for <span className="text-foreground font-semibold">$94,000</span> in 4 months</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Owner financed 30 years @ <span className="text-foreground font-semibold">10%</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">Monthly cash flow: <span className="text-foreground font-semibold">$799/month</span></span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm italic">
                  "Never seen it in person. Never touched it or put anything into it. 
                  This is the Virtual Wealth Flipping Method."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
