import { useState } from "react";
import axios from "axios";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/admin/login", { username, password });
      if (response.data.success) {
        onLogin(); // Redirect to dashboard
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Error logging in");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
        {error && <p className="text-red-500 text-center text-sm mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full text-base hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Login
        </button>
      </div>
    </div>
  );
}
