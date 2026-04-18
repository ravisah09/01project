function About() {
  const team = [
    { name: "Arjun Mehta", role: "Founder & Developer", emoji: "👨‍💻" },
    { name: "Sneha Kapoor", role: "UI/UX Designer", emoji: "👩‍🎨" },
    { name: "Vikram Nair", role: "Content Writer", emoji: "✍️" },
  ];

  const skills = [
    { name: "React JS", percent: 90 },
    { name: "Tailwind CSS", percent: 85 },
    { name: "JavaScript", percent: 80 },
    { name: "HTML & CSS", percent: 95 },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-3">About Us 👤</h1>
        <p className="text-indigo-200 text-lg max-w-xl mx-auto">
          Learn who we are, what we do, and why we love building for the web.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We started MyWebsite as a learning project to help beginners understand how
              to build modern web applications using React and Tailwind CSS.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our goal is simple — make web development approachable, fun, and creative
              for everyone, whether you're just starting out or looking to level up.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every line of code is written with clarity and simplicity in mind, so
              you can learn just by reading it.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-2xl p-8 text-center border border-indigo-100">
            <div className="text-7xl mb-4">🧑‍🚀</div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Building the Future
            </h3>
            <p className="text-gray-500 text-sm">
              One React component at a time, we're making the web a better place.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Our Skills
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Technologies we love working with
          </p>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">
                    {skill.name}
                  </span>
                  <span className="text-indigo-600 font-semibold">
                    {skill.percent}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-600 h-3 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Meet the Team
          </h2>
          <p className="text-gray-500 mb-10">
            The people behind the project
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-lg font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-indigo-500 text-sm mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "💡",
              title: "Innovation",
              desc: "Always trying new things and finding better ways.",
            },
            {
              icon: "🤝",
              title: "Community",
              desc: "We believe in helping others learn and grow together.",
            },
            {
              icon: "🎯",
              title: "Quality",
              desc: "Every project is done with care and attention to detail.",
            },
          ].map((val, i) => (
            <div key={i} className="bg-indigo-600 rounded-2xl p-6">
              <div className="text-4xl mb-3">{val.icon}</div>
              <h3 className="font-bold text-lg mb-2">{val.title}</h3>
              <p className="text-indigo-200 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;