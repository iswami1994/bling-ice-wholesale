import React from 'react';
import Hero from './Hero';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import CustomDesignSection from './CustomDesignSection';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FilterBar />

      <section id="collections" className="px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <CustomDesignSection />
    </>
  );
};

export default HomePage;
