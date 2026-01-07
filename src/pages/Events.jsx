import React, { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaGlobe, FaMicrochip } from "react-icons/fa";

function Events() {
    const allUpcomingEvents = [
        {
          name: "TechNova Expo 2025",
          date: "2025-12-20",
          time: "10:00 AM - 6:00 PM",
          location: "Tech Hall A, City Center",
          category: "Expo",
          details:
            "Join innovators and global tech enthusiasts. Experience futuristic tech demos, AI showcases, and exclusive launches.",
        },
        {
          name: "AI Workshop",
          date: "2026-01-10",
          time: "9:00 AM - 5:00 PM",
          location: "Innovation Hub, Tech Park",
          category: "Workshop",
          details:
            "Hands-on training for students & professionals. Build real AI models, automation tools, and experience guided coding sessions.",
        },
        {
          name: "Tech Summit 2026",
          date: "2026-02-15",
          time: "8:00 AM - 7:00 PM",
          location: "Grand Conference Hall",
          category: "Conference",
          details:
            "Featuring world-class speakers, researchers, and CEOs. Explore AI ethics, future technologies, and advanced engineering talks.",
        },
      
        // ⭐ NEW EVENTS ADDED BELOW ⭐
      
        {
          name: "Future of AI 2026",
          date: "2026-03-12",
          time: "9:00 AM - 3:00 PM",
          location: "Skyline Auditorium",
          category: "AI",
          details:
            "Deep dive into generative AI, autonomous systems, and future predictions from global AI leaders.",
        },
        {
          name: "IoT World Forum",
          date: "2026-04-05",
          time: "10:00 AM - 5:00 PM",
          location: "Smart City Convention Center",
          category: "IoT",
          details:
            "Explore connected cities, embedded systems, and smart automation with top IoT companies.",
        },
        {
          name: "AI Bootcamp for Students",
          date: "2026-05-18",
          time: "8:30 AM - 4:00 PM",
          location: "Tech Academy Lab 2",
          category: "Workshop",
          details:
            "A fully guided bootcamp for beginners to build AI models, chatbots, automation flows, and more.",
        },
        {
          name: "CyberTech Conference 2026",
          date: "2026-06-22",
          time: "9:00 AM - 6:00 PM",
          location: "Cyber Defense Hall",
          category: "Conference",
          details:
            "Discuss cybersecurity, threat intelligence, and modern digital defense mechanisms.",
        },
        {
          name: "Smart Automation Expo",
          date: "2026-07-10",
          time: "10:00 AM - 7:00 PM",
          location: "Robotics Exhibition Hall",
          category: "Expo",
          details:
            "Showcasing latest robotics, automated systems, drones, and industrial machinery.",
        },
        {
          name: "Global AI Conference 2026",
          date: "2026-08-15",
          time: "9:00 AM - 5:00 PM",
          location: "International Summit Arena",
          category: "AI",
          details:
            "Experience global AI research, innovation talks, academic presentations, and future trends.",
        },
        {
          name: "IoT Developer Workshop",
          date: "2026-09-03",
          time: "10:00 AM - 4:00 PM",
          location: "Tech Studio Lab",
          category: "IoT",
          details:
            "Hands-on session on microcontrollers, sensors, embedded devices, and IoT networking.",
        },
        {
          name: "AI × Robotics Fusion Expo",
          date: "2026-10-20",
          time: "11:00 AM - 6:00 PM",
          location: "Futuristic Dome Center",
          category: "Expo",
          details:
            "Discover robots powered by AI, smart assistants, automation systems, and interactive demos.",
        },
        {
          name: "Tech Leadership Summit",
          date: "2026-11-08",
          time: "9:30 AM - 6:30 PM",
          location: "Executive Grand Hall",
          category: "Conference",
          details:
            "Top CEOs and industry leaders share insights on engineering, innovation, and digital strategy.",
        },
      ];
      

  const pastEvents = [
    {
      name: "IoT Conference 2025",
      date: "2025-10-12",
      summary: "Showcased modern IoT innovations, smart environments, and global networking sessions.",
    },
    {
      name: "AI Hackathon 2025",
      date: "2025-09-05",
      summary: "Participants built cutting-edge AI applications within 48 hours with extreme creativity.",
    },
    {
      name: "Robotics Expo 2024",
      date: "2024-12-15",
      summary: "Displayed humanoid robots, smart automation systems, and interactive demos.",
    },
  ];

  const attendeeTestimonials = [
    {
      name: "Sophia Nguyen",
      comment: "Absolutely incredible! The Expo opened my mind to new possibilities in AI and automation.",
    },
    {
      name: "Michael Chan",
      comment: "Well-organized and informative. Networking here helped me land my internship.",
    },
    {
      name: "Aarav Patel",
      comment: "A must-attend for developers and students. The workshops are top-tier!",
    },
  ];

  const stats = [
    { label: "Participants", value: "12,000+", icon: <FaUsers className="text-blue-400 text-3xl"/> },
    { label: "Countries", value: "32+", icon: <FaGlobe className="text-blue-400 text-3xl"/> },
    { label: "Tech Exhibits", value: "140+", icon: <FaMicrochip className="text-blue-400 text-3xl"/> },
  ];

  const categories = ["All", "AI", "IoT", "Workshop", "Conference", "Expo"];

  const galleryImages = [
    "/expo.avif",
    "/expo1.avif",
    "/expo2.jpg",
    "/expo3.webp",
    "/expo4.webp",
    "/expo5.avif",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [newsletterMsg, setNewsletterMsg] = useState("");
  const [modalEvent, setModalEvent] = useState(null);

  const filteredEvents =
    selectedCategory === "All"
      ? allUpcomingEvents
      : allUpcomingEvents.filter((e) => e.category === selectedCategory);

  const subscribe = () => {
    if (!email.includes("@")) {
      setNewsletterMsg("❌ Please enter a valid email!");
    } else {
      setNewsletterMsg("✅ Subscribed successfully!");
      setEmail("");
    }
    setTimeout(() => setNewsletterMsg(""), 3000);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-28 pb-32 px-6 md:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-[400px] h-[400px] bg-[#1E3A8A]/30 rounded-full blur-3xl animate-pulse-slow -top-32 -left-20"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-3xl animate-pulse-slower -bottom-64 -right-32"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#3B82F6]/25 rounded-full blur-2xl animate-pulse top-1/3 right-10"></div>
      </div>

      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
        Upcoming Events
      </h1>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center hover:scale-105 transition">
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-blue-300 mt-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Category Filter */}
      <section className="mb-12 flex justify-center flex-wrap gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full backdrop-blur-md transition hover:scale-105 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white shadow-lg"
                : "bg-white/10 text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* Featured Events */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6 text-center">
          Featured Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition"
            >
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="w-5 h-5 text-[#2563EB] mr-2" />
                <span className="text-gray-300">{event.date}</span>
              </div>

              <div className="flex items-center mb-2">
                <FaClock className="w-5 h-5 text-[#2563EB] mr-2" />
                <span className="text-gray-300">{event.time}</span>
              </div>

              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-5 h-5 text-[#2563EB] mr-2" />
                <span className="text-gray-300">{event.location}</span>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{event.name}</h3>

              <span className="text-gray-400 text-xs px-2 py-1 bg-white/10 rounded-full">
                {event.category}
              </span>

              <button
                onClick={() => setModalEvent(event)}
                className="mt-4 w-full px-6 py-2 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white rounded-full hover:scale-105 transition"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
<section className="mb-20">
  <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-6 text-center">
    Past Events
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {pastEvents.map((event, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition"
      >
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="w-5 h-5 text-[#2563EB] mr-2" />
          <span className="text-gray-300">{event.date}</span>
        </div>

        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2">{event.name}</h3>
        <p className="text-gray-300">{event.summary}</p>
      </div>
    ))}
  </div>
</section>


      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">What Attendees Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attendeeTestimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 hover:scale-105 transition">
              <h3 className="text-xl font-bold text-blue-300 mb-2">{t.name}</h3>
              <p className="text-gray-300">{t.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">Event Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-32 bg-gray-700 rounded-xl overflow-hidden hover:scale-110 transition shadow-lg"
              style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            ></div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-blue-300 text-center mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <h3 className="font-bold text-blue-400">Is registration required?</h3>
            <p className="text-gray-300">Yes, registration is required for all major events.</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <h3 className="font-bold text-blue-400">Are workshops beginner-friendly?</h3>
            <p className="text-gray-300">Absolutely! We have beginner and advanced sessions.</p>
          </div>

          <div className="bg-white/10 p-4 rounded-xl border border-white/20">
            <h3 className="font-bold text-blue-400">Can I get a participation certificate?</h3>
            <p className="text-gray-300">Yes, certificates are provided for workshops and hackathons.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="text-center mb-20">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-300 mb-6">Subscribe to get notifications about upcoming events and workshops.</p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-l-full text-gray-900 outline-none"
          />
          <button
            onClick={subscribe}
            className="px-6 py-2 rounded-r-full bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white font-semibold hover:scale-105 transition"
          >
            Subscribe
          </button>
        </div>

        {newsletterMsg && (
          <p className="mt-3 text-sm text-blue-300">{newsletterMsg}</p>
        )}
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Don’t Miss Our Events
        </h2>
        <p className="text-gray-300 mb-6">Contact us today and stay ahead in AI, IoT, and software innovation.</p>

        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#1E3A8A] text-white font-bold rounded-3xl shadow-[0_0_40px_#2563EB] hover:scale-110 transition"
        >
          Contact Us
        </a>
      </section>

      {/* MODAL */}
      {modalEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-gray-800 p-8 rounded-3xl max-w-xl text-center shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              {modalEvent.name}
            </h2>
            <p className="text-gray-300 mb-4">{modalEvent.details}</p>
            <button
              onClick={() => setModalEvent(null)}
              className="mt-4 px-8 py-2 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] rounded-full font-semibold text-white hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Events;
