import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const features = [
  {
    title: "AI-Powered Calls",
    description: "Natural-sounding AI calls that engage potential buyers effectively",
    hasInput: true,
    bgImage: null,
  },
  {
    title: "Automated Scheduling",
    description: "Fill your viewing calendar without lifting a finger",
    bgImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
  },
  {
    title: "Performance Tracking",
    description: "Monitor campaign success with detailed analytics",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Time-Saving",
    description: "Focus on high-value activities while AI handles outreach",
    bgImage: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1776&auto=format&fit=crop",
  },
  {
    title: "Never miss a call",
    description: "Let AI manage your inbound calls when you're not available",
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
      const response = await fetch("https://us.api.bland.ai/v1/calls", {
        method: "POST",
        headers: {
          "Authorization": "org_9f11dcaa4abcdf524979dd18ffbd55d11c0267c7e9f8ac1850ac4fafa1abc0e9b53d967a2ecf9d8d884969",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          voice: "maya",
          wait_for_greeting: true,
          task: "You are Cheslin, a real estate agent AI who can call buyers, tell them about relevant new properties on the market and field inbound calls. You can even book viewings and query a real estate agency's viewing schedule in real time. You help agencies engage more buyers and miss no calls. Introduce yourself and answer any questions. If you don't know the answer (it's not included in this prompt, you should let them know that they should book a demo to get all the details."
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to initiate call");
      }

      toast({
        title: "Call initiated!",
        description: "You will receive a call from Cheslin shortly.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to initiate call",
        description: "There was an error initiating your call. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#E2E2E2] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-accent">
          Everything you need to scale your outreach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className={`relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow ${
                feature.hasInput ? 'row-span-2 bg-muted/20' : 'h-[300px]'
              }`}
              style={feature.bgImage ? {
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : {}}
            >
              <div className={`p-6 ${!feature.hasInput ? 'absolute bottom-0 left-0 right-0 text-white' : ''}`}>
                <h3 className={`text-xl font-semibold mb-2 ${!feature.hasInput ? 'text-white' : 'text-primary'}`}>
                  {feature.title}
                </h3>
                <p className={`mb-4 ${!feature.hasInput ? 'text-white/90' : 'text-primary/80'}`}>
                  {feature.description}
                </p>
                {feature.hasInput && (
                  <div className="space-y-4 mt-4">
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