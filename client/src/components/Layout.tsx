import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
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
            <Button 
              className="hidden sm:flex bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-mono text-xs uppercase tracking-wider font-bold"
              onClick={() => window.open('https://cal.com/gray-blanchard', '_blank')}
            >
              Book Consultation →
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-l border-border p-0">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-2 font-bold text-xl tracking-tighter mb-12">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground">
                      <span className="font-mono text-lg">F</span>
                    </div>
                    <span>FOUNDATION<span className="text-muted-foreground font-normal">TECH</span></span>
                  </div>
                  
                  <nav className="flex flex-col gap-6 text-lg font-medium">
                    <Link href="#services" onClick={() => setIsOpen(false)}><a className="hover:text-accent transition-colors">SERVICES</a></Link>
                    <Link href="#how-it-works" onClick={() => setIsOpen(false)}><a className="hover:text-accent transition-colors">PROCESS</a></Link>
                    <Link href="#results" onClick={() => setIsOpen(false)}><a className="hover:text-accent transition-colors">RESULTS</a></Link>
                    <Link href="#about" onClick={() => setIsOpen(false)}><a className="hover:text-accent transition-colors">ABOUT</a></Link>
                  </nav>

                  <div className="mt-auto pt-8 border-t border-border">
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-mono text-xs uppercase tracking-wider font-bold h-12"
                      onClick={() => window.open('https://cal.com/gray-blanchard', '_blank')}
                    >
                      Book Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 z-10 relative">
        {children}
      </main>

      <footer className="border-t border-border bg-primary text-primary-foreground z-10 relative">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
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
              <ul className="space-y-3 text-sm text-primary-foreground/80 mb-8">
                <li>Louisiana, USA</li>
                <li>Remote Nationwide</li>
                <li>
                  <a href="mailto:hello@foundationtech.com" className="font-mono text-accent hover:underline">
                    hello@foundationtech.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-4 lg:col-span-1">
              <h3 className="font-mono text-accent text-sm mb-6 uppercase tracking-wider">Quick Inquiry</h3>
              <ContactForm />
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
