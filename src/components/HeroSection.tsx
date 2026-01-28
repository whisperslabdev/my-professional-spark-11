
const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 md:px-20 lg:px-32 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-primary font-medium tracking-wider uppercase text-sm animate-fade-up">
                Real Estate Investor • Creative Financing Expert • MBA, PMP
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight animate-fade-up animation-delay-200">
                How to Generate <span className="gradient-text">$15,000-$75,000</span>
                <span className="block">in Passive Income Annually</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-up animation-delay-400">
                Real estate deals you don't have to swing a hammer for. Discover how to build 
                passive income through creative financing and seller-financed properties.
              </p>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
