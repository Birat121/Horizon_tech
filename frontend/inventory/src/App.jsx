import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateAccountLedger from "./components/Master/CreateAccountLedger";
import SubLedgerMaster from "./components/Master/SubLedgerMaster";
<<<<<<< HEAD

{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
import ItemSearch from "./components/Inventory Reports/ItemSearch";

{/*System Security*/}
import MenuAccess from "./components/System Security/MenuAccess";


=======
import AdditionalExpensesLedger from "./components/Master/AdditionalExpensesLedger";
import AccountReGrouping from "./components/Master/AccountReGrouping";
import DepartmentMaster from "./components/Master/DepartmentMaster";
import CounterSetting from "./components/Master/CounterSetting";
import PointCollectionSetting from "./components/Master/PointCollectionSetting";
>>>>>>> c2619ddb636a6057cd73e100c9e07ef1c4d6d28f
import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import About from "./components/About Software/About";
import ChangeAccountType from "./components/Master/ChangeAccountType";
import ChangePassword from "./components/System Security/ChangePassword";
import SignUpUser from "./components/System Security/SignUpUser";


function App() {
  return (
    <div className='min-h-screen'>
      <hr/>
      <div className="flex w-full">
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px] my-8 text-gray-600 text-base'>
        <Routes>

          {/*Master Options*/}
          <Route path="/" element={<Home />} />
          <Route path="/master/suboption1" element={<CreateAccountLedger />} />
          <Route path="/master/suboption2" element={<SubLedgerMaster />} />
<<<<<<< HEAD

          <Route path="/inventoryreports/suboption1" element={<ItemSearch />} />
          <Route path="/inventoryreports/suboption2" element={<InventoryItemList/>} />

          <Route path="/systemsecurity/suboptions1" element={<MenuAccess />} />
=======
          <Route path="/master/suboption3" element={<AdditionalExpensesLedger />} />
          <Route path="/master/suboption4" element={<ChangeAccountType />} />
          <Route path="/master/suboption5" element={<AccountReGrouping/>} />
          <Route path="/master/suboption7" element={<DepartmentMaster />} />
          <Route path="/master/suboption8" element={<CounterSetting />} />
          <Route path="/master/suboption9" element={<PointCollectionSetting />} />



          {/*System Security */}
          <Route path="/systemsecurity/suboptions3" element={<ChangePassword/>} />
          <Route path="/systemsecurity/suboptions4" element={<SignUpUser />} />


>>>>>>> c2619ddb636a6057cd73e100c9e07ef1c4d6d28f
          <Route path="/about" element={<About />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
