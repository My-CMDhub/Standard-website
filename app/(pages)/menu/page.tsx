// eslint-disable-next-line no-unused-vars
import Image from 'next/image';

export const metadata = {
  title: 'Our Menu | Savoria Restaurant',
  description: 'Explore our diverse menu featuring fresh ingredients and traditional recipes with a modern twist.',
};

// Menu data structure
const menuCategories = [
  {
    id: 'starters',
    name: 'Starters',
    items: [
      {
        id: 1,
        name: 'Bruschetta',
        description: 'Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil.',
        price: 8.99,
      },
      {
        id: 2,
        name: 'Calamari Fritti',
        description: 'Crispy fried calamari served with a zesty marinara sauce and lemon wedges.',
        price: 12.99,
      },
      {
        id: 3,
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze and olive oil.',
        price: 10.99,
      },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    items: [
      {
        id: 4,
        name: 'Filet Mignon',
        description: '8oz prime beef tenderloin grilled to perfection, served with roasted vegetables and mashed potatoes.',
        price: 32.99,
      },
      {
        id: 5,
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon with lemon-dill sauce, served with asparagus and wild rice.',
        price: 26.99,
      },
      {
        id: 6,
        name: 'Chicken Parmesan',
        description: 'Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.',
        price: 22.99,
      },
      {
        id: 7,
        name: 'Mushroom Risotto',
        description: 'Creamy Arborio rice with wild mushrooms, white wine, and Parmesan cheese.',
        price: 18.99,
      },
    ],
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    items: [
      {
        id: 8,
        name: 'Margherita',
        description: 'Fresh tomatoes, mozzarella, basil, and our signature sauce.',
        price: 14.99,
      },
      {
        id: 9,
        name: 'Quattro Formaggi',
        description: 'Four cheese blend: mozzarella, gorgonzola, fontina, and parmesan.',
        price: 16.99,
      },
      {
        id: 10,
        name: 'Prosciutto & Arugula',
        description: 'Prosciutto di Parma, fresh arugula, mozzarella, and olive oil.',
        price: 17.99,
      },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      {
        id: 11,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
        price: 8.99,
      },
      {
        id: 12,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.',
        price: 9.99,
      },
      {
        id: 13,
        name: 'Panna Cotta',
        description: 'Vanilla bean panna cotta topped with seasonal berry compote.',
        price: 7.99,
      },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      {
        id: 14,
        name: 'House Red Wine',
        description: 'Glass of our premium house red wine.',
        price: 8.99,
      },
      {
        id: 15,
        name: 'Craft Beer',
        description: 'Selection of local craft beers. Ask your server for today&apos;s options.',
        price: 6.99,
      },
      {
        id: 16,
        name: 'Italian Soda',
        description: 'Refreshing flavored soda with your choice of syrup.',
        price: 4.99,
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-30"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Menu background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Menu</h1>
            <p className="text-xl mb-8">
              Discover our chef&apos;s selection of dishes made with the finest ingredients and traditional recipes.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section className="sticky top-16 z-20 bg-white shadow-md">
        <div className="container py-3 pt-6">
          <div className="flex overflow-x-auto space-x-3 pb-1">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="filter-btn px-4 py-1 whitespace-nowrap rounded-full bg-gray-700 text-white hover:bg-orange-500 hover:text-white transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16">
        <div className="container">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-32">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold section-heading-white">{category.name}</h2>
                <div className="ml-4 flex-grow border-t border-gray-300"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item) => (
                  <div key={item.id} className="flex border-b border-gray-200 pb-6">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className="text-orange-500 font-bold ml-2">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Dietary Options */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Dietary Options</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We cater to various dietary needs. Please inform your server of any allergies or dietary restrictions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 dietary-option">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl font-bold">V</span>
              </div>
              <h3 className="font-semibold text-gray-900">Vegetarian</h3>
            </div>
            
            <div className="text-center p-4 dietary-option">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl font-bold">VG</span>
              </div>
              <h3 className="font-semibold text-gray-900">Vegan</h3>
            </div>
            
            <div className="text-center p-4 dietary-option">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl font-bold">GF</span>
              </div>
              <h3 className="font-semibold text-gray-900">Gluten-Free</h3>
            </div>
            
            <div className="text-center p-4 dietary-option">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-2xl font-bold">DF</span>
              </div>
              <h3 className="font-semibold text-gray-900">Dairy-Free</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 