import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import About from "./components/About Software/About";
import LoginPage from "./pages/Login";

{/* Master Options */}
import CreateAccountLedger from "./components/Master/CreateAccountLedger";
import SubLedgerMaster from "./components/Master/SubLedgerMaster";
import AdditionalExpensesLedger from "./components/Master/AdditionalExpensesLedger";
import AccountReGrouping from "./components/Master/AccountReGrouping";
import DepartmentMaster from "./components/Master/DepartmentMaster";
import CounterSetting from "./components/Master/CounterSetting";
import PointCollectionSetting from "./components/Master/PointCollectionSetting";
import ChangeAccountType from "./components/Master/ChangeAccountType";
{/* Master Options */}

{/* Transaction */}
import JournalVoucher from "./components/Transaction/JournalVoucher";
import ReceiptVoucher from "./components/Transaction/ReceiptVoucher";
import OpeningBalanceEntry from "./components/Transaction/OpeningBalanceEntry";
import OpeningStockEntry from "./components/Transaction/OpeningStockEntry";
import PaymentVoucher from "./components/Transaction/PaymentVoucher";
{/* Transaction */}



{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
import ItemSalesAreaSalesmanWise from "./components/Inventory Reports/ItemSalesAreaSalesmanWise";
import ProductionConsumptionReport from "./components/Inventory Reports/ProductionConsumptionReport";
import BonusReceivedFromVendor from "./components/Inventory Reports/BonusReceivedFromVendor";
import NoPurchaseSinceDateButStockAvi from "./components/Inventory Reports/NoPurchaseSinceDateButStockAvi";
import VATLedgerOfPurchaseAndSales from "./components/Inventory Reports/VATLedgerOfPurchaseAndSales";
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
import ChangePassword from "./components/System Security/ChangePassword";
import SignUpUser from "./components/System Security/SignUpUser";
import MenuAccess from "./components/System Security/MenuAccess";
import InvoiceGreetingNote from "./components/System Security/InvoiceGreetingNote";
import EndOfDay from "./components/System Security/EndOfDay";
import BackupData from "./components/System Security/BackupData";
import PrinterSetup from "./components/System Security/PrinterSetup";
import RID from "./components/System Security/IRDSetup/RID";
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

{/* System Security */}

function App() {
  return (
    <div className='min-h-screen'>
      <hr/>
      <div className="flex w-full">
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px] my-8 text-gray-600 text-base'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/login" element={<LoginPage />} />

          {/*Master Options*/}
          <Route path="/master/suboption1" element={<CreateAccountLedger />} />
          <Route path="/master/suboption2" element={<SubLedgerMaster />} />
          <Route path="/master/suboption3" element={<AdditionalExpensesLedger />} />
          <Route path="/master/suboption4" element={<ChangeAccountType />} />
          <Route path="/master/suboption5" element={<AccountReGrouping/>} />
          <Route path="/master/suboption7" element={<DepartmentMaster />} />
          <Route path="/master/suboption8" element={<CounterSetting />} />
          <Route path="/master/suboption9" element={<PointCollectionSetting />} />
          {/*Master Options*/}

          {/*Transaction */}
          <Route path="/transaction/suboption1" element={<JournalVoucher/>} />
          <Route path="/transaction/suboption2" element={<ReceiptVoucher/>} />
          <Route path="/transaction/suboption3" element={<PaymentVoucher/>} />
          <Route path="/transaction/suboption15" element={<OpeningBalanceEntry/>} />
          <Route path="/transaction/suboption16" element={<OpeningStockEntry/>} />

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
          {/*Inventory Reports */}

          {/*Account Reports */}
          <Route path="/accountreports/suboption1" element={<PrintPreviewVoucher/>} />
          <Route path="/accountreports/suboption7" element={<PriceChangeDetail/>} />
          <Route path="/accountreports/suboption9" element={<GeneralLedgerDetail/>} />
          <Route path="//accountreports/suboption10" element={<GeneralLedgerProductDetail/>} />
          {/*Account Reports */}

          {/*System Security */}
          <Route path="/systemsecurity/suboptions1" element={<MenuAccess />} />
          <Route path="/systemsecurity/suboptions2" element={<BackupData />} />
          <Route path="/systemsecurity/suboptions3" element={<ChangePassword/>} />
          <Route path="/systemsecurity/suboptions4" element={<SignUpUser />} />
          <Route path="/systemsecurity/suboptions5" element={<PrinterSetup />} />
          <Route path="/systemsecurity/suboptions6" element={<InvoiceGreetingNote />} />
          <Route path="/systemsecurity/suboptions8" element={<EndOfDay/>} />
          <Route path="/systemsecurity/suboptions9/suboption1" element={<RID/>} />
          {/*System Security */}
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
