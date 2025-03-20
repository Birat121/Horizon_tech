import React from 'react';

const PurchaseAdditionalCostEntry = () => {
  return (
    <div className='flex items-center justify-center h-[85vh] ml-14'>
      <div className="max-w-6xl w-full mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
        
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className='text-lg font-bold p-2 rounded mb-4 text-white'>Purchase Additional Cost Entry</h1>
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Transaction No', value: 'PAC10081-82000001', readOnly: true },
            { label: 'Reference MRN No', value: '' },
            { label: 'Transaction Date', type: 'date' },
            { label: 'MRN Date', type: 'date' },
            { label: 'Currency', value: '' },
            { label: 'Exchange Rate', value: '' },
            { label: 'Bill Amount', value: '' },
            { label: 'Party Bill No', value: '' },
            { label: 'Remarks', value: '' }
          ].map(({ label, value, type, readOnly }, index) => (
            <div key={index} className='mb-3'>
              <label className='block text-sm font-medium'>{label}</label>
              <input 
                type={type || 'text'} 
                className='w-full border border-gray-300 rounded px-2 py-1'
                defaultValue={value} 
                readOnly={readOnly}
              />
            </div>
          ))}
        </div>

        {/* Currency Selection */}
        <div className="mt-4 border border-gray-300 p-4 rounded-lg">
          <label className='block text-sm font-medium'>Currency Selection</label>
          <div className="flex gap-4">
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>NPR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
            <input type="number" defaultValue="1.00" className='border border-gray-300 rounded px-2 py-1 w-24' />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-gray-300 min-w-[1200px]">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Sr.</th>
                <th className="border border-gray-300 px-2 py-1">Debit Ledger Name</th>
                <th className="border border-gray-300 px-2 py-1">Credit Ledger Name</th>
                <th className="border border-gray-300 px-2 py-1">Sub Ledger Name</th>
                <th className="border border-gray-300 px-2 py-1">Amt (NPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">1</td>
                {Array(7).fill(<td className="border border-gray-300 px-2 py-1"></td>)}
              </tr>
            </tbody>
          </table>
        </div>

       {/* Footer Section */}
        <div className='mt-6 flex justify-between items-center gap-4'>
        <div className="flex gap-3">
            {['Save', 'Cancel'].map((action, index) => (
            <button key={index} className={`px-4 py-2 rounded text-white ${
             action === 'Save' ? 'bg-blue-500' : 
             action === 'Cancel' ? 'bg-yellow-500' : 'bg-black'
          }`}>{action}</button>
         ))}
      </div>
        </div>
      </div>
    </div> 
  );
};

export default PurchaseAdditionalCostEntry;
