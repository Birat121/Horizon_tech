import React, { useState } from 'react';

const PointOfSales = () => {
  const [memberNumber, setMemberNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [memberName, setMemberName] = useState('');
  const [barcode, setBarcode] = useState('');
  const [itemDesc, setItemDesc] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [skuCode, setSkuCode] = useState('');
  const [qty, setQty] = useState({ barcode: '', itemDesc: '', qrCode: '', skuCode: '' });
  const [ledger, setLedger] = useState('Cash');
  const [billType, setBillType] = useState("AVBT");
  const [paymentType, setPaymentType] = useState({
    cash: true,
    card: false,
    credit: false,
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-center text-lg font-bold bg-blue-800 text-white py-2 rounded mb-4">
        Point of Sale (Counter - 6) | Cashier: Shiva | {new Date().toLocaleString()}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Customer Info */}
        <div className="bg-white p-4 border rounded">
          <h2 className="text-lg font-semibold mb-3">Customer Info</h2>
          <label className="block">Name:</label>
          <input className="border w-full px-2 py-1 rounded mb-2"  />

          <label className="block">Address:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" placeholder="Address" />

          <label className="block">Pan No:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" placeholder="Pan / VAT No" />

          <label className='block'>Phone Number:</label>
          <input className='border w-full px-2 py-1 rounded mb-2' placeholder='Phone/Mobile Number'/>
        </div>

        {/* Membership Details */}
        <div className="bg-white p-4 border rounded">
          <h2 className="text-lg font-semibold mb-3">Membership Details</h2>
          <label className="block">Member #:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" value={memberNumber} onChange={(e) => setMemberNumber(e.target.value)} />

          <label className="block">Mobile #:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />

          <label className="block">Member Name:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" value={memberName} onChange={(e) => setMemberName(e.target.value)} />
        </div>


       

        {/* Barcode Scanner */}
        <div className="bg-white p-4 border rounded">
          <h2 className="text-lg font-semibold mb-3">Barcode</h2>
          <div className="grid-cols-2 gap-4">
            {[ 
              { label: 'Barcode', state: barcode, setState: setBarcode, qtyKey: 'barcode' },
              { label: 'Item Desc', state: itemDesc, setState: setItemDesc, qtyKey: 'itemDesc' },
              { label: 'QR Code', state: qrCode, setState: setQrCode, qtyKey: 'qrCode' },
              { label: 'SKU Code', state: skuCode, setState: setSkuCode, qtyKey: 'skuCode' }
            ].map(({ label, state, setState, qtyKey }) => (
              <div key={label} className="flex items-center gap-2">
                <label className="w-24">{label}:</label>
                <input className="border px-2 py-1 flex-1 rounded" value={state} onChange={(e) => setState(e.target.value)} placeholder={label} />
                <label className="w-10">Qty:</label>
                <input className="border px-2 py-1 w-16 rounded" value={qty[qtyKey]} onChange={(e) => setQty({ ...qty, [qtyKey]: e.target.value })} placeholder="Qty" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Member Section */}
      <div className="bg-white p-4 rounded shadow-md">
        <div className="w-full border-blue-500 p-2 bg-gray-100 rounded-md relative">
          <div className="absolute -top-4 left-2 bg-gray-100 px-2 font-semibold">
            Added Member
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-2 text-left">Sr.</th>
                <th className="p-2 text-left">Mem #</th>
                <th className="p-2 text-left">Members Name</th>
                <th className="p-2 text-left">Remain Point</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-300">
                  <select className="p-1">
                    <option>&#9660;</option>
                  </select>
                </td>
                <td className="p-2 border-b border-gray-300">
                  <input type="text" className="p-1 w-full" />
                </td>
                <td className="p-2 border-b border-gray-300">
                  <input type="text" className="p-1 w-full" />
                </td>
                <td className="p-2 border-b border-gray-300 bg-gray-300"></td>
              </tr>
            </tbody>
          </table>

          <div className="mt-4 text-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full shadow-md w-[200px] cursor-pointer">
              Register New Member
            </button>
          </div>
        </div>
      </div>

      {/* Bill Type Section */}
      <div className="w-full p-4 border border-gray-300 rounded-md bg-gray-100 shadow-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bill Type
        </label>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center">
            <input
              type="radio"
              name="billType"
              value="AVBT"
              checked={billType === "AVBT"}
              onChange={(e) => setBillType(e.target.value)}
              className="mr-2"
            />
            AVBT
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="billType"
              value="VAT"
              checked={billType === "VAT"}
              onChange={(e) => setBillType(e.target.value)}
              className="mr-2"
            />
            VAT
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700">Tender</label>
        <input
          type="text"
          className="w-full p-2 mt-1 mb-3 border border-gray-300 rounded-md"
        />

        <label className="block text-sm font-medium text-gray-700">Change</label>
        <input
          type="text"
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />
      </div>
    </div>


      {/* Item Table */}
      <div className="mt-6 bg-white p-4 border rounded">
        <h2 className="text-lg font-semibold mb-3">Item Details</h2>
        <table className="w-full border">
          <thead className="bg-blue-600 text-white">
            <tr>
              {['Sr.', 'Product ID', 'Product Name', 'Sale Qty', 'UOM', 'Rate', 'Total Amt', 'MRP'].map((header, index) => (
                <th key={index} className="border px-2 py-1">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1 text-center">1</td>
              {Array(7).fill(<td className="border px-2 py-1"></td>)}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment and Invoice Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Payment Type */}
        <div className="bg-white p-4 border rounded">
      <h2 className="text-lg font-semibold mb-3">Payment Type</h2>
      <div className="flex gap-2">
        {['cash', 'card', 'credit'].map((type) => (
          <label key={type} className="flex items-center gap-1">
            <input
              type="radio"
              name="paymentType" // All radio buttons in the group must have the same name
              value={type}
              checked={paymentType === type}
              onChange={() => setPaymentType(type)}
            />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        ))}
      </div>
      <label className="block mt-2">Ledger:</label>
      <select
        className="border w-full px-2 py-1 rounded"
        value={ledger}
        onChange={(e) => setLedger(e.target.value)}
      >
        <option value="Cash">Cash</option>
        <option value="Bank">Bank</option>
        <option value="Credit">Credit</option>
      </select>
    </div>

        {/* Invoice Details */}
        <div className="bg-white p-4 border rounded">
          <h2 className="text-lg font-semibold mb-3">Invoice Details</h2>
          <label className="block">Invoice No:</label>
          <input className="border w-full px-2 py-1 rounded mb-2" defaultValue="SV10081-82000001" readOnly />

          <button className="w-full bg-blue-600 text-white py-1 rounded">Show Today Invoice</button>
        </div>
      </div>

      {/* Bill Summary */}
      <div className="bg-white p-4 border rounded mt-6">
        <h2 className="text-lg font-semibold mb-3">Bill Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          {['Taxable / NonTaxable', 'Sub Total', 'Discount', 'Net Sales', 'VAT (13%)', 'Total Amt With VAT'].map((label, index) => (
            <div key={index}>
              <label className="block">{label}:</label>
              <input type="text" className="w-full border px-2 py-1 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-600 mt-4">
        F3 - Barcode | F5 - Qty | F6 - Product Name | F11 - Save | F12 - Cancel | Esc - Tender | Ctrl+U - Close
      </div>
    </div>
  );
};

export default PointOfSales;
