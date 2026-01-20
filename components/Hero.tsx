import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full p-4 lg:p-6">
      <div className="relative w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
        {/* Background with Video Placeholder Look */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmuwc1MF6_5v9qgAhDVK_uMRPkoPqGKo6yy4ukitfz0d84A5eHPcI1eV5FFqobNdfDV5Yv1OwPtv-EtCjOPZNIRc6s3FLG2bCI3iYcwsx_NFflxYa_4JMeavJv3kgFCCeRdOiOrK8IbAfbZ8qcY7EKt-uzobD6yT-emEOXsiiynjbTidIA0sRzs-txlhQ3Wks-TAqprv__LNQ7N8xMu1Su56oBZfVNwKIR8xNvq1kfJydpz02om-p8RbODxqcI1dsXw8F9RPXU57mk")`
          }}
          role="img"
          aria-label="Cinematic close-up of gold chains shimmering in dark studio lighting"
        ></div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <div className="relative h-full flex flex-col justify-end items-start p-8 lg:p-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary text-xs font-bold uppercase mb-4">
            <span className="material-symbols-outlined text-sm">play_circle</span>
            <span>Watch 2024 Reel</span>
          </div>
          <h1 className="text-white text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-4">
            THE GOLD <br /> <span className="text-primary">STANDARD.</span>
          </h1>
          <p className="text-neutral-300 text-lg lg:text-xl font-medium max-w-xl mb-8">
            Premium wholesale collections for the modern retailer. Heritage craftsmanship meets contemporary street culture.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center justify-center rounded-full h-12 px-8 bg-white text-black text-base font-bold hover:bg-neutral-200 transition-colors">
              View Collections
            </button>
            <button className="flex items-center justify-center rounded-full h-12 px-8 bg-transparent border border-white/30 text-white text-base font-bold hover:bg-white/10 backdrop-blur-sm transition-colors">
              Custom Orders
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;