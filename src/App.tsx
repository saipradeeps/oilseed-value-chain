import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import FarmerDashboard from "./pages/FarmerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import InternationalBuyerDashboard from "./pages/InternationalBuyerDashboard";
import MarketPrices from "./pages/MarketPrices";
import ShipmentTracking from "./pages/ShipmentTracking"; // ✅ Correct original name
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
          <Route path="/dashboard/buyer" element={<BuyerDashboard />} />
          <Route path="/dashboard/international" element={<InternationalBuyerDashboard />} />

          <Route path="/market-prices" element={<MarketPrices />} />
          <Route path="/shipment-tracking" element={<ShipmentTracking />} /> {/* ✅ Correct route */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
