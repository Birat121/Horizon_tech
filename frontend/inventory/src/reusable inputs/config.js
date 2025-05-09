

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

  CreateVendormaster : `${API_BASE_URL}/VendorMaster/CreateVendorMaster`,

  CreateCustomer : `${API_BASE_URL}/CustomerMaster/CreateCustomerMaster`,


  CreateStockLoc : `${API_BASE_URL}/StockLocationMaster/CreateStockLoc`,
  UpdateStockLoc : `${API_BASE_URL}/StockLocationMaster/UpdateStockLoc`,

  CREATE_JOURNAL_VOUCHER: `${API_BASE_URL}/JournalVoucher/CreateJournalVoucher`,
  CreateReceiptVoucher : `${API_BASE_URL}/ReceiptVoucher/CreateReceiptVoucher`,

  CreateAccount : `${API_BASE_URL}/AccountLedger/CreateAccountLedger`,
  UpdateAccount : `${API_BASE_URL}/AccountLedger/UpdateAccountLedger`,

  ChangeAccountType : `${API_BASE_URL}/AccountLedger/ChangeAccountType`,

  BGEntry : `${API_BASE_URL}/BGEntry/CreateBGEntry`,
  PDCEntry: `${API_BASE_URL}/PDCEntry/CreatePDCEntry`,

  //system security
  
};



 
