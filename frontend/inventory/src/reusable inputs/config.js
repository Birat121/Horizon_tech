import CounterSetting from "../components/Master/CounterSetting";
import DepartmentMaster from "../components/Master/DepartmentMaster";
import UnitOfMeasurement from "../components/Master/InventoryMaster/UnitOfMeasurement";
import CategoryMaster from "../components/Master/InventoryMaster/CategoryMaster";
import ServiceItemMaster from "../components/Master/InventoryMaster/ServiceItemMaster";
import StockLocationMaster from "../components/Master/InventoryMaster/StockLocationMaster";

// config.js
const API_BASE_URL ="http://localhost:5143/api"; // Replace with your API base URL

export const API_URLS = {
  SUBCATEGORY: `${API_BASE_URL}/SubCategory`,
  // Add other URLs here if needed in future
};
