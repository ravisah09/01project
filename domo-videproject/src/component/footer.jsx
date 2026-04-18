 import { useState } from "react";
 function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">🌟 MyWebsite</h3>
          <p className="text-sm">
            A beginner-friendly website built with React and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">🏠 Home</li>
            <li className="hover:text-white cursor-pointer transition-colors">👤 About</li>
            <li className="hover:text-white cursor-pointer transition-colors">📬 Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>📧 hello@mywebsite.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} MyWebsite. Built with ❤️ using React + Tailwind CSS.
      </div>
    </footer>
  );
}
export default Footer;