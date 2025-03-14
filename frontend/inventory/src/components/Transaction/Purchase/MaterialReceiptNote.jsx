import React from 'react';

const MaterialReceiptNote = () => {
  return (
    <div className='flex items-center justify-center min-h-screen -my-8'>
      <div className="max-w-6xl w-full mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className='text-lg font-bold p-2 rounded mb-4'>Material Receipt Note</h1>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['MRN Date', 'Bill Date', 'Bill No', 'Vendor Name', 'PAN/VAT No', 'Excel File Path'].map((label, index) => (
            <div key={index} className='mb-3'>
              <label className='block text-sm font-medium'>{label}</label>
              <input type={index < 2 ? 'date' : 'text'} className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
          ))}
          <div className='mb-3'>
            <label className='block text-sm font-medium'>MRN No</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' defaultValue='M81-82000001' readOnly />
          </div>
          <div className='flex justify-center items-center'>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload Excel</button>
          </div>
        </div>

        
        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 min-w-[1200px]">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Sr.</th>
                <th className="border border-gray-300 px-2 py-1">ProductID</th>
                <th className="border border-gray-300 px-2 py-1">Barcode</th>
                <th className="border border-gray-300 px-2 py-1">Product Name</th>
                <th className="border border-gray-300 px-2 py-1">Receipt Qty</th>
                <th className="border border-gray-300 px-2 py-1">UOM</th>
                <th className="border border-gray-300 px-2 py-1">Pack Cost</th>
                <th className="border border-gray-300 px-2 py-1">Pcs Cost</th>
                <th className="border border-gray-300 px-2 py-1">BType</th>
                <th className="border border-gray-300 px-2 py-1">BQty</th>
                <th className="border border-gray-300 px-2 py-1">Total Amount</th>
                <th className="border border-gray-300 px-2 py-1">UnitSale</th>
                <th className="border border-gray-300 px-2 py-1">Profit %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">1</td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
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
          <div>
            <label className='block text-sm font-medium'>Taxable / Non Taxable</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
          </div>
          {['Sub Total', 'Discount %', 'Net Purchase', 'VAT (13%)', 'Total Amt With VAT', 'Discount After VAT', 'Credit Account By', 'Net Total'].map((label, index) => (
            <div key={index}>
              <label className='block text-sm font-medium'>{label}</label>
              <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className='mt-6 flex flex-wrap justify-between items-center gap-4'>
          <div className="flex gap-3">
            {['Save', 'Print', 'Cancel'].map((action, index) => (
              <button key={index} className={`px-4 py-2 rounded text-white ${
                action === 'Save' ? 'bg-blue-500' : action === 'Print' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {action}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            {['Create Product', 'Create Vendors', 'Get Excel Format'].map((action, index) => (
              <button key={index} className={`px-5 py-2.5 rounded-lg shadow-md font-medium text-white ${
                action === 'Create Product' ? 'bg-green-600 hover:bg-green-700' :
                action === 'Create Vendors' ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' :
                'bg-blue-600 hover:bg-blue-700'
              } transition-all duration-300 active:scale-95`}>
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div> 
  );
};

export default MaterialReceiptNote;

