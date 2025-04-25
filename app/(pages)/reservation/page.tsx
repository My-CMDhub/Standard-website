import ReservationForm from '../../components/ui/ReservationForm';

export const metadata = {
  title: 'Make a Reservation | Savoria Restaurant',
  description: 'Book a table at Savoria Restaurant. Enjoy fine dining with a modern twist in a comfortable atmosphere.',
};

export default function ReservationPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Reserve Your Table</h1>
            <p className="text-xl mb-8">
              Experience the perfect blend of exquisite cuisine, elegant ambiance, and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 bg-gray-50 reservation-section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Book Your Experience</h2>
              <p className="text-gray-700">
                Please fill out the form below to request a reservation. We&apos;ll confirm your booking via email or phone.
              </p>
            </div>
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg info-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Opening Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 11am - 10pm<br />
                Saturday - Sunday: 10am - 11pm
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg info-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
              <p className="text-gray-700">
                Phone: (+61) 0475 67890<br />
                Email: reservations@savoria.com
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg info-card">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Location</h3>
              <p className="text-gray-700">
                123 Main Street<br />
                City, State ZIP
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 