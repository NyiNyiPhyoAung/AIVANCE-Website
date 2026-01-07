import React from "react";
import {
  FaRobot,
  FaCogs,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaIndustry,
} from "react-icons/fa";

function ProductSolutions() {
  const solutions = [
    {
      title: "AI-Powered Virtual Assistant",
      icon: <FaRobot className="text-4xl text-blue-400" />,
      description:
        "Intelligent AI assistants designed to automate customer interactions, internal operations, and knowledge access across enterprise systems.",
      benefits: [
        "24/7 automated customer support",
        "Reduced operational costs",
        "Context-aware natural language responses",
      ],
    },
    {
      title: "Custom Software Development",
      icon: <FaCogs className="text-4xl text-blue-400" />,
      description:
        "End-to-end custom software solutions engineered to align with business workflows, industry requirements, and long-term scalability.",
      benefits: [
        "Tailored system architecture",
        "Secure and scalable platforms",
        "Web, mobile, and enterprise applications",
      ],
    },
    {
      title: "Data Analytics & Predictive Insights",
      icon: <FaChartLine className="text-4xl text-blue-400" />,
      description:
        "Advanced analytics solutions that convert complex data into actionable insights, supporting smarter and faster decision-making.",
      benefits: [
        "Real-time dashboards",
        "Predictive analytics models",
        "Improved business intelligence",
      ],
    },
    {
      title: "Cloud & IoT Integration",
      icon: <FaCloud className="text-4xl text-blue-400" />,
      description:
        "Cloud-native and IoT-enabled solutions that support digital transformation, smart monitoring, and connected industrial systems.",
      benefits: [
        "Scalable cloud infrastructure",
        "IoT device integration",
        "High availability and performance",
      ],
    },
    {
      title: "Cybersecurity & Compliance Solutions",
      icon: <FaShieldAlt className="text-4xl text-blue-400" />,
      description:
        "Comprehensive cybersecurity strategies to protect systems, data, and infrastructure while meeting regulatory and compliance standards.",
      benefits: [
        "Risk assessment & mitigation",
        "Secure system design",
        "Compliance-ready solutions",
      ],
    },
  ];

  const industryProjects = [
    {
      industry: "Healthcare",
      description:
        "Developed secure patient data management systems and AI-driven analytics tools to improve operational efficiency and data accuracy.",
    },
    {
      industry: "Retail & E-Commerce",
      description:
        "Implemented inventory management and sales analytics platforms to optimize stock levels and improve customer experience.",
    },
    {
      industry: "Manufacturing",
      description:
        "Delivered IoT-based monitoring systems and automation dashboards to enhance production efficiency and predictive maintenance.",
    },
    {
      industry: "Finance",
      description:
        "Designed secure data analytics and reporting solutions to support risk analysis, compliance, and decision-making.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-28 px-6 md:px-12 overflow-hidden">
      {/* Page Title */}
      <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
        Software & Product Solutions
      </h1>

      <p className="text-center text-gray-300 max-w-4xl mx-auto mb-20">
        Our website provides comprehensive details of the software solutions we
        offer to customers, showcasing innovative technologies and highlighting
        successful solutions delivered across multiple industries.
      </p>

      {/* Solutions Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_40px_#2563EB] transition duration-500"
          >
            <div className="mb-4">{solution.icon}</div>
            <h2 className="text-2xl font-bold text-blue-300 mb-3">
              {solution.title}
            </h2>
            <p className="text-gray-300 mb-4">{solution.description}</p>
            <ul className="text-gray-400 text-sm space-y-2">
              {solution.benefits.map((benefit, i) => (
                <li key={i}>• {benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Industry Highlights */}
      <section className="mb-24">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-400 mb-12">
          Industry Solutions Delivered
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {industryProjects.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <FaIndustry className="text-3xl text-blue-400 mr-4" />
                <h3 className="text-2xl font-bold text-blue-300">
                  {item.industry}
                </h3>
              </div>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Ready to Build Your Next Solution?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Partner with AIVance Solutions to design, develop, and deploy secure,
          scalable, and future-ready software solutions.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-linear-to-r from-[#2563EB] via-[#3B82F6] to-[#1E3A8A] rounded-3xl font-bold shadow-[0_0_40px_#2563EB] hover:scale-110 transition transform"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default ProductSolutions;
