import React, { useState } from "react";
import { FaClock, FaRobot, FaCogs, FaChartLine, FaUserCircle } from "react-icons/fa";

function Articles() {
    const allArticles = [
        {
          title: "AI Trends in 2026",
          date: "2025-12-01",
          summary: "Explore the upcoming trends in artificial intelligence that will transform businesses and industries.",
          author: "Alice Johnson",
          category: "AI",
          readTime: "6 min read",
          content: `Artificial intelligence is evolving rapidly in 2026. Companies are adopting AI for predictive analytics, automation, and customer personalization. Key trends include generative AI, ethical AI practices, AI-powered digital assistants, and AI in healthcare. Learn how businesses can leverage these trends to stay ahead.`,
         
        },
        {
          title: "IoT Innovations for Smart Cities",
          date: "2025-12-10",
          summary: "Discover how IoT devices and solutions are creating smarter and more efficient urban environments.",
          author: "Michael Lee",
          category: "IoT",
          readTime: "5 min read",
          content: `The Internet of Things is revolutionizing urban living. Smart sensors, connected vehicles, and intelligent energy systems are helping cities optimize traffic, reduce energy consumption, and improve safety. Explore real-world case studies and future IoT strategies for sustainable smart cities.`,
          
        },
        {
          title: "Custom Software for Industry 4.0",
          date: "2025-12-18",
          summary: "Learn how tailored software solutions can drive automation and efficiency in modern industries.",
          author: "Sophie Kim",
          category: "Custom Software",
          readTime: "7 min read",
          content: `Industry 4.0 emphasizes automation, IoT integration, and data-driven operations. Custom software helps manufacturing and logistics companies optimize workflows, monitor equipment, and implement predictive maintenance. Discover best practices for developing tailored solutions that fit unique industrial needs.`,
          
        },
        {
          title: "Machine Learning for Predictive Analytics",
          date: "2025-12-20",
          summary: "Harness the power of machine learning to make smarter business decisions and predictions.",
          author: "David Park",
          category: "AI",
          readTime: "8 min read",
          content: `Predictive analytics uses machine learning models to anticipate future trends, customer behavior, and operational risks. This article explores ML algorithms like regression, decision trees, and neural networks, with examples of their application in finance, healthcare, and marketing.`,
          
        },
        {
          title: "Industrial IoT Applications",
          date: "2025-12-22",
          summary: "Implementing IoT in manufacturing and logistics for enhanced operational efficiency.",
          author: "Emily Wang",
          category: "IoT",
          readTime: "5 min read",
          content: `Industrial IoT (IIoT) connects sensors, machinery, and software to optimize production lines and supply chains. Learn how predictive maintenance, real-time monitoring, and data analytics improve productivity and reduce costs in manufacturing industries.`,
          
        },
        {
          title: "Automation Tools for Businesses",
          date: "2026-01-05",
          summary: "Boost productivity using modern automation frameworks and low-code platforms.",
          author: "John Smith",
          category: "Automation",
          readTime: "6 min read",
          content: `Automation tools are essential for modern businesses to reduce manual work and increase efficiency. Low-code platforms, RPA (Robotic Process Automation), and workflow automation allow companies to streamline processes from marketing to HR. Discover top tools and practical implementation tips.`,
          
        },
        {
          title: "Generative AI in Content Creation",
          date: "2026-01-15",
          summary: "How AI-generated content is changing digital marketing, media, and education.",
          author: "Liam Chen",
          category: "AI",
          readTime: "6 min read",
          content: `Generative AI is transforming how we create content. From text and images to video, AI tools enable faster, cost-effective content creation while maintaining quality. Explore popular tools, case studies, and ethical considerations in AI-generated content.`,
         
        },
        {
          title: "Smart Energy Management with IoT",
          date: "2026-01-25",
          summary: "Optimizing energy consumption in buildings and cities using IoT sensors and analytics.",
          author: "Sara Lopez",
          category: "IoT",
          readTime: "5 min read",
          content: `IoT sensors help monitor energy usage in real time, enabling businesses and municipalities to reduce costs and carbon footprint. Learn about smart grids, energy analytics, and case studies of successful energy management.`,
          
        },
        {
          title: "Low-Code Platforms for Rapid Development",
          date: "2026-02-05",
          summary: "Accelerate software development using drag-and-drop low-code platforms.",
          author: "Mark Taylor",
          category: "Custom Software",
          readTime: "7 min read",
          content: `Low-code platforms allow developers and non-developers to create applications quickly. This article explores popular low-code tools, benefits for enterprise software, and real-life examples of reducing development time from months to weeks.`,
         
        },
      ];
      

  const categories = [
    { name: "All", icon: null },
    { name: "AI", icon: <FaRobot className="inline w-5 h-5 mr-2 text-[#2563EB]" /> },
    { name: "IoT", icon: <FaCogs className="inline w-5 h-5 mr-2 text-[#2563EB]" /> },
    { name: "Custom Software", icon: <FaChartLine className="inline w-5 h-5 mr-2 text-[#2563EB]" /> },
    { name: "Automation", icon: <FaRobot className="inline w-5 h-5 mr-2 text-[#2563EB]" /> },
  ];

  const tags = ["AI", "IoT", "Automation", "Machine Learning", "Custom Software", "Industry 4.0"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalArticle, setModalArticle] = useState(null);

  // Filter and search articles
  const filteredArticles = allArticles
    .filter(article => selectedCategory === "All" || article.category === selectedCategory)
    .filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-28 px-6 md:px-12 overflow-hidden">
      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6]">
        Latest Articles
      </h1>

      {/* Search */}
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 rounded-full text-gray-900 outline-none"
        />
      </div>

      {/* Categories */}
      <section className="mb-12 flex justify-center flex-wrap gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-2 rounded-full backdrop-blur-md transition hover:scale-105 ${
              selectedCategory === cat.name
                ? "bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white shadow-lg"
                : "bg-white/10 text-gray-200"
            }`}
          >
            {cat.icon}{cat.name}
          </button>
        ))}
      </section>

      {/* Articles Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredArticles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 duration-500"
          >
            <div className="flex items-center mb-3">
              <FaClock className="w-5 h-5 text-[#2563EB] mr-2" />
              <span className="text-gray-300">{article.date} • {article.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-[#1E3A8A] mb-2">{article.title}</h2>
            <p className="text-gray-300 mb-3">{article.summary}</p>
            <div className="flex items-center text-gray-300 text-sm mb-2">
              <FaUserCircle className="mr-2" /> {article.author}
            </div>
            <span className="text-gray-400 text-xs px-2 py-1 bg-white/10 rounded-full">{article.category}</span>
            <button
              onClick={() => setModalArticle(article)}
              className="mt-3 px-5 py-2 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform"
            >
              Read More
            </button>
          </div>
        ))}
      </section>

     

      {/* Read More Modal */}
      {modalArticle && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-gray-800 p-8 rounded-3xl max-w-2xl shadow-xl border border-white/20 overflow-y-auto max-h-[80vh]">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">{modalArticle.title}</h2>
            <p className="text-gray-300 mb-4">{modalArticle.content}</p>
            <button
              onClick={() => setModalArticle(null)}
              className="mt-4 px-8 py-2 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] rounded-full font-semibold text-white hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Newsletter / Subscribe */}
      <section className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">Subscribe to our Newsletter</h3>
        <p className="text-gray-300 mb-6">Get the latest articles and insights delivered directly to your inbox.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-l-full text-gray-900 outline-none"
        />
        <button className="px-6 py-2 rounded-r-full bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white font-semibold hover:scale-105 transition transform">
          Subscribe
        </button>
      </section>

      {/* Final CTA */}
      <section className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
          Stay Ahead in Technology
        </h2>
        <p className="text-gray-300 mb-6">
          Contact us today and let AIVance Solutions help you accelerate your digital journey.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#1E3A8A] text-white font-bold rounded-3xl shadow-[0_0_40px_#2563EB] transition transform hover:scale-110 hover:shadow-[0_0_60px_#3B82F6]"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

export default Articles;
