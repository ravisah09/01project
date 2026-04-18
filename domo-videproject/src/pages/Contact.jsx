import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email.";

    if (!form.message.trim())
      newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // error remove while typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "hello@mywebsite.com" },
    { icon: "📞", label: "Phone", value: "+91 98765 43210" },
    { icon: "📍", label: "Location", value: "New Delhi, India" },
    { icon: "🕐", label: "Hours", value: "Mon–Fri, 9AM – 6PM IST" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Contact Us 📬</h1>
        <p className="text-teal-100 mt-2">
          We'd love to hear from you!
        </p>
      </section>

      {/* Cards */}
      <section className="py-10 px-6 bg-gray-50">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, i) => (
            <div key={i} className="bg-white p-6 rounded-xl text-center shadow">
              <div className="text-3xl">{info.icon}</div>
              <p className="text-sm text-gray-400">{info.label}</p>
              <p className="font-medium">{info.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center bg-green-100 p-8 rounded-xl">
              <h2 className="text-xl font-bold text-green-700">
                Message Sent ✅
              </h2>
              <p>Thanks {form.name}!</p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
              >
                Send Again
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border p-3 rounded"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-3 rounded"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border p-3 rounded"
              />
              {errors.message && <p className="text-red-500">{errors.message}</p>}

              <button
                onClick={handleSubmit}
                className="w-full bg-teal-600 text-white p-3 rounded"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;