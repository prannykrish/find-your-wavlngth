import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageCircle, Users2, BarChart3, Shield, Zap, Sparkles, Target, Globe, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-subtle overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">✨ Product Features</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Features Built for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Authentic Connections
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Every feature designed to help you find your people and be unapologetically yourself
            </p>
          </div>
        </div>
      </section>

      {/* Main Features - Alternating Hero Sections */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl space-y-32">
          
          {/* Feature 1 - AI Compatibility */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border-2 border-primary/30">
                  <div className="flex items-center justify-center h-64">
                    <Brain className="h-48 w-48 text-primary animate-float" />
                  </div>
                  <div className="absolute top-8 right-8 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Core Technology</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                AI-Powered Compatibility Engine
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our proprietary AI doesn't just match keywords—it understands meaning. Using semantic vector analysis, we map your personality, values, and communication style in multi-dimensional space.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Deep semantic understanding of your personality",
                  "Multi-dimensional compatibility scoring",
                  "Learns and adapts to your preferences over time",
                  "Predicts connection quality before you even talk"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <p className="text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2 - Conversations */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                <MessageCircle className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Communication</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Conversations That Click
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skip the small talk. Our platform ensures every conversation starts from a foundation of compatibility, so you can dive into topics that matter from message one.
              </p>
              <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl p-6 border border-primary/20">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex-shrink-0"></div>
                    <div className="flex-1 bg-background/80 rounded-2xl px-4 py-3">
                      <p className="text-sm text-foreground">Hey! I saw you're into indie music and philosophy too 🎵</p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1 bg-primary/20 rounded-2xl px-4 py-3 max-w-[80%]">
                      <p className="text-sm text-foreground">Yes! Have you read any Camus? His absurdism pairs perfectly with The Strokes somehow...</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-accent flex-shrink-0"></div>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-muted-foreground">✨ 94% compatibility match</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 border-2 border-accent/30">
                <div className="flex items-center justify-center h-64">
                  <MessageCircle className="h-48 w-48 text-accent animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Wavlngth Network */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20"></div>
                <Card className="relative bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 overflow-hidden">
                  <CardContent className="p-12">
                    <div className="relative h-64 flex items-center justify-center">
                      {/* Simulated network visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary animate-pulse"></div>
                      </div>
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-10 h-10 rounded-full bg-accent/60 animate-float"
                          style={{
                            left: `${20 + Math.cos(i * Math.PI / 4) * 35}%`,
                            top: `${40 + Math.sin(i * Math.PI / 4) * 35}%`,
                            animationDelay: `${i * 0.5}s`
                          }}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Users2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Network Visualization</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Your Wavlngth Universe
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                See your entire compatibility network in one beautiful, intuitive interface. Like the Marvel multiverse, visualize all your connections and discover new people who align with your wavelength.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-primary">Real-time</div>
                  <p className="text-sm text-muted-foreground">Live compatibility updates</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">360°</div>
                  <p className="text-sm text-muted-foreground">Complete network view</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Mixed Sizes */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground">Powerful features for authentic connection</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Large feature */}
            <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-accent border-none text-primary-foreground group hover:shadow-glow transition-all">
              <CardContent className="p-10 h-full flex flex-col justify-between">
                <div>
                  <BarChart3 className="h-16 w-16 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-3xl font-bold mb-4">Continuous Learning</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Our AI gets smarter with every interaction. The more you use Wavlngth, the better we understand you—providing increasingly accurate matches and personalized insights to help you grow.
                  </p>
                </div>
                <div className="pt-6">
                  <div className="text-sm opacity-75">Always improving, always learning</div>
                </div>
              </CardContent>
            </Card>

            {/* Small features */}
            <Card className="md:col-span-2 bg-card border-2 border-primary/20 hover:border-primary/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Privacy First</h3>
                <p className="text-muted-foreground">
                  Your data is encrypted and secure. We never sell your information—your authenticity is protected.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-accent/20 hover:border-accent/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Instant Matching</h3>
                <p className="text-muted-foreground">
                  No more guessing games. Know compatibility from the first interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Groups & Communities</h3>
                <p className="text-muted-foreground">
                  Create or join groups with people who share your wavelength and interests.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 bg-card border-2 border-accent/20 hover:border-accent/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Personalized Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get AI-powered advice on being more authentically you. Understand your compatibility patterns, improve communication, and achieve your dreams with guidance tailored just for you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Feature Highlight */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-br from-secondary via-secondary/80 to-background border-2 border-primary/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 md:p-16 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Lock className="h-16 w-16 text-primary" />
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Safe to Be You
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Wavlngth isn't just about finding people—it's about creating a space where you can be genuinely, unapologetically yourself without fear of judgment.
                  </p>
                  <div className="space-y-3 pt-4">
                    {[
                      "Compatibility-based matching reduces judgment",
                      "Community guidelines enforce respect",
                      "Block and report features for safety",
                      "AI moderation for harmful content"
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <p className="text-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-80 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-10"></div>
                  <Shield className="h-64 w-64 text-primary/30 animate-float" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
