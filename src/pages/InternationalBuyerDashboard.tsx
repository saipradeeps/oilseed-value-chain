import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, TrendingUp, Package, Star, FileCheck, Ship, DollarSign, PackageSearch, ArrowRight } from 'lucide-react';

const InternationalBuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="mb-2">International Buyer Dashboard</h1>
            <p className="text-muted-foreground">Access export-grade oilseed by-products with blockchain verification</p>
          </div>
          <Badge className="bg-gradient-primary text-white px-4 py-2 text-base">
            <Globe className="h-4 w-4 mr-2" />
            Premium International Access
          </Badge>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="grain-texture border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
              <Ship className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">In transit globally</p>
            </CardContent>
          </Card>

          <Card className="grain-texture border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.8T</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="grain-texture border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Export Value</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125.5K</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="grain-texture border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Quality Grade</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">A+</div>
              <p className="text-xs text-muted-foreground">Export certified</p>
            </CardContent>
          </Card>
        </div>

        {/* Dashboard Cards: Track Shipment & Market Prices */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Track Shipment */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <PackageSearch className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Track Shipment</h2>
              <p className="text-muted-foreground">
                Track your shipments and get live updates on current status.
              </p>
            </div>
            <Link to="/shipment-tracking">
              <Button className="mt-4 w-full">
                Track Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          {/* Market Prices */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <Globe className="h-12 w-12 mb-4 text-secondary" />
              <h2 className="text-xl font-semibold mb-2">Market Prices</h2>
              <p className="text-muted-foreground">
                Check real-time global oilseed and feed market prices.
              </p>
            </div>
            <Link to="/market-prices">
              <Button className="mt-4 w-full" variant="secondary">
                View Prices <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          {/* Placeholder for future features */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">Trade Insights</h2>
              <p className="text-muted-foreground">
                Insights and analytics on international trade trends.
              </p>
            </div>
            <Button disabled className="mt-4 w-full opacity-60">
              Coming Soon
            </Button>
          </Card>
        </div>

        {/* Export Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="grain-texture border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Blockchain Verified</CardTitle>
              <CardDescription>100% traceability with NFT certificates for every batch</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Certificates</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <FileCheck className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Export Compliance</CardTitle>
              <CardDescription>FSSAI, EU, and USDA certified products ready for export</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Check Standards</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture border-primary/20 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Ship className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Logistics Support</CardTitle>
              <CardDescription>End-to-end shipping with real-time tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/shipment-tracking">
                <Button variant="outline" className="w-full">
                  Track Shipments
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InternationalBuyerDashboard;
