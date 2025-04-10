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
    <div className="flex items-center justify-center h-[80vh]">
      <div className="w-2/3 bg-white border-2 rounded-lg shadow-lg p-8"> {/* Increased width and padding */}
        <h2 className="text-2xl font-semibold p-3 rounded-md mb-4 text-center"> {/* Increased font size */}
          Backup and Restore
        </h2>
        <div className="border border-gray-300 rounded-lg p-6 mb-6"> {/* Increased padding */}
          <div className="text-gray-600 font-medium text-center mb-5 text-xl"> {/* Increased font size */}
            SQL Server Information
          </div>
          <div className="mb-6"> {/* Increased margin */}
            <label htmlFor="serverName" className="block text-gray-700 mb-3 text-lg"> {/* Increased font size */}
              Server Name:
            </label>
            <select
              id="serverName"
              value={serverName}
              onChange={(e) => setServerName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-300 text-lg" 
            >
              {serverOptions.map((server, index) => (
                <option key={index} value={server}>
                  {server}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6"> {/* Increased margin */}
            <label htmlFor="database" className="block text-gray-700 mb-3 text-lg"> {/* Increased font size */}
              Database:
            </label>
            <select
              id="database"
              value={database}
              onChange={(e) => setDatabase(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-300 text-lg" 
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
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 text-lg"> {/* Increased button size */}
            Backup
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackupRestore;
