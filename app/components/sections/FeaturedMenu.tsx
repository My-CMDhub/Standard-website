'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample menu data
const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and our signature sauce.',
    price: 14.99,
    image: '/images/pizza.jpg',
    category: 'pizza',
  },
  {
    id: 2,
    name: 'Fettuccine Alfredo',
    description: 'Homemade pasta with creamy Alfredo sauce and parmesan.',
    price: 16.99,
    image: '/images/pasta.jpg',
    category: 'pasta',
  },
  {
    id: 3,
    name: 'Classic Burger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce.',
    price: 12.99,
    image: '/images/burger.jpg',
    category: 'burger',
  },
  {
    id: 4,
    name: 'Wiener Schnitzel',
    description: 'Crispy breaded veal cutlet served with potato salad and lemon.',
    price: 18.99,
    image: '/images/schnitzel.jpg',
    category: 'main',
  },
  {
    id: 5,
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, croutons, parmesan, and Caesar dressing.',
    price: 10.99,
    image: '/images/salad.jpg',
    category: 'salad',
  },
  {
    id: 6,
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
    price: 8.99,
    image: '/images/dessert.jpg',
    category: 'dessert',
  },
  {
    id: 7,
    name: 'Seafood Paella',
    description: 'Traditional Spanish rice dish with shrimp, mussels, and calamari.',
    price: 22.99,
    image: '/images/paella.jpg',
    category: 'main',
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
    price: 9.99,
    image: '/images/chocolate-cake.jpg',
    category: 'dessert',
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'burger', name: 'Burgers' },
  { id: 'main', name: 'Main Courses' },
  { id: 'salad', name: 'Salads' },
  { id: 'dessert', name: 'Desserts' },
];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Specialties</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover our chef&apos;s selection of dishes made with the finest ingredients and traditional recipes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeCategory === category.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md food-card"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-orange-600 font-bold ml-2">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="text-orange-500 font-medium hover:underline">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="btn btn-outline"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu; 