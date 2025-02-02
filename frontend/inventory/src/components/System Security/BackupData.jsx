import React, { useState, useEffect } from "react";

const BackupRestore = () => {
  const [serverName, setServerName] = useState("");
  const [database, setDatabase] = useState("");
  const [serverOptions, setServerOptions] = useState([]);
  const [databaseOptions, setDatabaseOptions] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchData = async () => {
      const serverData = ["Aayusha", "Server2", "Server3"]; // Replace with actual API call
      const databaseData = ["H_INV_IRD", "DB2", "DB3"]; // Replace with actual API call

      setServerOptions(serverData);
      setDatabaseOptions(databaseData);

      // Set default values
      setServerName(serverData[0]);
      setDatabase(databaseData[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-1/3 bg-white rounded-lg shadow-md p-6">
        <div className="text-lg font-semibold text-gray-700 text-center mb-6">
          Backup And Restore
        </div>
        <div className="border border-gray-300 rounded-lg p-4 mb-6">
          <div className="text-gray-600 font-medium text-center mb-4">
            SQL Server Information
          </div>
          <div className="mb-4">
            <label htmlFor="serverName" className="block text-gray-700 mb-2">
              Server Name:
            </label>
            <select
              id="serverName"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {serverOptions.map((server, index) => (
                <option key={index} value={server}>
                  {server}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="database" className="block text-gray-700 mb-2">
              Database:
            </label>
            <select
              id="database"
              value={database}
              onChange={(e) => setDatabase(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {databaseOptions.map((db, index) => (
                <option key={index} value={db}>
                  {db}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-preview text-white px-6 py-2 rounded-md hover:bg-preview-hover">
            Backup
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackupRestore;
