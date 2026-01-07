// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomerFeedback from "./pages/Feedback";
import Articles from "./pages/Articles";
import Events from "./pages/Events";
import ContactUs from "./pages/Contact";
import Solutions from "./pages/Solutions";
import AdminDashboard from "./AdminPage";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Main content grows to fill space */}
        <main className="grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<CustomerFeedback />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
