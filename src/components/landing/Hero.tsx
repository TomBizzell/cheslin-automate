import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-primary/90 text-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          Engage buyers and fill viewings on autopilot
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto animate-fade-up">
          Let AI handle your outreach while you focus on closing deals. Automated calls that sound natural and get results.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-lg px-8 py-6 animate-fade-up"
          onClick={() => window.location.href = "#demo"}
        >
          Book a Demo
        </Button>
      </div>
    </section>
  );
};