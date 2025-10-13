import { Card, CardContent } from "@/components/ui/card";
import { Heart, Compass, Rocket, Sparkles, Users, Target, Lightbulb, Waves, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-subtle overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">💫 Our Mission</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-tight">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
              A world where authentic connection is the norm, not the exception
            </p>
          </div>
        </div>
      </section>

      {/* The Story - Narrative Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {/* Opening Statement */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-primary rounded-full"></div>
              <div className="pl-12 space-y-6 animate-fade-in">
                <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
                  We believe that <span className="font-bold text-primary">everyone deserves to be understood</span>. 
                  Not tolerated. Not accepted. <span className="italic">Understood</span>.
                </p>
              </div>
            </div>

            {/* The Problem We Saw */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 rounded-full">
                  <span className="text-sm font-semibold text-destructive">What We Saw</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground">The Loneliness Paradox</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We live in the most "connected" era in human history, yet people feel more alone than ever. 
                  Social platforms promised community but delivered comparison. They promised connection but created distance.
                </p>
              </div>
              <Card className="bg-destructive/5 border-2 border-destructive/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                      <p className="text-foreground">People hiding their true selves</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                      <p className="text-foreground">Fear of judgment everywhere</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                      <p className="text-foreground">Shallow interactions masking deep isolation</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                      <p className="text-foreground">Endless scrolling, zero fulfillment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Our Insight */}
            <div className="bg-gradient-primary rounded-3xl p-12 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 space-y-6">
                <Lightbulb className="h-16 w-16" />
                <h3 className="text-3xl md:text-4xl font-bold">The Breakthrough Insight</h3>
                <p className="text-xl leading-relaxed opacity-90 max-w-3xl">
                  The problem isn't that people are different. The problem is that we can't predict who will understand us 
                  before we open up. So we don't. We wear masks. We play it safe. We stay lonely.
                </p>
                <p className="text-xl leading-relaxed opacity-90 max-w-3xl font-semibold">
                  What if you could know, instantly, who's on your wavelength?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach - Split Visual */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We're Building It
            </h2>
            <p className="text-xl text-muted-foreground">Technology meets humanity</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">AI That Understands</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not AI that replaces human connection—AI that enhances it. Our technology predicts compatibility 
                  so you can be vulnerable without fear.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-accent/20 hover:border-accent/40 hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Community First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every feature is designed to foster genuine community. No engagement hacking, no addiction loops—
                  just real people connecting authentically.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 hover:-translate-y-2 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center">
                  <Waves className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Wavelength Matching</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Like finding your frequency on a radio, we help you tune into the people who resonate with 
                  your authentic self.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values - Creative Layout */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground">Our core values shape every decision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Large Value Card 1 */}
            <Card className="md:row-span-2 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:shadow-glow transition-all">
              <CardContent className="p-12 h-full flex flex-col justify-between">
                <div>
                  <Heart className="h-20 w-20 text-primary mb-6 animate-float" />
                  <h3 className="text-4xl font-bold mb-6 text-foreground">Authenticity First</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    We believe the world needs more real, less perfect. More vulnerable, less filtered. 
                    More human, less algorithm.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Every feature we build asks: "Does this help people be more themselves?" If the answer 
                    isn't a resounding yes, we don't build it.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Smaller Value Cards */}
            <Card className="bg-card border-2 border-primary/20 hover:border-primary/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Compass className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Understanding Through AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI isn't the enemy of humanity—it's a tool. We use it to help you understand yourself better 
                  and find people who truly get you.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-2 border-accent/20 hover:border-accent/40 hover:shadow-soft transition-all">
              <CardContent className="p-8">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-card-foreground">Continuous Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connection isn't static. We help you grow, evolve, and become the best version of yourself 
                  alongside your community.
                </p>
              </CardContent>
            </Card>

            {/* Large Value Card 2 */}
            <Card className="md:col-span-2 bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/30 hover:shadow-glow transition-all">
              <CardContent className="p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Shield className="h-16 w-16 text-accent mb-6 animate-float" style={{ animationDelay: '1s' }} />
                    <h3 className="text-3xl font-bold mb-4 text-foreground">Safe Expression</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      You should never have to choose between being yourself and being safe. We're building 
                      a platform where authenticity and safety coexist.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      "Compatibility reduces judgment",
                      "Community guidelines protect everyone",
                      "AI moderation catches harm",
                      "You control your experience"
                    ].map((point, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-accent"></div>
                        </div>
                        <p className="text-foreground font-medium">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Future - Immersive Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <Sparkles className="h-16 w-16 text-primary-foreground mx-auto mb-6 animate-float" />
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              The Future We're Building
            </h2>
          </div>

          <div className="space-y-8 text-primary-foreground">
            <p className="text-2xl md:text-3xl leading-relaxed font-light text-center max-w-4xl mx-auto">
              Imagine a world where you never have to hide who you are.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  title: "Every conversation",
                  description: "feels natural and effortless"
                },
                {
                  title: "Every friendship",
                  description: "feels meant to be"
                },
                {
                  title: "Every group",
                  description: "feels like home"
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="text-center space-y-2 animate-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <div className="text-6xl font-bold opacity-20">{i + 1}</div>
                  <h4 className="text-2xl font-bold">{item.title}</h4>
                  <p className="text-lg opacity-90">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-12 space-y-6 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-center">
                That's the future we're building at Wavlngth. A future where AI doesn't make us more 
                artificial—it makes us more <span className="font-bold">human</span>.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-center">
                Where technology helps us understand ourselves better, connect more deeply, and live more authentically.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed font-bold text-center pt-6">
                We're not just building a social network.
                <br />
                We're building a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join The Movement */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-secondary to-background border-2 border-primary/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 md:p-16 relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Be part of a community that values authenticity, understanding, and genuine connection. 
                Together, we're changing how people connect—one authentic interaction at a time.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-lg font-semibold text-primary">The movement starts with you</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
