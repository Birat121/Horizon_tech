import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';




const Navbar = () => {

  const[isOpen, setIsOpen] = useState(false); //Use Mobile Menu
  const [activeDropdown, setActiveDropdown] = useState(null); // Active dropdown state

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  

  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-6 my-4 flex items-center justify-between ">
        {/* Logo Section */}
        <Link to="/">
              <h1 className="text-3xl  font-bold hover:text-gray-400">Horizon Tech</h1>
            </Link>

        {/* Hamburger Menu */}
        
          <button onClick={toggle} className="text-2xl lg:hidden focus:outline-none" aria-label='Toggle navigation'>
            <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
       

        
        {/* Navigation Links */}
        <ul
          className={`lg:flex flex-col lg:flex-row  lg:space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}
        >
          <li className="group relative">
            <Link to="/master" >
          <button
              onClick={() => toggleDropdown('master')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Master
            </button>
            </Link>
            {/* Dropdown Example */}
            {activeDropdown === 'master' && (           
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption1">Create Account Ledger</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Sub Ledger Master</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption3">Additional Expenses Ledger Mapping</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption4">Change Account Type</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption5">Account Re-Grouping</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption6">Inventory Master</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption7">Department Master</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption8">Counter Setting</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption9">Point Collection Setting</Link>
              </li>
            </ul>
            )}
          </li>
          <li className='group relative'>
          <button
              onClick={() => toggleDropdown('transaction')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Transaction
            </button>
            {activeDropdown === 'transaction' && (
            <ul className="absolute left-0 hidden mt-2 w-56 bg-white text-black shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption1">Journal Voucher</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Receipt Voucher</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Payment Voucher</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Purchase</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Sales</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">PDC Entry</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">BG Entry</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Price Change</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Invoice Generate</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Material Issue</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Goods Receipt By Product</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Issue Return</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Barcode Label Print</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Barcode Print With Expire Date</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Opening Balance Entry</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Opening Stock Entry</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Import Data From Excel</Link>
              </li>

            </ul>
            )}
          </li>
          
          <li className='group relative'>
          <button
              onClick={() => toggleDropdown('activereports')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Account Reports
            </button>
            {activeDropdown === 'activereports' && (
            <ul className="absolute left-0 hidden mt-2 w-64 bg-white text-black shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption1">Print Preview Voucher</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Day Book</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Trial Balance</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Balance Sheet</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Profit And Loss</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">User Base Collection</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Price Change Detail </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Balance Confirmation(Vendor / Customer)</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">General Ledger Detail</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">General Ledger With Product Detail</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Receivable / Payable Summary Report</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Ageing analysis Reports</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Invoice Wise Ageing Analysis</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Chart Of Accounts</Link>
              </li>
              

            </ul>
            )}
          </li>
            <li className="group relative">
            <button
              onClick={() => toggleDropdown('inventoryreport')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Inventory Reports
            </button>
            {activeDropdown === 'inventoryreport' && (
            <ul className="absolute left-0 hidden mt-2 w-96 bg-white text-black shadow-lg group-hover:block">
            {[
                { path: "/inventoryreports/suboption1", label: "Item Search" },
                { path: "/inventoryreports/suboption2", label: "Inventory Item List" },
                {
                  path: "/inventoryreports/suboption3",
                  label: "Print Preview Purchase, Sales and Return Bill",
                },
                { path: "/inventoryreports/suboptions4", label: "Purchase / Sales / Issue Book" },
                { path: "/inventoryreports/suboption5", label: "Purchase / Sales Book (Annex-13)" },
                { path: "/inventoryreports/suboptions6", label: "Product Wise - Profitability Reports" },
                {
                  path: "/inventoryreports/suboptions7",
                  label: "Vendor Purchase / Return Detailed Invoice Wise",
                },
                { path: "/inventoryreports/suboptions8", label: "Vendor Purchase / Return Category Wise" },
                { path: "/inventoryreports/suboptions9", label: "Purchase Landed Cost Report" },
                { path: "/inventoryreports/suboptions11", label: "Item Purchase / Return In Detail" },
                { path: "/inventoryreports/suboptions12", label: "CBMS Related Report" },
                { path: "/inventoryreports/suboptions13", label: "Customer Sales / Return Detail Invoice Wise" },
                { path: "/inventoryreports/suboptions14", label: "Customer Sales / Return Category Wise" },
                { path: "/inventoryreports/suboptions15", label: "Item Sales / Return In Detail" },
                { path: "/inventoryreports/suboptions16", label: "Item Sales (Area / Salesman) Wise" },
                { path: "/inventoryreports/suboptions17", label: "Production / Consumptions Report" },
                { path:"/inventoryreports/suboptions18",label:"Inventory Item Stock Report"},
                { path: "/inventoryreports/suboptions19", label: "Item Stock In Detail" },
                { path: "/inventoryreports/suboptions20", label: "Purchase And Sales More Than One Lakh" },
                { path:"/inventoryreports/suboptions21",label:"VAT Ledger of Purchase And Sales"},
                { path: "/inventoryreports/suboptions22", label: "No Sales From Last Purchase" },
                { path: "/inventoryreports/suboptions23", label: "No Purchase Since Date But Stock Avi"},
                { path:"/inventoryreports/suboptions24",label:"Bonus Received From Vendor"},
                ].map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
         )}
        </li>
          <li className="group relative">
          <button
              onClick={() => toggleDropdown('systemsecurity')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              System Security
            </button>
            {activeDropdown === 'systemsecurity' && (
            <ul className="absolute left-0 hidden mt-2 w-80 bg-white text-black shadow-lg group-hover:block">
            {[
              {path:"/systemsecurity/suboptions1",label:"Menu Access"},
              {path:"/systemsecurity/suboptions2",label:"Backup Data"},
              {path:"/systemsecurity/suboptions3",label:"Change Password"},
              {path:"/systemsecurity/suboptions4",label:"Sign Up User"},
              {path:"/systemsecurity/suboptions5",label:"Printer Setup"},
              {path:"/systemsecurity/suboptions6",label:"Invoice Greeting Note"},
              {path:"/systemsecurity/suboptions7",label:"Current Users"},
              {path:"/systemsecurity/suboptions8",label:"End Of Day"},
              {path:"/systemsecurity/suboptions9",label:"IRD Setup",
                subOptions: [
                  { path: "/systemsecurity/suboptions9/suboption1", label: "Activate / Deactivate Real Time Data" }
                ],
              },
            ].map((item,index)=>(
              <li key={index} className="px-4 py-2 hover:bg-gray-100 relative group">
                  <Link to={item.path}>{item.label}</Link>    
                {/* Only show suboptions on hover of 'IRD Setup' */}
                    {item.label === "IRD Setup" && item.subOptions && (
                        <ul className="absolute left-full top-0 mt-0 ml-2 w-72 bg-white text-black shadow-lg hidden group-hover:block">
                        {item.subOptions.map((subItem, subIndex) => (
                          <li key={subIndex} className="px-4 py-2 hover:bg-gray-100">
                            <Link to={subItem.path}>{subItem.label}</Link>
                          </li>
                      ))
                    }
                    </ul>
                )}
              </li>
            ))}
            </ul>
            )}
          </li>
          
          
          <li>
            <Link to="/about" >
          <button
              onClick={() => toggleDropdown('aboutsoftware')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              About Software
            </button>
            </Link>
          </li>
          <li>
          <button
              onClick={() => toggleDropdown('exit')}
              className="text-xl hover:text-gray-300 transition duration-300 focus:outline-none"
            >
              Exit
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
