import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Users, Sparkles, TrendingUp, Zap, Heart, Shield, MessageSquare, X, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Landing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with floating elements */}
      <section className="relative pt-32 pb-32 px-6 bg-gradient-subtle overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-sm font-medium text-secondary-foreground border border-primary/20 shadow-soft">
                <Sparkles className="h-4 w-4 text-primary" />
                AI-Powered Social Intelligence
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
              Find Your{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Wavlngth
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                  <path d="M0 6C50 2 100 10 150 6C200 2 250 10 300 6" stroke="hsl(174, 62%, 47%)" strokeWidth="3" strokeLinecap="round" className="animate-wave"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light">
              Stop guessing. Start connecting. Meet people who genuinely understand you—no awkwardness, no ghosting, just{" "}
              <span className="text-primary font-medium">pure authenticity</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                size="lg" 
                onClick={() => setShowComingSoon(true)}
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 shadow-soft hover:shadow-glow transition-all transform hover:scale-105 rounded-2xl"
              >
                Get Early Access
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-7 border-2 border-primary/30 text-foreground hover:bg-secondary rounded-2xl backdrop-blur-sm"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem - Split layout with visual contrast */}
      <section className="py-24 px-6 bg-background relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-1 bg-destructive/10 rounded-full">
                <span className="text-sm font-semibold text-destructive">The Problem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Social Media Is Broken
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  We swipe endlessly, match randomly, and hope for the best. The result? Shallow connections, awkward conversations, and constant ghosting.
                </p>
                <p className="leading-relaxed">
                  You can't be yourself because you're afraid of judgment. You waste time on people who don't "get" you. And when it doesn't work out, you're left wondering if something's wrong with you.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-3xl p-8 border border-destructive/20">
                <div className="space-y-6">
                  {[
                    { icon: X, text: "70% of connections lead nowhere", color: "text-destructive" },
                    { icon: X, text: "Endless small talk with strangers", color: "text-destructive" },
                    { icon: X, text: "Fear of being your authentic self", color: "text-destructive" },
                    { icon: X, text: "No way to predict compatibility", color: "text-destructive" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                      </div>
                      <p className="text-lg text-foreground font-medium pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Creative number display */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Connection Crisis
            </h2>
            <p className="text-xl text-muted-foreground">Real problems need real solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "64%", label: "of people feel lonelier than ever", subtext: "despite social media" },
              { number: "3 hrs", label: "wasted daily on apps", subtext: "with no meaningful connections" },
              { number: "89%", label: "hide their true selves online", subtext: "fear of judgment" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="relative group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                <Card className="relative bg-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
                      {stat.number}
                    </div>
                    <p className="text-lg font-semibold text-foreground mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground italic">{stat.subtext}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - Asymmetric layout */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">The Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How Wavlngth Changes Everything
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Predictive intelligence meets human connection
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 - Right aligned */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Take the Compatibility Quiz</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                  Our AI-powered quiz goes deeper than personality tests. We analyze your values, communication style, interests, and what makes you uniquely you—creating a compatibility profile that actually works.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 h-48 flex items-center justify-center">
                  <Brain className="h-24 w-24 text-primary animate-float" />
                </div>
              </div>
            </div>

            {/* Step 2 - Left aligned */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 h-48 flex items-center justify-center">
                  <Sparkles className="h-24 w-24 text-accent animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              <div className="md:col-span-3 space-y-4 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">AI Semantic Analysis</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                  Using advanced vector analysis, our AI understands compatibility at a molecular level. We don't just match keywords—we understand meaning, context, and the nuances that make connections click.
                </p>
              </div>
            </div>

            {/* Step 3 - Right aligned */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Meet Your Wavlngth</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                  Visualize your compatibility universe. See everyone who truly gets you in a beautiful, intuitive interface. Chat, create groups, post freely—knowing you're among people on your wavelength.
                </p>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 h-48 flex items-center justify-center">
                  <Users className="h-24 w-24 text-primary animate-float" style={{ animationDelay: '2s' }} />
                </div>
              </div>
            </div>

            {/* Step 4 - Left aligned */}
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2 order-2 md:order-1">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 h-48 flex items-center justify-center">
                  <TrendingUp className="h-24 w-24 text-accent animate-float" style={{ animationDelay: '3s' }} />
                </div>
              </div>
              <div className="md:col-span-3 space-y-4 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    4
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Grow Authentically</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pl-15">
                  The platform learns about you continuously. Get personalized insights on being your authentic self, achieving your dreams, and building deeper connections with every interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - Bento grid style */}
      <section className="py-24 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What You'll Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Large card spanning 2 columns */}
            <Card className="md:col-span-2 bg-gradient-primary border-none text-primary-foreground overflow-hidden relative group">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
              <CardContent className="p-10 relative z-10">
                <Zap className="h-16 w-16 mb-4" />
                <h3 className="text-3xl font-bold mb-4">Instant Compatibility</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  Know from the first message if someone's on your wavelength. No more wasting weeks on connections that won't work. Our AI tells you upfront—so you can focus on the people who matter.
                </p>
              </CardContent>
            </Card>

            {/* Regular cards */}
            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-soft">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Be Yourself</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stop filtering. Stop pretending. Just be you—with people who appreciate it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-soft">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Safe Space</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect without fear of judgment. Everyone here values authenticity.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-card border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-soft">
              <CardContent className="p-10">
                <MessageSquare className="h-14 w-14 text-accent mb-4" />
                <h3 className="text-3xl font-bold mb-4 text-card-foreground">Real Conversations</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Skip the small talk. Every conversation starts from a place of genuine compatibility. Talk about what matters, connect on what clicks, and build friendships that last.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Questions? We've Got Answers
            </h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about Wavlngth</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "How does Wavlngth's compatibility matching work?",
                a: "We use advanced AI and semantic vector analysis to understand not just what you say, but what you mean. Our quiz analyzes your values, communication style, interests, and personality traits at a deep level. Then, our algorithm compares these vectors to find people who naturally align with you—creating matches based on genuine compatibility, not superficial traits."
              },
              {
                q: "Is my data safe and private?",
                a: "Absolutely. Your privacy is our top priority. All data is encrypted, and we never sell your information. The AI analysis happens securely, and you control exactly what information you share with other users. Your quiz results and compatibility insights are for you alone."
              },
              {
                q: "What makes Wavlngth different from other social apps?",
                a: "Most apps are built for engagement, not connection. They want you scrolling, swiping, and staying on the platform. Wavlngth is different—we're built for authentic connections. Our AI predicts compatibility before you even talk, so you can be yourself from day one. No algorithms designed to keep you lonely, just technology designed to help you find your people."
              },
              {
                q: "Can I really be myself without fear of judgment?",
                a: "Yes! That's the whole point. Because everyone on Wavlngth is pre-screened for compatibility, you know the people you're connecting with are on your wavelength. They get you, understand your sense of humor, share your values, and appreciate your quirks. It's a judgment-free zone because everyone's already aligned."
              },
              {
                q: "When will Wavlngth launch?",
                a: "We're currently in development and building something truly special. Join our waitlist to get early access and be among the first to experience authentic connection. We'll keep you updated on our progress and give you exclusive early-bird benefits."
              },
              {
                q: "Will there be a cost to use Wavlngth?",
                a: "We're still finalizing our model, but our core mission is to make authentic connection accessible. There will always be a free tier that lets you experience the magic of finding your wavelength. Premium features will enhance the experience but won't gate genuine connection."
              },
            ].map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border hover:border-primary/40 rounded-2xl px-6 transition-all bg-card"
              >
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA - Bold and memorable */}
      <section className="py-32 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Your People Are Waiting
            </h2>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
              Stop settling for shallow connections. Find people who truly understand you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg" 
                onClick={() => setShowComingSoon(true)}
                className="bg-background text-primary hover:bg-background/90 text-xl px-12 py-8 shadow-glow transform hover:scale-105 transition-all rounded-2xl font-semibold"
              >
                Join the Movement
                <Check className="ml-2 h-6 w-6" />
              </Button>
            </div>

            <p className="text-primary-foreground/80 text-sm pt-4">
              ✨ Be among the first to experience authentic connection
            </p>
          </div>
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
