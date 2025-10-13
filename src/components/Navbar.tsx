import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Wavlngth_Logo.png";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Navbar = () => {
  const location = useLocation();
  const [showComingSoon, setShowComingSoon] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="Wavlngth Logo" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-2xl font-bold text-foreground">wavlngth</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/features") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Features
              </Link>
              <Link 
                to="/vision" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive("/vision") ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Our Vision
              </Link>
            </div>
            
            <Button 
              onClick={() => setShowComingSoon(true)}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </nav>

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
    </>
  );
};

export default Navbar;
