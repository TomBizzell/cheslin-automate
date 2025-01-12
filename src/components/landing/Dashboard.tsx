export const Dashboard = () => {
  return (
    <section className="py-24 bg-muted/20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
            Powerful insights at your fingertips
          </h2>
          <p className="text-xl text-primary/80 max-w-2xl mx-auto">
            Track your campaign performance and manage appointments with our intuitive dashboard
          </p>
        </div>
        <div className="rounded-lg shadow-xl overflow-hidden">
          <img 
            src="/lovable-uploads/51f59181-89ea-4e40-8bc2-939a608f63cd.png"
            alt="Cheslin Dashboard"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};