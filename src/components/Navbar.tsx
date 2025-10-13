import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Wavlngth_Logo.png";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
  initial={false}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
  className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-transparent border-b border-transparent transition-all duration-500"
>

  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
  {/* Left: Logo */}
  <div className="flex-1 flex items-center">
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Wavlngth Logo"
        className="h-8 w-auto transition-transform duration-500 group-hover:scale-110"
      />
    </Link>
  </div>

  {/* Center: Nav Links */}
  <div className="flex-1 flex justify-center items-center gap-10">
    <Link
      to="/"
      className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
        isActive("/") ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`}
    >
      Home
    </Link>
    <Link
      to="/features"
      className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
        isActive("/features") ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`}
    >
      Features
    </Link>
    {/* <Link
      to="/vision"
      className={`text-sm tracking-wide font-medium transition-colors duration-300 ${
        isActive("/vision") ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`}
    >
      Our Vision
    </Link> */}
  </div>

  {/* Right: CTA Button */}
  <div className="flex-1 flex justify-end">
    <Button
      onClick={() => setShowComingSoon(true)}
      className="bg-gradient-primary text-primary-foreground text-sm px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,194,168,0.3)] hover:shadow-[0_0_25px_rgba(0,224,202,0.6)] transition-all duration-500 hover:scale-105"
    >
      Join Waitlist
    </Button>
  </div>
</div>

</motion.nav>


      {/* Coming Soon Dialog */}
      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
            <DialogDescription className="text-center pt-4">
              <div className="space-y-4">
                <p className="text-lg">We're building something special just for you.</p>
                <p className="text-muted-foreground">
                  Wavlngth is currently in development. Check back soon to discover your authentic connections.
                </p>
                <div className="pt-4">
                  <div className="inline-block px-4 py-2 bg-secondary rounded-full">
                    <span className="text-sm font-medium text-secondary-foreground">🌊 Stay tuned</span>
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
