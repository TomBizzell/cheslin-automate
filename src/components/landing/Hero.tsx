import { Button } from "@/components/ui/button";

export const Hero = () => {
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
          Engage buyers and fill viewings on autopilot
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto animate-fade-up">
          Let AI handle your outreach while you focus on closing deals. Automated calls that sound natural and get results.
        </p>
        <div className="relative -mb-32">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 animate-fade-up"
            onClick={() => window.location.href = "#demo"}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};