import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PackageSearch, Globe2, ArrowRight } from "lucide-react";

const InternationalBuyerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🌍 International Buyer Dashboard</h1>
          <Link to="/login">
            <Button variant="ghost">Logout</Button>
          </Link>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Track Shipment */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <PackageSearch className="h-12 w-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Track Shipment</h2>
              <p className="text-muted-foreground">
                Track your shipments and get live updates on current status.
              </p>
            </div>
            <Link to="/tracking-shipment">
              <Button className="mt-4 w-full">
                Track Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>

          {/* Market Prices */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <Globe2 className="h-12 w-12 mb-4 text-secondary" />
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
      </div>
    </div>
  );
};

export default InternationalBuyerDashboard;
