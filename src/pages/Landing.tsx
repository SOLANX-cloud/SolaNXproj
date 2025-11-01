import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Zap, Shield, TrendingUp, Github, FileText } from "lucide-react";

const Landing = () => {
  const features = [
    {
      icon: Leaf,
      title: "Clean Energy Production",
      description: "Tokenize renewable energy from solar panels and wind farms with real-time IoT verification"
    },
    {
      icon: Shield,
      title: "Verified Carbon Credits",
      description: "Every credit is verified by trusted third parties and recorded immutably on Solana"
    },
    {
      icon: Zap,
      title: "Instant Trading",
      description: "Buy and sell carbon credits seamlessly with near-zero transaction fees"
    },
    {
      icon: TrendingUp,
      title: "Transparent Impact",
      description: "Track your environmental impact in real-time with complete on-chain transparency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">SolaNX</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-4 items-center"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
            <FileText className="w-5 h-5" />
          </a>
          <Link to="/dashboard">
            <Button variant="outline" size="sm">Dashboard</Button>
          </Link>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-glow mx-auto">
              <Zap className="w-10 h-10 text-primary-foreground" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Power the planet.<br />Earn verified carbon tokens.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            SolaNX connects clean energy producers, verifiers, and global carbon buyers through IoT and Solana blockchain.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6">
                Launch App
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-muted">
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why Choose SolaNX
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-2xl shadow-card border border-border hover:shadow-glow transition-all"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-hero rounded-3xl p-12 text-center text-primary-foreground">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold mb-2">1,234</div>
              <div className="text-lg opacity-90">Solar Panels Connected</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">5,678</div>
              <div className="text-lg opacity-90">Tons CO₂ Offset</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">$234K</div>
              <div className="text-lg opacity-90">Credits Traded</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold">SolaNX</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/docs" className="hover:text-foreground transition-colors">Documentation</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="#" className="hover:text-foreground transition-colors">Solana Hackathon</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 SolaNX. Powered by Solana.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
