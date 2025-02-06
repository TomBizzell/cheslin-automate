export const BackedByEF = () => {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
            <iframe 
              src="https://www.loom.com/embed/f5bf8ceadd014a099dddc13e24607ec2?sid=d22b4e52-bc56-4bc1-9e5e-a3a8d286781b" 
              frameBorder="0" 
              allowFullScreen 
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <p className="text-lg text-primary/80">Backed by</p>
            <img 
              src="/lovable-uploads/9a453499-6e3a-402f-8e51-69ecc0da358a.png" 
              alt="Entrepreneur First Logo" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
