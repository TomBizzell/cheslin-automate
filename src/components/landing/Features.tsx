import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const features = [
  {
    title: "AI-Powered Calls",
    description: "Natural-sounding AI calls that engage potential buyers effectively",
    hasInput: true,
    bgImage: null,
  },
  {
    title: "Automated Calls",
    description: "Cheslin calls hundreds of leads simultaneously, books viewings based on responses, and automatically updates your calendar with confirmed appointments",
    bgImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Automated Call-Out Lists",
    description: "Cheslin matches clients with suitable properties and creates optimised call-out lists, eliminating the need for manual effort",
    bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Lead Management",
    description: "Cheslin tracks and organises all your leads in a centralised dashboard, giving you clear oversight and progress updates",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Performance Analytics",
    description: "Cheslin monitors call outcomes, client engagement, and individual agent KPIs like closed transactions and gross commission income to help improve performance",
    bgImage: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
  },
];

export const Features = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
    <section className="py-24 bg-[#E2E2E2] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent">
          Your AI Assistant for Real Estate Rentals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                feature.hasInput ? 'md:col-span-2 lg:col-span-4 bg-muted/20' : 'aspect-[4/3] md:aspect-square'
              }`}
              style={feature.bgImage ? {
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : {}}
            >
              <div className={`p-6 ${!feature.hasInput ? 'absolute inset-0 flex flex-col justify-end' : ''}`}>
                <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${!feature.hasInput ? 'text-white' : 'text-primary'}`}>
                  {feature.title}
                </h3>
                <p className={`mb-4 ${!feature.hasInput ? 'text-white/90' : 'text-primary/80'}`}>
                  {feature.description}
                </p>
                {feature.hasInput && (
                  <div className="space-y-4 mt-4 max-w-md mx-auto">
                    <p className="text-sm font-medium text-primary">Speak to Cheslin yourself</p>
                    <Input 
                      type="tel" 
                      placeholder="Enter your phone number (e.g. +447778885362)"
                      className="w-full"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Button 
                      className="w-full"
                      onClick={handleCallRequest}
                      disabled={isLoading}
                    >
                      {isLoading ? "Initiating call..." : "Receive a call from Cheslin"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
