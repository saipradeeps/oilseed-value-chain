import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Ship, MapPin, Package, CheckCircle2, Clock, Anchor } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ShipmentTracking = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/international-buyer/dashboard">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shipment Tracking</h1>
          <p className="text-muted-foreground">Real-time tracking of your international shipments</p>
        </div>

        {/* Active Shipment Details */}
        <Card className="p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">SHIP-4521</h2>
              <p className="text-muted-foreground">Soybean Meal - 5000kg</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
              <Ship className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">In Transit</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold">Shipment Progress</span>
              <span className="text-sm text-muted-foreground">ETA: 5 days</span>
            </div>
            <Progress value={60} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Origin</span>
              <span>60% Complete</span>
              <span>Destination</span>
            </div>
          </div>

          {/* Live Map Placeholder */}
          <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg h-80 mb-8 flex items-center justify-center border relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,175,80,0.1),transparent_50%)]"></div>
            <div className="text-center z-10">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-primary animate-bounce" />
              <p className="text-lg font-semibold mb-2">Live GPS Tracking</p>
              <p className="text-sm text-muted-foreground max-w-md">
                Current Location: Indian Ocean, 850 km from Port Louis
              </p>
              <div className="mt-4 p-3 bg-card rounded-lg inline-block">
                <p className="text-sm">
                  <span className="text-muted-foreground">Speed:</span> <span className="font-semibold">18 knots</span>
                  <span className="mx-3">|</span>
                  <span className="text-muted-foreground">Weather:</span> <span className="font-semibold">Clear ☀️</span>
                </p>
              </div>
            </div>
          </div>

          {/* Shipment Timeline */}
          <div>
            <h3 className="text-xl font-bold mb-6">Shipment Timeline</h3>
            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  color: "text-success",
                  title: "Picked up from Supplier",
                  location: "Pune, Maharashtra",
                  date: "Jan 15, 2025 - 10:30 AM",
                  status: "completed",
                },
                {
                  icon: CheckCircle2,
                  color: "text-success",
                  title: "Arrived at Port",
                  location: "Mumbai Port",
                  date: "Jan 16, 2025 - 3:45 PM",
                  status: "completed",
                },
                {
                  icon: CheckCircle2,
                  color: "text-success",
                  title: "Customs Clearance Completed",
                  location: "Mumbai Customs",
                  date: "Jan 17, 2025 - 11:20 AM",
                  status: "completed",
                },
                {
                  icon: CheckCircle2,
                  color: "text-success",
                  title: "Loaded on Vessel",
                  location: "MV Ocean Express",
                  date: "Jan 18, 2025 - 8:00 AM",
                  status: "completed",
                },
                {
                  icon: Ship,
                  color: "text-accent",
                  title: "In Transit - Sea Freight",
                  location: "Indian Ocean",
                  date: "Current Location",
                  status: "active",
                },
                {
                  icon: Anchor,
                  color: "text-muted-foreground",
                  title: "Expected Port Arrival",
                  location: "Hamburg Port, Germany",
                  date: "Expected: Jan 26, 2025",
                  status: "pending",
                },
                {
                  icon: Package,
                  color: "text-muted-foreground",
                  title: "Customs Clearance",
                  location: "Hamburg Customs",
                  date: "Expected: Jan 27, 2025",
                  status: "pending",
                },
                {
                  icon: Clock,
                  color: "text-muted-foreground",
                  title: "Final Delivery",
                  location: "Your Warehouse",
                  date: "Expected: Jan 28, 2025",
                  status: "pending",
                },
              ].map((milestone, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  {i < 7 && (
                    <div className={`absolute left-5 top-12 w-0.5 h-12 ${
                      milestone.status === "completed" ? "bg-success" : "bg-border"
                    }`} />
                  )}
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    milestone.status === "completed" ? "bg-success" : 
                    milestone.status === "active" ? "bg-accent" : "bg-muted"
                  } z-10`}>
                    <milestone.icon className={`h-5 w-5 ${
                      milestone.status === "completed" || milestone.status === "active" 
                        ? "text-white" 
                        : milestone.color
                    }`} />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold">{milestone.title}</p>
                    <p className="text-sm text-muted-foreground">{milestone.location}</p>
                    <p className="text-xs text-muted-foreground mt-1">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Other Shipments */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Other Active Shipments</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: "SHIP-4520", item: "Groundnut Cake - 3500kg", status: "Customs", progress: 85 },
              { id: "SHIP-4519", item: "Mustard Cake - 4200kg", status: "Delivered", progress: 100 },
            ].map((shipment, i) => (
              <Card key={i} className="p-6 hover:shadow-strong transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold">{shipment.id}</h3>
                    <p className="text-sm text-muted-foreground">{shipment.item}</p>
                  </div>
                  <Ship className="h-5 w-5 text-primary" />
                </div>
                <Progress value={shipment.progress} className="mb-2" />
                <p className="text-sm text-muted-foreground">{shipment.status}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTracking;
