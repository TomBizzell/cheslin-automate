import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        variant: "destructive",
        title: "Please enter your email",
        description: "An email address is required to join the waitlist.",
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
      setEmail("");
    } catch (error: any) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Failed to join waitlist",
        description: error.message === "duplicate key value violates unique constraint \"waitlist_email_key\""
          ? "This email is already on our waitlist."
          : "There was an error joining the waitlist. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-12 md:py-0 bg-gradient-to-b from-background to-muted">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-up px-4 text-foreground">
          Let Cheslin Transform Your Real Estate Rental Strategy
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-foreground/80 max-w-3xl mx-auto animate-fade-up px-4">
          Automate outbound calls, streamline call-out lists, and book more viewings effortlessly with lifelike AI
        </p>
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-up px-4">
          <div className="bg-primary/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/10 w-full md:w-96">
            <p className="text-lg md:text-xl font-bold text-primary">No missed calls</p>
          </div>
          <div className="bg-primary/5 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/10 w-full md:w-96">
            <p className="text-lg md:text-xl font-bold text-primary">More buyers engaged</p>
          </div>
          
          <form onSubmit={handleWaitlistSubmit} className="w-full max-w-[384px] flex flex-col items-center space-y-4 animate-fade-up">
            <div className="flex flex-col md:flex-row items-center gap-2 w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/50 border-primary/20 text-foreground placeholder:text-foreground/60 w-full"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-base md:text-lg whitespace-nowrap w-full md:w-auto"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-base md:text-lg w-full"
              onClick={() => window.location.href = "https://calendar.app.google/9v1Kwgse5ESVHRMC8"}
            >
              Book a Demo
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};