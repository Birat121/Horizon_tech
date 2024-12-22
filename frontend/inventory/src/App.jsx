
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Master from './components/Master/Master'
import Transaction from './components/Transaction/Transaction'
import AccountReports from './components/Account Reports/AccountReports'
import Home from './pages/Home'
import Exit from './components/Exit/Exit'
import InventoryReports from './components/Inventory Reports/InventoryReports'
import SystemSecurity from './components/System Security/SystemSecurity'
import About from './components/About Software/About'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/master" element={<Master/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/accountreports" element={<AccountReports/>}/>
      <Route path="/inventoryreports" element={<InventoryReports/>}/>
      <Route path = "/systemsecurity" element={<SystemSecurity/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/exit" element={<Exit/>}/>
    </Routes>

      </>
  )
}

export default App
