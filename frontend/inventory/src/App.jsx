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
import OpeningBalanceEntry from "./components/Transaction/OpeningBalanceEntry";
import OpeningStockEntry from "./components/Transaction/OpeningStockEntry";



{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
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
import AgeingAnalysisReports from "./components/Account Reports/AgeingAnalysisReports";
import BalanceSheet from "./components/Account Reports/BalanceSheet";
import TrialBalance from "./components/Account Reports/TrialBalance";
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
