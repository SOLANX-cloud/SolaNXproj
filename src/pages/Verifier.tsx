import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Coins, Shield, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Verifier = () => {
  const [submissions, setSubmissions] = useState([
    { id: 1, project: "Solar Farm India", kwh: 1247.5, co2: 543.2, status: "pending" },
    { id: 2, project: "Wind Energy Texas", kwh: 2890.3, co2: 1258.4, status: "pending" },
    { id: 3, project: "Community Solar CA", kwh: 678.9, co2: 295.6, status: "pending" },
    { id: 4, project: "Desert Solar UAE", kwh: 1567.2, co2: 682.1, status: "pending" },
  ]);

  const [stats, setStats] = useState({
    totalVerified: 89,
    totalCO2: 5234.7,
    creditsMinted: 456,
  });

  const handleApprove = (id: number) => {
    setSubmissions(prev => prev.map(s => 
      s.id === id ? { ...s, status: "approved" } : s
    ));
    setStats(prev => ({
      totalVerified: prev.totalVerified + 1,
      totalCO2: prev.totalCO2 + (submissions.find(s => s.id === id)?.co2 || 0),
      creditsMinted: prev.creditsMinted + Math.floor(Math.random() * 5) + 1
    }));
    toast.success("Energy data verified and approved", {
      description: "Carbon credits can now be minted"
    });
  };

  const handleReject = (id: number) => {
    setSubmissions(prev => prev.map(s => 
      s.id === id ? { ...s, status: "rejected" } : s
    ));
    toast.error("Energy data rejected", {
      description: "Producer has been notified"
    });
  };

  const handleMint = (id: number) => {
    const submission = submissions.find(s => s.id === id);
    if (submission) {
      toast.success(`Minted ${Math.floor(submission.co2 / 10)} CC-Tokens`, {
        description: "Credits added to producer's wallet"
      });
    }
  };

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
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Verifier Dashboard</h1>
              <p className="text-muted-foreground">Review and approve renewable energy data</p>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Total Verified
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stats.totalVerified}</div>
                <p className="text-sm text-muted-foreground mt-1">Projects approved</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  CO₂ Reduced
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stats.totalCO2.toFixed(1)} kg</div>
                <p className="text-sm text-muted-foreground mt-1">Carbon offset verified</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Coins className="w-4 h-4" />
                  Credits Minted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">{stats.creditsMinted}</div>
                <p className="text-sm text-muted-foreground mt-1">CC-Tokens created</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Submissions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Pending Verifications</CardTitle>
              <CardDescription>Review IoT energy data and approve carbon credit minting</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Energy (kWh)</TableHead>
                    <TableHead>CO₂ Avoided (kg)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">{submission.project}</TableCell>
                      <TableCell>{submission.kwh}</TableCell>
                      <TableCell>{submission.co2}</TableCell>
                      <TableCell>
                        {submission.status === "pending" && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-600">
                            Pending
                          </Badge>
                        )}
                        {submission.status === "approved" && (
                          <Badge className="bg-gradient-hero text-primary-foreground">
                            Approved
                          </Badge>
                        )}
                        {submission.status === "rejected" && (
                          <Badge variant="destructive">
                            Rejected
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        {submission.status === "pending" && (
                          <div className="flex gap-2 justify-end">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleReject(submission.id)}
                              className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleApprove(submission.id)}
                              className="bg-gradient-hero"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                          </div>
                        )}
                        {submission.status === "approved" && (
                          <Button
                            size="sm"
                            onClick={() => handleMint(submission.id)}
                            className="bg-gradient-hero"
                          >
                            <Coins className="w-4 h-4 mr-1" />
                            Mint Credits
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Verifier;
