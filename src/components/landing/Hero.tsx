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
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 w-64 animate-fade-up"
            onClick={() => window.location.href = "https://calendar.app.google/9v1Kwgse5ESVHRMC8"}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};