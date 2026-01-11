import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mnjjawnn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll be in touch soon.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-mono uppercase tracking-wider text-primary-foreground/80">Email Address</label>
        <Input 
          id="email"
          type="email" 
          name="email"
          required 
          placeholder="you@company.com"
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-none focus-visible:ring-accent"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-mono uppercase tracking-wider text-primary-foreground/80">Message</label>
        <Textarea 
          id="message"
          name="message"
          required
          placeholder="Tell us about your project..."
          className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-none min-h-[120px] focus-visible:ring-accent"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-mono text-sm uppercase tracking-wider font-bold h-12"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
