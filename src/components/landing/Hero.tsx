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
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/f5cec3bb-b808-4420-b475-6ae2edce97a1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          Let Cheslin transform your real estate rental strategy
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-up">
          Automate outbound calls, streamline call-out lists, and book more viewings effortlessly with lifelike AI
        </p>
        <div className="flex flex-col items-center gap-4 mb-8 animate-fade-up">
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 w-64">
            <p className="text-xl font-bold text-white">No missed calls</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 w-64">
            <p className="text-xl font-bold text-white">More buyers engaged</p>
          </div>
          
          {/* Waitlist Form */}
          <form onSubmit={handleWaitlistSubmit} className="w-full flex flex-col items-center space-y-4 animate-fade-up">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 w-64"
            />
            <div className="flex gap-2 w-64">
              <Button 
                type="submit" 
                disabled={isLoading}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-lg flex-1"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-lg flex-1"
                onClick={() => window.location.href = "https://calendar.app.google/9v1Kwgse5ESVHRMC8"}
              >
                Book a Demo
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};