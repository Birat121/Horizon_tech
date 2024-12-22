import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white px-4 py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold">Horizon Tech</h1>
        
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="group relative">
            <Link
              to="/master"
              className="hover:text-gray-300 transition duration-300"
            >
              Master
            </Link>
            {/* Dropdown Example */}
            <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption1">Sub Option 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link to="/master/suboption2">Sub Option 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/transaction"
              className="hover:text-gray-300 transition duration-300"
            >
              Transaction
            </Link>
          </li>
          <li>
            <Link
              to="/accountreports"
              className="hover:text-gray-300 transition duration-300"
            >
              Account Reports
            </Link>
          </li>
          <li className="group relative">
             <Link
                 to="/inventoryreports"
                className="hover:text-gray-300 transition duration-300"
               >
                Inventory Reports
               </Link>
                <ul className="absolute left-0 hidden mt-2 w-48 bg-white text-black shadow-lg group-hover:block">
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
                    { path: "/inventoryreports/suboptions10", label: "Item Purchase / Return In Detail"},
                    { path: "/inventoryreports/suboptions11", label: "CBMS Related Report"},
                    { path: "/inventoryreports/suboptions12",label:"Customer Sales / Return Detail Invoice Wise"},
                    { path: "/inventoryreports/suboptions13",label:"Customer Sales / Return Category Wise"},
                    { path:"/inventoryreports/suboptions14",label:"Item Sales / Return In Detail"},
                    { path:"/inventoryreports/suboptions15",label:"Item Sale (Area / Salesman) Wise"},
                    { path:"/inventoryreports/suboptions16",label:"Production / Consumption Report"},
                    { path:"/inventoryreports/suboptions17",label:"Inventory Item Stock Report"},
                    { path:"/inventoryreports/suboptions18",label:"Item Stock In Detail"},
                    { path:"/inventoryreports/suboptions19",label:"Purchase and Sales More Than On lakh"},
                    { path:"/inventoryreports/suboptions20",label:"VAT Ledger of Purchase And Sales"},
                    { path:"/inventoryreports/suboptions21",label:"No Sales From Last Purchase"},
                    { path:"/inventoryreports/suboptions22",label:"No Purchase Since Date But Stock Avl"},
                    { path:"/inventoryreports/suboptions23",label:"Bonus Received From Vendor"},
                  ].map((item, index) => ( 
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={item.path}>{item.label}</Link>
                  
                  </li>
                  ))}
            </ul>
          </li>


          <li className="group relative">
            <Link
              to="/systemsecurity"
              className="hover:text-gray-300 transition duration-300"
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
              className="hover:text-gray-300 transition duration-300"
            >
              About Software
            </Link>
          </li>
          <li>
            <Link
              to="/exit"
              className="hover:text-gray-300 transition duration-300"
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
