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

{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
{/* Inventory Reports */}

{/* System Security */}
import ChangePassword from "./components/System Security/ChangePassword";
import SignUpUser from "./components/System Security/SignUpUser";
import MenuAccess from "./components/System Security/MenuAccess";
import InvoiceGreetingNote from "./components/System Security/InvoiceGreetingNote";
import EndOfDay from "./components/System Security/EndOfDay";
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

          {/*Inventory Reports */}
          <Route path="/inventoryreports/suboption2" element={<InventoryItemList />} />
          {/*Inventory Reports */}

          {/*System Security */}
          <Route path="/systemsecurity/suboptions1" element={<MenuAccess />} />
          <Route path="/systemsecurity/suboptions3" element={<ChangePassword/>} />
          <Route path="/systemsecurity/suboptions4" element={<SignUpUser />} />
          <Route path="/systemsecurity/suboptions6" element={<InvoiceGreetingNote />} />
          <Route path="/systemsecurity/suboptions8" element={<EndOfDay/>} />
          {/*System Security */}
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
