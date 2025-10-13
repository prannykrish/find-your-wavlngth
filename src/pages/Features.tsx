import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageCircle, Users2, BarChart3, Shield, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Compatibility",
      description: "Our advanced AI uses semantic vector analysis to understand what makes you uniquely you. No more guessing games—just genuine compatibility.",
      color: "text-primary",
    },
    {
      icon: MessageCircle,
      title: "Authentic Conversations",
      description: "Chat with people who truly get you. No small talk, no awkward silences—just real connections from the very first message.",
      color: "text-accent",
    },
    {
      icon: Users2,
      title: "Your Wavlngth Network",
      description: "Visualize your compatibility universe. See all your connections in a beautiful, intuitive interface that shows who's truly on your wavelength.",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Continuous Learning",
      description: "The more you use Wavlngth, the smarter it gets. Our AI learns from your interactions to provide increasingly accurate matches and insights.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Safe & Authentic",
      description: "Your authenticity matters. We've built our platform to encourage genuine self-expression in a safe, judgment-free environment.",
      color: "text-primary",
    },
    {
      icon: Zap,
      title: "Instant Compatibility",
      description: "Know right away if someone's on your wavelength. No more wasting time on connections that won't click—find your people faster.",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Features Built for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Authentic Connections
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wavlngth combines cutting-edge AI with human psychology to create the most natural way to find your people.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4">
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-20 space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The Wavlngth Experience
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                More than just matching—it's about understanding yourself and finding your tribe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">The Compatibility Quiz</h3>
                  <p className="text-muted-foreground">
                    Our comprehensive quiz goes beyond surface-level questions. We analyze your values, communication style, interests, and personality to create a unique compatibility profile.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Groups & Communities</h3>
                  <p className="text-muted-foreground">
                    Create and join groups with people who share your wavelength. Whether it's a hobby, interest, or life stage—find your community.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Personalized Insights</h3>
                  <p className="text-muted-foreground">
                    Get AI-powered advice on how to be more authentically you. Understand your compatibility patterns and learn to connect more deeply.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">Your Dream Support</h3>
                  <p className="text-muted-foreground">
                    Wavlngth doesn't just help you find people—it helps you grow. Get personalized guidance on achieving your goals and living authentically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
