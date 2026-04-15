import React from "react";

function Home() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="h-screen bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center flex items-center justify-center text-white">
        <div className="text-center bg-black/50 p-8 rounded-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Explore The World 🌍
          </h2>
          <p className="mb-6 text-lg">
            Discover amazing places with us
          </p>
          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Paris</h3>
              <p className="text-gray-600">City of love and lights</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img 
              src="https://images.unsplash.com/photo-1518544889281-68d4a8f4e07d"
              alt="Maldives"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Maldives</h3>
              <p className="text-gray-600">Beautiful beaches & resorts</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition">
            <img 
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
              alt="Dubai"
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Dubai</h3>
              <p className="text-gray-600">Luxury and modern city</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready for your next trip?
        </h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Book Now
        </button>
      </section>

    </div>
  );
}

export default Home;