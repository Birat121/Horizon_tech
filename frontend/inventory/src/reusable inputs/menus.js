export const menus = [
  {
    name: "Master",
    items: [
      { path: "/master/suboption1", label: "Create Account Ledger",disabled: false },
      { path: "/master/suboption2", label: "Sub Ledger Master" },
      {
        path: "/master/suboption3",
        label: "Additional Expenses Ledger Mapping",
        disabled: true,
      },
      { path: "/master/suboption4", label: "Change Account Type" },
      { path: "/master/suboption5", label: "Account Re-Grouping" },
      { label: "Inventory Master",
      subOptions: [
        { path: "/master/suboption6/suboption1", label: "Inventory Item Master"},
        { path: "/master/suboption6/suboption2", label: "Inventory Item Master - From Excel"},
        { path: "/master/suboption6/suboption3", label: "Vendor Master"},
        { path: "/master/suboption6/suboption4", label: "Customer Master"},
        { path: "/master/suboption6/suboption5", label: "Category Master"},
        { path: "/master/suboption6/suboption6", label: "Sub Category Master"},
        { path: "/master/suboption6/suboption7", label: "Unit Of Measurement"},
        
        { path: "/master/suboption6/suboption10", label: "Servie Item Master"},
        { path: "/master/suboption6/suboption11", label: "Stock Location Master"},

        
      ]
    },
      { path: "/master/suboption7", label: "Department Master" },
      { path: "/master/suboption8", label: "Counter Setting" },
      { path: "/master/suboption9", label: "Point Collection Setting",
        disabled: true,
       },
    ],
  },
  {
    name: "Transaction",
    items: [
      { path: "/transaction/suboption1", label: "Journal Voucher" },
      { path: "/transaction/suboption2", label: "Receipt Voucher" },
      { path: "/transaction/suboption3", label: "Payment Voucher" },
      { path: "/transaction/suboption6", label: "PDC Entry" },
      { path: "/transaction/suboption7", label: "BG Entry" },
      { path: "/transaction/suboption8", label: "Price Change" },
      { path: "/transaction/suboption9", label: "Invoice Generate" },
      { path: "/transaction/suboption10", label: "Material Issue" },
      { path: "/transaction/suboption11", label: "Goods Receipt By Product" },
      { path: "/transaction/suboption12", label: "Issue Return" },
      { path: "/transaction/suboption13", label: "Barcode Label Print" },
      {
        path: "/transaction/suboption14",
        label: "Barcode Print With Expire Date",
        disabled: true,
      },
      { path: "/transaction/suboption15", label: "Opening Balance Entry" },
      { path: "/transaction/suboption16", label: "Opening Stock Entry" },
      {  label: "Import Data From Excel",
        subOptions: [
          { path: "/transaction/suboption17/suboption1", label: "Chart Of Account Excel"},
          { path: "/transaction/suboption17/suboption2", label: "Category and Subcategory Excel"},
          { path: "/transaction/suboption17/suboption3", label: "Product Information Excel"},
          { path: "/transaction/suboption17/suboption4", label: "Vendor List Excel"},
          { path: "/transaction/suboption17/suboption5", label: "Customer List Excel"},
          { path: "/transaction/suboption17/suboption8", label: "Product Batch Excel"},
        ]
       },
    ],
  },
  {
    name: "Sales",
    items: [
      { path: "/sales/suboption1", label: "Point Of Sale" },
      { path: "/sales/suboption2", label: "Sales Return" },
    ],

  },
  {
    name: "Purchase",
    items: [
      { path: "/purchase/suboption1", label: "Material Receipt Note" },
      { path: "/purchase/suboption2", label: "Purchase Return" },
      { path: "/purchase/suboption3", label: "Purchase Order-Local" },
      { path: "/purchase/suboption4", label: "Purchase: Addition Cost Entry" },
    ],
  },
  
  
  
];
