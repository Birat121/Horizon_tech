import React from 'react';

const InvoiceGenerate = () => {
  return (
    <div className='flex items-center justify-center h-[85vh]'>
      <div className="max-w-5xl w-full mx-auto bg-white border-2 rounded-lg shadow-lg p-6">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className='text-lg font-bold p-2 rounded mb-4 text-white'>Invoice Generate</h1>
        </div>

        {/* Form Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className='mb-3'>
            <label className='block text-sm font-medium'>Date of Invoice</label>
            <input type='date' className='w-full border border-gray-300 rounded px-2 py-1' />
          </div>

          <div className='mb-3'>
            <label className='block text-sm font-medium'>Voucher No.</label>
            <select className='w-full border  border-gray-300 rounded px-2 py-1'>
            <option value="I81-8200002">I81-8200002</option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='block text-sm font-medium'>Doc No.</label>
            <select className="w-full border  border-gray-300 rounded px-2 py-1">
              <option value=""></option>
            </select>
            
          </div>

          <div className='mb-3'>
            <label className='block text-sm font-medium'>Customer</label>
            <select className="w-full border  border-gray-300 rounded px-2 py-1">
              <option value=""></option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='block text-sm font-medium'>Contra</label>
            <select className="w-full border  border-gray-300 rounded px-2 py-1">
              <option value=""></option>
            </select>
          </div>
          <div className='mb-3'>
            <label className='block text-sm font-medium'>A/c Balance</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
          </div>

          <div className='mb-3'>
            <label className='block text-sm font-medium'>PAN/VAT</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
          </div>
          <div className='mb-3'>
            <label className='block text-sm font-medium'>A/c</label>
            <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
          </div>
        </div>

        {/* Table Section */}
        <div className="mt-8">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-2 py-1">Sr.</th>
                <th className="border border-gray-300 px-2 py-1">Account Name</th>
                <th className="border border-gray-300 px-2 py-1">Amount</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">1</td>
                <td className="border border-gray-300 px-2 py-1"></td>
                <td className="border border-gray-300 px-2 py-1"></td>
                
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="mt-4">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium'>Sub Total</label>
              <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
            <div>
              <label className='block text-sm font-medium'>Discount</label>
              <div className='flex items-center'>
                <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
                <span className='ml-2'>%</span>
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium'>Net Amount</label>
              <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
            <div>
              <label className='block text-sm font-medium'>VAT</label>
              <div className='flex items-center'>
                <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
                <span className='ml-2'>%</span>
              </div>
            </div>
            <div className='col-span-2'>
              <label className='block text-sm font-medium'>Total Amt With Vat</label>
              <input type='text' className='w-full border border-gray-300 rounded px-2 py-1' />
            </div>
          </div>
          {/* button section */}
          <div className='mt-4 flex justify-between items-center'>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded">Print</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceGenerate;