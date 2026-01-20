import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProductCard from './components/ProductCard';
import CustomDesignSection from './components/CustomDesignSection';
import Footer from './components/Footer';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto">
        <Hero />
        <FilterBar />
        
        <section className="px-6 lg:px-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        
        <CustomDesignSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;