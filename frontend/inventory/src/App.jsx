import { Route, Routes,useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import About from "./components/About Software/About";
import LoginPage from "./pages/Login";
import Navbar from "./pages/Navbar";
import ErrorPage from "./pages/Error";


{/* Master Options */}
import CreateAccountLedger from "./components/Master/CreateAccountLedger";
import SubLedgerMaster from "./components/Master/SubLedgerMaster";
import AdditionalExpensesLedger from "./components/Master/AdditionalExpensesLedger";
import AccountReGrouping from "./components/Master/AccountReGrouping";
import DepartmentMaster from "./components/Master/DepartmentMaster";
import CounterSetting from "./components/Master/CounterSetting";
import PointCollectionSetting from "./components/Master/PointCollectionSetting";
import ChangeAccountType from "./components/Master/ChangeAccountType";
import ServiceItemMaster from "./components/Master/InventoryMaster/ServiceItemMaster";
import StockLocationMaster from "./components/Master/InventoryMaster/StockLocationMaster";
//import DebitorAccountMaster from "./components/Master/InventoryMaster/DebitorMasterForSPLSalesDiscount";
//import CreditorAccountMaster from "./components/Master/InventoryMaster/CreditMasterForSPLPurchseDiscount";
import UnitOfMeasurement from "./components/Master/InventoryMaster/UnitOfMeasurement";
import SubCategoryMaster from "./components/Master/InventoryMaster/SubCategoryMaster";
import CategoryMaster from "./components/Master/InventoryMaster/CategoryMaster";
import VendorMaster from "./components/Master/InventoryMaster/VendorMaster";
import CustomerMaster from "./components/Master/InventoryMaster/CustomerMaster";
import InventoryItemMaster from "./components/Master/InventoryMaster/InventroryItemmaster";

{/* Master Options */}

{/* Transaction */}
import JournalVoucher from "./components/Transaction/JournalVoucher";
import ReceiptVoucher from "./components/Transaction/ReceiptVoucher";
import OpeningBalanceEntry from "./components/Transaction/OpeningBalanceEntry";
import OpeningStockEntry from "./components/Transaction/OpeningStockEntry";
import PaymentVoucher from "./components/Transaction/PaymentVoucher";
import PDCEntry from "./components/Transaction/PDCEntry";
import BGEntry from  "./components/Transaction/BGEntry";
import PriceChange from "./components/Transaction/PriceChange";
import MaterialIssue from "./components/Transaction/MaterialIssue";
import GoodsReceiptByProduct from "./components/Transaction/GoodsReceiptByProduct";
import InvoiceGenerate from "./components/Transaction/InvoiceGenerate";
import VendorListExcel from "./components/Transaction/ImportDataFromExcel/VendorListExcel";
import CustomerListExcel from "./components/Transaction/ImportDataFromExcel/CustomerListExcel";
import ProductInformationExcel from "./components/Transaction/ImportDataFromExcel/ProductInformationExcel";
import ChartOfAccountExcel from "./components/Transaction/ImportDataFromExcel/ChartOfAccountExcel";
import ProductBatchExcel from './components/Transaction/ImportDataFromExcel/ProductBatchExcel';
import IssueReturn from "./components/Transaction/IssueReturn";

{/* Transaction */}

{/* Sales */}
import PointOfSales from "./Sales/PointOfSales";
import SalesReturn from "./Sales/SalesReturn";
{/* Sales */}

{/*Purchase*/}
import MaterialReceiptNote from "./Purchase/MaterialReceiptNote";
import PurchaseAdditionalCostEntry from "./Purchase/PurchaseAdditionCostEntry";
import PurchaseReturnEntry from "./Purchase/PurchaseReturn";



{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
import ItemSalesAreaSalesmanWise from "./components/Inventory Reports/ItemSalesAreaSalesmanWise";
import ProductionConsumptionReport from "./components/Inventory Reports/ProductionConsumptionReport";
import BonusReceivedFromVendor from "./components/Inventory Reports/BonusReceivedFromVendor";
import NoPurchaseSinceDateButStockAvi from "./components/Inventory Reports/NoPurchaseSinceDateButStockAvi";
import VATLedgerOfPurchaseAndSales from "./components/Inventory Reports/VATLedgerOfPurchaseAndSales";
import NoSalesFromLastPurchase from "./components/Inventory Reports/NoSalesFromLastPurchase";
import PurchaseAndSalesMoreThanOneLakh from "./components/Inventory Reports/PurchaseAndSalesMoreThanOneLakh";
import ItemStockInDetail from "./components/Inventory Reports/ItemStockInDetail";
import CustomerSalesReturnDetailInvoiceWise from "./components/Inventory Reports/CustomerSalesReturnDetailInvoiceWise";
import CustomerSalesReturnCategoryWise from "./components/Inventory Reports/CustomerSalesReturnCategoryWise";
import ItemPurchaseReturnInDetail from "./components/Inventory Reports/ItemPurchaseReturnInDetail";
import ItemSalesReturnInDetail from "./components/Inventory Reports/ItemSalesReturnInDetail";
import VendorPurchaseReturnDetailInvoiceWise from "./components/Inventory Reports/VendorPurchaseReturnDetailInvoiceWise";
import PrintPreviewPurchaseSalesandReturnBill from "./components/Inventory Reports/PrintPreviewPurchaseSalesandReturnBill";
import VendorPurchaseReturnCategoryWise from "./components/Inventory Reports/VendorPurchaseReturnCategoryWise";
import PurchaseSalesIssueBook from "./components/Inventory Reports/PurchaseSalesIssueBook";
import MateralizedViewsReport from "./components/Inventory Reports/CBMS Related Report/MateralizedViewsReport";
import InventoryItemStockPast from "./components/Inventory Reports/InventoryItemStockReport/InventoryItemStockPast";
import PurchaseSalesBookAnnex from "./components/Inventory Reports/PurchaseSalesBook";
import ItemSearch from "./components/Inventory Reports/ItemSearch";
import InventoryItemStockNew from "./components/Inventory Reports/InventoryItemStockReport/InventoryItemStockNew";
{/* Inventory Reports */}

{/* Account Reports */}
import GeneralLedgerProductDetail from "./components/Account Reports/GeneralLedgerProductDetail";
import PrintPreviewVoucher from "./components/Account Reports/PrintPreviewVoucher";
import BalanceConfirmation from "./components/Account Reports/BalanceConfirmation";
import ChartOfAccounts from "./components/Account Reports/ChartOfAccounts";
import ProfitAndLoss from "./components/Account Reports/ProfitAndLoss";
import DayBook from "./components/Account Reports/DayBook";
import InvoiceWiseAgeingAnalysis from "./components/Account Reports/InvoiceWiseAgeingAnalysis";
import GeneralLedgerDetail from "./components/Account Reports/GeneralLedgerDetail"
import PriceChangeDetail from "./components/Account Reports/PriceChangeDetail";
import UserBaseCollection from "./components/Account Reports/UserBaseCollection";
import AgeingAnalysisReports from "./components/Account Reports/AgeingAnalysisReports";
import BalanceSheet from "./components/Account Reports/BalanceSheet";
import TrialBalance from "./components/Account Reports/TrialBalance";
{/* Account Reports */}

{/* System Security */}

import ElectronicPaymentDetail from "./components/Inventory Reports/CBMS Related Report/ElectronicPaymentDetail";
import UserLogActivities from "./components/Inventory Reports/CBMS Related Report/UserLogActivities";
import AuditActivityLogReport from "./components/Inventory Reports/CBMS Related Report/AuditActivityLogReport";
import PurchaseAndSalesBook from "./components/Inventory Reports/CBMS Related Report/PurchaseAndSalesBook";
import ImportExcel from "./components/Master/InventoryMaster/InventoryItemMasterFromExcel";
import BarcodeLabelPrint from "./components/Transaction/BarcodeLabelPrint";
import Reports from "./Reports/Reports";
import SystemSecurity from "./components/System Security/SystemSecurity";



{/* System Security */}

function App() {
  const location = useLocation(); // Get the current route
  const isLoginPage = location.pathname === "/login";
  const isErrorPage = location.pathname === "*";

  return (
    <div className='min-h-screen'>
      {!isLoginPage && !isErrorPage && <Navbar />}
      <hr/>
      <div className="flex w-full">
      {!isLoginPage && !isErrorPage && <Sidebar />}
        
        <div className='w-8/12 mx-auto ml-[max(5vw,25px] my-4 text-gray-600 text-base'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reports" element={<Reports/>} />
        <Route path ='/systemsecurity' element={<SystemSecurity />} />
        <Route path="*" element={<ErrorPage />} />

          {/*Master Options*/}
          <Route path="/master/suboption1" element={<CreateAccountLedger />} />
          <Route path="/master/suboption2" element={<SubLedgerMaster />} />
          <Route path="/master/suboption3" element={<AdditionalExpensesLedger />} />
          <Route path="/master/suboption4" element={<ChangeAccountType />} />
          <Route path="/master/suboption5" element={<AccountReGrouping/>} />
          <Route path="/master/suboption7" element={<DepartmentMaster />} />
          <Route path="/master/suboption8" element={<CounterSetting />} />
          <Route path="/master/suboption9" element={<PointCollectionSetting />} />
          <Route path="/master/suboption6/suboption5" element={<CategoryMaster/>} />
          <Route path="/master/suboption6/suboption6" element={<SubCategoryMaster/>} />
          <Route path="/master/suboption6/suboption7" element={<UnitOfMeasurement/>} />
          <Route path="/master/suboption6/suboption10" element={<ServiceItemMaster/>} />
          <Route path="/master/suboption6/suboption11" element={<StockLocationMaster/>} />
          <Route path="/master/suboption6/suboption3" element={<VendorMaster/>}/>
          <Route path="/master/suboption6/suboption2" element={<ImportExcel/>}/>
          <Route path ="/master/suboption6/suboption4" element={<CustomerMaster/>}/>
          <Route path="/master/suboption6/suboption1" element={<InventoryItemMaster/>} />


          {/*Master Options*/}

          {/*Transaction */}
          <Route path="/transaction/suboption1" element={<JournalVoucher/>} />
          <Route path="/transaction/suboption2" element={<ReceiptVoucher/>} />
          <Route path="/transaction/suboption3" element={<PaymentVoucher/>} />
          <Route path="/transaction/suboption6" element={<PDCEntry/>} />
          <Route path="/transaction/suboption7" element={<BGEntry/>}/>
          <Route path="/transaction/suboption15" element={<OpeningBalanceEntry/>} />
          <Route path="/transaction/suboption16" element={<OpeningStockEntry/>} />
          <Route path="/transaction/suboption10" element={<MaterialIssue/>} />
          <Route path="/transaction/suboption11" element={<GoodsReceiptByProduct/>} />
          <Route path="/transaction/suboption9" element={<InvoiceGenerate/>} />
          <Route path="/transaction/suboption10" element={<MaterialIssue/>} />
          <Route path ="/transaction/suboption17/suboption4" element={<VendorListExcel/>}/>
          <Route path ="/transaction/suboption17/suboption5" element={<CustomerListExcel/>}/>
          <Route path ="/transaction/suboption17/suboption3" element={<ProductInformationExcel/>}/>
          <Route path='/transaction/suboption17/suboption1' element={<ChartOfAccountExcel/>}/>
          <Route path ='/transaction/suboption17/suboption8' element={<ProductBatchExcel/>}/>
          <Route path ='/transaction/suboption13' element={<BarcodeLabelPrint/>}/>
          <Route path="/transaction/suboption8" element={<PriceChange/>}/>
          <Route path="/transaction/suboption12" element={<IssueReturn/>}/>
          


          {/*Transaction */}

          {/*Sales */}
          <Route path='/sales/suboption1' element={<PointOfSales/>}/>
          <Route path='/sales/suboption2' element={<SalesReturn/>}/>
          
          {/*Sales */}

          {/*Purchase */}
          <Route path='/purchase/suboption1' element={<MaterialReceiptNote/>}/>
          <Route path='/purchase/suboption2' element={<PurchaseAdditionalCostEntry/>}/>
          <Route path='/purchase/suboption4' element={<PurchaseReturnEntry/>}/>



          {/*Account Reports */}
          <Route path="/accountreports/suboption2" element={<DayBook/>} />
          <Route path="/accountreports/suboption5" element={<ProfitAndLoss/>} />
          <Route path="/accountreports/suboption6" element={<UserBaseCollection/>} />
          <Route path="/accountreports/suboption8" element={<BalanceConfirmation/>} />
          <Route path="/accountreports/suboption12" element={<AgeingAnalysisReports/>} />
          <Route path="/accountreports/suboption4" element={<BalanceSheet/>} />
          <Route path="/accountreports/suboption3" element={<TrialBalance/>} />
          <Route path="/accountreports/suboption13" element={<InvoiceWiseAgeingAnalysis/>} />
          <Route path="/accountreports/suboption14" element={<ChartOfAccounts/>} />
          

          {/*Inventory Reports */}
          <Route path="/inventoryreports/suboption2" element={<InventoryItemList />} />
          <Route path="/inventoryreports/suboption3" element={<PrintPreviewPurchaseSalesandReturnBill/>} />
          <Route path="/inventoryreports/suboptions7" element={<VendorPurchaseReturnDetailInvoiceWise/>} />
          <Route path="/inventoryreports/suboptions8" element={<VendorPurchaseReturnCategoryWise/>} />
          <Route path="/inventoryreports/suboptions11" element={<ItemPurchaseReturnInDetail/>} />
          <Route path="/inventoryreports/suboptions13" element={<CustomerSalesReturnDetailInvoiceWise/>} />
          <Route path="/inventoryreports/suboptions14" element={<CustomerSalesReturnCategoryWise/>} />
          <Route path="/inventoryreports/suboptions15" element={<ItemSalesReturnInDetail/>} />
          <Route path="/inventoryreports/suboptions16" element={<ItemSalesAreaSalesmanWise />} />
          <Route path="/inventoryreports/suboptions17" element={<ProductionConsumptionReport />} />
          <Route path="/inventoryreports/suboptions18/suboption2" element={<InventoryItemStockPast />} />
          <Route path="/inventoryreports/suboptions19" element={<ItemStockInDetail/>} /> 
          <Route path="/inventoryreports/suboptions20" element={<PurchaseAndSalesMoreThanOneLakh/>} /> 
          <Route path="/inventoryreports/suboptions21" element={<VATLedgerOfPurchaseAndSales/>} />
          <Route path="/inventoryreports/suboptions22" element={<NoSalesFromLastPurchase/>} />
          <Route path="/inventoryreports/suboptions23" element={<NoPurchaseSinceDateButStockAvi />} />
          <Route path="/inventoryreports/suboptions24" element={<BonusReceivedFromVendor />} /> 
          <Route path="/inventoryreports/suboptions7" element={<VendorPurchaseReturnDetailInvoiceWise/>} />
          <Route path="/inventoryreports/suboption3" element={<PrintPreviewPurchaseSalesandReturnBill/>} />
          <Route path="/inventoryreports/suboptions8" element={<VendorPurchaseReturnCategoryWise/>} />
          <Route path="/inventoryreports/suboptions4" element={<PurchaseSalesIssueBook/>} />
          <Route path="/inventoryreports/suboptions12/suboption1" element={<MateralizedViewsReport/>} />
          <Route path="/inventoryreports/suboptions12/suboption2" element={<ElectronicPaymentDetail/>} />
          <Route path="/inventoryreports/suboptions12/suboption3" element={<UserLogActivities/>} />
          <Route path="/inventoryreports/suboptions12/suboption4" element={<AuditActivityLogReport/>} />
          <Route path="/inventoryreports/suboptions12/suboption5" element={<PurchaseAndSalesBook/>} />
          <Route path ='inventoryreports/suboption5' element={<PurchaseSalesBookAnnex/>} />
          <Route path="/inventoryreports/suboption1" element={<ItemSearch/>}/>
          <Route path="/inventoryreports/suboptions18/suboption1" element={<InventoryItemStockNew/>}/>
          {/*Inventory Reports */}

          {/*Account Reports */}
          <Route path="/accountreports/suboption1" element={<PrintPreviewVoucher/>} />
          <Route path="/accountreports/suboption7" element={<PriceChangeDetail/>} />
          <Route path="/accountreports/suboption9" element={<GeneralLedgerDetail/>} />
          <Route path="//accountreports/suboption10" element={<GeneralLedgerProductDetail/>} />
          {/*Account Reports */}

          

          
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
