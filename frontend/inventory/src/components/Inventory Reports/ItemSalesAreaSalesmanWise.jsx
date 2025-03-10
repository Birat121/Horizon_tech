import React, { useState, useEffect } from "react";

const ItemSalesAreaSalesmanWise = () => {
  const [selectedReportType, setSelectedReportType] = useState("sales");
  const [selectedProductType, setSelectedProductType] = useState("allProduct");
  const [selectedAreaType, setSelectedAreaType] = useState("areaWise");
  const [nestedAreaSelection, setNestedAreaSelection] = useState("allArea");

  const [showAreaWiseCheckbox, setShowAreaWiseCheckbox] = useState(true);
  const [showSalesmanWiseCheckbox, setShowSalesmanWiseCheckbox] =
    useState(false);
  const [showAllProductCheckbox, setShowAllProductCheckbox] = useState(false);
  const [isDateChecked, setIsDateChecked] = useState(false);

  // State to hold the list of products fetched from the backend
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); // For loading state

  // Fetch product data from the backend when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Example URL for fetching product data, replace with your actual API endpoint
        const response = await fetch("/api/products");
        const data = await response.json();
        setProductList(data);
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      }
    };

    fetchProducts();
  }, []);

  const handleAreaWiseSelection = () => {
    setSelectedAreaType("areaWise");
    setShowAreaWiseCheckbox(true);
    setShowSalesmanWiseCheckbox(false);
  };

  const handleSalesmanWiseSelection = () => {
    setSelectedAreaType("salesmanWise");
    setShowSalesmanWiseCheckbox(true);
    setShowAreaWiseCheckbox(false);
  };

  return (
    <div className="flex flex-col h-[85vh] bg-white border-2 rounded-lg shadow-lg overflow-y-auto ml-14">
      <div className="flex flex-1">
        <div className="w-1/3 bg-gray-100 p-4 border-r border-gray-300">
          <h1 className=" text-white text-lg font-semibold p-2 rounded-t-md">
            Area / Salesman Report Item Wise
          </h1>

          <div className="bg-white shadow-md rounded-b-md p-4">
            {/* Report Between Date */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <div className="mb-2 font-semibold">Report Between Date..</div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={isDateChecked}
                    onChange={() => setIsDateChecked(!isDateChecked)}
                  />
                  <span>Between Date</span>
                </label>
              </div>

              {isDateChecked && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <label className="block text-sm font-medium">
                      From BS:
                    </label>
                    <input type="date" className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      From AD:
                    </label>
                    <input type="date" className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">To BS:</label>
                    <input type="date" className="border p-2 rounded w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">To AD:</label>
                    <input type="date" className="border p-2 rounded w-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Report Type */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <div className="mb-2 font-semibold">
                Select Report Type here...
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="reportType1"
                    value="sales"
                    checked={selectedReportType === "sales"}
                    onChange={() => setSelectedReportType("sales")}
                    className="form-radio"
                  />
                  <span>Sales</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="reportType1"
                    value="salesReturn"
                    checked={selectedReportType === "salesReturn"}
                    onChange={() => setSelectedReportType("salesReturn")}
                    className="form-radio"
                  />
                  <span>Sales Return</span>
                </label>
              </div>

              <div className="space-y-4 mt-4">
                <label className="flex items-center space-x-4">
                  <input
                    type="radio"
                    name="reportType2"
                    value="areaWise"
                    className="form-radio"
                    checked={selectedAreaType === "areaWise"}
                    onChange={handleAreaWiseSelection}
                  />
                  <span>Area Wise</span>
                  {showAreaWiseCheckbox && (
                    <div className="space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>With Salesman</span>
                    </div>
                  )}
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="reportType2"
                    value="salesmanWise"
                    checked={selectedAreaType === "salesmanWise"}
                    onChange={handleSalesmanWiseSelection}
                    className="form-radio"
                  />
                  <span>Salesman Wise</span>
                  {showSalesmanWiseCheckbox && (
                    <div className="space-x-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span>With Area</span>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Product Type */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <div className="mb-2 font-semibold">
                Select Product Type here...
              </div>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="productType"
                    value="allProduct"
                    checked={selectedProductType === "allProduct"}
                    onChange={() => setSelectedProductType("allProduct")}
                    className="form-radio"
                  />
                  <span>ALL Product</span>
                  {selectedProductType === "allProduct" && (
                    <div className="space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={showAllProductCheckbox}
                        onChange={() =>
                          setShowAllProductCheckbox(!showAllProductCheckbox)
                        }
                      />
                      <span>Summary Only</span>
                    </div>
                  )}
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="productType"
                    value="selectedProduct"
                    checked={selectedProductType === "selectedProduct"}
                    onChange={() => setSelectedProductType("selectedProduct")}
                    className="form-radio"
                  />
                  <span>Selected Product</span>
                </label>
                {/* Dropdown for Selected Product */}
                {selectedProductType === "selectedProduct" && (
                  <div>
                    <select className="border p-2 rounded w-full">
                      <option value=""></option>
                      {productList.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="productType"
                    value="selectedCategory"
                    checked={selectedProductType === "selectedCategory"}
                    onChange={() => setSelectedProductType("selectedCategory")}
                    className="form-radio"
                  />
                  <span>Selected Category Product</span>
                </label>
                {/* Dropdown for Selected Product */}
                {selectedProductType === "selectedCategory" && (
                  <div>
                    <select className="border p-2 rounded w-full">
                      <option value=""></option>
                      {productList.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Sales Area Type */}
            <div className="border border-gray-300 p-4 rounded mb-4">
              <div className="mb-2 font-semibold">
                Select Sales Area Type here...
              </div>

              {selectedAreaType === "areaWise" && (
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="nestedAreaType"
                      value="allArea"
                      checked={nestedAreaSelection === "allArea"}
                      onChange={() => setNestedAreaSelection("allArea")}
                      className="form-radio"
                    />
                    <span>ALL Sales Area</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="nestedAreaType"
                      value="particularArea"
                      checked={nestedAreaSelection === "particularArea"}
                      onChange={() => setNestedAreaSelection("particularArea")}
                      className="form-radio"
                    />
                    <span>Particular Sales Area</span>
                  </label>
                </div>
              )}

              {selectedAreaType === "salesmanWise" &&
                showSalesmanWiseCheckbox && (
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="nestedSalesmanType"
                        value="allSalesman"
                        checked={nestedAreaSelection === "allSalesman"}
                        onChange={() => setNestedAreaSelection("allSalesman")}
                        className="form-radio"
                      />
                      <span>ALL Salesmen</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="nestedSalesmanType"
                        value="particularSalesman"
                        checked={nestedAreaSelection === "particularSalesman"}
                        onChange={() =>
                          setNestedAreaSelection("particularSalesman")
                        }
                        className="form-radio"
                      />
                      <span>Particular Salesman</span>
                    </label>
                  </div>
                )}
            </div>

            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSalesAreaSalesmanWise;
