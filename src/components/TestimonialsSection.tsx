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
    <section className="py-10">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl card-elevated border border-border group hover:border-primary/30 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              <blockquote className="text-foreground mb-4 leading-relaxed text-sm">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>

              {/* Decorative gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Michael's Podcast */}
        <div className="max-w-3xl mx-auto">
          <a 
            href="https://open.spotify.com/show/6pI8FjqflqzlfyK5bQHh76"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mic className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-serif font-bold text-foreground mb-2">
              Listen to My Podcast
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              Join me as I share insights on creative financing, real estate investing, and building wealth through strategic deal-making.
            </p>
            <p className="text-sm text-primary group-hover:underline">
              Listen on Spotify →
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
