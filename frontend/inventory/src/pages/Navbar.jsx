import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react"; // Import logout icon

const Navbar = () => {
  const navigate = useNavigate();
  const [organization, setOrganization] = useState("Loading...");
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

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <nav className="p-2 flex items-center border-none shadow-lg  ">
      {/* Empty div for spacing */}
      <div className="w-24"></div>

      {/* Organization Name (Centered) */}
      <div className="flex-1 text-center">
        <h2 className="text-2xl font-medium">{organization}</h2>
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
