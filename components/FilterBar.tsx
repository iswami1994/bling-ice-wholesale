import React, { useState } from 'react';
import { CATEGORIES } from '../constants';

const FilterBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="sticky top-[73px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-neutral-200 dark:border-[#2a2a2a] py-4 px-6 lg:px-10 mb-8 transition-all">
      <div className="flex gap-3 overflow-x-auto no-scrollbar items-center max-w-full pb-1">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 h-9 px-6 rounded-full text-sm font-bold transition-all border ${
              activeCategory === category.id
                ? 'bg-primary text-black border-primary shadow-[0_0_10px_rgba(242,208,13,0.3)]'
                : 'bg-transparent hover:bg-neutral-200 dark:hover:bg-[#1a1a1a] text-neutral-600 dark:text-neutral-300 border-neutral-300 dark:border-[#333]'
            }`}
          >
            {category.label}
          </button>
        ))}
        <div className="w-px h-6 bg-neutral-300 dark:bg-[#333] mx-2"></div>
        <button className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center hover:bg-neutral-200 dark:hover:bg-[#1a1a1a] text-neutral-600 dark:text-neutral-300 transition-all ml-auto md:ml-0 border border-transparent">
          <span className="material-symbols-outlined text-xl">tune</span>
        </button>
      </div>
    </div>
  );
};

export default FilterBar;