function Home({ setCurrentPage }) {
  const features = [
    { icon: "⚡", title: "Fast & Modern", desc: "Built with React for a smooth and fast experience." },
    { icon: "🎨", title: "Beautiful Design", desc: "Styled with Tailwind CSS for a clean, responsive look." },
    { icon: "📱", title: "Mobile Friendly", desc: "Looks great on phones, tablets, and desktops alike." },
  ];

  const testimonials = [
    { name: "Priya Sharma", role: "Student", text: "This website taught me so much about React and Tailwind!" },
    { name: "Rahul Verma", role: "Developer", text: "Clean code and great structure. A perfect starter template." },
    { name: "Anjali Singh", role: "Designer", text: "Love the simple and beautiful design choices here." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-yellow-300">MyWebsite</span> 🚀
        </h1>

        <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
          A beginner-friendly website built with React JS and Tailwind CSS.
        </p>

        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <button
            onClick={() => setCurrentPage("About")}
            className="bg-yellow-400 px-6 py-3 rounded-full"
          >
            Learn About Us
          </button>

          <button
            onClick={() => setCurrentPage("Contact")}
            className="border px-6 py-3 rounded-full"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded shadow">
              <div className="text-4xl">{f.icon}</div>
              <h3 className="font-bold mt-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Testimonials</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded">
              <p>"{t.text}"</p>
              <p className="mt-2 font-bold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;