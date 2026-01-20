import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-[#2a2a2a] bg-neutral-100 dark:bg-[#0a0a0a] pt-16 pb-8 px-6 lg:px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 dark:text-white mb-2">
            <div className="size-6 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">diamond</span>
            </div>
            <h2 className="text-lg font-black uppercase">Bling Ice</h2>
          </div>
          <p className="text-neutral-500 text-sm max-w-xs">
            The premier B2B destination for urban luxury jewelry. Serving retailers globally with authenticated gold and diamond pieces.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 lg:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 dark:text-white font-bold text-sm uppercase">Shop</h4>
            {['New Arrivals', 'Best Sellers', 'Chains', 'Pendants'].map((item) => (
              <a key={item} className="text-neutral-500 hover:text-primary transition-colors text-sm" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 dark:text-white font-bold text-sm uppercase">Company</h4>
            {['About', 'Wholesale Application', 'Contact', 'Privacy Policy'].map((item) => (
              <a key={item} className="text-neutral-500 hover:text-primary transition-colors text-sm" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-neutral-900 dark:text-white font-bold text-sm uppercase">Social</h4>
            <div className="flex gap-4">
              <a className="text-neutral-500 hover:text-primary transition-colors text-sm" href="#">Instagram</a>
              <a className="text-neutral-500 hover:text-primary transition-colors text-sm" href="#">TikTok</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-neutral-200 dark:border-[#1f1f1f] text-center md:text-left">
        <p className="text-neutral-600 dark:text-neutral-500 text-xs">© 2024 Bling Ice Wholesale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;