import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo - Left */}
          <a href="#" className="text-3xl font-serif font-bold text-foreground">
            Michael <span className="text-primary">Kearse</span>
          </a>

          {/* Copyright - Center */}
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Michael Kearse. All rights reserved.
          </p>

          {/* Social - Right */}
          <a
            href="https://www.linkedin.com/in/wealthbuilding/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
