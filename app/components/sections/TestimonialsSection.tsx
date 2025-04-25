'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: '/images/testimonials/sarah.jpg',
    role: 'Food Critic',
    rating: 5,
    text: 'The attention to detail in every dish is remarkable. The flavors are perfectly balanced, and the presentation is stunning.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    image: '/images/testimonials/michael.jpg',
    role: 'Regular Customer',
    rating: 5,
    text: "I've been coming here for years, and the quality has never wavered. The staff treats you like family.",
  },
  {
    id: 3,
    name: 'Emma Davis',
    image: '/images/testimonials/emma.jpg',
    role: 'Food Blogger',
    rating: 5,
    text: 'A true culinary gem! The fusion of traditional and modern techniques creates unique and unforgettable dishes.',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 section-heading-white">What Our Guests Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued guests have to say about their dining experience at Savoria.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gray-800 rounded-lg p-8 text-center">
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors
                    ${index === activeIndex ? 'bg-orange-500' : 'bg-gray-600'}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 