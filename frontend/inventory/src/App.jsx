import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import CreateAccountLedger from "./components/Master/CreateAccountLedger";
import SubLedgerMaster from "./components/Master/SubLedgerMaster";

{/* Inventory Reports */}
import InventoryItemList from "./components/Inventory Reports/InventoryItemList";
import ItemSearch from "./components/Inventory Reports/ItemSearch";

{/*System Security*/}
import MenuAccess from "./components/System Security/MenuAccess";


import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import About from "./components/About Software/About";


function App() {
  return (
    <div className='min-h-screen'>
      <hr/>
      <div className="flex w-full">
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/master/suboption1" element={<CreateAccountLedger />} />
          <Route path="/master/suboption2" element={<SubLedgerMaster />} />

          <Route path="/inventoryreports/suboption1" element={<ItemSearch />} />
          <Route path="/inventoryreports/suboption2" element={<InventoryItemList/>} />

          <Route path="/systemsecurity/suboptions1" element={<MenuAccess />} />
          <Route path="/about" element={<About />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
