import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Truck, Clock, CheckCircle2, PackageOpen } from "lucide-react";

const TrackingShipment = () => {
  const shipments = [
    {
      id: "SHIP-001",
      product: "Soybean Meal",
      status: "In Transit",
      location: "Mumbai Port",
      eta: "Oct 30, 2025",
      icon: <Truck className="h-5 w-5 text-primary" />,
    },
    {
      id: "SHIP-002",
      product: "Cotton Seed Cake",
      status: "Delivered",
      location: "Rotterdam Port",
      eta: "Oct 22, 2025",
      icon: <CheckCircle2 className="h-5 w-5 text-success" />,
    },
    {
      id: "SHIP-003",
      product: "Groundnut Cake",
      status: "Pending Dispatch",
      location: "Warehouse - Gujarat",
      eta: "Nov 3, 2025",
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link to="/dashboard/international">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Shipment Tracking</h1>
        <p className="text-muted-foreground mb-6">
          Live updates and current shipment details
        </p>

        {/* Shipment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shipments.map((s, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-muted-foreground">{s.id}</p>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-1">{s.product}</h3>
              <p className="text-muted-foreground mb-2">{s.location}</p>
              <div className="flex justify-between items-center mt-4">
                <span
                  className={`text-sm font-medium ${
                    s.status === "Delivered"
                      ? "text-success"
                      : s.status === "In Transit"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {s.status}
                </span>
                <span className="text-sm text-muted-foreground">ETA: {s.eta}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 flex justify-center">
          <PackageOpen className="h-8 w-8 text-muted-foreground mr-2" />
          <p className="text-muted-foreground">
            All shipment updates are refreshed every 15 minutes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackingShipment;
