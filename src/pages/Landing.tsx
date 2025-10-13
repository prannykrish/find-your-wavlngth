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
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden font-sans bg-gradient-to-b from-[#002C30] via-[#015C60] to-[#00A59E]">
  {/* === Ambient Glow Layers === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,240,0.12)_0%,transparent_70%)] blur-[160px]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,194,168,0.15)_0%,transparent_75%)] blur-[180px]"></div>
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
  <div className="absolute inset-0 bg-[linear-gradient(to_b,rgba(255,255,255,0.05),transparent_60%)]"></div>

  {/* === Floating Decorative Elements === */}
  <div className="absolute top-20 left-10 w-32 h-32 bg-[#00FFD1]/10 rounded-full blur-3xl animate-float z-0"></div>
  <div
    className="absolute bottom-20 right-20 w-48 h-48 bg-[#00E0BB]/10 rounded-full blur-3xl animate-float z-0"
    style={{ animationDelay: "2s" }}
  ></div>
  <div
    className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#00B7A0]/10 rounded-full blur-2xl animate-float z-0"
    style={{ animationDelay: "4s" }}
  ></div>

  {/* === Main Content === */}
  <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-10 animate-fade-in-up opacity-100">
    {/* Tagline */}
    <div className="inline-block">
      <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-[#00FFD1] border border-[#00FFD1]/30 shadow-[0_0_20px_rgba(0,255,240,0.1)]">
        <Sparkles className="h-4 w-4 text-[#00FFD1]" />
        AI-Powered Social Intelligence
      </span>
    </div>

    {/* Headline */}
    <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight drop-shadow-[0_0_25px_rgba(0,255,240,0.15)]">
      Find Your{" "}
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AFDD4] to-[#00A59E] bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_0_35px_rgba(0,255,240,0.3)]">
          Wavlngth
        </span>
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-xl md:text-3xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed">
      Stop guessing. Start connecting. Meet people who genuinely understand you — 
      no awkwardness, no ghosting, just{" "}
      <span className="text-[#00FFD1] font-medium">pure authenticity</span>.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
      <Button
        size="lg"
        onClick={() => setShowComingSoon(true)}
        className="bg-[#00FFD1] text-[#003B3B] hover:bg-[#00FFD1]/90 text-lg px-10 py-7 
        shadow-[0_0_40px_rgba(0,255,240,0.3)] hover:shadow-[0_0_60px_rgba(0,255,240,0.45)]
        transition-all transform hover:scale-105 rounded-2xl font-semibold"
      >
        Get Early Access
        <Sparkles className="ml-2 h-5 w-5" />
      </Button>

      <Button
  size="lg"
  variant="ghost" // 👈 optional, or remove variant entirely
  className="text-lg px-10 py-7 border-2 border-[#00FFD1]/40 text-white 
  bg-white/10 backdrop-blur-sm rounded-2xl shadow-[0_0_30px_rgba(0,255,240,0.15)] 
  hover:bg-white/15 hover:shadow-[0_0_45px_rgba(0,255,240,0.25)] transition-all font-semibold"
>
  Watch Demo
</Button>


    </div>
  </div>

  {/* Subtle Vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_70%,rgba(0,0,0,0.45)_100%)] pointer-events-none"></div>
</section>





      <section
  id="connection-crisis"
  className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden 
  bg-[#012A2E] text-white"
>
  {/* === Ambient Gradient Layers === */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#01383E] via-[#015E61] to-[#008A8C]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.25)_0%,transparent_65%)] blur-[160px]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,194,168,0.25)_0%,transparent_60%)] blur-[180px]" />
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
  <div className="absolute inset-0 bg-[linear-gradient(to_t,rgba(0,255,240,0.1),transparent_60%)]"></div>

  {/* === Floating Chat Bubbles === */}
  {[
    { text: "You there?", top: "15%", left: "18%" },
    { text: "It’s fine, I get it.", top: "22%", left: "78%" },
    { text: "I don’t think anyone really understands me.", top: "25%", left: "25%" },
    { text: "No worries.", top: "50%", left: "85%" },
    { text: "I’m good, just tired.", top: "68%", left: "65%" },
    { text: "Wish I could explain it.", top: "30%", left: "70%" },
    { text: "Doesn’t matter.", top: "64%", left: "20%" },
    { text: "It’s whatever.", top: "72%", left: "52%" },
    { text: "I stopped trying a while ago.", top: "80%", left: "35%" },
    { text: "They never really listen.", top: "42%", left: "10%" },
    { text: "I’m surrounded, but still alone.", top: "60%", left: "75%" },
    { text: "Maybe I’m just too much.", top: "25%", left: "55%" },
  ].map((msg, i) => (
    <div
      key={i}
      className="absolute px-4 py-2 rounded-2xl text-sm 
      bg-white/5 backdrop-blur-xl border border-teal-300/20 
      text-white/70 shadow-[0_0_25px_rgba(0,255,240,0.08)]
      animate-fade-bubble animate-float-slow max-w-[240px]"
      style={{
        top: msg.top,
        left: msg.left,
        animationDelay: `${i * 1.2}s`,
        opacity: 0.85,
      }}
    >
      {msg.text}
    </div>
  ))}

  {/* === Center Text === */}
  <div className="space-y-8 relative z-10 px-6">
    <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-snug">
      We’ve Never Been{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,240,0.35)]">
        More Connected.
      </span>
    </h2>
    <p className="text-2xl md:text-3xl text-white/70 max-w-2xl mx-auto leading-relaxed">
      Yet somehow, we’ve never felt more alone.
    </p>
  </div>

  {/* === Vignette === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.45)_100%)] pointer-events-none"></div>
</section>





{/* Section: The Connection Crisis */}
<section className="relative py-32 px-6 bg-gradient-to-b from-[#003C43] via-[#017E80] to-[#BFFFF4] overflow-hidden">
  {/* === Ambient Glow & Mist === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,255,240,0.14),transparent_70%)]"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,194,168,0.12),transparent_75%)] blur-[140px]"></div>
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
  <div className="absolute inset-0 bg-[linear-gradient(to_t,rgba(255,255,255,0.06),transparent_80%)]"></div>

  {/* === Main Container === */}
  <div className="container mx-auto max-w-6xl relative z-10 space-y-20">
    {/* === Header === */}
    <div className="text-center space-y-6">
      <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,255,240,0.2)]">
        The{" "}
        <span className="bg-gradient-to-r from-[#00FFD1] via-[#3FFFD9] to-[#00A59E] bg-clip-text text-transparent">
          Connection Crisis
        </span>
      </h2>
      <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
        We live in the most connected era in history — yet feel more misunderstood,
        isolated, and unseen than ever before.
      </p>
    </div>

    {/* === Stats Row === */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          stat: "64%",
          desc: "of young adults feel lonely often or always, despite constant connectivity.",
          source: "Harvard Graduate School of Education, 2024",
        },
        {
          stat: "3+ hrs",
          desc: "spent daily on social media, yet in-person interaction continues to decline.",
          source: "Pew Research Center, 2023",
        },
        {
          stat: "89%",
          desc: "say they curate their online presence to appear happier or more successful.",
          source: "American Psychological Association, 2024",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl 
          shadow-[0_0_25px_rgba(0,255,240,0.08)] hover:shadow-[0_0_60px_rgba(0,255,240,0.15)]
          transition-all duration-500 hover:-translate-y-1"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <div className="text-6xl md:text-7xl font-bold text-[#00FFD1] mb-4">{item.stat}</div>
          <p className="text-lg text-white/90 font-medium leading-relaxed">{item.desc}</p>
          <p className="text-xs text-white/60 italic pt-2">{item.source}</p>
        </div>
      ))}
    </div>

    {/* === Explanations Row === */}
    <div className="grid md:grid-cols-2 gap-10 pt-16">
      {[
        {
          title: "Superficial Interactions",
          text: "We scroll endlessly but rarely feel seen. Digital communication rewards brevity and appearance, not empathy or understanding.",
        },
        {
          title: "Algorithmic Isolation",
          text: "Personalization becomes confinement — we see more of what we already believe, and fewer reasons to connect beyond ourselves.",
        },
        {
          title: "Curated Selves",
          text: "Authenticity feels risky in a world of judgment. We show our highlights, hide our lows, and wonder why no one really knows us.",
        },
        {
          title: "Time Poverty",
          text: "We talk more than ever but listen less deeply. Attention is scattered, presence is rare, and genuine connection fades.",
        },
      ].map((reason, i) => (
        <div
          key={i}
          className="p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10 
          hover:border-[#00FFD1]/40 shadow-[0_0_25px_rgba(0,255,240,0.1)] 
          hover:shadow-[0_0_50px_rgba(0,255,240,0.18)] transition-all duration-500"
          style={{ animationDelay: `${i * 0.3}s` }}
        >
          <h3 className="text-2xl font-semibold text-[#00EED1] mb-3">{reason.title}</h3>
          <p className="text-lg text-white/80 leading-relaxed">{reason.text}</p>
        </div>
      ))}
    </div>
  </div>

  {/* === Enhanced Soft Bottom Mist (smooth fade into next section) === */}
  <div className="absolute bottom-0 left-0 right-0 h-72 bg-[linear-gradient(to_bottom,rgba(0,100,90,0)_0%,rgba(0,200,170,0.25)_40%,rgba(0,255,240,0.35)_70%,#C7FFF4_100%)] pointer-events-none blur-[40px]"></div>
</section>






      {/* The Solution - Asymmetric layout */}
     <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#C7FFF4] via-[#E8FFFC] to-[#F4FFFE]">
  {/* === Misty Aqua Ambient Layers === */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Top aqua mist to soften contrast with teal section above */}
    <div className="absolute top-0 left-0 right-0 h-[55%] bg-[radial-gradient(circle_at_top,rgba(0,180,160,0.35)_0%,rgba(0,255,240,0.18)_45%,transparent_90%)] blur-[160px]"></div>

    {/* Floating soft glows */}
    <div className="absolute top-[15%] left-[10%] w-[35rem] h-[35rem] bg-[#00C2A8]/10 blur-[180px] rounded-full animate-[float_14s_ease-in-out_infinite]"></div>
    <div className="absolute bottom-[8%] right-[15%] w-[30rem] h-[30rem] bg-[#4CE0CA]/10 blur-[160px] rounded-full animate-[float_16s_ease-in-out_infinite]"></div>

    {/* Subtle noise texture */}
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>
  </div>

  {/* === Main Content === */}
  <div className="relative z-10 container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4 border border-primary/20 backdrop-blur-sm">
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
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-[0_0_25px_rgba(0,194,168,0.15)]">
              1
            </div>
            <h3 className="text-3xl font-bold text-foreground">
              Take the Compatibility Quiz
            </h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed pl-15">
            Our AI-powered quiz goes deeper than personality tests. We analyze your values, communication style, interests, and what makes you uniquely you—creating a compatibility profile that actually works.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 h-48 flex items-center justify-center shadow-[0_8px_40px_rgba(0,194,168,0.08)] hover:shadow-[0_12px_50px_rgba(0,194,168,0.12)] transition-all duration-700 ease-out">
            <Brain className="h-24 w-24 text-primary animate-float" />
          </div>
        </div>
      </div>

      {/* Step 2 - Left aligned */}
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 h-48 flex items-center justify-center shadow-[0_8px_40px_rgba(0,194,168,0.08)] hover:shadow-[0_12px_50px_rgba(0,194,168,0.12)] transition-all duration-700 ease-out">
            <Sparkles
              className="h-24 w-24 text-accent animate-float"
              style={{ animationDelay: '1s' }}
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-4 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-[0_0_25px_rgba(0,194,168,0.15)]">
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
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-[0_0_25px_rgba(0,194,168,0.15)]">
              3
            </div>
            <h3 className="text-3xl font-bold text-foreground">Meet Your Wavlngth</h3>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed pl-15">
            Visualize your compatibility universe. See everyone who truly gets you in a beautiful, intuitive interface. Chat, create groups, post freely—knowing you're among people on your wavelength.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20 h-48 flex items-center justify-center shadow-[0_8px_40px_rgba(0,194,168,0.08)] hover:shadow-[0_12px_50px_rgba(0,194,168,0.12)] transition-all duration-700 ease-out">
            <Users
              className="h-24 w-24 text-primary animate-float"
              style={{ animationDelay: '2s' }}
            />
          </div>
        </div>
      </div>

      {/* Step 4 - Left aligned */}
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2 order-2 md:order-1">
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 border border-accent/20 h-48 flex items-center justify-center shadow-[0_8px_40px_rgba(0,194,168,0.08)] hover:shadow-[0_12px_50px_rgba(0,194,168,0.12)] transition-all duration-700 ease-out">
            <TrendingUp
              className="h-24 w-24 text-accent animate-float"
              style={{ animationDelay: '3s' }}
            />
          </div>
        </div>
        <div className="md:col-span-3 space-y-4 order-1 md:order-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-[0_0_25px_rgba(0,194,168,0.15)]">
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
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-[#F4FBFA] via-[#E8FFFC] to-[#F4FFFE]">
  {/* === Ambient Mist Background === */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-[15%] left-[20%] w-[40rem] h-[40rem] bg-[#00C2A8]/10 blur-[180px] rounded-full animate-[float_14s_ease-in-out_infinite]"></div>
    <div className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] bg-[#4CE0CA]/10 blur-[160px] rounded-full animate-[float_18s_ease-in-out_infinite]"></div>
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.04)_0%,transparent_70%)]"></div>
  </div>

  {/* === Main Content === */}
  <div className="relative z-10 container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        What You'll Experience
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      {/* === LIQUID GLASS HERO CARD === */}
      <Card className="md:col-span-2 relative bg-white/30 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden group transition-all duration-700 ease-out hover:shadow-[0_0_100px_rgba(0,194,168,0.25)] hover:scale-[1.02]">
        {/* Internal reflective lighting layer */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25)_0%,transparent_60%)] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,194,168,0.08)_0%,rgba(255,255,255,0.05)_100%)]"></div>
        {/* Liquid flow shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(76,224,202,0.1),transparent_70%)] animate-[flowShift_8s_ease-in-out_infinite]"></div>

        <CardContent className="p-10 relative z-10">
          <Zap className="h-16 w-16 mb-4 text-primary drop-shadow-[0_0_25px_rgba(0,194,168,0.45)] animate-float" />
          <h3 className="text-3xl font-bold mb-4 text-foreground">Instant Compatibility</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Know from the first message if someone's on your wavelength. No more wasting weeks on connections that won't work. Our AI tells you upfront—so you can focus on the people who matter.
          </p>
        </CardContent>
      </Card>

      {/* === Regular Cards === */}
      <Card className="bg-white/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-[0_0_40px_rgba(0,194,168,0.12)] hover:-translate-y-1 duration-500 ease-out">
        <CardContent className="p-8">
          <Heart className="h-12 w-12 text-primary mb-4 drop-shadow-[0_0_12px_rgba(0,194,168,0.4)]" />
          <h3 className="text-2xl font-bold mb-3 text-card-foreground">Be Yourself</h3>
          <p className="text-muted-foreground leading-relaxed">
            Stop filtering. Stop pretending. Just be you—with people who appreciate it.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white/60 backdrop-blur-xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-[0_0_40px_rgba(0,194,168,0.12)] hover:-translate-y-1 duration-500 ease-out">
        <CardContent className="p-8">
          <Shield className="h-12 w-12 text-accent mb-4 drop-shadow-[0_0_12px_rgba(76,224,202,0.4)]" />
          <h3 className="text-2xl font-bold mb-3 text-card-foreground">Safe Space</h3>
          <p className="text-muted-foreground leading-relaxed">
            Connect without fear of judgment. Everyone here values authenticity.
          </p>
        </CardContent>
      </Card>

      {/* === Large Bottom Card === */}
      <Card className="md:col-span-2 bg-white/60 backdrop-blur-xl border border-accent/10 hover:border-accent/30 transition-all hover:shadow-[0_0_60px_rgba(76,224,202,0.15)] hover:-translate-y-1 duration-500 ease-out">
        <CardContent className="p-10">
          <MessageSquare className="h-14 w-14 text-accent mb-4 drop-shadow-[0_0_16px_rgba(76,224,202,0.4)] animate-float" />
          <h3 className="text-3xl font-bold mb-4 text-card-foreground">Real Conversations</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Skip the small talk. Every conversation starts from a place of genuine compatibility. Talk about what matters, connect on what clicks, and build friendships that last.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>



      <section className="relative py-32 px-6 bg-gradient-to-b from-[#E8FFFC] via-[#F4FFFE] to-[#FBFFFE] overflow-hidden">
  {/* === Subtle Mist and Glow === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,240,0.12),transparent_70%)] blur-[120px]"></div>
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay"></div>

  {/* === Main Container === */}
  <div className="relative z-10 container mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-start">
    
    {/* === Left Column === */}
    <div className="space-y-6">
      <h2 className="text-5xl md:text-6xl font-bold text-[#013B43] leading-tight">
        Your Questions,<br />
        <span className="text-[#00BFA5]">Answered</span>
      </h2>
      <p className="text-lg text-[#014C4F]/80">
        Can’t find the answers you were looking for?<br />
        Reach out to us at{" "}
        <a
          href="mailto:hello@wavlngth.app"
          className="text-[#00C2A8] font-medium hover:underline"
        >
          hello@wavlngth.app
        </a>
      </p>
    </div>

    {/* === Right Column: Polished Accordion === */}
    <div>
      <Accordion type="single" collapsible className="divide-y divide-[#DDFCF6]/70">
        {[
          {
            q: "How does Wavlngth's compatibility matching work?",
            a: "Our AI uses semantic vector analysis to map personality traits, communication styles, and values — identifying deeper connections, not surface-level similarities.",
          },
          {
            q: "Is my data safe and private?",
            a: "Yes. All data is encrypted and never shared. You control what you share and who sees it. Privacy is a foundational principle of Wavlngth.",
          },
          {
            q: "What makes Wavlngth different from other social apps?",
            a: "Other apps prioritize engagement; Wavlngth prioritizes alignment. We measure chemistry, not clicks — creating genuine relationships over algorithms.",
          },
          {
            q: "Can I really be myself without fear of judgment?",
            a: "Absolutely. Everyone you connect with is already aligned with your wavelength — it’s a safe space for real authenticity.",
          },
          {
            q: "When will Wavlngth launch?",
            a: "We're currently in beta testing. Join our waitlist to get exclusive early access and updates before the official launch.",
          },
          {
            q: "Will there be a cost to use Wavlngth?",
            a: "There will always be a free version to help people connect authentically. Premium features enhance insight and experience, but the essence stays free.",
          },
        ].map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="py-6"
          >
            <AccordionTrigger
              className="
                text-lg font-semibold text-left text-[#013B43]
                group flex w-full items-center justify-between
                focus:outline-none focus-visible:outline-none
                transition-none select-none
                hover:no-underline
                active:no-underline
                decoration-transparent
                [&>svg]:hidden
              "
            >
              <span className="no-underline group-hover:no-underline group-active:no-underline">
                {faq.q}
              </span>
              <svg
                className="h-5 w-5 text-[#013B43] transition-transform duration-300 ease-out group-data-[state=open]:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </AccordionTrigger>

            <AccordionContent
              className="
                text-[#014C4F]/80 mt-3 text-base leading-relaxed pr-4
                transition-none
              "
            >
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
