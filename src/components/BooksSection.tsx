import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';

const books = [
  {
    title: 'Leadership Is Influence',
    year: '2023',
    description: 'A blueprint for becoming a leader of influence. Learn the three-pronged approach to developing all members of your staff and maximizing human potential.',
    featured: true,
    link: 'https://www.amazon.com/Leadership-Influence-Paul-Lawrence-Vann/dp/B0CKM1XLQN',
  },
  {
    title: 'Faith For Times Like Now',
    subtitle: 'Inspiration For Daily Living',
    year: '2017',
    description: 'Inspirational guidance for navigating life\'s challenges with faith and resilience.',
    featured: false,
  },
  {
    title: 'Living On Higher Ground',
    subtitle: 'How to Live with Passion, Motivation and Joy',
    year: '2015',
    description: 'Discover the keys to living a purpose-driven life filled with passion and lasting fulfillment.',
    featured: false,
  },
  {
    title: 'The Voyage to Your Vision',
    year: '2014',
    description: 'Chart your course to success with practical strategies for achieving your personal and professional goals.',
    featured: false,
  },
  {
    title: '101 Great Ways to Enhance Your Career',
    year: '2011',
    description: 'Contributing author sharing expert insights on career advancement and professional development.',
    featured: false,
  },
];

const BooksSection = () => {
  return (
    <section id="books" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Published Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            #1 International Best-Selling Author
          </h2>
          <p className="text-lg text-muted-foreground">
            EIPPY Award-winning author with publications available in over 66 countries. 
            Find them on Amazon, Barnes & Noble, and bookstores worldwide.
          </p>
        </div>

        {/* Featured Book */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">#1 International Best Seller</span>
                </div>

                <div>
                  <p className="text-primary font-medium mb-2">Latest Release • 2023</p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    Leadership Is Influence
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {books[0].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" className="group" asChild>
                    <a href={books[0].link} target="_blank" rel="noopener noreferrer">
                      Get Your Copy
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    Read Sample Chapter
                  </Button>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-lg blur-xl" />
                  <div className="relative w-48 h-72 bg-gradient-to-br from-primary via-accent to-primary/80 rounded-lg shadow-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <p className="text-primary-foreground/80 text-xs uppercase tracking-wider mb-2">Paul Lawrence Vann</p>
                      <h4 className="text-primary-foreground font-serif font-bold text-xl leading-tight">
                        Leadership Is Influence
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Books Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {books.slice(1).map((book, index) => (
            <div
              key={book.title}
              className="group card-elevated p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <p className="text-xs text-primary font-medium mb-2">{book.year}</p>
                <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                  {book.title}
                </h3>
                {book.subtitle && (
                  <p className="text-sm text-muted-foreground italic">{book.subtitle}</p>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {book.description}
              </p>
              <Button variant="subtle" size="sm" className="group/btn">
                Learn More
                <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
