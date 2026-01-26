import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-serif font-bold text-foreground">
              Michael <span className="text-primary">Kearse</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Michael Kearse. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              MBA, PMP, CSPO, Certified SAFe® 4 Agilist
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Opportunities</a>
            <a href="#strategy" className="hover:text-primary transition-colors">Strategy</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/wealthbuilding/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary/30 hover:bg-primary/10 transition-all flex items-center justify-center"
            >
              <Linkedin className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
