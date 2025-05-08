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
  SAVE_COUNTER_SETTING: `${API_BASE_URL}/CounterSetting/createCount`,
 
  CreateDepartment: `${API_BASE_URL}/Department/CreateDepartment`,
  UpdateDepartment: `${API_BASE_URL}/Department/UpdateDepartment`,

  CreateUOM :  `${API_BASE_URL}/UOM/CreateUom`, 
  UpdateUOM : `${API_BASE_URL}/UOM/UpdateUom`,


  CreateCategory : `${API_BASE_URL}/Category/CreateCategory`,
  UpdateCategory : `${API_BASE_URL}/Category/UpdateCategory`,

  CreateServiceItem : `${API_BASE_URL}/ServiceItemMaster/CreateServiceItem`,
  UpdateServiceItem : `${API_BASE_URL}/ServiceItemMaster/UpdateServiceItem`,


  CreateStockLoc : `${API_BASE_URL}/StockLocationMaster/CreateStockLoc`,
  UpdateStockLoc : `${API_BASE_URL}/StockLocationMaster/UpdateStockLoc`,

  //system security



  
};



  SUBCATEGORY: `${API_BASE_URL}/SubCategory`
  // Add other URLs here if needed in future
