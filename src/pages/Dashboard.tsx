import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Leaf, Zap, Coins, CheckCircle, Wallet, TrendingUp, Sun, Wind } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [eTokens, setETokens] = useState(1247.5);
  const [ccTokens, setCcTokens] = useState(89);

  // Mock IoT energy data
  const energyData = [
    { time: "00:00", kwh: 0 },
    { time: "06:00", kwh: 12 },
    { time: "09:00", kwh: 45 },
    { time: "12:00", kwh: 78 },
    { time: "15:00", kwh: 62 },
    { time: "18:00", kwh: 28 },
    { time: "21:00", kwh: 5 },
    { time: "23:59", kwh: 0 },
  ];

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected);
    toast.success(walletConnected ? "Wallet Disconnected" : "Phantom Wallet Connected!");
  };

  const handleMintCredit = () => {
    const newCredits = Math.floor(Math.random() * 5) + 3;
    setCcTokens(prev => prev + newCredits);
    toast.success(`Successfully minted ${newCredits} CC-Tokens!`, {
      description: "Transaction confirmed on Solana"
    });
  };

  const stats = [
    { 
      title: "Today's Output", 
      value: "78.4 kWh", 
      icon: Sun, 
      change: "+12.3%",
      gradient: "from-orange-400 to-yellow-400"
    },
    { 
      title: "CO₂ Avoided", 
      value: "34.2 kg", 
      icon: Leaf, 
      change: "+8.7%",
      gradient: "from-green-400 to-emerald-400"
    },
    { 
      title: "E-Tokens", 
      value: eTokens.toFixed(1), 
      icon: Zap, 
      change: "+5.2%",
      gradient: "from-blue-400 to-cyan-400"
    },
    { 
      title: "CC-Tokens", 
      value: ccTokens.toString(), 
      icon: Coins, 
      change: "+3 new",
      gradient: "from-purple-400 to-pink-400"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">Energy Dashboard</h1>
            <p className="text-muted-foreground">Monitor your solar production and carbon credits</p>
          </div>
          
          <Button 
            onClick={handleWalletConnect}
            className={walletConnected ? "bg-gradient-hero" : ""}
            size="lg"
          >
            <Wallet className="mr-2 h-5 w-5" />
            {walletConnected ? "Connected" : "Connect Phantom"}
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-2 hover:shadow-glow transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                    {stat.title}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-sm text-primary">{stat.change}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Energy Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Energy Production (24h)
                </CardTitle>
                <CardDescription>Real-time IoT sensor data</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="kwh" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Actions Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Verification Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">IoT Data</span>
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Energy Output</span>
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">CO₂ Calculation</span>
                  <span className="text-primary font-semibold flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-card">
              <CardHeader>
                <CardTitle>Mint Carbon Credits</CardTitle>
                <CardDescription>Convert verified energy to CC-Tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={handleMintCredit}
                  disabled={!walletConnected}
                  className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  <Coins className="mr-2 h-5 w-5" />
                  Mint Credits
                </Button>
                {!walletConnected && (
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Connect wallet to mint
                  </p>
                )}
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-2">
                  <Wind className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Total Impact</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-1">2.4 tons CO₂</p>
                <p className="text-sm text-muted-foreground">Lifetime carbon offset</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
