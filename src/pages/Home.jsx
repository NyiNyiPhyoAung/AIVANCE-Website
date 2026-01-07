import React from "react";
import { FaRobot, FaCogs, FaChartLine, FaUsers } from "react-icons/fa";

function Home() {
  return (
    <div
      className="relative bg-gray-900 text-white pt-28 px-6 md:px-12 overflow-hidden"
      data-testid="home-page"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute w-[500px] h-[500px] bg-[#1E3A8A]/30 rounded-full blur-3xl animate-pulse-slow -top-32 -left-32"></div>
        <div className="absolute w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-3xl animate-pulse-slower -bottom-64 -right-32"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#3B82F6]/25 rounded-full blur-2xl animate-pulse top-1/4 right-10"></div>
      </div>

      {/* Hero Section */}
      <section className="text-center mb-28 relative z-10">
        <h1
          className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] animate-text bg-size-[200%_200%] mb-6 tracking-tight"
          data-testid="hero-title"
        >
          Welcome to AIVance Solutions
        </h1>
        <p
          className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8"
          data-testid="hero-subtitle"
        >
          Delivering cutting-edge AI, IoT, and custom software solutions to help businesses thrive in the digital era.
        </p>
        <button
          className="px-10 py-4 bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#1E3A8A] text-white font-bold rounded-3xl shadow-[0_0_50px_#2563EB] transition transform hover:scale-110 hover:shadow-[0_0_70px_#3B82F6]"
          data-testid="get-started-btn"
        >
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section
        className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24 relative z-10"
        data-testid="services-section"
      >
        {[
          {
            title: "AI Solutions",
            desc: "Automate business processes efficiently and gain a competitive edge.",
            icon: <FaRobot className="w-12 h-12 text-[#3B82F6]" />,
          },
          {
            title: "IoT & Automation",
            desc: "Smart devices for monitoring, analytics, and real-time automation.",
            icon: <FaCogs className="w-12 h-12 text-[#3B82F6]" />,
          },
          {
            title: "Custom Software",
            desc: "Tailored software solutions for your unique business requirements.",
            icon: <FaChartLine className="w-12 h-12 text-[#3B82F6]" />,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-4 hover:scale-105 duration-500"
            data-testid={`service-card-${index}`}
          >
            <div className="mb-6">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">{service.title}</h2>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </section>

      {/* Statistics Section */}
      <section
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-28 relative z-10 text-center"
        data-testid="stats-section"
      >
        {[
          { value: "500+", label: "Projects Delivered", icon: <FaChartLine className="mx-auto w-12 h-12 text-[#2563EB]" /> },
          { value: "120+", label: "Happy Clients", icon: <FaUsers className="mx-auto w-12 h-12 text-[#2563EB]" /> },
          { value: "10+", label: "Industries Served", icon: <FaCogs className="mx-auto w-12 h-12 text-[#2563EB]" /> },
          { value: "24/7", label: "Support", icon: <FaRobot className="mx-auto w-12 h-12 text-[#2563EB]" /> },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-500"
            data-testid={`stat-card-${index}`}
          >
            <div className="mb-2">{stat.icon}</div>
            <h3 className="text-2xl font-bold text-[#1E3A8A]">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="mb-28 relative z-10" data-testid="testimonials-section">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1E3A8A] mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", feedback: "AIVance Solutions transformed our business with innovative AI solutions." },
            { name: "Michael Lee", feedback: "Their IoT automation tools have streamlined our operations remarkably." },
            { name: "Sophie Kim", feedback: "Custom software tailored perfectly to our needs. Highly recommend!" },
          ].map((testi, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-500"
              data-testid={`testimonial-card-${index}`}
            >
              <p className="text-gray-300 mb-4">"{testi.feedback}"</p>
              <h4 className="font-bold text-[#2563EB]">{testi.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="text-center relative z-10 mb-32"
        data-testid="cta-section"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4" data-testid="cta-title">
          Ready to Transform Your Business?
        </h2>
        <p className="text-gray-300 mb-6" data-testid="cta-subtitle">
          Contact us today and let AIVance Solutions help you accelerate your digital journey.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-linear-to-r from-[#2563EB] via-[#3B82F6] to-[#1E3A8A] text-white font-bold rounded-3xl shadow-[0_0_50px_#2563EB] transition transform hover:scale-110 hover:shadow-[0_0_70px_#3B82F6]"
          data-testid="cta-contact-btn"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Home;
