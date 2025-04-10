import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUsers, FiUserPlus, FiTrash } from "react-icons/fi";

export default function AdminDashboard() {
  const [clients, setClients] = useState([]);
  const [tenantName, setTenantName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("list");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/admin/clients");
      setClients(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching clients:", error);
      setClients([]);
    } finally {
      setLoading(false);
    }
  };

  const createClient = async () => {
    try {
      await axios.post("/api/admin/create-client", { tenantName, username, password });
      setMessage({ type: "success", text: "Client created successfully!" });
      setTenantName("");
      setUsername("");
      setPassword("");
      fetchClients();
    } catch (error) {
      console.error("Error creating client:", error);
      setMessage({ type: "error", text: "Error creating client!" });
    }
  };

  const deleteClient = async (id) => {
    try {
      await axios.delete(`/api/admin/delete-client/${id}`);
      setMessage({ type: "success", text: "Client deleted successfully!" });
      fetchClients();
    } catch (error) {
      console.error("Error deleting client:", error);
      setMessage({ type: "error", text: "Error deleting client!" });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-gray-900 text-white flex flex-col p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Panel</h2>
        <ul>
          <li className={`flex items-center p-3 rounded-lg cursor-pointer ${activeTab === "list" ? "bg-gray-700" : "hover:bg-gray-800"}`} onClick={() => setActiveTab("list")}>
            <FiUsers className="mr-3" /> List Clients
          </li>
          <li className={`flex items-center p-3 mt-3 rounded-lg cursor-pointer ${activeTab === "add" ? "bg-gray-700" : "hover:bg-gray-800"}`} onClick={() => setActiveTab("add")}>
            <FiUserPlus className="mr-3" /> Add Client
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8">
        {message && (
          <div className={`p-4 mb-4 rounded-lg ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
            {message.text}
          </div>
        )}

        {activeTab === "add" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Client</h2>
            <div className="grid gap-4">
              <input type="text" placeholder="Client Name" value={tenantName} onChange={(e) => setTenantName(e.target.value)} className="border rounded-lg p-2 w-full" />
              <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="border rounded-lg p-2 w-full" />
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg p-2 w-full" />
              <button onClick={createClient} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Create</button>
            </div>
          </div>
        )}

        {activeTab === "list" && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Clients</h2>
            {loading ? (
              <p className="text-center text-gray-500">Loading clients...</p>
            ) : (
              <table className="w-full border-collapse border border-gray-200 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">Username</th>
                    <th className="border border-gray-300 px-4 py-2">Database</th>
                    <th className="border border-gray-300 px-4 py-2">Created Date</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client) => (
                    <tr key={client.TenantId} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">{client.TenantId}</td>
                      <td className="border border-gray-300 px-4 py-2">{client.TenantName}</td>
                      <td className="border border-gray-300 px-4 py-2">{client.Username}</td>
                      <td className="border border-gray-300 px-4 py-2">{client.DatabaseName}</td>
                      <td className="border border-gray-300 px-4 py-2">{new Date(client.CreatedDate).toLocaleDateString()}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <button onClick={() => deleteClient(client.TenantId)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 flex items-center">
                          <FiTrash className="mr-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
