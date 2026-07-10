import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, Moon, Sun, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useTheme } from '../../contexts/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full z-50 glass border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col items-center group">
              <span className="font-display font-bold text-3xl tracking-tighter leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LS</span>
              <span className="text-[10px] font-medium tracking-widest uppercase mt-0.5">Lucky Shop</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/shop" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</Link>
            <Link to="/categories" className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Categories</Link>
          </div>

          <div className="flex items-center space-x-5">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/login" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-blue-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/20 dark:border-slate-800/50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Home</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Shop</Link>
            <Link to="/categories" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Categories</Link>
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Account</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
