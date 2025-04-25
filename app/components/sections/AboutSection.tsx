import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/restaurant-interior.jpg"
              alt="Savoria Restaurant Interior"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6 section-heading-white">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, Savoria began as a small family restaurant with a passion for 
              authentic cuisine and exceptional dining experiences. Over the years, we&apos;ve 
              grown into one of the most beloved culinary destinations in the city.
            </p>
            <p className="text-gray-600 mb-6">
              Our philosophy is simple: use the freshest ingredients, honor traditional recipes, 
              and add a modern twist that delights our guests. Every dish tells a story, and 
              every meal creates a memory.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Meet Our Chef</h3>
              <div className="flex items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/images/chef.jpg"
                    alt="Head Chef"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Marco Rossi</h4>
                  <p className="text-gray-600">Head Chef</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 