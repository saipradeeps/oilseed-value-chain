import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { 
  Sparkles, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  CheckCircle2,
  ArrowRight,
  Sprout
} from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Agricultural field" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/20 rounded-full">
              <span className="text-sm font-semibold text-secondary">Blockchain-Powered • AI-Driven</span>
            </div>
            
            <h1 className="mb-6 leading-tight">
              Transform Your Oilseed By-Products into{' '}
              <span className="text-gradient">Premium Value</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered quality grading, blockchain traceability, and direct access to premium markets. 
              Empowering farmers to capture fair value from every harvest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/register?role=farmer">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Register as Farmer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/register?role=buyer">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Register as Buyer
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>10,000+ Farmers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>₹50Cr+ Transactions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span>Blockchain Secured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Platform Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets agricultural expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Quality Grading</h3>
                <p className="text-muted-foreground">
                  Instant biochemical analysis using advanced computer vision. Get export-ready quality certificates in minutes.
                </p>
              </CardContent>
            </Card>

            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Blockchain Traceability</h3>
                <p className="text-muted-foreground">
                  Immutable quality certificates as NFTs. Complete transparency from farm to buyer with tamper-proof records.
                </p>
              </CardContent>
            </Card>

            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dynamic Pricing</h3>
                <p className="text-muted-foreground">
                  AI-powered price recommendations based on quality, market demand, and seasonal trends. Maximize your earnings.
                </p>
              </CardContent>
            </Card>

            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cooperative Pooling</h3>
                <p className="text-muted-foreground">
                  Pool batches with your cooperative. Increase negotiation power and access bulk buyer premiums with automated payments.
                </p>
              </CardContent>
            </Card>

            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Global Markets</h3>
                <p className="text-muted-foreground">
                  Direct access to international buyers. Export-grade certification and compliance support for premium markets.
                </p>
              </CardContent>
            </Card>

            <Card className="grain-texture hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fair Trade Guarantee</h3>
                <p className="text-muted-foreground">
                  Smart contract-based payments. Funds held in escrow until delivery confirmed. No middlemen, no exploitation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to fair value</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Upload Your Batch</h3>
              <p className="text-muted-foreground">
                Take photos of your oilseed by-product. Our AI analyzes quality in real-time and generates certified grading.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full gradient-secondary mx-auto flex items-center justify-center text-2xl font-bold text-secondary-foreground">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Get Fair Pricing</h3>
              <p className="text-muted-foreground">
                Receive AI-powered price recommendations based on your quality grade and current market conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full gradient-accent mx-auto flex items-center justify-center text-2xl font-bold text-accent-foreground">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect with Buyers</h3>
              <p className="text-muted-foreground">
                Get matched with premium buyers. Secure payment via blockchain escrow. Track delivery in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grain-texture" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-6 text-primary-foreground">Ready to Transform Your Harvest?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of farmers already earning fair value for their oilseed by-products
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?role=farmer">
              <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                Start Selling Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register?role=international_buyer">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                International Buyer Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="gradient-primary p-2 rounded-lg">
                  <Sprout className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-lg">OilSeedXChange</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering farmers through technology and transparency.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/marketplace" className="hover:text-foreground transition-colors">Marketplace</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link to="/support" className="hover:text-foreground transition-colors">Support</Link></li>
                <li><Link to="/training" className="hover:text-foreground transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 OilSeedXChange. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
