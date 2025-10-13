import { Card, CardContent } from "@/components/ui/card";
import { Heart, Compass, Rocket, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Vision = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a world where authentic connections are the norm, not the exception.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="prose prose-lg max-w-none mb-16">
            <Card className="border-2 border-primary/20 bg-card shadow-soft">
              <CardContent className="p-8 md:p-12">
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  We believe that everyone deserves to be understood. In a world full of superficial swipes and awkward small talk, 
                  we're creating something different—a place where you can be genuinely, unapologetically yourself.
                </p>
                <p className="text-lg text-card-foreground leading-relaxed mb-6">
                  Wavlngth was born from a simple insight: the fear of judgment and rejection prevents us from showing our true selves. 
                  But what if you could know, from the very first interaction, that someone truly gets you?
                </p>
                <p className="text-lg text-card-foreground leading-relaxed">
                  That's what we're building—a platform that uses predictive intelligence to eliminate the guesswork from human connection, 
                  so you can focus on what matters: being yourself and finding your people.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="space-y-12 mb-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground">
                Our core values shape everything we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Authenticity First",
                  description: "We believe the world needs more genuine connections. Our technology is designed to help you be more yourself, not less.",
                },
                {
                  icon: Compass,
                  title: "Understanding Through AI",
                  description: "We use cutting-edge AI not to replace human connection, but to enhance it—helping you find and understand your people.",
                },
                {
                  icon: Rocket,
                  title: "Continuous Growth",
                  description: "Connection isn't static. We help you grow, learn about yourself, and achieve your dreams alongside your community.",
                },
                {
                  icon: Sparkles,
                  title: "Safe Expression",
                  description: "Everyone should feel safe being themselves. We're committed to creating a judgment-free space for authentic expression.",
                },
              ].map((value, index) => (
                <Card 
                  key={index}
                  className="border-border hover:shadow-soft transition-all duration-300 bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary flex-shrink-0">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* The Future */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                The Future of Connection
              </h2>
            </div>

            <Card className="bg-gradient-primary border-none shadow-glow">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-primary-foreground">
                  <p className="text-lg leading-relaxed">
                    Imagine a world where you never have to hide who you are. Where every conversation feels natural, 
                    every friendship feels meant to be, and every group you join feels like home.
                  </p>
                  <p className="text-lg leading-relaxed">
                    That's the future we're building at Wavlngth. A future where AI doesn't make us more artificial—it 
                    makes us more human. Where technology helps us understand ourselves better, connect more deeply, 
                    and live more authentically.
                  </p>
                  <p className="text-lg leading-relaxed font-semibold">
                    We're not just building a social network. We're building a movement toward authentic human connection.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Us */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join Us on This Journey
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of a community that values authenticity, understanding, and genuine connection.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
