import { useEffect, useState } from "react"; 
const SalesReturn = () =>{
    const [currentTime] = useState(new Date());
    const [ledger, setLedger] = useState('Cash');
    const [paymentType,  setPaymentType] = useState( 'cash', 'credit', 'card');
    const [barcode, setBarcode]=useState('');
    const [qrCode, setQrCode] = useState('');
     const [itemDesc, setItemDesc] = useState('');
     const [skuCode, setSkuCode] = useState('');
     const [billType, setBillType] = useState("AVBT");
    const [qty, setQty] = useState({barcode:'', itenDesc:'',qrCode:'',skuCode:''});
    return(
        <div className=" p-6 bg-white border-2 rounded-lg shadow-lg min-h-screen ml-12">
            <div className='text-center text-lg font-bold bg-green-600 text-white py-2 rounded mb-4'>
                SalesReturn  (counter-6) | Cashier:shiva | {currentTime.toLocaleString()}
            </div>
            <div className="grid grid-cols-3 gap-4">
            {/* customer info */}
            <div className="bg-white p-4 border rounded"> 
                <h2 className="text-lg font-semibold mb-3 ">Customer Info:</h2>
                <label className="Block"> Name:</label>
                <input className="border w-full px-2 py-1 rounded mb-2" placeholder="POS Customer"/>

                <label className="block">Address:</label>
                <input className=" border w-full px-2 py-1 rounded mb-2" placeholder="Address"/>

                <label className="block">PAN No:</label>
                <input className="border w-full px-2 py-1 rounded mb-2" placeholder="PAN/VAt No" />

                <label className="block">Phone #</label>
                <input className="border w-full px-2 py-1 rounded mb-2" placeholder="Contact Number"/>
            </div>

            {/* Membership Details */}
            <div className=" bg-white p-4 border rounded">
                <h2 className="text-lg font-semibold mb-3">Membership Details</h2>
                <label className="block">Member #</label>
                <input className=" border w-full px-2 py-1 rounded mb-2" placeholder="Membership No."/>

                <label className="block"> Mobile#</label>
                <input className="border w-full px-2 py-1 rounded mb-2" placeholder="Mobile No."/>

                <label className="block">Mem. Name </label>
                <input className="border w-full px-2 py-1 rounded mb-2" placeholder="Member Name"/>
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

            

            {/* Payment type */}

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


         {/* Bill Type Section */}
      <div className="w-full p-4 border border-gray-300 rounded-md bg-white shadow-md">
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
    <div className=" mt-6 bg-white p-6 border rounded">
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


       {/* Member Section */}
    <div className=" mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      
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
       {/* Bill Summary */}
       <div className="bg-white p-4 border rounded">
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
        </div>


             {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      </div>
        </div>
       
    )
}
export default SalesReturn;