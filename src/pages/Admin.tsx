import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingBag, Users, Settings, 
  BarChart, Package, LogOut, Search, Bell, Plus, Edit, Trash2, X
} from 'lucide-react';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';

function DashboardOverview() {
  const { products } = useProducts();
  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-slate-500 font-medium mb-4">Total Revenue</div>
          <div className="text-3xl font-display font-bold mb-2">$45,231.89</div>
          <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
            +20.1% from last month
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-slate-500 font-medium mb-4">Orders</div>
          <div className="text-3xl font-display font-bold mb-2">+2,350</div>
          <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
            +15.3% from last month
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-slate-500 font-medium mb-4">Products Active</div>
          <div className="text-3xl font-display font-bold mb-2">{products.length}</div>
          <div className="text-sm text-slate-500 flex items-center gap-1 font-medium">
            Across 4 categories
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-slate-500 font-medium mb-4">Active Customers</div>
          <div className="text-3xl font-display font-bold mb-2">1,204</div>
          <div className="text-sm text-green-600 flex items-center gap-1 font-medium">
            +4.5% from last month
          </div>
        </div>
      </div>

      {/* Recent Orders table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h2 className="text-lg font-display font-bold">Recent Orders</h2>
          <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              {[1,2,3,4,5].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium text-slate-900 dark:text-white">#ORD-{Math.floor(Math.random() * 90000) + 10000}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Customer Name {i+1}</td>
                  <td className="p-4 text-slate-500">Today, 12:45 PM</td>
                  <td className="p-4 font-medium">${(Math.random() * 500 + 50).toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      i % 3 === 0 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500' :
                      i % 4 === 0 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500'
                    }`}>
                      {i % 3 === 0 ? 'Processing' : i % 4 === 0 ? 'Shipped' : 'Delivered'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AdminOrders() {
  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Orders</h1>
          <p className="text-slate-500 mt-1">Manage and track customer orders.</p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              {[1,2,3,4,5,6,7,8].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 font-medium text-slate-900 dark:text-white">#ORD-{Math.floor(Math.random() * 90000) + 10000}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">Customer Name {i+1}</td>
                  <td className="p-4 text-slate-500">Today, 12:45 PM</td>
                  <td className="p-4 font-medium">${(Math.random() * 500 + 50).toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      i % 3 === 0 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-500' :
                      i % 4 === 0 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500'
                    }`}>
                      {i % 3 === 0 ? 'Processing' : i % 4 === 0 ? 'Shipped' : 'Delivered'}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    brand: '',
    imageUrl: ''
  });

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setFormData({ name: '', description: '', price: '', stock: '', category: '', brand: '', imageUrl: '' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      stock: product.stock.toString(),
      category: product.category,
      brand: product.brand,
      imageUrl: product.images[0] || ''
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      category: formData.category,
      brand: formData.brand,
      images: [formData.imageUrl],
      rating: editingProduct ? editingProduct.rating : 0,
      reviews: editingProduct ? editingProduct.reviews : 0,
    };

    if (editingProduct) {
      updateProduct({ ...productData, id: editingProduct.id } as Product);
    } else {
      addProduct(productData);
    }
    
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Products</h1>
          <p className="text-slate-500 mt-1">Manage your product inventory.</p>
        </div>
        <button 
          onClick={handleOpenAdd}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700"
        >
          <Plus className="w-5 h-5" /> Add Product
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Product</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium">Stock</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <img src={product.images[0]} className="w-10 h-10 rounded-lg object-cover bg-slate-100" alt="" />
                    <span className="font-medium text-slate-900 dark:text-white line-clamp-1">{product.name}</span>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{product.category}</td>
                  <td className="p-4 font-medium">${product.price.toFixed(2)}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${product.stock > 0 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-500'}`}>
                      {product.stock} in stock
                    </span>
                  </td>
                  <td className="p-4 flex items-center gap-2">
                    <button onClick={() => handleOpenEdit(product)} className="p-1 text-slate-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                    <button onClick={() => deleteProduct(product.id)} className="p-1 text-slate-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && (
            <div className="p-8 text-center text-slate-500">No products found.</div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center sticky top-0 bg-white dark:bg-slate-900 z-10">
              <h2 className="text-xl font-bold">{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Product Name</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Product Image</label>
                  <div className="flex gap-3 items-center">
                    {formData.imageUrl && (
                      <img src={formData.imageUrl} alt="Preview" className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-700 bg-slate-100" />
                    )}
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => setFormData({...formData, imageUrl: reader.result as string});
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="w-full text-sm text-slate-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 dark:file:bg-slate-800 dark:file:text-slate-300 dark:hover:file:bg-slate-700 transition-colors" 
                    />
                  </div>
                  <input required placeholder="Or paste an Image URL" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600 text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Category</label>
                  <input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Brand</label>
                  <input required value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Price ($)</label>
                  <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Stock</label>
                  <input required type="number" value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Description</label>
                <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600 resize-none"></textarea>
              </div>
              <div className="pt-4 flex justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {editingProduct ? 'Save Changes' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function AdminCustomers() {
  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Customers</h1>
          <p className="text-slate-500 mt-1">View and manage customer accounts.</p>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-sm text-slate-500 uppercase tracking-wider">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Email</th>
                <th className="p-4 font-medium">Orders</th>
                <th className="p-4 font-medium">Total Spent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
              {[1,2,3,4,5,6].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                      C{i+1}
                    </div>
                    <span className="font-medium text-slate-900 dark:text-white">Customer Name {i+1}</span>
                  </td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">customer{i+1}@example.com</td>
                  <td className="p-4 text-slate-500">{Math.floor(Math.random() * 10) + 1}</td>
                  <td className="p-4 font-medium">${(Math.random() * 1000 + 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AdminAnalytics() {
  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Analytics</h1>
          <p className="text-slate-500 mt-1">Detailed store performance metrics.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-64 flex flex-col items-center justify-center text-slate-400">
          <BarChart className="w-10 h-10 mb-2 opacity-50" />
          <span>Sales Chart Placeholder</span>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-64 flex flex-col items-center justify-center text-slate-400">
          <Users className="w-10 h-10 mb-2 opacity-50" />
          <span>Visitors Chart Placeholder</span>
        </div>
      </div>
    </>
  );
}

function AdminSettings() {
  return (
    <>
      <div className="flex justify-between items-end mb-8 mt-16 md:mt-0">
        <div>
          <h1 className="text-3xl font-display font-bold">Settings</h1>
          <p className="text-slate-500 mt-1">Manage store preferences and configurations.</p>
        </div>
        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:bg-blue-700">
          Save Changes
        </button>
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden p-6 max-w-3xl">
        <h3 className="text-lg font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Store Name</label>
            <input type="text" defaultValue="Lucky Shop" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Support Email</label>
            <input type="email" defaultValue="support@luckyshop.com" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-600" />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-bold mb-4 border-b border-slate-200 dark:border-slate-800 pb-2">Payment Settings</h3>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="stripe" defaultChecked className="w-4 h-4 text-blue-600" />
              <label htmlFor="stripe">Enable Stripe Payments</label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="paypal" defaultChecked className="w-4 h-4 text-blue-600" />
              <label htmlFor="paypal">Enable PayPal</label>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="cod" defaultChecked className="w-4 h-4 text-blue-600" />
              <label htmlFor="cod">Enable Cash on Delivery (COD)</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Admin() {
  const location = useLocation();

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path || (path === '/admin' && location.pathname === '/admin/');
    return `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
      isActive 
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
    }`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col sticky top-0 md:h-screen z-10 hidden md:flex">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <Link to="/" className="flex flex-col items-start group text-slate-900 dark:text-white">
            <span className="font-display font-bold text-3xl tracking-tighter leading-none group-hover:text-blue-600 transition-colors">LS</span>
            <span className="text-[10px] font-medium tracking-widest uppercase mt-0.5">Admin Panel</span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6">
          <nav className="space-y-1 px-4">
            <Link to="/admin" className={navLinkClass('/admin')}>
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link to="/admin/orders" className={navLinkClass('/admin/orders')}>
              <ShoppingBag className="w-5 h-5" /> Orders
            </Link>
            <Link to="/admin/products" className={navLinkClass('/admin/products')}>
              <Package className="w-5 h-5" /> Products
            </Link>
            <Link to="/admin/customers" className={navLinkClass('/admin/customers')}>
              <Users className="w-5 h-5" /> Customers
            </Link>
            <Link to="/admin/analytics" className={navLinkClass('/admin/analytics')}>
              <BarChart className="w-5 h-5" /> Analytics
            </Link>
            <Link to="/admin/settings" className={navLinkClass('/admin/settings')}>
              <Settings className="w-5 h-5" /> Settings
            </Link>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-xl font-medium transition-colors">
            <LogOut className="w-5 h-5" /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 z-10 hidden md:flex">
          <div className="relative w-96">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-full py-2.5 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 border-2 border-white dark:border-slate-900 shadow-sm"></div>
          </div>
        </header>

        <div className="p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<DashboardOverview />} />
            <Route path="/orders" element={<AdminOrders />} />
            <Route path="/products" element={<AdminProducts />} />
            <Route path="/customers" element={<AdminCustomers />} />
            <Route path="/analytics" element={<AdminAnalytics />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
