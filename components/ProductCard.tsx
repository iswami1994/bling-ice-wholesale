import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'primary':
        return 'bg-primary text-black';
      case 'white':
        return 'bg-white text-black';
      case 'dark':
        return 'bg-neutral-800 text-white border border-neutral-700';
      default:
        return 'bg-primary text-black';
    }
  };

  return (
    <div className="group flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#121212]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${product.image}")` }}
          role="img"
          aria-label={product.title}
        ></div>
        {product.badge && (
          <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${getBadgeStyle(product.badge.type)}`}>
            {product.badge.text}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-neutral-900 dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
          {product.title}
        </h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-neutral-500 text-sm font-medium">{product.subtitle}</span>
          <span className="text-primary text-sm font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
            Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;