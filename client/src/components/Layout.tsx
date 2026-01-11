import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      {/* Swiss Style Grid Lines - Vertical */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between container mx-auto px-4 sm:px-6 lg:px-8 opacity-10">
        <div className="w-px h-full bg-foreground"></div>
        <div className="w-px h-full bg-foreground hidden md:block"></div>
        <div className="w-px h-full bg-foreground hidden lg:block"></div>
        <div className="w-px h-full bg-foreground"></div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-bold text-xl tracking-tighter z-10">
              <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
                <span className="font-mono text-lg">F</span>
              </div>
              <span>FOUNDATION<span className="text-muted-foreground font-normal">TECH</span></span>
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium z-10">
            <Link href="#services"><a className="hover:text-accent transition-colors">SERVICES</a></Link>
            <Link href="#how-it-works"><a className="hover:text-accent transition-colors">PROCESS</a></Link>
            <Link href="#results"><a className="hover:text-accent transition-colors">RESULTS</a></Link>
            <Link href="#about"><a className="hover:text-accent transition-colors">ABOUT</a></Link>
          </nav>

          <div className="flex items-center gap-4 z-10">
            <Button variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none font-mono text-xs uppercase tracking-wider">
              Login
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-mono text-xs uppercase tracking-wider font-bold">
              Get Started →
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 z-10 relative">
        {children}
      </main>

      <footer className="border-t border-border bg-primary text-primary-foreground z-10 relative">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                <div className="w-8 h-8 bg-accent flex items-center justify-center text-accent-foreground">
                  <span className="font-mono text-lg">F</span>
                </div>
                <span>FOUNDATION</span>
              </div>
              <p className="text-primary-foreground/70 text-sm max-w-xs">
                Engineering business efficiency through intelligent automation and robust backend infrastructure.
              </p>
            </div>
            
            <div>
              <h3 className="font-mono text-accent text-sm mb-6 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">Process Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">System Integration</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Software</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-accent text-sm mb-6 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-mono text-accent text-sm mb-6 uppercase tracking-wider">Connect</h3>
              <ul className="space-y-3 text-sm text-primary-foreground/80">
                <li>Louisiana, USA</li>
                <li>Remote Nationwide</li>
                <li className="pt-4">
                  <a href="mailto:hello@foundationtech.com" className="font-mono text-accent hover:underline">
                    hello@foundationtech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50 font-mono">
            <p>© 2024 FOUNDATION TECH SYSTEMS LLC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
