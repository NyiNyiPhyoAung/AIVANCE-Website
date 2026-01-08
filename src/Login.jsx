import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./api"; // import the base URL

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // reset error

    try {
      const res = await axios.post(`${BASE_URL}/login`, { username, password });

      // Save token
      localStorage.setItem("token", res.data.token);

      // Decode JWT payload
      const payload = JSON.parse(atob(res.data.token.split(".")[1]));

      if (payload.role === "admin") {
        navigate("/admin"); // Admin dashboard
      } else {
        alert("Logged in as user");
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed");
      } else if (err.request) {
        setError("No response from server. Check backend URL.");
      } else {
        setError("Error: " + err.message);
      }
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border-t-4 border-blue-700 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-black">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-600 bg-red-100 px-3 py-2 rounded mb-4 text-center">
            {error}
          </p>
        )}

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl shadow-md transition transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
