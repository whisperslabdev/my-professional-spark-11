import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-8 md:px-20 lg:px-32">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo & Copyright */}
          <a href="#" className="text-2xl font-serif font-bold text-foreground">
            Michael <span className="text-primary">Kearse</span>
          </a>

          {/* Social - Centered */}
          <a
            href="https://www.linkedin.com/in/wealthbuilding/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
          >
            <Linkedin className="h-4 w-4 text-muted-foreground" />
          </a>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Michael Kearse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
