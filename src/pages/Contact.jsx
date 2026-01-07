import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    title: "",
    details: "",
  });

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5050/contact", form);
      setSuccess(true);
      setMessage("Your inquiry has been successfully submitted!");
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        title: "",
        details: "",
      });
    } catch (err) {
      setSuccess(false);
      setMessage("Failed to submit inquiry. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1F] px-6 pt-36 pb-28 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full top-0 left-0 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-blue-400/20 blur-[150px] rounded-full bottom-0 right-0 animate-pulse-slow"></div>
        <div className="absolute w-[300px] h-[300px] bg-indigo-500/30 blur-[100px] rounded-full top-1/2 right-10 animate-slowfloat"></div>
      </div>

      {/* Content Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* Left Info Section */}
        <div className="hidden lg:block pt-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 mb-6">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tell us about your project, ideas, or business challenges.
            Our team at <span className="text-blue-400 font-semibold">AIVance Solutions</span>
            will get back to you with tailored solutions.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li>✔ Enterprise & custom software</li>
            <li>✔ AI, IoT & cloud-based solutions</li>
            <li>✔ Secure & scalable architectures</li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-[0_0_50px_#2563EB55] w-full animate-fadeUP"
        >
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 mb-6">
            Contact Us
          </h1>

          {message && (
            <p
              className={`text-center mb-6 font-semibold ${
                success ? "text-green-400" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["name", "email", "phone", "company", "country", "title"].map(
              (field, i) => (
                <input
                  key={i}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              )
            )}
          </div>

          {/* Details */}
          <textarea
            name="details"
            placeholder="Project / Inquiry Details"
            value={form.details}
            onChange={handleChange}
            required
            className="w-full mt-4 p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-40"
          />

          {/* Button */}
          <button
            className="w-full mt-8 p-4 bg-linear-to-r from-blue-600 via-blue-500 to-blue-700 text-white font-bold rounded-2xl shadow-[0_0_30px_#3B82F6] hover:shadow-[0_0_50px_#60A5FA] transition transform hover:scale-[1.05] flex items-center justify-center gap-3"
          >
            <FaPaperPlane className="text-xl" />
            Submit Inquiry
          </button>
        </form>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slowfloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
        .animate-slowfloat {
          animation: slowfloat 8s ease-in-out infinite;
        }
        @keyframes fadeUP {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUP {
          animation: fadeUP 1.1s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Contact;
