import { Quote, Mic } from 'lucide-react';

const testimonials = [
  {
    quote: "Michael's creative financing strategies opened my eyes to a whole new way of investing in real estate. His step-by-step approach made it easy to understand and implement.",
    author: "Private Investor",
    company: "Pennsylvania",
  },
  {
    quote: "I've purchased multiple properties from Michael using his seller financing method. It's a win-win approach that has helped me build my own portfolio without traditional banks.",
    author: "Real Estate Buyer",
    company: "Repeat Client",
  },
  {
    quote: "Working with Michael as a private lender has been incredibly rewarding. Consistent returns, first lien security, and complete transparency throughout the process.",
    author: "Private Lender",
    company: "Capital Partner",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl card-elevated border border-border group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="h-10 w-10 text-primary/20 mb-6" />
              
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Featured Podcast */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Featured on The WillPower Podcast
            </h3>
            <p className="text-muted-foreground mb-4">
              "Creative Hustle: How Michael Kearse Acquired 100+ Doors with Seller Financing & $4M in Private Capital"
            </p>
            <p className="text-sm text-primary">
              Listen to learn the mindset shifts that helped scale rapidly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
