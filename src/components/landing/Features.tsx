import { Phone, Calendar, ChartBar, Clock } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI-Powered Calls",
    description: "Natural-sounding AI calls that engage potential buyers effectively",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description: "Fill your viewing calendar without lifting a finger",
  },
  {
    icon: ChartBar,
    title: "Performance Tracking",
    description: "Monitor campaign success with detailed analytics",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Focus on high-value activities while AI handles outreach",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          Everything you need to scale your outreach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};