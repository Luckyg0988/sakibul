import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              -{product.discount}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              NEW
            </span>
          )}
        </div>

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4">
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-white dark:bg-slate-900 text-slate-900 dark:text-white py-3 rounded-full font-medium hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors shadow-xl flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add</span>
          </button>
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors shadow-xl"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{product.category}</div>
        <Link to={`/product/${product.id}`} className="font-display font-semibold text-lg leading-tight mb-2 hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </Link>
        
        <div className="flex items-center gap-1 mb-4">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-sm text-slate-500">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-end gap-3">
          <span className="font-display font-bold text-xl">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-slate-400 line-through mb-1">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
