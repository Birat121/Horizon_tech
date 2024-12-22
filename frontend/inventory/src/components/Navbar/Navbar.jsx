import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h1>Horizon Tech</h1>
      <ul>
        
        <li><Link to="/master">Master</Link></li>
        <li><Link to="/transaction">Transaction</Link></li>
        <li><Link to="/accountreports">Account Reports</Link></li>
        <li><Link to="/inventoryreports">Inventory Reports</Link></li>
        <li><Link to="/systemsecurity">System Security</Link></li>
        <li><Link to="/about">About Software</Link></li>
        <li><Link to="/exit">Exit</Link></li>
      </ul>
    </div>
  )
}

export default Navbar