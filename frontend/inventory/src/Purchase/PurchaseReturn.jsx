import React from 'react';

const PurchaseReturnEntry = () => {
  return (
    <div className='flex items-center justify-center h-[85vh]'>
      <div className="max-w-6xl w-full mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <h2 className='text-xl font-bold p-2 rounded mb-4 '>Purchase Return Entry</h2>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Return Date', 'Bill Date', 'Bill No', 'Vendor Name', 'PAN/VAT No', 'From MRN #'].map((label, index) => (
            <div key={index} className='mb-3'>
              <label className='block text-sm font-medium'>{label}</label>
              <input type={index < 2 ? 'date':'text'} className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
          ))}
          <div className='mb-3'>
            <label className='block text-sm font-medium'>Return No</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' defaultValue='PR81-82000002' readOnly />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-100 min-w-[1200px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Sr.</th>
                <th className="border border-gray-300 px-2 py-1">ProductID</th>
                <th className="border border-gray-300 px-2 py-1">Product Name</th>
                <th className="border border-gray-300 px-2 py-1">Return Qty</th>
                <th className="border border-gray-300 px-2 py-1">UOM</th>
                <th className="border border-gray-300 px-2 py-1">Pack Cost</th>
                <th className="border border-gray-300 px-2 py-1">Pcs Cost</th>
                <th className="border border-gray-300 px-2 py-1">Total Amount</th>
                <th className="border border-gray-300 px-2 py-1">Unit Sale</th>
                <th className="border border-gray-300 px-2 py-1">Profit %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">1</td>
                {Array(13).fill(<td className="border border-gray-300 px-2 py-1"></td>)}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className='block text-sm font-medium'>Payment Type</label>
            <select className="border border-gray-300 rounded px-2 py-1 w-full">
              <option>Cash Or Bank</option>
              <option>Payable Ac</option>
            </select>
          </div>
          {['Taxable / Non Taxable', 'Sub Total', 'Discount %', 'Net Return', 'VAT (13%)', 'Total Amt With VAT', 'Discount After VAT', 'Credit Account By', 'Net Total'].map((label, index) => (
            <div key={index}>
              <label className='block text-sm font-medium'>{label}</label>
              <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='mt-6 flex flex-wrap justify-between items-center gap-4'>
          <div className="flex gap-3">
            {['Save', 'Modify', 'Delete', 'Cancel'].map((action, index) => (
              <button key={index} className={`px-4 py-2 rounded text-white ${
                action === 'Save' ? 'bg-blue-500' : 
                action === 'Modify' ? 'bg-yellow-500' :
                action === 'Delete' ? 'bg-red-500' :
                action === 'Cancel' ? 'bg-gray-500' :
                'bg-black'
              }`}>{action}</button>
            ))}
          </div>
        </div>
      </div>
    </div> 
  );
};

export default PurchaseReturnEntry;
