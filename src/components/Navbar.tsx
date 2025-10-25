import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sprout } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary p-2 rounded-lg">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">OilSeedXChange</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </Link>
          <Link to="/marketplace" className="text-foreground/80 hover:text-foreground transition-colors">
            Marketplace
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="hero" size="lg">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
