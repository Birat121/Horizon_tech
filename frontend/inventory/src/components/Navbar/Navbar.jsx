import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-6 my-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/">
              <h1 className="text-3xl font-bold hover:text-gray-400">Horizon Tech</h1>
            </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="group relative">
            <Link
              to="/master"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              Master
            </Link>
            {/* Dropdown Example */}
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
          </li>
          <li className='group relative'>
            <Link
              to="/transaction"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              Transaction
            </Link>
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
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
          </li>
          
          <li className='group relative'>
            <Link
              to="/accountreports"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              Account Reports
            </Link>
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
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
          </li>
          <li>
            <Link
              to="/inventoryreports"
              className="hover:text-gray-300 transition duration-300"
            >
              Inventory Reports
            </Link>
          </li>


          <li className="group relative">
            <Link
              to="/systemsecurity"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              System Security
            </Link>
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
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
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={item.path}>{item.label}</Link>    
                {/* Only show suboptions on hover of 'IRD Setup' */}
                    {item.label === "IRD Setup" && item.subOptions && (
                        <ul className="absolute left-full top-0 hidden mt-0 w-48 bg-white text-black shadow-lg group-hover:block">
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
          </li>
          
          
          <li>
            <Link
              to="/about"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              About Software
            </Link>
          </li>
          <li>
            <Link
              to="/exit"
              className="text-xl hover:text-gray-300 transition duration-300"
            >
              Exit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
