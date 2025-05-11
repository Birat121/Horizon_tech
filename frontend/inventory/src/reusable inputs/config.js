

// config.js
const API_BASE_URL ="http://localhost:5143/api"; // Replace with your API base URL

export const API_URLS = {
  SUBCATEGORY: `${API_BASE_URL}/SubCategory/createSubCategory`,
  GET_CATEGORY_NAMES: `${API_BASE_URL}/SubCategory/categoryNames`,

  SAVE_COUNTER_SETTING: `${API_BASE_URL}/CounterSetting/createCount`,
 
  CreateDepartment: `${API_BASE_URL}/Department/CreateDepartment`,
  UpdateDepartment: `${API_BASE_URL}/Department/UpdateDepartment`,

  CreateUOM :  `${API_BASE_URL}/UOM/CreateUom`, 
  UpdateUOM : `${API_BASE_URL}/UOM/UpdateUom`,


  CreateCategory : `${API_BASE_URL}/Category/CreateCategory`,
  UpdateCategory : `${API_BASE_URL}/Category/UpdateCategory`,

  CreateServiceItem : `${API_BASE_URL}/ServiceItemMaster/CreateServiceItem`,
  UpdateServiceItem : `${API_BASE_URL}/ServiceItemMaster/UpdateServiceItem`,

  CreateVendormaster : `${API_BASE_URL}/vendor/createVendor`,

  CreateCustomer : `${API_BASE_URL}/customer/createCustomer`,


  CreateStockLoc : `${API_BASE_URL}/StockLocationMaster/CreateStockLoc`,
  UpdateStockLoc : `${API_BASE_URL}/StockLocationMaster/UpdateStockLoc`,
  GetLatestLocId : `${API_BASE_URL}/StockLocationMaster/GetLatestLocId`,

  CREATE_JOURNAL_VOUCHER: `${API_BASE_URL}/JournalVoucher/CreateJournalVoucher`,
  CreateReceiptVoucher : `${API_BASE_URL}/ReceiptVoucher/CreateReceiptVoucher`,

  CreateGroupAccount : `${API_BASE_URL}/CreateAccount/createAcc`,
  GetGroupCode : `${API_BASE_URL}/CreateAccount/getNextGroupCode`,
  UpdateAccount : `${API_BASE_URL}/AccountLedger/UpdateAccountLedger`,

  CreateSubGroupAccount : `${API_BASE_URL}/CreateAccount/createSubGroup`,
  GetGroupAccounts : `${API_BASE_URL}/CreateAccount/getGroupAccounts`,

  ChangeAccountType : `${API_BASE_URL}/ChangeAccountType/updateAccountType`,
  GetAccountTypes : `${API_BASE_URL}/ChangeAccountType/getAccountTypes`,
  

  GetGroupNames : `${API_BASE_URL}/ChangeAccountType/getGroupNames`,
  GetGroupCodeByName : `${API_BASE_URL}/ChangeAccountType/getGroupCodeByName`,

  BGEntry : `${API_BASE_URL}/BGEntry/createBg`,
  PARTY_LIST : `${API_BASE_URL}/BGEntry/getParties`,
  PDCEntry: `${API_BASE_URL}/PDCEntry/createPdc`,
  GET_NEXT_TRANSACTION_NO : `${API_BASE_URL}/BGEntry/getNextTransactionNo`,

  PARTY_LIST2 : `${API_BASE_URL}/PDCEntry/getParties`,
  GET_NEXT_PDC_TRANSACTION_NO : `${API_BASE_URL}/PDCEntry/getNextTransactionNo`,

   BARCODE_PRINT: `${API_BASE_URL}/BarcodeLabelPrint/BarcodePrint`,

   IMPORT_VENDOR : `${API_BASE_URL}/VendorList/vendorimport`,
   IMPORT_PRODUCT : `${API_BASE_URL}/ProductInfo/productimport`,
   IMPORT_COA : `${API_BASE_URL}/ChartsOfAccounts/chartimport`,
   IMPORT_OPENING_BALANCE : `${API_BASE_URL}/OpeningBalance/importOpeningBal`,
   IMPORT_STOCK : `${API_BASE_URL}/OpeningStock/importOpeningstk`,

  //system security
  
};



 
