
import { Link } from "react-router-dom";
import { FileText, BarChart, ShoppingCart, ClipboardList } from "lucide-react";

const Reports = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 ml-16">
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-12">

        {/* Inventory Reports */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-blue-700">
            <ClipboardList size={28} /> Inventory Reports
          </h2>
          <ul className="space-y-3">
            <li><Link to="/inventoryreports/suboption3" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">Print Preview Purchase, Sales & Return Bill</Link></li>
            <li><Link to="/inventoryreports/suboptions21" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">VAT Ledger of Purchase And Sales</Link></li>
            <li><Link to="/inventoryreports/suboptions22" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">No Sales From Last Purchase</Link></li>
            <li><Link to="/inventoryreports/suboptions23" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">No Purchase Since Date But Stock Available</Link></li>
            <li><Link to="/inventoryreports/suboptions24" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">Bonus Received From Vendor</Link></li>
            <li><Link to="/inventoryreports/suboptions20" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">Purchase and Sales More than One Lakh</Link></li>
            <li><Link to="/inventoryreports/suboptions4" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">Purchase/Sales/Issue Book</Link></li>
            <li><Link to="/inventoryreports/suboption5" className="block px-5 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition">Purchase/Sales Book</Link></li>
          </ul>
        </div>

        {/* Account Reports */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-green-700">
            <FileText size={28} /> Account Reports
          </h2>
          <ul className="space-y-3">
            <li><Link to="/accountreports/suboption4" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Balance Sheet</Link></li>
            <li><Link to="/accountreports/suboption5" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Profit & Loss Statement</Link></li>
            <li><Link to="/accountreports/suboption9" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Ledger Report</Link></li>
            <li><Link to="/accountreports/suboption2" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Day Book</Link></li>
            <li><Link to="/accountreports/suboption3" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Trial Balance</Link></li>
            <li><Link to="/accountreports/suboption6" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">User Base Collection</Link></li>
            <li><Link to="/accountreports/suboption7" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Price Change</Link></li>
            <li><Link to="/accountreports/suboption10" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Ledger with Product Detail</Link></li>
            <li><Link to="/accountreports/suboption8" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Balance Confirmation</Link></li>
            <li><Link to="/accountreports/suboption12" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Ageing Analysis</Link></li>
            <li><Link to="/accountreports/suboption13" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Invoice Wise Ageing Analysis</Link></li>
            <li><Link to="/accountreports/suboption14" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Chart Of Accounts</Link></li>
            <li><Link to="/accountreports/suboption1" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Print Preview Voucher</Link></li>
          </ul>
        </div>

        {/* Sales Reports */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-purple-700">
            <BarChart size={28} /> Sales Reports
          </h2>
          <ul className="space-y-3">
            <li><Link to="/inventoryreports/suboptions13" className="block px-5 py-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition">Customer Sales/Return Invoice Wise</Link></li>
            <li><Link to="/inventoryreports/suboptions14" className="block px-5 py-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition">Customer Sales/Return Category Wise</Link></li>
            <li><Link to="/inventoryreports/suboptions15" className="block px-5 py-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition">Item Sales/Return</Link></li>
            <li><Link to="/inventoryreports/suboptions16" className="block px-5 py-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition">Item Sales(Area/Salesman)Wise</Link></li>
          </ul>
        </div>

        {/* Purchase Reports */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-red-700">
            <ShoppingCart size={28} /> Purchase Reports
          </h2>
          <ul className="space-y-3">
            <li><Link to="/inventoryreports/suboptions7" className="block px-5 py-3 rounded-lg bg-red-50 hover:bg-red-100 transition">Vendor Purchase/Return Invoice Wise</Link></li>
            <li><Link to="/inventoryreports/suboptions8" className="block px-5 py-3 rounded-lg bg-red-50 hover:bg-red-100 transition">Vendor Purchase/Return Category Wise</Link></li>
            <li><Link to="/inventoryreports/suboptions9" className="block px-5 py-3 rounded-lg bg-red-50 hover:bg-red-100 transition">Purchase Landed Cost Report</Link></li>
            <li><Link to="/inventoryreports/suboptions11" className="block px-5 py-3 rounded-lg bg-red-50 hover:bg-red-100 transition">Item Purchase/Return</Link></li>
          </ul>
        </div>

        {/* Item Reports */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-cyan-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-cyan-700">
            <ShoppingCart size={28} /> Item Reports
          </h2>
          <ul className="space-y-3">
            <li><Link to="/inventoryreports/suboption1" className="block px-5 py-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">Item Search</Link></li>
            <li><Link to="/inventoryreports/suboption2" className="block px-5 py-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">Inventory Item List</Link></li>
            <li><Link to="/inventoryreports/suboptions19" className="block px-5 py-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">Item Stock In Detail</Link></li>
            <li><Link to="/inventoryreports/suboptions18/suboption1" className="block px-5 py-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">Inventory Item Stock(New)</Link></li>
            <li><Link to="/inventoryreports/suboptions18/suboption2" className="block px-5 py-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition">Inventory Item Stock(Old)</Link></li>
          </ul>
        </div>

        {/* CBMS Report */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-400">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-green-700">
            <ShoppingCart size={28} /> CBMS Report
          </h2>
          <ul className="space-y-3">
            <li><Link to="/inventoryreports/suboptions12/suboption1" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Materialized Views Report</Link></li>
            <li><Link to="/inventoryreports/suboptions12/suboption2" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Electronic Payment Detail</Link></li>
            <li><Link to="/inventoryreports/suboptions12/suboption3" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">User Log Activities</Link></li>
            <li><Link to="/inventoryreports/suboptions12/suboption4" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Audit Activity Log</Link></li>
            <li><Link to="/inventoryreports/suboptions12/suboption5" className="block px-5 py-3 rounded-lg bg-green-50 hover:bg-green-100 transition">Purchase And Sales Book</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;
