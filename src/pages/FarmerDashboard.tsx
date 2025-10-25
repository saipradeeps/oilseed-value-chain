import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, TrendingUp, Package, DollarSign, Users, BarChart3 } from 'lucide-react';

const FarmerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-2">Farmer Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Manage your batches and track your earnings.</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Batches</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Grading</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Awaiting analysis</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Listings</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">₹1,65,000 potential</p>
            </CardContent>
          </Card>

          <Card className="grain-texture">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,45,000</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <Upload className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Upload New Batch</CardTitle>
              <CardDescription>Register a new oilseed by-product batch for AI grading</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="hero" className="w-full">Upload Batch</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <Package className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>View All Batches</CardTitle>
              <CardDescription>Track and manage your registered batches</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Batches</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Market Prices</CardTitle>
              <CardDescription>Check current rates and price forecasts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Check Prices</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Join Cooperative</CardTitle>
              <CardDescription>Pool resources with other farmers for better prices</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Explore Cooperatives</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View your earnings and quality trends</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Analytics</Button>
            </CardContent>
          </Card>

          <Card className="grain-texture hover:shadow-lg transition-shadow">
            <CardHeader>
              <DollarSign className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>Transactions</CardTitle>
              <CardDescription>View payment history and pending transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">View Transactions</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="grain-texture">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest batch activities and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Batch B045 graded as Grade A</p>
                  <p className="text-sm text-muted-foreground">2 hours ago • Soybean Meal • 500kg</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="font-medium">New buyer offer ₹16,500 for Batch B043</p>
                  <p className="text-sm text-muted-foreground">5 hours ago • Mustard Cake • 350kg</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Payment received ₹24,300</p>
                  <p className="text-sm text-muted-foreground">1 day ago • Batch B042 • Groundnut Cake</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-gray-500 mt-2" />
                <div className="flex-1">
                  <p className="font-medium">Batch B042 delivered successfully</p>
                  <p className="text-sm text-muted-foreground">2 days ago • Verified by buyer</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FarmerDashboard;
