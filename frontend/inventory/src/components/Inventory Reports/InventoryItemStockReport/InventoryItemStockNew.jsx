import { useState } from 'react';
const InventoryItemStockNew = () => {
  // State for dropdown selection
  const [selectedOption, setSelectedOption] = useState('Product Name');

  // Sorting options
  const options = [
    'Product Name', 'Product ID', 'Category', 'Sub Category',
    'Max Sales Qty', 'Max Pur. Qty', 'Stock Q. Asc', 'Stock Qty Desc',
    'Max Stock Amt', 'Min Stock Amt', 'Max Prod. Q', 'Min Prod. Qty',
  ];

  // State for filter and date selection
  const [filterActive, setFilterActive] = useState(false);
  const [tillDateActive, setTillDateActive] = useState(false);

  // Date states (BS = Bikram Sambat, AD = Anno Domini)
  const [bsFromDate, setBsFromDate] = useState('01/04/2081');
  const [adFromDate, setAdFromDate] = useState('16/07/2024');
  const [bsToDate, setBsToDate] = useState('07/12/2081');
  const [adToDate, setAdToDate] = useState('date');
  const [bsDate, setBsDate] = useState('');
  const [adDate, setAdDate] = useState('');

  // Handle dropdown selection
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (event) => {
    setFilterActive(event.target.checked);
    setTillDateActive(event.target.checked);
  };

  return (
    <div className="w-screen min-h-screen bg-gray-200 p-2">
      {/* Header Section */}
      <div className="bg-green-500 text-white  flex items-center">
        <h1 className="text-lg font-semibold p-2 flex-1">Inventory Item Stock Report</h1>
        
      </div>
      
      {/* Search Bar */}
      <div className="bg-gray-200 p-2 flex items-center space-x-2">
        <label className="flex items-center space-x-1">
          <input type="radio" name="searchBy" className="mr-1" /> <span>Product Name</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="radio" name="searchBy" className="mr-1" /> <span>Product ID</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="radio" name="searchBy" className="mr-1" /> <span>Barcode</span>
        </label>
        
        <input type="text" placeholder="Search Text" className="border p-1 flex-1" />
      </div>
      
      {/* Report Section */}
       <div className="flex space-x-2 p-2">
        {/* Filters Section */}
        <div className="w-1/4 bg-white p-2 shadow-md">
          {/* Report on Date */}
          <div className="border p-4 rounded-md">
      <div className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={tillDateActive}
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-blue-600 mr-2"
        />
        <label>Till Date</label>
      </div>

      <div className={`grid grid-cols-1 gap-2 ${tillDateActive ? '' : 'opacity-50 pointer-events-none'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date BS :</label>
          <div className="relative">
            <input
              type="date"
              value={bsDate}
              onChange={(e) => setBsDate(e.target.value)}
              className="border rounded p-1 w-full"
            />
            {/* You can add a calendar icon here if needed */}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date AD :</label>
          <div className="relative">
            <input
              type="date"
              value={adDate}
              onChange={(e) => setAdDate(e.target.value)}
              className="border rounded p-1 w-full"
            />
            {/* You can add a calendar icon here if needed */}
          </div>
        </div>
      </div>
    </div>
    
          
          {/* Report Between Date */}
          <div className="border p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Report Between Date..</h2>

          <div className="flex items-center mb-2">
        <input
          type="checkbox"
          checked={filterActive}
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-blue-600 mr-2"
        />
        <label>Between Date</label>
        </div>

      <div className={`grid grid-cols-2 gap-2 ${filterActive ? '' : 'opacity-50 pointer-events-none'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700">From BS :</label>
          <input
            type="date"
            value={bsFromDate}
            onChange={(e) => setBsFromDate(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">From AD :</label>
          <input
            type="date"
            value={adFromDate}
            onChange={(e) => setAdFromDate(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To BS :</label>
          <input
            type="date"
            value={bsToDate}
            onChange={(e) => setBsToDate(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">To AD :</label>
          <input
            type="date"
            value={adToDate}
            onChange={(e) => setAdToDate(e.target.value)}
            className="border rounded p-1 w-full"
          />
        </div>
      </div>
      </div>
  
          
          {/* Select Product Type */}
          <div className=" border border-gray-400 p-2">
      <h2 className="text-sm font-semibold border-b pb-1">Select Product Type here..</h2>
      <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>ALL Category Product Wise</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>ALL Category Summary Only</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>Selected Category With Product</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>ALL Sub Category Summary Only</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>Selected Product</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="productType" className="form-radio" />
          <span>Selected Sub Category</span>
        </label>
      </div>
      <select className="mt-2 w-full border border-gray-400 p-1 text-sm bg-white">
        <option>Select an option</option>
      </select>
    </div>

    {/* select stock quantity showing  */}
      <div className="border mt-4 border-gray-400 p-2">
      <h2 className="text-sm font-semibold border-b pb-1">
        Select Stock Quantity Showing Type here...
      </h2>
      <div className="flex justify-between items-center mt-2 text-sm">
        <label className="flex items-center space-x-2">
          <input type="radio" name="stockQuantity" className="form-radio" />
          <span>Maximum Packing + "." + Each</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="stockQuantity" className="form-radio" />
          <span>Minimum Unit</span>
        </label>
      </div>

      <h2 className="text-sm font-semibold border-b pb-1 mt-2">...</h2>
      <div className="flex justify-between items-center mt-2 text-sm">
        <label className="flex items-center space-x-2">
          <input type="radio" name="quantityType" className="form-radio" />
          <span>Qty. With Amount</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="radio" name="quantityType" className="form-radio" />
          <span>Quantity Only</span>
        </label>
      </div>
    </div>
  
          {/* Buttons */}
          <div className=" mt-4 flex justify-between">
            <button className="bg-blue-500 text-white px-4 py-1">On Grid</button>
            <button className="bg-red-500 text-white px-4 py-1">Close</button>
          </div>

        {/* order by selector */}
        <div className="border border-gray-400 mt-4 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Select Order By here</h2>
      <div className="grid grid-cols-4 gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-2"
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              className="form-radio h-4 w-4 text-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>

        
        </div>
        
        {/* Table Section */}
        <div className="w-3/4">
          <div className="flex justify-between bg-blue-900 text-white p-2">
            <button className="text-white">On Grid</button>
            <button className="text-white">Show / Hide Column</button>
          </div>
          <table className="w-full border mt-2">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="border p-2">Sr.</th>
                <th className="border p-2">Category Name</th>
                <th className="border p-2">Opening Stock</th>
                <th className="border p-2">Purchase Qty</th>
                <th className="border p-2">Receipt Qty</th>
                <th className="border p-2">Production Qty</th>
                <th className="border p-2">Sales Return</th>
                <th className="border p-2">Sales Qty</th>
                <th className="border p-2">Purchase Return</th>
                <th className="border p-2">Issued Qty</th>
                <th className="border p-2">Consumption Qty</th>
                <th className="border p-2">Stock Qty</th>
                <th className="border p-2">Stock Amount</th>
              </tr>
            </thead>
            
            <tbody >
              <tr>
              <td className='border p-2'>1</td>
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              <td className='border p-2'></td> 
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryItemStockNew;
