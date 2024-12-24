import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Master from "./components/Master/Master";
import Transaction from "./components/Transaction/Transaction";
import AccountReports from "./components/Account Reports/AccountReports";
import Home from "./pages/Home";
import Exit from "./components/Exit/Exit";
import InventoryReports from "./components/Inventory Reports/InventoryReports";
import SystemSecurity from "./components/System Security/SystemSecurity";
import About from "./components/About Software/About";


function App() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Sidebar */}
      
      
      <hr/>
      <div className="flex w-full">
        <Sidebar/>
        <div className='w-[70%] mx-auto ml-[max(5vw,25px] my-8 text-gray-600 text-base'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/master" element={<Master />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/accountreports" element={<AccountReports />} />
          <Route path="/inventoryreports" element={<InventoryReports />} />
          <Route path="/systemsecurity" element={<SystemSecurity />} />
          <Route path="/about" element={<About />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </div>
    
    </div>
  );

}

export default App;
