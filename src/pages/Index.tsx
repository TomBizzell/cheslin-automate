import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Dashboard } from "@/components/landing/Dashboard";
import { Campaign } from "@/components/landing/Campaign";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Dashboard />
      <Campaign />
      <CTA />
    </div>
  );
};

export default Index;