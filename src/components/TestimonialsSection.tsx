import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Paul's leadership workshop transformed how our executive team approaches talent development. His insights on influence-based leadership have become core to our organizational culture.",
    author: "Senior Executive",
    company: "Fortune 500 Company",
  },
  {
    quote: "An inspiring speaker who delivers practical, actionable strategies. Our team left energized and equipped with tools they could immediately apply.",
    author: "HR Director",
    company: "Government Agency",
  },
  {
    quote: "Paul's DEI training was the most impactful program we've implemented. His approach is genuine, insightful, and creates lasting change.",
    author: "Chief People Officer",
    company: "Technology Corporation",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Leaders Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
