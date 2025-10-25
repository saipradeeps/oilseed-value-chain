import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Shield, TrendingUp, Package, Star, FileCheck, Ship, DollarSign } from 'lucide-react';

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
            <Globe className="h-4 w-4 mr-2" /> Premium International Access
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
              {/* LINKED BUTTON */}
              <Button 
                variant="outline" 
                className="w-full"
                as={Link} 
                to="/shipment-tracking"
              >
                Track Shipments
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Export-Grade Marketplace */}
        <Card className="grain-texture border-primary/20 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Export-Grade Marketplace</CardTitle>
                <CardDescription>Premium batches certified for international standards</CardDescription>
              </div>
              <Button variant="hero">
                <Globe className="h-4 w-4 mr-2" /> Browse All
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">

              {/* Sample Export Listing 1 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2">
                      <Badge className="bg-green-500">Grade A</Badge>
                      <Badge className="bg-blue-500">Export Ready</Badge>
                    </div>
                    <Badge variant="outline" className="border-primary">
                      <Shield className="h-3 w-3 mr-1" /> NFT Verified
                    </Badge>
                  </div>
                  <CardTitle>Premium Soybean Meal</CardTitle>
                  <CardDescription>Batch ID: EXP-B045 • FSSAI & EU Certified</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Quantity</p>
                        <p className="font-semibold">2,500 kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Protein Content</p>
                        <p className="font-semibold">48.5%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price (FOB)</p>
                        <p className="font-semibold">$425/ton</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Origin</p>
                        <p className="font-semibold">Maharashtra, India</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t">
                      <Badge variant="secondary" className="text-xs">FSSAI ✓</Badge>
                      <Badge variant="secondary" className="text-xs">EU Export ✓</Badge>
                      <Badge variant="secondary" className="text-xs">USDA ✓</Badge>
                      <Badge variant="secondary" className="text-xs">Aflatoxin Safe ✓</Badge>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="hero" className="flex-1">Request Quote</Button>
                      <Button variant="outline" className="flex-1">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sample Export Listing 2 */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex gap-2">
                      <Badge className="bg-green-500">Grade A</Badge>
                      <Badge className="bg-blue-500">Export Ready</Badge>
                      <Badge className="bg-purple-500">Organic</Badge>
                    </div>
                    <Badge variant="outline" className="border-primary">
                      <Shield className="h-3 w-3 mr-1" /> NFT Verified
                    </Badge>
                  </div>
                  <CardTitle>Organic Mustard Cake</CardTitle>
                  <CardDescription>Batch ID: EXP-B046 • Full Certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Quantity</p>
                        <p className="font-semibold">1,800 kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Protein Content</p>
                        <p className="font-semibold">38.2%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Price (FOB)</p>
                        <p className="font-semibold">$520/ton</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Origin</p>
                        <p className="font-semibold">Rajasthan, India</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2 border-t">
                      <Badge variant="secondary" className="text-xs">FSSAI ✓</Badge>
                      <Badge variant="secondary" className="text-xs">EU Organic ✓</Badge>
                      <Badge variant="secondary" className="text-xs">USDA Organic ✓</Badge>
                      <Badge variant="secondary" className="text-xs">Non-GMO ✓</Badge>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="hero" className="flex-1">Request Quote</Button>
                      <Button variant="outline" className="flex-1">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </CardContent>
        </Card>

        {/* Active Shipments Tracking */}
        <Card className="grain-texture border-primary/20">
          <CardHeader>
            <CardTitle>Active International Shipments</CardTitle>
            <CardDescription>Track your orders with real-time updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">EXP-B042 - Soybean Meal to Hamburg, Germany</p>
                    <Badge className="bg-blue-500">In Transit</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">3,200kg • $1,360 • Container: MSCU4532189</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 bg-secondary h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-3/4" />
                    </div>
                    <span className="text-xs">75% Complete</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">ETA: 2 days</p>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">EXP-B039 - Mustard Cake to Rotterdam, Netherlands</p>
                    <Badge className="bg-yellow-500">Customs Clearance</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2,100kg • $1,092 • Container: MAEU7821445</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 bg-secondary h-2 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full w-2/3" />
                    </div>
                    <span className="text-xs">90% Complete</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Awaiting customs approval</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">EXP-B037 - Groundnut Cake to Shanghai, China</p>
                    <Badge className="bg-green-500">Delivered</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">2,800kg • $1,288 • Container: COSCO9632147</p>
                  <p className="text-xs text-muted-foreground mt-1">Delivered on Oct 23, 2025</p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InternationalBuyerDashboard;
