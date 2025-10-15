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
<section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 overflow-hidden bg-[linear-gradient(to_bottom,#012A2E_0%,#015E61_60%,#00A59E_100%)]">
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
    <div className="animate-fade-in-up space-y-8">
      <p className="text-sm font-semibold text-[#00F0D0]/80 tracking-[0.25em] uppercase">
        built to maximize
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_25px_rgba(0,255,240,0.15)] tracking-tight">
        Features Built for{' '}
        <span className="bg-gradient-to-r from-[#00FFD1] via-[#3FFFD9] to-[#00A59E] bg-clip-text text-transparent">
          Authentic Connections
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
        Every tool in Wavlngth is built to help you find real resonance - no filters, no algorithms, just genuine connection.
      </p>
    </div>
  </div>

  {/* === Smooth Blend to Next Section === */}
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
    <div className="container mx-auto max-w-7xl relative z-10 space-y-40">
  {/* === FEATURE 1 === */}
  <div className="grid md:grid-cols-2 gap-16 items-center">
    {/* === Left Visual (Animated Canvas) === */}
    <div className="relative order-2 md:order-1">
      {/* Soft Ambient Glow */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.25),transparent_80%)] blur-[100px] opacity-30 -z-10" />

      {/* Animated Abstract Grid */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(0,255,240,0.15)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,209,0.15)_1px,transparent_1px),linear-gradient(rgba(0,255,209,0.15)_1px,transparent_1px)] bg-[length:40px_40px] animate-slow-pan opacity-30" />

        {/* Floating Nodes Animation */}
        <div className="relative flex items-center justify-center h-64">
  {/* Outer ring */}
  <div className="absolute w-56 h-56 rounded-full border border-[#00FFD1]/20 animate-pulseGlow"></div>
  {/* Middle ring */}
  <div className="absolute w-36 h-36 rounded-full border border-[#00FFD1]/30 animate-pulseGlow delay-1000"></div>
  {/* Center glow */}
  <div className="absolute w-16 h-16 rounded-full bg-[#00FFD1]/20 blur-xl animate-float"></div>

  {/* Orbiting nodes (1 per ring, opposite directions) */}
  <div className="absolute w-2 h-2 bg-[#00FFD1] rounded-full animate-orbit-clockwise" />
  <div className="absolute w-2 h-2 bg-[#00FFD1] rounded-full animate-orbit-counter" />
</div>

      </div>
    </div>

    {/* === Right Text === */}
    <div className="space-y-6 order-1 md:order-2">
      <p className="text-sm font-semibold text-[#00FFD1]/80 tracking-[0.25em] uppercase">
        Core Technology
      </p>

      <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        AI-Powered Compatibility Engine
      </h2>

      <p className="text-lg text-white/80 leading-relaxed max-w-xl">
        Our system doesn’t just match keywords - it understands{" "}
        <span className="font-semibold text-white">meaning</span>. Using semantic vector analysis, we map your
        personality, values, and communication style in multi-dimensional space.
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
</div>


    {/* === FEATURE 2 === */}
    <div className="grid md:grid-cols-2 gap-16 items-center translate-y-[-40px]">
  {/* === LEFT TEXT SIDE === */}
  <div className="space-y-6">
    <p className="text-sm font-semibold text-[#00FFD1]/80 tracking-[0.25em] uppercase">
      Communication
    </p>

    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
      Conversations That{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent">
        Click
      </span>
    </h2>

    <p className="text-lg text-white/80 leading-relaxed max-w-xl">
      Skip the small talk. Every conversation starts from real compatibility - so you can dive into topics that matter from
      the very first message.
    </p>

    {/* === Bullet Points === */}
    <ul className="space-y-3 pt-4">
      {[
        "Every message feels natural and easy.",
        "Find people who just get your humor and energy.",
        "Conversations deepen effortlessly over time.",
        "You always leave chats feeling lighter, not drained."
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

  {/* === RIGHT SIDE VISUAL === */}
  <div className="relative order-first md:order-last">
  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(0,255,240,0.15)] overflow-hidden min-h-[600px] md:min-h-[400px] flex items-center justify-center">
    {/* Subtle grid background */}
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,209,0.08)_1px,transparent_1px),linear-gradient(rgba(0,255,209,0.08)_1px,transparent_1px)] bg-[length:60px_60px] animate-grid-pan opacity-15"></div>

    {/* Floating Positive Chat Bubbles */}
    {/* Floating Positive Chat Bubbles (manually positioned) */}
{[
  { text: "That’s awesome!", top: "23%", left: "68%" },
  { text: "You make me laugh 😂", top: "10%", left: "45%" },
  { text: "I’ve never clicked this fast.", top: "35%", left: "15%" },
  { text: "This feels real.", top: "55%", left: "52%" },
  { text: "I totally agree.", top: "42%", left: "70%" },
  { text: "You get it.", top: "80%", left: "35%" },
  { text: "This is fun!", top: "60%", left: "15%" },
  { text: "We should talk more.", top: "75%", left: "60%" },
  { text: "I love this vibe 💫", top: "10%", left: "10%" },
].map((msg, i) => (
  <div
    key={i}
    className="absolute px-4 py-2 rounded-full bg-[#00FFD1]/10 border border-[#00FFD1]/20 text-[#00FFD1]/80 text-sm font-medium animate-bubble-float"
    style={{
      top: msg.top,
      left: msg.left,
      animationDelay: `${i * 1.2}s`,
      animationDuration: `${12 + Math.random() * 4}s`,
      opacity: 0.9,
    }}
  >
    {msg.text}
  </div>
))}

    {/* Cinematic edge fade */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#002D29]/30 via-transparent to-[#002D29]/30 pointer-events-none rounded-3xl"></div>
  </div>
</div>


</div>


    {/* === FEATURE 3 === */}
    <div className="grid md:grid-cols-2 gap-16 items-center translate-y-[40px]">
  {/* === LEFT VISUAL === */}
  <div className="relative order-2 md:order-1">
    {/* Ambient Glow */}
    <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_80%)] blur-[100px] opacity-30 -z-10" />

    {/* Animated Node Network */}
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_60px_rgba(0,255,240,0.15)] overflow-hidden">
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

  {/* === RIGHT TEXT SIDE === */}
  <div className="space-y-6 order-1 md:order-2">
    {/* Section Label */}
    <p className="text-sm font-semibold text-[#00FFD1]/80 tracking-[0.25em] uppercase">
      Network Visualization
    </p>

    {/* Heading */}
    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
      Your Wavlngth{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent">
        Universe
      </span>
    </h2>

    {/* Description */}
    <p className="text-lg text-white/80 leading-relaxed max-w-xl">
      See your entire compatibility network in one beautiful, intuitive interface. Visualize all
      your connections and discover new people who align with your wavlngth.
    </p>

    {/* Subtext metrics */}
    <ul className="space-y-3 pt-4">
      <li className="flex items-start gap-3 text-white/90">
        <div className="w-5 h-5 rounded-full bg-[#00FFD1]/20 flex items-center justify-center mt-0.5">
          <div className="w-2 h-2 rounded-full bg-[#00FFD1]" />
        </div>
        Real-time dynamic compatibility updates.
      </li>
      <li className="flex items-start gap-3 text-white/90">
        <div className="w-5 h-5 rounded-full bg-[#00FFD1]/20 flex items-center justify-center mt-0.5">
          <div className="w-2 h-2 rounded-full bg-[#00FFD1]" />
        </div>
        A 360° network view to explore how every connection interacts.
      </li>
    </ul>
  </div>
</div>


  </div>

  {/* === Mist Fade Transition (smooth to next) === */}
<div className="absolute bottom-0 left-0 right-0 h-96 pointer-events-none">
  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,160,145,0)_0%,rgba(0,230,210,0.25)_40%,rgba(0,255,240,0.45)_70%,#C7FFF4_100%)] blur-[60px]" />
</div></section>

{/* === EVERYTHING YOU NEED (glass-mint aesthetic) === */}
<section className="relative py-32 px-6 bg-gradient-to-b from-[#A3F5E5] via-[#CFFDF5] to-[#E8FFFC] overflow-hidden">
  {/* === Subtle Ambient Glow === */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-0 left-0 right-0 h-[60%] bg-[radial-gradient(circle_at_top,rgba(0,255,240,0.2)_0%,rgba(0,200,170,0.12)_40%,transparent_90%)] blur-[140px]" />
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay"></div>
  </div>

  <div className="container mx-auto max-w-6xl relative z-10">
    {/* === Header === */}
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-bold text-[#013C43] mb-4">
        Everything You Need
      </h2>
      <p className="text-xl text-[#015E61]/80">
        Powerful features for authentic connection
      </p>
    </div>

    {/* === Feature Grid === */}
    <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8">
      {[
        { icon: <BarChart3 className="h-10 w-10 text-[#00C2A8]" />, title: "Continuous Learning", desc: "Our AI evolves with you, understanding your habits and communication style to deliver ever more accurate matches." },
        { icon: <Shield className="h-10 w-10 text-[#00FFD1]" />, title: "Privacy First", desc: "Your data is encrypted and never sold. You stay in control of what you share and who sees it." },
        { icon: <Zap className="h-10 w-10 text-[#00E0BB]" />, title: "Instant Matching", desc: "See compatibility instantly. No swiping, no guessing, just real chemistry from the start." },
        { icon: <Target className="h-10 w-10 text-[#00FFD1]" />, title: "Groups & Communities", desc: "Find people who share your wavlngth - connect over passions, values, and life goals." },
        { icon: <Globe className="h-10 w-10 text-[#00E0BB]" />, title: "Personalized Insights", desc: "Get AI-powered feedback on communication and connection patterns unique to you." },
        { icon: <GiOrbit className="h-10 w-10 text-[#00A59E]" />, title: "Adaptive Chemistry", desc: "Your compatibility model adapts as you grow, reflecting how your wavlngth evolves." },
      ].map((item, i) => (
        <Card
          key={i}
          className="bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-xl 
                     border border-white/40 rounded-2xl 
                     hover:border-[#00FFD1]/30 hover:shadow-[0_0_40px_rgba(0,255,240,0.15)]
                     transition-all duration-500 group"
        >
          <CardContent className="p-8 flex flex-col justify-between h-full text-[#013C43]">
            <div>
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#015E61]/90 leading-relaxed">{item.desc}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

  {/* === Gentle Bottom Fade === */}
  <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,#FFFFFF_100%)] pointer-events-none" />
</section>




      {/* Final Feature Highlight */}
      <section className="py-28 px-6 bg-gradient-to-b from-[#E8FFFC] via-[#F4FFFE] to-[#FFFFFF] overflow-hidden">
  <div className="container mx-auto max-w-6xl">
    <Card className="bg-white/60 backdrop-blur-xl border border-[#00C2A8]/20 rounded-3xl shadow-[0_0_30px_rgba(0,194,168,0.05)] overflow-hidden relative">
      
      {/* === Ambient Glow Layers === */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-56 h-56 bg-[#00FFD1]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00C2A8]/10 blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <CardContent className="relative z-10 p-12 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* === Left Text Content === */}
          <div className="space-y-6 animate-fade-up opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            <Lock className="h-14 w-14 text-[#00C2A8]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#013C43]">
              Safe to Be You
            </h2>
            <p className="text-lg text-[#014B4F]/90 leading-relaxed max-w-xl">
              Wavlngth isn't just about finding people. It’s about creating a space
              where you can be genuinely, unapologetically yourself without fear of judgment.
            </p>

            <ul className="space-y-3 pt-4">
              {[
                "Compatibility-based matching reduces judgment",
                "Community guidelines enforce respect",
                "Block and report features for safety",
                "AI moderation for harmful content",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-2 h-2 rounded-full bg-[#00C2A8]" />
                  <p className="text-[#013C43]">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* === Right Visual: Safe Pulse Animation === */}
          <div className="relative flex items-center justify-center h-[20rem]">
            {/* Core circle */}
            <div className="absolute w-8 h-8 bg-[#00FFD1]/20 rounded-full blur-[2px]" />
            {/* Expanding rings */}
            <div className="absolute w-8 h-8 rounded-full border border-[#00FFD1]/40 animate-pulse-ring"></div>
            <div className="absolute w-8 h-8 rounded-full border border-[#00FFD1]/30 animate-pulse-ring [animation-delay:1s]"></div>
            <div className="absolute w-8 h-8 rounded-full border border-[#00FFD1]/20 animate-pulse-ring [animation-delay:2s]"></div>
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
