
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Master from './components/Master/Master'
import Transaction from './components/Transaction/Transaction'
import AccountReports from './components/Account Reports/AccountReports'
import Home from './pages/Home'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Master/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/accountreports" element={<AccountReports/>}/>
    </Routes>

      </>
  )
}

export default App
