import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageCircle, Users2, BarChart3, Shield, Zap, Sparkles, Target, Globe, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GiOrbit } from "react-icons/gi";

const Features = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6 overflow-hidden bg-[linear-gradient(to_bottom,#012A2E_0%,#015E61_60%,#00A59E_100%)]">
  {/* === Ambient Glows === */}
  <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] bg-[#00FFD1]/20 rounded-full blur-[200px] animate-float" />
  <div
    className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-[#00C2A8]/15 rounded-full blur-[180px] animate-float"
    style={{ animationDelay: '2s' }}
  />
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />

  {/* === Floating Grid Overlay === */}
  <div className="absolute inset-0 opacity-[0.05]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.25),transparent_60%)] blur-[120px] animate-pulseGlow" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-gridFloat" />
  </div>

  {/* === Content === */}
  <div className="relative z-10 container mx-auto max-w-5xl py-28">
    <div className="animate-fade-in-up space-y-10">
      <div className="inline-block px-5 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
        <span className="text-sm font-semibold text-[#00F0D0] tracking-wide">✨ Product Features</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_25px_rgba(0,255,240,0.15)] tracking-tight">
        Features Built for{' '}
        <span className="bg-gradient-to-r from-[#00FFD1] via-[#3FFFD9] to-[#00A59E] bg-clip-text text-transparent">
          Authentic Connections
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
        Every feature designed to help you find your people and be unapologetically yourself.
      </p>
    </div>
  </div>

  {/* === Smooth Blend to Features Section === */}
  <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(to_bottom,rgba(0,165,158,0)_0%,#014248_60%,#012A2E_100%)] pointer-events-none"></div>
</section>


      {/* Main Features - Alternating Hero Sections */}
     {/* === YOUR WAVLNGTH UNIVERSE === */}
<section className="relative py-40 px-6 overflow-hidden bg-gradient-to-b from-[#012A2E] via-[#015E61] to-[#00A59E]">
  {/* Ambient Mist Layers */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.15)_0%,transparent_70%)] blur-[160px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,194,168,0.15)_0%,transparent_60%)] blur-[180px]" />
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />
    <div className="absolute inset-0 bg-[linear-gradient(to_t,rgba(0,255,240,0.08),transparent_60%)]" />
  </div>

  {/* Content */}
  <div className="container mx-auto max-w-7xl relative z-10 space-y-40">
    {/* === FEATURE 1 === */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="relative order-2 md:order-1">
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_80%)] blur-[100px] opacity-30 -z-10" />
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-[0_0_40px_rgba(0,255,240,0.15)]">
          <div className="flex items-center justify-center h-64">
            <Brain className="h-48 w-48 text-[#00FFD1] animate-float" />
          </div>
        </div>
      </div>

      <div className="space-y-6 order-1 md:order-2">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/40 rounded-full text-[#00FFD1] font-semibold text-sm backdrop-blur-sm">
          <Sparkles className="h-4 w-4" />
          Core Technology
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          AI-Powered Compatibility Engine
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-xl">
          Our proprietary AI doesn’t just match keywords — it understands{" "}
          <span className="font-semibold text-white">meaning</span>. Using semantic vector analysis, we map your personality,
          values, and communication style in multi-dimensional space.
        </p>
        <ul className="space-y-3 pt-4">
          {[
            "Deep semantic understanding of your personality",
            "Multi-dimensional compatibility scoring",
            "Learns and adapts to your preferences over time",
            "Predicts connection quality before you even talk",
          ].map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90">
              <div className="w-5 h-5 rounded-full bg-[#00FFD1]/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-[#00FFD1]" />
              </div>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* === FEATURE 2 === */}
    <div className="grid md:grid-cols-2 gap-16 items-center translate-y-[-40px]">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#00E0BB]/10 border border-[#00E0BB]/40 rounded-full text-[#00E0BB] font-semibold text-sm backdrop-blur-sm">
          <MessageCircle className="h-4 w-4" />
          Communication
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Conversations That{" "}
          <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent">
            Click
          </span>
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-xl">
          Skip the small talk. Every conversation starts from real compatibility — so you can dive into topics that matter from
          the very first message.
        </p>

        <div className="relative flex items-center justify-center h-64">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#00E0BB]/20"
              style={{
                width: `${60 + i * 60}px`,
                height: `${60 + i * 60}px`,
                animation: `pulseGlow ${5 + i * 0.5}s ease-in-out infinite`,
              }}
            />
          ))}
          <MessageCircle className="relative h-24 w-24 text-[#00E0BB]" />
        </div>
      </div>

      <div className="relative order-first md:order-last">
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_80%)] blur-[100px] opacity-30 -z-10" />
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-[0_0_40px_rgba(0,255,240,0.15)]">
          <div className="flex items-center justify-center h-64">
            <MessageCircle className="h-48 w-48 text-[#00E0BB] animate-float" />
          </div>
        </div>
      </div>
    </div>

    {/* === FEATURE 3 === */}
    <div className="grid md:grid-cols-2 gap-16 items-center translate-y-[40px]">
      <div className="relative order-2 md:order-1">
        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_80%)] blur-[100px] opacity-30 -z-10" />
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-[0_0_40px_rgba(0,255,240,0.15)]">
          <div className="relative h-64 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-6 h-6 bg-[#00FFD1]/60 rounded-full animate-float"
                style={{
                  left: `${50 + Math.cos(i * 45 * (Math.PI / 180)) * 35}%`,
                  top: `${50 + Math.sin(i * 45 * (Math.PI / 180)) * 35}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-[#00FFD1] animate-pulse" />
          </div>
        </div>
      </div>

      <div className="space-y-6 order-1 md:order-2">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#00FFD1]/10 border border-[#00FFD1]/40 rounded-full text-[#00FFD1] font-semibold text-sm backdrop-blur-sm">
          <Users2 className="h-4 w-4" />
          Network Visualization
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Your Wavlngth{" "}
          <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent">
            Universe
          </span>
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-xl">
          See your entire compatibility network in one beautiful, intuitive interface. Like the Marvel multiverse, visualize all
          your connections and discover new people who align with your wavelength.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div>
            <div className="text-3xl font-bold text-[#00FFD1]">Real-time</div>
            <p className="text-sm text-white/70">Dynamic compatibility updates</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00E0BB]">360°</div>
            <p className="text-sm text-white/70">Comprehensive network view</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* === Mist Fade Transition (smooth to next) === */}
<div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,160,145,0)_0%,rgba(0,230,210,0.25)_40%,rgba(0,255,240,0.45)_70%,#C7FFF4_100%)] blur-[60px]" />
</div></section>

{/* === EVERYTHING YOU NEED (glass-mint aesthetic) === */}
<section className="relative py-32 px-6 bg-gradient-to-b from-[#C7FFF4] via-[#E8FFFC] to-[#F6FFFE] overflow-hidden">
  {/* === Top Mist Bridge (from Universe fade) === */}
<div className="absolute top-0 left-0 right-0 h-72 bg-[radial-gradient(circle_at_top,rgba(0,255,240,0.25)_0%,rgba(0,200,170,0.15)_45%,transparent_90%)] blur-[100px]" />

  {/* Mint mist and soft glow */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-0 left-0 right-0 h-[55%] bg-[radial-gradient(circle_at_top,rgba(0,255,240,0.25)_0%,rgba(0,200,170,0.15)_45%,transparent_90%)] blur-[160px]" />
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
  </div>

  <div className="container mx-auto max-w-6xl relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-[#013C43] mb-4">
        Everything You Need
      </h2>
      <p className="text-xl text-[#015E61]/80">
        Powerful features for authentic connection
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6">
      {[
        { icon: <BarChart3 className="h-10 w-10 text-[#00C2A8]" />, title: "Continuous Learning", desc: "Our AI evolves with you — understanding your habits and communication style to deliver ever more accurate matches." },
        { icon: <Shield className="h-10 w-10 text-[#00FFD1]" />, title: "Privacy First", desc: "Your data is encrypted and never sold. You stay in control of what you share and who sees it." },
        { icon: <Zap className="h-10 w-10 text-[#00E0BB]" />, title: "Instant Matching", desc: "See compatibility instantly — no swiping, no guessing, just real chemistry from the start." },
        { icon: <Target className="h-10 w-10 text-[#00FFD1]" />, title: "Groups & Communities", desc: "Find people who share your wavelength — connect over passions, values, and life goals." },
        { icon: <Globe className="h-10 w-10 text-[#00E0BB]" />, title: "Personalized Insights", desc: "Get AI-powered feedback on communication and connection patterns unique to you." },
        { icon: <GiOrbit className="h-10 w-10 text-[#00A59E]" />, title: "Adaptive Chemistry", desc: "Your compatibility model adapts as you grow — reflecting how your wavelength evolves." },
      ].map((item, i) => (
        <Card
          key={i}
          className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl hover:bg-white/40 hover:shadow-[0_0_25px_rgba(0,255,240,0.15)] transition-all"
        >
          <CardContent className="p-8 flex flex-col justify-between h-full text-[#013C43]">
            <div>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#015E61]/80 leading-relaxed">{item.desc}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

  {/* Fade to white for next section */}
  <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,#FFFFFF_100%)] pointer-events-none" />
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
