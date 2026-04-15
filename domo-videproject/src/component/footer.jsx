import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">TravelGo</h2>
          <p className="text-gray-400 mt-4">
            Explore the world with us. Find best destinations and travel deals.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Flight Booking</a></li>
            <li><a href="#" className="hover:text-white">Hotel Booking</a></li>
            <li><a href="#" className="hover:text-white">Tour Packages</a></li>
            <li><a href="#" className="hover:text-white">Travel Guide</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-500">FB</a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-500">IG</a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-500">TW</a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400">
        © 2026 TravelGo. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;