import React from 'react';

const CustomDesignSection: React.FC = () => {
  return (
    <section className="mx-6 lg:mx-10 mb-20 rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-[#0f0f0f] blueprint-bg"></div>
      {/* Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-black/80"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-10 lg:p-20">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Atelier Services</span>
            <h2 className="text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              YOUR VISION, <br /> OUR CRAFT.
            </h2>
          </div>
          <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
            Partner with our in-house design team for bespoke white-label manufacturing. From CAD to casting, we bring your custom designs to life with precision.
          </p>
          <div className="flex flex-wrap gap-4">
            {[
              { icon: 'architecture', label: '3D CAD Design' },
              { icon: 'diamond', label: 'Stone Setting' },
              { icon: 'print', label: 'Wax Printing' }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-white bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                <span className="material-symbols-outlined text-primary">{item.icon}</span>
                <span className="text-sm font-bold">{item.label}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-black text-base font-bold tracking-wide hover:bg-[#ffe033] transition-colors shadow-[0_0_20px_rgba(242,208,13,0.2)]">
            Start Custom Order
          </button>
        </div>
        
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          {/* Glassmorphism Card */}
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl bg-primary/5 backdrop-blur-md border border-primary/20 p-6 flex items-center justify-center overflow-hidden">
            {/* Decorative blueprint lines */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="20" id="grid" patternUnits="userSpaceOnUse" width="20">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f2d00d" strokeWidth="0.5"></path>
                  </pattern>
                </defs>
                <rect fill="url(#grid)" height="100%" width="100%"></rect>
              </svg>
            </div>
            
            <div className="relative z-10 text-center">
              <div
                className="w-48 h-48 mx-auto bg-contain bg-no-repeat bg-center drop-shadow-2xl opacity-90"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBANMBY_EQac7WJKx1G2EgIFSFXJCU5t9RMb2TAUpQDAtYA98c6-dXUa-dORxPnnEF-ey7lXpd2N9lrZDq6Klws462cWMzljXb9nfZOHK5XOqFyEfg-2n-MQdSuwV1djs4NDxpiSYQsF-Rg0JSR5YixWihxn9hHGrJ-DhR4aY0gKFQssC1hJ12J2iLs0KVjSi_wfV2-whuXaYTaqOMdzUMOSFk-SAB82EZaDhMGjULrbLafDuE7qoSjbZaNjlk-M9jXYmPBpqb-IuyL")`,
                  filter: 'invert(1) sepia(1) saturate(5) hue-rotate(5deg)'
                }}
              >
              </div>
              <div className="mt-4 flex justify-between items-end border-t border-primary/30 pt-4 w-full gap-8">
                <div className="text-left">
                  <p className="text-[10px] uppercase text-primary/60 font-mono">Project ID</p>
                  <p className="text-sm text-primary font-mono">#CUST-8842</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase text-primary/60 font-mono">Status</p>
                  <p className="text-sm text-primary font-mono">Prototyping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomDesignSection;