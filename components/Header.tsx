import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Collections', href: isHome ? '#collections' : '/#collections' },
    { label: 'Custom Design', href: isHome ? '#custom-design' : '/#custom-design' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-neutral-200 dark:border-[#2a2a2a] bg-white/80 dark:bg-[#050505]/90 backdrop-blur-md px-6 py-4 lg:px-10">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3 dark:text-white cursor-pointer">
          <div className="size-8 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl">diamond</span>
          </div>
          <h2 className="text-xl font-black leading-tight tracking-tight uppercase">Bling Ice</h2>
        </Link>
        <div className="hidden lg:flex items-center gap-8 pl-4">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.includes('#') ? (
              <Link
                key={link.label}
                className="text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors text-slate-600 dark:text-neutral-300"
                to={link.href}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                className="text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors text-slate-600 dark:text-neutral-300"
                href={link.href}
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <div className="hidden md:flex flex-1 justify-end max-w-xs">
          <label className="flex flex-col w-full h-10">
            <div className="flex w-full flex-1 items-center rounded-full bg-neutral-100 dark:bg-[#1a1a1a] px-4 border border-transparent focus-within:border-primary transition-all">
              <span className="material-symbols-outlined text-neutral-400" style={{ fontSize: '20px' }}>search</span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-sm px-3 dark:text-white placeholder:text-neutral-500 focus:outline-none"
                placeholder="Search SKU or Category"
              />
            </div>
          </label>
        </div>
        <Link
          to="/about#partner-form"
          className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-black text-sm font-bold tracking-wide hover:bg-[#ffe033] transition-colors"
        >
          <span className="truncate">Partner With Us</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
