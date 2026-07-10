import { Product, Category } from './types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800' },
  { id: '2', name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=800' },
  { id: '3', name: 'Accessories', image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=800' },
  { id: '4', name: 'Home & Living', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800' },
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Aura Premium Wireless Headphones',
    description: 'Experience pure sound with active noise cancellation and 40-hour battery life. Crafted with premium materials for maximum comfort.',
    price: 299.99,
    oldPrice: 349.99,
    discount: 14,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&q=80&w=800'],
    category: 'Electronics',
    brand: 'Aura',
    rating: 4.8,
    reviews: 124,
    stock: 50,
    isTrending: true
  },
  {
    id: 'p2',
    name: 'Minimalist Chronograph Watch',
    description: 'Elegant timepiece featuring a matte black dial, stainless steel case, and genuine leather strap. Water-resistant up to 50 meters.',
    price: 189.00,
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'],
    category: 'Accessories',
    brand: 'Luxe',
    rating: 4.9,
    reviews: 89,
    stock: 15,
    isNew: true
  },
  {
    id: 'p3',
    name: 'Smart Home Hub Display',
    description: 'Control your entire home with this intuitive 10-inch smart display. Features video calling, smart home controls, and premium speakers.',
    price: 149.99,
    oldPrice: 199.99,
    discount: 25,
    images: ['https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=800'],
    category: 'Electronics',
    brand: 'TechCore',
    rating: 4.6,
    reviews: 256,
    stock: 120,
    isTrending: true
  },
  {
    id: 'p4',
    name: 'Classic Leather Weekend Bag',
    description: 'Handcrafted full-grain leather duffel bag. Perfect for short trips and weekend getaways. Features a dedicated shoe compartment.',
    price: 245.00,
    images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'],
    category: 'Fashion',
    brand: 'Heritage',
    rating: 4.7,
    reviews: 42,
    stock: 8
  },
  {
    id: 'p5',
    name: 'Ultra-Slim 4K Laptop',
    description: 'Powerful performance in an incredibly thin aluminum chassis. 16GB RAM, 1TB SSD, and an edge-to-edge 4K OLED display.',
    price: 1299.00,
    oldPrice: 1499.00,
    discount: 13,
    images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800'],
    category: 'Electronics',
    brand: 'Zenith',
    rating: 4.9,
    reviews: 312,
    stock: 25,
    isNew: true,
    isTrending: true
  },
  {
    id: 'p6',
    name: 'Ceramic Pour-Over Coffee Maker',
    description: 'Artisan-crafted ceramic coffee dripper for the perfect cup every morning. Maintains optimal brewing temperature.',
    price: 45.00,
    images: ['https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=800'],
    category: 'Home & Living',
    brand: 'BrewMaster',
    rating: 4.5,
    reviews: 118,
    stock: 200
  }
];
