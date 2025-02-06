import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Dashboard } from "@/components/landing/Dashboard";
import { Campaign } from "@/components/landing/Campaign";
import { CTA } from "@/components/landing/CTA";
import { BackedByEF } from "@/components/landing/BackedByEF";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Features />
      <Dashboard />
      <Campaign />
      <CTA />
      <BackedByEF />
      <footer className="py-6 text-center text-sm text-gray-600">
        <a 
          href="https://docs.google.com/document/d/12XlGM9ng9kBxBNdKgcej1SRTYCIq9eg-78fADukQ4Cg/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Index;