import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                <Sparkles className="h-4 w-4" />
                Powered by Predictive Intelligence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Find Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Wavlngth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Connect with people who truly get you. No awkward interactions, no ghosting—just authentic connections powered by AI compatibility matching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={() => setShowComingSoon(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-soft hover:shadow-glow transition-all"
              >
                Join the Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-secondary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Wavlngth Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform analyzes compatibility at a deep level, so you can be yourself from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Brain,
                title: "Take the Quiz",
                description: "Answer questions that reveal your authentic compatibility type",
              },
              {
                icon: Sparkles,
                title: "AI Analysis",
                description: "Our vectors analyze what makes you uniquely you",
              },
              {
                icon: Users,
                title: "Find Your People",
                description: "Discover who's truly on your wavelength",
              },
              {
                icon: TrendingUp,
                title: "Grow Together",
                description: "Get personalized insights to become your best self",
              },
            ].map((step, index) => (
              <Card 
                key={index} 
                className="border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1 bg-card"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-primary border-none shadow-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                Ready to Find Your People?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join Wavlngth and discover authentic connections that feel natural from the start.
              </p>
              <Button 
                size="lg"
                onClick={() => setShowComingSoon(true)}
                className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6"
              >
                Get Early Access
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />

      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
            <DialogDescription className="text-center pt-4">
              <div className="space-y-4">
                <p className="text-lg">
                  We're building something special just for you.
                </p>
                <p className="text-muted-foreground">
                  Wavlngth is currently in development. Check back soon to discover your authentic connections.
                </p>
                <div className="pt-4">
                  <div className="inline-block px-4 py-2 bg-secondary rounded-full">
                    <span className="text-sm font-medium text-secondary-foreground">
                      🌊 Stay tuned
                    </span>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;
