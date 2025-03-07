import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // Import logout icon

const Navbar = () => {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState("Loading...");
  const [currentTime, setCurrentTime] = useState(new Date());
  const userId = localStorage.getItem("userId"); // Get logged-in user ID

  useEffect(() => {
    const fetchOrganization = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch organization");

        const data = await response.json();
        setOrganization(data.organizationName);
      } catch (error) {
        console.error(error);
        setOrganization("Organization Not Found");
      }
    };

    if (userId) {
      fetchOrganization();
    } else {
      setOrganization("Unknown Organization");
    }
  }, [userId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update time every second

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="p-2 flex items-center justify-between border-none shadow-lg w-full bg-[#c1d8c1] ">
      {/* Organization Name & Date-Time Box */}
      <div className="flex-1 flex justify-center">
        <div className="
        flex items-center gap-4">
          <h2 className="text-2xl font-semibold text-gray-700">{organization}</h2>
          <p className="text-lg text-gray-600">{currentTime.toLocaleString()}</p>
        </div>
      </div>

      {/* Logout Button (Right Aligned) */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
      >
        <LogOut size={20} /> {/* Logout icon */}
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
