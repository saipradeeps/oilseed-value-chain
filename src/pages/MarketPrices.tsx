import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown, Activity } from "lucide-react";

const MarketPrices = () => {
  const marketData = [
    {
      crop: "Soybean Meal",
      currentPrice: "₹33.50",
      gradeA: "₹31-35",
      gradeB: "₹28-32",
      gradeC: "₹24-28",
      trend: "up",
      change: "+5.2%",
      demand: "High",
    },
    {
      crop: "Groundnut Cake",
      currentPrice: "₹36.00",
      gradeA: "₹34-38",
      gradeB: "₹31-35",
      gradeC: "₹27-31",
      trend: "up",
      change: "+3.8%",
      demand: "Medium",
    },
    {
      crop: "Mustard Cake",
      currentPrice: "₹29.00",
      gradeA: "₹28-32",
      gradeB: "₹25-29",
      gradeC: "₹22-26",
      trend: "down",
      change: "-2.1%",
      demand: "Medium",
    },
    {
      crop: "Sunflower Meal",
      currentPrice: "₹27.50",
      gradeA: "₹26-30",
      gradeB: "₹23-27",
      gradeC: "₹20-24",
      trend: "stable",
      change: "+0.5%",
      demand: "Low",
    },
    {
      crop: "Cotton Seed Cake",
      currentPrice: "₹24.00",
      gradeA: "₹23-27",
      gradeB: "₹20-24",
      gradeC: "₹17-21",
      trend: "up",
      change: "+4.2%",
      demand: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/farmer/dashboard">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Market Prices</h1>
          <p className="text-muted-foreground">Real-time market rates for oilseed by-products</p>
        </div>

        {/* Market Sentiment */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-success/10 border-success/20">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-success" />
              <div>
                <p className="text-sm text-muted-foreground">Market Trend</p>
                <p className="text-xl font-bold text-success">Bullish ↑</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/10 border-secondary/20">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Overall Demand</p>
                <p className="text-xl font-bold">High 🔥</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary/10 border-primary/20">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                ℹ️
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Time to Sell</p>
                <p className="text-xl font-bold text-primary">Yes, Now!</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Price Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Crop Type</th>
                  <th className="text-left p-4 font-semibold">Current Avg</th>
                  <th className="text-left p-4 font-semibold">Grade A</th>
                  <th className="text-left p-4 font-semibold">Grade B</th>
                  <th className="text-left p-4 font-semibold">Grade C</th>
                  <th className="text-left p-4 font-semibold">Change</th>
                  <th className="text-left p-4 font-semibold">Demand</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((item, i) => (
                  <tr key={i} className="border-t hover:bg-muted/50 transition-colors">
                    <td className="p-4 font-semibold">{item.crop}</td>
                    <td className="p-4 text-xl font-bold">{item.currentPrice}/kg</td>
                    <td className="p-4">{item.gradeA}/kg</td>
                    <td className="p-4">{item.gradeB}/kg</td>
                    <td className="p-4">{item.gradeC}/kg</td>
                    <td className="p-4">
                      <span className={`flex items-center gap-1 font-semibold ${
                        item.trend === "up" ? "text-success" : 
                        item.trend === "down" ? "text-destructive" : "text-muted-foreground"
                      }`}>
                        {item.trend === "up" && <TrendingUp className="h-4 w-4" />}
                        {item.trend === "down" && <TrendingDown className="h-4 w-4" />}
                        {item.change}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.demand === "High" ? "bg-success/20 text-success" :
                        item.demand === "Medium" ? "bg-secondary/20 text-secondary" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {item.demand}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Market Insights */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">7-Day Price Forecast</h3>
            <div className="h-48 bg-gradient-to-br from-muted/50 to-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-2 text-success" />
                <p className="text-sm text-muted-foreground">
                  Soybean meal prices expected to increase 2-3% by next week
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Price Alerts</h3>
            <div className="space-y-3">
              <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                <p className="font-semibold text-success">✓ Price Target Reached</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Soybean meal crossed ₹33/kg - Good time to sell
                </p>
              </div>
              <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                <p className="font-semibold text-secondary">📈 Demand Surge</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Cotton seed cake demand up 15% this week
                </p>
              </div>
              <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="font-semibold text-accent">⚡ Festival Demand</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Expect higher prices in next 2 weeks due to seasonal demand
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Regional Comparison */}
        <Card className="p-6 mt-6">
          <h3 className="text-xl font-bold mb-4">Regional Price Comparison</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { region: "Maharashtra", price: "₹33.50/kg", status: "Average" },
              { region: "Karnataka", price: "₹34.20/kg", status: "Higher" },
              { region: "Gujarat", price: "₹32.80/kg", status: "Lower" },
            ].map((region, i) => (
              <div key={i} className="p-4 border rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">{region.region}</p>
                <p className="text-2xl font-bold mb-1">{region.price}</p>
                <p className="text-sm text-muted-foreground">{region.status}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MarketPrices;
