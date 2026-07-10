import React, { useState } from 'react';
import { motion } from 'motion/react';
import { categories } from '../data';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown } from 'lucide-react';

export default function Shop() {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Shop Collection</h1>
            <p className="text-slate-500 max-w-2xl">Browse our complete collection of premium products, carefully selected for quality and design.</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">Showing {filteredProducts.length} results</span>
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <Filter className="w-4 h-4" />
              Sort By
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-28">
              <h3 className="font-display font-bold text-lg mb-6">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className={`w-full text-left flex justify-between items-center ${selectedCategory === 'All' ? 'text-blue-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}`}
                  >
                    <span>All Products</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{products.length}</span>
                  </button>
                </li>
                {categories.map(cat => {
                  const count = products.filter(p => p.category === cat.name).length;
                  return (
                    <li key={cat.id}>
                      <button 
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full text-left flex justify-between items-center ${selectedCategory === cat.name ? 'text-blue-600 font-semibold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors'}`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-12">
                <h3 className="font-display font-bold text-lg mb-6">Price Range</h3>
                <div className="space-y-4">
                  <input type="range" className="w-full accent-blue-600" min="0" max="2000" />
                  <div className="flex justify-between text-sm font-medium">
                    <span>$0</span>
                    <span>$2,000+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <h3 className="text-2xl font-display font-bold mb-2">No products found</h3>
                <p className="text-slate-500">Try adjusting your filters to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
