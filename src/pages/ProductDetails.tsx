import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, Truck, ArrowLeft, Minus, Plus, ShoppingCart, Heart } from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { useCart } from '../contexts/CartContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-display font-bold">Product not found</h1>
        <Link to="/shop" className="text-blue-600 hover:underline mt-4 inline-block">Return to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/shop" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-sm font-medium text-blue-600">{product.brand}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span className="text-sm text-slate-500">{product.category}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                <span className="font-medium ml-1">{product.rating}</span>
              </div>
              <a href="#reviews" className="text-sm text-slate-500 hover:text-blue-600 underline">Read {product.reviews} Reviews</a>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-display font-bold">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="text-xl text-slate-400 line-through mb-1">${product.oldPrice.toFixed(2)}</span>
              )}
              {product.discount && (
                <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-sm font-bold px-3 py-1 rounded-full mb-2">
                  Save {product.discount}%
                </span>
              )}
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="border-t border-b border-slate-200 dark:border-slate-800 py-8 mb-8 space-y-6">
              <div className="flex items-center">
                <span className="w-24 text-slate-500">Availability</span>
                <span className={`font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
                </span>
              </div>
              
              <div className="flex items-center">
                <span className="w-24 text-slate-500">Quantity</span>
                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-full">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-blue-600 text-white py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 hover:text-red-500">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <Truck className="w-5 h-5 text-blue-500" />
                <span>Free shipping over $150</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                <span>2 Year Extended Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
