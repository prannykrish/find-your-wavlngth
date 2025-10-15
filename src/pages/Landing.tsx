import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Users, Sparkles, TrendingUp, Zap, Heart, Shield, MessageSquare, X, Check } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FiZap, FiMessageCircle, FiSmile, FiShield, FiTrendingUp, FiStar, FiActivity, FiEye, FiUsers, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";





const Landing = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const orbRef = useRef<HTMLDivElement | null>(null);


  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section with floating elements */}
<section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden font-sans bg-gradient-to-b from-[#002C30] via-[#016D70] to-[#008C8C]">
  {/* === Ambient Glow Layers === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,240,0.12)_0%,transparent_70%)] blur-[160px]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,194,168,0.15)_0%,transparent_75%)] blur-[180px]" />
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay" />
  <div className="absolute inset-0 bg-[linear-gradient(to_b,rgba(255,255,255,0.05),transparent_60%)]" />

  {/* === Floating Decorative Elements === */}
  <div className="absolute top-20 left-10 w-32 h-32 bg-[#00FFD1]/10 rounded-full blur-3xl animate-float z-0" />
  <div
    className="absolute bottom-20 right-20 w-48 h-48 bg-[#00E0BB]/10 rounded-full blur-3xl animate-float z-0"
    style={{ animationDelay: "2s" }}
  />
  <div
    className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#00B7A0]/10 rounded-full blur-2xl animate-float z-0"
    style={{ animationDelay: "4s" }}
  />

  {/* === Main Content (Centered) === */}
  <div className="container mx-auto max-w-6xl relative z-10 text-center space-y-6 md:space-y-8 animate-fade-in-up opacity-100">
    
    {/* Subtle Micro-Tagline */}
    <p className="text-sm tracking-widest text-white/60 uppercase font-medium">
      powered by predictive intelligence
    </p>

    {/* Headline */}
    <h1 className="text-[4rem] md:text-[5.5rem] font-extrabold text-white leading-[1.05] tracking-tight max-w-3xl mx-auto">
      Find your{" "}
      <span className="text-[#00FFD1] font-semibold drop-shadow-[0_0_25px_rgba(0,255,240,0.25)]">
        Wavlngth
      </span>
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
      Stop guessing who you’ll click with. Meet people who just{" "}
      <span className="text-[#00FFD1] font-medium">get you</span> - no awkward intros,
      no filters, just real connection.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
      <Button
        size="lg"
        onClick={() => setShowComingSoon(true)}
        className="bg-[#00FFD1] text-[#003B3B] text-base px-8 py-5 rounded-xl font-semibold 
        shadow-[0_0_30px_rgba(0,255,240,0.25)] hover:shadow-[0_0_45px_rgba(0,255,240,0.4)] 
        transition-all duration-300 hover:scale-105"
      >
        Get Early Access
      </Button>

      <Button
  asChild
  size="lg"
  className="text-base px-8 py-5 border border-[#00FFD1]/40 text-white 
  bg-white/10 backdrop-blur-sm rounded-xl shadow-[0_0_25px_rgba(0,255,240,0.15)] 
  hover:bg-white/15 hover:shadow-[0_0_40px_rgba(0,255,240,0.25)] transition-all duration-300"
>
  <Link to="/features">
    Learn More
  </Link>
</Button>
    </div>
  </div>

  {/* Subtle Vignette */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_70%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
</section>



      <section
  id="connection-crisis"
  className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden 
  bg-gradient-to-b from-[#008C8C] via-[#015E61] to-[#012A2E] text-white"
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
    // { text: "I don’t think anyone really understands me.", top: "25%", left: "25%" },
    { text: "No worries.", top: "55%", left: "85%" },
    { text: "I’m good, just tired.", top: "68%", left: "65%" },
    { text: "Wish I could explain it.", top: "30%", left: "70%" },
    { text: "Doesn’t matter.", top: "64%", left: "20%" },
    { text: "It’s whatever.", top: "72%", left: "52%" },
    { text: "I stopped trying a while ago.", top: "80%", left: "35%" },
    { text: "I don’t think anyone really understands me.", top: "30%", left: "10%" },
    { text: "I’m surrounded, but still alone.", top: "80%", left: "75%" },
    { text: "Maybe I’m just too much.", top: "25%", left: "55%" },
    // === Additional atmospheric bubbles ===
    { text: "It’s not that deep.", top: "12%", left: "60%" },
    { text: "I don’t want to bother anyone.", top: "20%", left: "40%" },
    // { text: "We used to talk more.", top: "65%", left: "30%" },
    { text: "Everything’s fine.", top: "78%", left: "15%" },
    { text: "Just busy, you know?", top: "65%", left: "80%" },
    // { text: "Maybe I care too much.", top: "30%", left: "50%" },
  ].map((msg, i) => (
    <div
      key={i}
      className="absolute px-4 py-2 rounded-2xl text-sm 
      bg-white/5 backdrop-blur-xl border border-teal-300/20 
      text-white/75 shadow-[0_0_25px_rgba(0,255,240,0.08)]
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
    <h2 className="text-[3.5rem] md:text-[5rem] font-display font-bold tracking-tight leading-[1.05]">
      We’ve Never Been{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AE7C4] to-[#00A59E] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,240,0.35)]">
        More Connected.
      </span>
    </h2>
    <p className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
      Yet somehow, we’ve never felt more alone.
    </p>
  </div>

  {/* === Vignette === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.45)_100%)] pointer-events-none"></div>
</section>



{/* Section: The Connection Crisis */}
<section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#002C30] via-[#014A50] to-[#00A59E] text-white px-8 py-28">
  {/* === Ambient Mist & Noise === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.06)_0%,transparent_75%)] blur-[160px]" />
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />

  {/* === Title === */}
  <div className="relative z-10 text-center mb-24">
    <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,255,240,0.15)] mb-4">
      The{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AFCD3] to-[#00A59E] bg-clip-text text-transparent">
        Connection Crisis
      </span>
    </h2>
    <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
      The world’s most connected generation is also its loneliest.  
      Technology connects us, but empathy hasn’t kept up.
    </p>
  </div>

  {/* === Main Grid === */}
  <div className="relative z-10 container mx-auto max-w-6xl grid md:grid-cols-2 gap-20 items-center">
    {/* === Left Column (Stats) === */}
    <div className="space-y-20">
      {[
        {
          stat: "64%",
          desc: "of young adults feel lonely - even while constantly connected.",
          cite: "Harvard Graduate School of Education, 2024",
        },
        {
          stat: "3+ hrs",
          desc: "spent daily on social media - while real interaction declines.",
          cite: "Pew Research Center, 2023",
        },
        {
          stat: "89%",
          desc: "curate their presence to appear happier or more successful.",
          cite: "American Psychological Association, 2024",
        },
      ].map((item, i) => (
        <div key={i} className="relative pl-6">
          {/* Vertical connector line */}
          {i > 0 && (
            <div className="absolute left-0 top-[-80px] h-[80px] w-[1.5px] bg-gradient-to-b from-transparent via-[#00FFD1]/30 to-transparent"></div>
          )}
          <div className="flex flex-col">
            <h2 className="text-6xl md:text-7xl font-extrabold text-[#00EAD1] drop-shadow-[0_0_20px_rgba(0,255,240,0.15)]">
              {item.stat}
            </h2>
            <p className="text-lg text-white/80 mt-3 max-w-sm leading-relaxed">
              {item.desc}
            </p>
            <p className="text-xs italic text-white/50 mt-2">{item.cite}</p>
          </div>
        </div>
      ))}
    </div>

    {/* === Right Column (2x2 Grid, Equal Cards) === */}
    {/* === Right Column (Reasons) — SHAPE UPDATED ONLY === */}
{/* === Right Column (Unified Insight Block) === */}
<div className="relative flex flex-col justify-center">
  <div
    className="relative p-10 rounded-[28px] bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl
               shadow-[0_18px_40px_rgba(0,0,0,0.25)]
               [box-shadow:_inset_0_1px_0_rgba(255,255,255,0.06)]
               hover:border-[#00FFD1]/30 transition-all duration-500 max-w-xl mx-auto"
  >
    {/* Gradient border ring */}
    <div className="pointer-events-none absolute -inset-[1px] rounded-[28px]
                    bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_100%)]
                    opacity-70"></div>

    <h3 className="relative text-3xl md:text-4xl font-semibold text-[#00EED1] mb-6 text-center">
      The Hidden Costs of Digital Connection
    </h3>

    <p className="relative text-white/80 text-center text-lg leading-relaxed max-w-md mx-auto mb-8">
      Every tap and scroll feels social, but beneath the surface lies a growing sense
      of isolation, self-curation, and time scarcity. We’re more connected than ever,
      yet less understood.
    </p>

    <div className="relative flex flex-wrap justify-center gap-4 text-sm md:text-base">
      {[
        "Superficial Interactions",
        "Algorithmic Isolation",
        "Curated Selves",
        "Time Poverty",
      ].map((tag, i) => (
        <span
          key={i}
          className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1]
                     hover:border-[#00FFD1]/40 hover:bg-white/[0.1]
                     text-white/80 font-medium transition-all duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
</div>


  </div>

  {/* === Subtle Bottom Mist === */}
  <div className="absolute bottom-0 left-0 right-0 h-64 bg-[linear-gradient(to_bottom,rgba(0,80,70,0)_0%,rgba(0,255,240,0.1)_40%,rgba(200,255,240,0.25)_100%)] blur-[60px]" />
</section>



      {/* The Solution - Asymmetric layout */}
     {/* ===================================================== */}
{/* SECTION 1 — How Wavlngth Changes Everything */}
{/* ===================================================== */}

<section className="relative min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#007D78] via-[#00A89F] to-[#B4FFF1] text-[#E8FFFC] px-6">
  {/* === Subtle Gradient Backdrop === */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,240,0.08)_0%,transparent_80%)] blur-[160px]" />
  <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.04] mix-blend-overlay" />

  {/* === Header === */}
  <div className="relative z-10 text-center mb-20">
    <p className="uppercase tracking-widest text-sm font-semibold text-[#00FFD1]/70 mb-3">
      Powered by Resonance
    </p>
    <h2 className="text-5xl md:text-6xl font-bold mb-5 text-white">
      How{" "}
      <span className="bg-gradient-to-r from-[#00FFD1] via-[#3AFDD4] to-[#00A59E] bg-clip-text text-transparent">
        Wavlngth
      </span>{" "}
      Changes Everything
    </h2>
    <p className="text-lg text-white/80 max-w-2xl mx-auto">
      Connection isn’t random - it’s resonance. Wavlngth visualizes human understanding as energy flowing through shared frequency.
    </p>
  </div>

  {/* === Connection Line Background === */}
  <div className="absolute top-[58%] left-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-[#00FFD1]/40 to-transparent -translate-x-1/2 rounded-full" />

  {/* === Pillars of Wavlngth === */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl">
    {[
      {
        title: "Discover Your Frequency",
        text: "Map how you think, feel, and communicate through your unique compatibility spectrum.",
      },
      {
        title: "Find True Resonance",
        text: "Connect with people whose thoughts and emotions harmonize naturally with yours.",
      },
      {
        title: "Experience Authentic Connection",
        text: "Meaningful bonds emerge - not from swipes or algorithms, but understanding.",
      },
      {
        title: "Grow Together",
        text: "Your wavlngth strengthens as you interact - deepening trust, empathy, and growth.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,240,0.15)] hover:-translate-y-1"
      >
        <h3 className="text-2xl font-semibold text-[#00FFD1] mb-3">{item.title}</h3>
        <p className="text-white/80 leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
</section>


{/* ===================================================== */}
{/* SECTION 2 — What You’ll Experience */}
{/* ===================================================== */}

<section className="relative py-28 px-6 bg-gradient-to-b from-[#74F8E2] via-[#B8FFF3] to-[#E6FFFA] overflow-hidden">
  {/* === Ambient Background === */}
  <div className="absolute inset-0">
    <div className="absolute top-[25%] left-[10%] w-[40rem] h-[40rem] bg-[#00C2A8]/20 blur-[160px] rounded-full" />
    <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-[#3AE7C4]/15 blur-[140px] rounded-full" />
    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay" />
  </div>

  {/* === Heading === */}
  <div className="relative z-10 text-center mb-20">
    <h2 className="text-5xl font-bold text-[#013C43] mb-4">What You’ll Experience</h2>
    <p className="text-[#014B4F]/80 text-lg">
      Every feature designed for authenticity, not algorithms.
    </p>
  </div>

  {/* === Grid === */}
  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {[
      {
        icon: <FiStar className="text-3xl text-[#00C2A8]" />,
        title: "Meaning Over Metrics",
        text: "No likes or numbers - just genuine connection distilled to its purest form.",
      },
      {
        icon: <FiEye className="text-3xl text-[#00C2A8]" />,
        title: "Instant Clarity",
        text: "Know right away if someone’s truly on your wavlngth - no wasted effort, only real connection.",
      },
      {
        icon: <FiHeart className="text-3xl text-[#00C2A8]" />,
        title: "Find True Resonance",
        text: "Connect with people whose thoughts and emotions harmonize naturally with yours.",
      },
      {
        icon: <FiUsers className="text-3xl text-[#00C2A8]" />,
        title: "Built for Openness",
        text: "A genuine safe space where honesty feels natural and vulnerability is celebrated.",
      },
      {
        icon: <FiSmile className="text-3xl text-[#00C2A8]" />,
        title: "Be Effortlessly You",
        text: "No pretending. No filters. Just people who appreciate your presence as it is.",
      },
      {
        icon: <FiTrendingUp className="text-3xl text-[#00C2A8]" />,
        title: "Built for Growth",
        text: "Every connection strengthens your understanding — of yourself and others.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white/25 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center shadow-[0_0_40px_rgba(0,194,168,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,209,0.25)] hover:-translate-y-1"
      >
        <div className="flex justify-center mb-4">{item.icon}</div>
        <h3 className="text-2xl font-semibold text-[#013C43] mb-3">{item.title}</h3>
        <p className="text-[#014B4F]/90 leading-relaxed">{item.text}</p>
      </div>
    ))}
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
          href="mailto:hello@wavlngth.co"
          className="text-[#00C2A8] font-medium hover:underline"
        >
          hello@wavlngth.co
        </a>
      </p>
    </div>

    {/* === Right Column: Polished Accordion === */}
    <div>
      <Accordion type="single" collapsible className="divide-y divide-[#DDFCF6]/70">
        {[
          {
            q: "How does Wavlngth's compatibility matching work?",
            a: "Our AI uses semantic vector analysis to map personality traits, communication styles, and values - identifying deeper connections, not surface-level similarities.",
          },
          {
            q: "Is my data safe and private?",
            a: "Yes. All data is encrypted and never shared. You control what you share and who sees it. Privacy is a foundational principle of Wavlngth.",
          },
          {
            q: "What makes Wavlngth different from other social apps?",
            a: "Other apps prioritize engagement; Wavlngth prioritizes alignment. We measure chemistry, not clicks - creating genuine relationships over algorithms.",
          },
          {
            q: "Can I really be myself without fear of judgment?",
            a: "Absolutely. Everyone you connect with is already aligned with your wavlngth - it’s a safe space for real authenticity.",
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
                  {/* <div className="inline-block px-4 py-2 bg-secondary rounded-full">
                    <span className="text-sm font-medium text-secondary-foreground">
                      🌊 Stay tuned
                    </span>
                  </div> */}
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
