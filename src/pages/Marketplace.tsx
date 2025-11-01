import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Leaf, MapPin, ShoppingCart, CheckCircle, Filter } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Marketplace = () => {
  const [filter, setFilter] = useState("all");

  const carbonCredits = [
    {
      id: 1,
      name: "Solar Farm India",
      location: "Rajasthan, India",
      co2Offset: "12.5 tons",
      price: "0.05 SOL",
      verified: "Gold Standard",
      type: "Solar",
      image: "solar-panel"
    },
    {
      id: 2,
      name: "Wind Energy Project",
      location: "Texas, USA",
      co2Offset: "25.0 tons",
      price: "0.08 SOL",
      verified: "Verra",
      type: "Wind",
      image: "wind-turbine"
    },
    {
      id: 3,
      name: "Community Solar",
      location: "California, USA",
      co2Offset: "8.2 tons",
      price: "0.03 SOL",
      verified: "Gold Standard",
      type: "Solar",
      image: "solar-panel"
    },
    {
      id: 4,
      name: "Hydro Power Brazil",
      location: "Amazon, Brazil",
      co2Offset: "30.5 tons",
      price: "0.10 SOL",
      verified: "Verra",
      type: "Hydro",
      image: "hydro"
    },
    {
      id: 5,
      name: "Desert Solar UAE",
      location: "Dubai, UAE",
      co2Offset: "18.7 tons",
      price: "0.06 SOL",
      verified: "Gold Standard",
      type: "Solar",
      image: "solar-panel"
    },
    {
      id: 6,
      name: "Offshore Wind EU",
      location: "North Sea, EU",
      co2Offset: "42.3 tons",
      price: "0.12 SOL",
      verified: "Verra",
      type: "Wind",
      image: "wind-turbine"
    },
  ];

  const handleBuyCredit = (credit: any) => {
    toast.success(`Purchased ${credit.name}!`, {
      description: `${credit.co2Offset} CO₂ offset added to your portfolio`
    });
  };

  const filteredCredits = filter === "all" 
    ? carbonCredits 
    : carbonCredits.filter(c => c.type.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Carbon Credit Marketplace</h1>
          <p className="text-muted-foreground">Trade verified carbon credits from renewable energy projects worldwide</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="solar">Solar</SelectItem>
              <SelectItem value="wind">Wind</SelectItem>
              <SelectItem value="hydro">Hydro</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1 flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle className="w-4 h-4 text-primary" />
            {filteredCredits.length} verified projects available
          </div>
        </motion.div>

        {/* Credits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredits.map((credit, index) => (
            <motion.div
              key={credit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-2 hover:shadow-glow transition-all h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-gradient-hero text-primary-foreground">
                      {credit.verified}
                    </Badge>
                    <Badge variant="outline">{credit.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{credit.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {credit.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-muted-foreground">CO₂ Offset</span>
                      <span className="font-semibold flex items-center gap-1">
                        <Leaf className="w-4 h-4 text-primary" />
                        {credit.co2Offset}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-t border-border">
                      <span className="text-muted-foreground">Price</span>
                      <span className="text-2xl font-bold text-primary">{credit.price}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    onClick={() => handleBuyCredit(credit)}
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Buy Credit
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card className="border-2 bg-gradient-card">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">234</div>
                  <div className="text-muted-foreground">Credits Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">156</div>
                  <div className="text-muted-foreground">Active Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">5.2K</div>
                  <div className="text-muted-foreground">Tons CO₂ Traded</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;
