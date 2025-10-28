import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, TrendingUp, Package, Star, MapPin } from 'lucide-react';

const BuyerDashboard = () => {
  // Sample marketplace listings
  const listings = [
    {
      id: 'B045',
      crop: 'Soybean Meal',
      grade: 'A',
      quantity: 500,
      price: 33.50,
      location: 'Pune, Maharashtra',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 'B046',
      crop: 'Mustard Cake',
      grade: 'A',
      quantity: 350,
      price: 42.00,
      location: 'Jaipur, Rajasthan',
      rating: 4.9,
      image: '/placeholder.svg'
    },
    {
      id: 'B047',
      crop: 'Groundnut Cake',
      grade: 'B',
      quantity: 450,
      price: 38.50,
      location: 'Ahmedabad, Gujarat',
      rating: 4.71,
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-2">Buyer Dashboard</h1>
          <p className="text-muted-foreground">Browse quality-verified oilseed by-products from verified farmers</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">Completed orders</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18.5T</div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Quality</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Grade A</div>
              <p className="text-xs text-muted-foreground">Across purchases</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="grain-texture mb-8">
          <CardHeader>
            <CardTitle>Search Marketplace</CardTitle>
            <CardDescription>Find quality-verified batches from verified farmers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by crop type, location, or batch ID..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
              </div>
              <Button variant="hero">Search</Button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All Grades</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Grade A</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Grade B</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Export Ready</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Organic</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Marketplace Listings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Available Batches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id} className="grain-texture hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-green-500">{listing.grade}</Badge>
                    <Badge variant="outline">NFT Verified</Badge>
                  </div>
                  <CardTitle className="text-xl">{listing.crop}</CardTitle>
                  <CardDescription>Batch ID: {listing.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Quantity</span>
                      <span className="font-semibold">{listing.quantity} kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Price</span>
                      <span className="font-semibold">₹{listing.price}/kg</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total</span>
                      <span className="font-bold text-primary">₹{(listing.quantity * listing.price).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{listing.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{listing.rating}/5 Seller Rating</span>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="hero" className="flex-1">Make Offer</Button>
                      <Button variant="outline" className="flex-1">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <Card className="grain-texture">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Track your active and recent purchases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="font-medium">Batch B042 - Soybean Meal</p>
                  <p className="text-sm text-muted-foreground">500kg • ₹16,750 • In Transit</p>
                </div>
                <Badge className="bg-blue-500">Shipping</Badge>
              </div>
              <div className="flex items-center justify-between pb-4 border-b">
                <div>
                  <p className="font-medium">Batch B039 - Mustard Cake</p>
                  <p className="text-sm text-muted-foreground">350kg • ₹14,700 • Delivered</p>
                </div>
                <Badge className="bg-green-500">Completed</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Batch B037 - Groundnut Cake</p>
                  <p className="text-sm text-muted-foreground">450kg • ₹17,325 • Awaiting Payment</p>
                </div>
                <Badge className="bg-yellow-500">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyerDashboard;
