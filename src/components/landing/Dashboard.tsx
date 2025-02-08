
export const Dashboard = () => {
  return (
    <section className="py-24 bg-muted/20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
            <iframe 
              src="https://www.loom.com/embed/7f46bb9b29b24356a30fda771b1c41f4?sid=aeb518ad-79b5-440b-8976-91ad0d8b6b34" 
              frameBorder="0" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
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
            src="/lovable-uploads/d04798f9-6384-41ef-b94d-e00d471a2d84.png"
            alt="Cheslin Dashboard Interface"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};
