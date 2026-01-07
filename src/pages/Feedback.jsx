import React from "react";
import { FaStar } from "react-icons/fa";

const feedbacks = [
  { name: "Daniel Carter", rating: 5, comment: "Excellent software, highly recommend!" },
  { name: "Ethan Lee", rating: 4, comment: "Great service and support." },
  { name: "Mike Lee", rating: 5, comment: "Professional and timely delivery." },
  { name: "Emily Carter", rating: 5, comment: "Amazing UI/UX, very modern and smooth!" },
  { name: "David Kim", rating: 4, comment: "Fast delivery and good communication." },
];

function CustomerFeedback() {
  return (
    <div
      className="relative min-h-screen bg-gray-900 text-white pt-28 px-6 md:px-12 overflow-hidden pb-40"
      data-testid="feedback-page"
    >
      {/* Futuristic glowing background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#1E3A8A]/30 blur-3xl rounded-full -top-32 -left-20 animate-pulse"></div>
        <div className="absolute w-[700px] h-[700px] bg-[#2563EB]/20 blur-[120px] rounded-full -bottom-40 -right-32 animate-pulse-slow"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/25 blur-2xl rounded-full top-1/3 right-10 animate-pulse-slower"></div>
      </div>

      {/* Page Title */}
      <h1
        className="text-center text-5xl md:text-6xl font-extrabold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-600 drop-shadow-lg"
        data-testid="feedback-title"
      >
        Customer Feedback
      </h1>

      {/* Feedback Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        data-testid="feedback-grid"
      >
        {feedbacks.map((f, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 hover:-translate-y-2 hover:shadow-[0_0_40px_#3B82F6] transition-all duration-500"
            data-testid={`feedback-card-${index}`}
          >
            <h2 className="text-2xl font-bold text-blue-300 mb-2">{f.name}</h2>

            {/* Stars */}
            <div className="flex mb-3">
              {[...Array(f.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-300 leading-relaxed">{f.comment}</p>

            {/* Decorative Glow */}
            <div className="mt-4 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">Share Your Experience</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Your reviews help us grow and improve. Let us know how we can serve you better.
        </p>

        <a
          href="/contact"
          className="px-10 py-3 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-full shadow-[0_0_40px_#2563EB] hover:scale-110 transition transform duration-300"
          data-testid="feedback-contact-btn"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default CustomerFeedback;
