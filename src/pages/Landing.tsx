
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
          first_sentence: "Hi there! My name is Cheslin, I'm an AI that can make and receive calls on your behalf. I can share details about your new property listings and even book viewings during the call. Let me know if you have any questions about me. Otherwise, you can book a Demo to see all of the things I can do for you."
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
          The <span className="text-primary">AI</span> for real estate agencies that{" "}
          <span className="text-secondary">makes calls</span> while you{" "}
          <span className="text-primary">build relationships</span>.
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
      </div>
    </div>
  );
};

export default Landing;
