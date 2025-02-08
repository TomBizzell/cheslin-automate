
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Landing = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCallRequest = async () => {
    if (!phoneNumber) {
      toast({
        variant: "destructive",
        title: "Please enter a phone number",
        description: "A valid phone number is required to receive a call.",
      });
      return;
    }

    setIsLoading(true);
    try {
      // First save the phone number to the database
      const { error: dbError } = await supabase
        .from('phone_numbers')
        .insert([{ phone_number: phoneNumber }]);

      if (dbError) throw dbError;

      // Then initiate the call
      const { data, error } = await supabase.functions.invoke('initiate-call', {
        body: { 
          phone_number: phoneNumber,
          first_sentence: "Hi there! My name is Cheslin, I'm an AI that can make and receive calls on your behalf. I can share details about your new property listings and even book viewings during the call. Let me know if you have any questions about me. Otherwise, you can book a Demo to see all of the things I can do for you.",
          background_track: "office"
        }
      });

      if (error) throw error;

      toast({
        title: "Call initiated!",
        description: "You will receive a call from Cheslin shortly.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Failed to process request",
        description: "There was an error processing your request. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          <span className="text-primary">AI For Real Estate Agencies</span> That{" "}
          <span className="text-secondary">Makes Calls</span> While{" "}
          <span className="text-primary">You Build Relationships</span>.
        </h1>
        <p className="text-xl text-muted-foreground mb-8 animate-fade-up">Try it out:</p>
        
        <div className="w-full max-w-md mx-auto space-y-4">
          <Input 
            type="tel" 
            placeholder="Enter your phone number (e.g. +447778885362)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full"
          />
          <Button 
            className="w-full"
            onClick={handleCallRequest}
            disabled={isLoading}
          >
            {isLoading ? "Initiating call..." : "Receive a call from Cheslin, our AI"}
          </Button>
          <Button 
            variant="secondary"
            className="w-full"
            onClick={() => navigate('/main')}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/share/7f46bb9b29b24356a30fda771b1c41f4?sid=5614c3f8-f308-413b-9b7f-de68e88cbf18" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
          
          <div className="relative mt-16">
            <p className="text-xl font-medium text-muted-foreground relative z-10 mb-[-3rem] bg-background/80 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
              Backed by
            </p>
            <img 
              src="/lovable-uploads/9a453499-6e3a-402f-8e51-69ecc0da358a.png" 
              alt="Entrepreneur First Logo" 
              className="h-40 w-auto mx-auto -mt-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
