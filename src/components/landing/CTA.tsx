import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="demo" className="py-24 bg-primary px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to transform your real estate outreach?
        </h2>
        <p className="text-xl mb-8 text-gray-300">
          Book a demo to see how Cheslin can help you engage more buyers and fill more viewings.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-lg px-8 py-6"
          onClick={() => window.location.href = "https://calendly.com"}
        >
          Schedule Your Demo
        </Button>
      </div>
    </section>
  );
};