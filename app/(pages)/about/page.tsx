import Image from 'next/image';

export const metadata = {
  title: 'About Us | Savoria Restaurant',
  description: 'Learn about Savoria Restaurant, our history, our team, and our commitment to quality food and exceptional service.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div 
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: 'url("/images/restaurant-interior.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl mb-8">
              A journey of passion, flavor, and exceptional dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-heading-white">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Savoria began as a small family restaurant with a passion for 
                authentic cuisine and exceptional dining experiences. Over the years, we&apos;ve 
                grown into one of the most beloved culinary destinations in the city.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey started when Chef Marco Rossi, after years of working in prestigious 
                restaurants across Europe, decided to bring his culinary expertise back to his 
                hometown. With a vision to create a restaurant that combines traditional recipes 
                with modern techniques, Savoria was born.
              </p>
              <p className="text-gray-600">
                Today, we continue to honor our commitment to quality, using only the freshest 
                ingredients sourced from local farmers and suppliers. Every dish tells a story, 
                and every meal creates a memory.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Savoria Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-gray-50 philosophy-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Philosophy</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Savoria, we believe that exceptional food is about more than just ingredients—it&apos;s about passion, 
              creativity, and respect for culinary traditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md philosophy-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Quality Ingredients</h3>
              <p className="text-gray-700 text-center">
                We source only the freshest, highest-quality ingredients from local farmers and suppliers.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md philosophy-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Culinary Innovation</h3>
              <p className="text-gray-700 text-center">
                We blend traditional recipes with modern techniques to create unique and unforgettable flavors.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md philosophy-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Exceptional Service</h3>
              <p className="text-gray-700 text-center">
                We believe that great food deserves to be paired with warm, attentive, and personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 team-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 section-heading-white">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The heart and soul of Savoria is our dedicated team of culinary professionals who bring their passion and expertise to every dish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chef */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md team-card">
              <div className="relative h-80">
                <Image
                  src="/images/chef.jpg"
                  alt="Chef Marco Rossi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Marco Rossi</h3>
                <p className="text-orange-500 font-medium mb-4">Head Chef & Founder</p>
                <p className="text-gray-700">
                  With over 20 years of experience in fine dining, Chef Marco brings his passion for traditional Italian cuisine with a modern twist to every dish at Savoria.
                </p>
              </div>
            </div>
            
            {/* Sous Chef */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md team-card">
              <div className="relative h-80">
                <Image
                  src="/images/testimonials/emma.jpg"
                  alt="Chef Sophia Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Sophia Chen</h3>
                <p className="text-orange-500 font-medium mb-4">Sous Chef</p>
                <p className="text-gray-700">
                  Sophia&apos;s innovative approach to fusion cuisine adds a unique dimension to our menu, blending Asian influences with European techniques.
                </p>
              </div>
            </div>
            
            {/* Restaurant Manager */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md team-card">
              <div className="relative h-80">
                <Image
                  src="/images/testimonials/michael.jpg"
                  alt="James Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">James Wilson</h3>
                <p className="text-orange-500 font-medium mb-4">Restaurant Manager</p>
                <p className="text-gray-700">
                  James ensures that every guest at Savoria receives exceptional service, creating a warm and welcoming atmosphere for all our diners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 