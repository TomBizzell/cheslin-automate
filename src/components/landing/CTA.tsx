import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="demo" className="py-24 bg-accent px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your real estate outreach?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Book a demo to see how Cheslin can help you engage more buyers and fill more viewings.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6"
          onClick={() => window.location.href = "https://calendar.app.google/9v1Kwgse5ESVHRMC8"}
        >
          Schedule Your Demo
        </Button>
      </div>
    </section>
  );
};