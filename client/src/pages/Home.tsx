import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Check, Code, Cpu, Database, Zap } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Asymmetric Split */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Abstract architectural background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent"></div>
        </div>
        
        <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center py-20">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/50 bg-accent/10 text-accent-foreground text-xs font-mono uppercase tracking-wider">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Production-Ready in 2-3 Weeks
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95]">
              AUTOMATE YOUR <br/>
              <span className="text-primary">OPERATIONS.</span> <br/>
              <span className="text-muted-foreground font-light">GROW FASTER.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Custom software solutions that eliminate manual work and integrate your existing tools. We build the backend infrastructure that powers your business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 px-8 font-mono text-sm uppercase tracking-wider font-bold">
                Get Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none h-14 px-8 font-mono text-sm uppercase tracking-wider">
                Explore Platform
              </Button>
            </div>
            
            <div className="pt-8 border-t border-border/50 flex items-center gap-8 text-sm font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>ROI: 60-90 DAYS</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>AIRTABLE EXPERTS</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span>MCP INTEGRATION</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 bg-card border border-border p-1 shadow-2xl shadow-primary/20">
              <img 
                src="/images/dashboard-preview.jpg" 
                alt="Dashboard Preview" 
                className="w-full h-auto border border-border/50"
              />
              
              {/* Floating Metric Card */}
              <div className="absolute -bottom-8 -left-8 bg-primary text-primary-foreground p-6 shadow-xl border border-accent/20 max-w-[240px]">
                <div className="text-xs font-mono text-accent mb-2 uppercase">Weekly Time Saved</div>
                <div className="text-4xl font-bold tracking-tighter mb-1">30+ HRS</div>
                <div className="text-xs text-primary-foreground/60">Per employee via automated workflows</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section id="services" className="py-24 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-mono text-accent-foreground mb-4 uppercase tracking-wider">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
                ENGINEERED FOR <br/>EFFICIENCY
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              We don't just write code; we architect systems that solve real business problems and deliver measurable ROI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Process Automation",
                desc: "Custom workflows that eliminate repetitive tasks and intelligent data processing.",
                img: "/images/service-automation.png"
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "AI Solutions",
                desc: "Integrate Claude, GPT, and custom LLMs for intelligent document processing.",
                img: "/images/service-ai.png"
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "System Integration",
                desc: "Connect platforms via APIs and MCP to eliminate data silos forever.",
                img: "/images/service-integration.png"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom Software",
                desc: "Modern web apps and SaaS platforms built with TypeScript and Python.",
                img: "/images/service-automation.png" // Fallback/Reuse
              }
            ].map((service, i) => (
              <div key={i} className="bg-background p-8 group hover:bg-primary hover:text-primary-foreground transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img src={service.img} alt="" className="w-24 h-24 object-contain grayscale" />
                </div>
                
                <div className="mb-8 text-primary group-hover:text-accent transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 tracking-tight">{service.title}</h4>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold border-b border-transparent group-hover:border-accent group-hover:text-accent transition-all">
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props - Swiss Grid */}
      <section className="py-24 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h3 className="text-4xl font-bold tracking-tighter leading-tight">
                TRANSFORM MANUAL PROCESSES INTO <span className="text-primary bg-accent/20 px-2">INTELLIGENT AUTOMATION</span>
              </h3>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Scale Without Headcount",
                    desc: "Leverage AI to handle increased workload without hiring more staff."
                  },
                  {
                    title: "Enterprise-Grade Solutions",
                    desc: "Robust security and architecture designed for growing businesses."
                  },
                  {
                    title: "Rapid Implementation",
                    desc: "From concept to production in 2-3 weeks, not months."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 border border-primary/20 flex items-center justify-center shrink-0 font-mono text-lg font-bold text-primary">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-primary p-12 flex flex-col justify-between text-primary-foreground relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <div className="relative z-10">
                  <div className="font-mono text-accent text-sm mb-2">CASE STUDY: CONSULTING FIRM</div>
                  <h4 className="text-3xl font-bold tracking-tighter">
                    "Foundation Tech saved us 20+ hours weekly by automating our payroll system."
                  </h4>
                </div>
                
                <div className="relative z-10 grid grid-cols-2 gap-8 pt-12 border-t border-white/20">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-1">$500K+</div>
                    <div className="text-xs font-mono opacity-70">MONTHLY PROCESSED</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-1">0%</div>
                    <div className="text-xs font-mono opacity-70">ERROR RATE</div>
                  </div>
                </div>
              </div>
              
              {/* Offset border effect */}
              <div className="absolute top-4 -right-4 w-full h-full border-2 border-primary -z-10 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Horizontal Flow */}
      <section id="how-it-works" className="py-24 bg-muted/30 border-b border-border">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-mono text-accent-foreground mb-4 uppercase tracking-wider">The Process</h2>
            <h3 className="text-4xl font-bold tracking-tighter mb-6">SIMPLE, TRANSPARENT, EFFECTIVE</h3>
            <p className="text-muted-foreground">
              We've refined our engagement model to deliver maximum value with minimal friction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 w-full h-px bg-border hidden md:block -z-10"></div>
            
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Free consultation to identify bottlenecks and map out your current workflows."
              },
              {
                step: "02",
                title: "Build",
                desc: "Custom solution built in 2-3 weeks with regular updates and feedback loops."
              },
              {
                step: "03",
                title: "Launch",
                desc: "Full training, documentation, and ongoing support to ensure success."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background border border-border p-8 relative">
                <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center font-mono font-bold text-lg mb-6 border border-primary">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
            READY TO <span className="text-accent">SCALE?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            Stop wasting time on manual tasks. Let's build the infrastructure your business needs to grow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-16 px-10 font-mono text-base uppercase tracking-wider font-bold">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none h-16 px-10 font-mono text-base uppercase tracking-wider">
              Calculate Your ROI
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
