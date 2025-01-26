import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import About from "./components/About Software/About";
import LoginPage from "./pages/Login";

{/* Master Options */}
import{
  CreateAccountLedger,
  SubLedgerMaster,
  AdditionalExpensesLedger,
  AccountReGrouping,
  DepartmentMaster,
  CounterSetting,
  PointCollectionSetting,
  ChangeAccountType,
  ServiceItemMaster,
  StockLocationMaster,
  DebitorAccountMaster,
  CreditorAccountMaster,
  UnitOfMeasurement,
  SubCategoryMaster,
  CategoryMaster,
  VendorMaster
} from "./components/Master/index"
{/* Master Options */}

{/* Transaction */}
import JournalVoucher from "./components/Transaction/JournalVoucher";
import ReceiptVoucher from "./components/Transaction/ReceiptVoucher";
import OpeningBalanceEntry from "./components/Transaction/OpeningBalanceEntry";
import OpeningStockEntry from "./components/Transaction/OpeningStockEntry";
import PaymentVoucher from "./components/Transaction/PaymentVoucher";
import PDCEntry from "./components/Transaction/PDCEntry";
{/* Transaction */}



{/* Inventory Reports */}
import{
  InventoryItemList,
  ItemSalesAreaSalesmanWise,
  ProductionConsumptionReport,
  BonusReceivedFromVendor,
  NoPurchaseSinceDateButStockAvi,
  VATLedgerOfPurchaseAndSales,
  NoSalesFromLastPurchase,
  PurchaseAndSalesMoreThanOneLakh,
  ItemStockInDetail,
  CustomerSalesReturnDetailInvoiceWise,
  CustomerSalesReturnCategoryWise,
  ItemPurchaseReturnInDetail,
  ItemSalesReturnInDetail,
  VendorPurchaseReturnDetailInvoiceWise,
  PrintPreviewPurchaseSalesandReturnBill,
  VendorPurchaseReturnCategoryWise,
  PurchaseSalesIssueBook,
  MateralizedViewsReport,
  InventoryItemStockPast
} from "./components/Inventory Reports/index"
{/* Inventory Reports */}

{/* Account Reports */}
import{
  GeneralLedgerProductDetail,
  PrintPreviewVoucher,
  BalanceConfirmation,
  ChartOfAccounts,
  ProfitAndLoss,
  DayBook,
  InvoiceWiseAgeingAnalysis,
  GeneralLedgerDetail,
  PriceChangeDetail,
  UserBaseCollection,
  AgeingAnalysisReports,
  BalanceSheet,
  TrialBalance
} from "./components/Account Reports/index"
{/* Account Reports */}

{/* System Security */}
import{
  ChangePassword,
  SignUpUser,
  MenuAccess,
  InvoiceGreetingNote,
  EndOfDay,
  BackupData,
  PrinterSetup,
  RID,
  ElectronicPaymentDetail,
  UserLogActivities,
  AuditActivityLogReport,
  PurchaseAndSalesBook
} from "./components/System Security/index"
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
          <Route path="/master/suboption6/suboption5" element={<CategoryMaster/>} />
          <Route path="/master/suboption6/suboption6" element={<SubCategoryMaster/>} />
          <Route path="/master/suboption6/suboption7" element={<UnitOfMeasurement/>} />
          <Route path="/master/suboption6/suboption8" element={<CreditorAccountMaster />} />
          <Route path="/master/suboption6/suboption9" element={<DebitorAccountMaster/>} />
          <Route path="/master/suboption6/suboption10" element={<ServiceItemMaster/>} />
          <Route path="/master/suboption6/suboption11" element={<StockLocationMaster/>} />
          <Route path="/master/suboption6/suboption3" element={<VendorMaster/>}/>

          {/*Master Options*/}

          {/*Transaction */}
          <Route path="/transaction/suboption1" element={<JournalVoucher/>} />
          <Route path="/transaction/suboption2" element={<ReceiptVoucher/>} />
          <Route path="/transaction/suboption3" element={<PaymentVoucher/>} />
          <Route path="/transaction/suboption6" element={<PDCEntry/>} />
          <Route path="/transaction/suboption15" element={<OpeningBalanceEntry/>} />
          <Route path="/transaction/suboption16" element={<OpeningStockEntry/>} />
          <Route path="/transaction/suboption10" element={<MaterialIssue/>} />
          <Route path="/transaction/suboption11" element={<GoodsReceiptByProduct/>} />
          <Route path="/transaction/suboption9" element={<InvoiceGenerate/>} />
          <Route path="/transaction/suboption10" element={<MaterialIssue/>} />

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
