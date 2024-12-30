export const menus = [
  {
    name: "Master",
    items: [
      { path: "/master/suboption1", label: "Create Account Ledger" },
      { path: "/master/suboption2", label: "Sub Ledger Master" },
      {
        path: "/master/suboption3",
        label: "Additional Expenses Ledger Mapping",
        disabled: true,
      },
      { path: "/master/suboption4", label: "Change Account Type" },
      { path: "/master/suboption5", label: "Account Re-Grouping" },
      { path: "/master/suboption6", label: "Inventory Master" },
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
      { path: "/transaction/suboption4", label: "Purchase" },
      { path: "/transaction/suboption5", label: "Sales" },
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
      { path: "/transaction/suboption17", label: "Import Data From Excel" },
    ],
  },
  {
    name: "Account Reports",
    items: [
      { path: "/accountreports/suboption1", label: "Print Preview Voucher" },
      { path: "/accountreports/suboption2", label: "Day Book" },
      { path: "/accountreports/suboption3", label: "Trial Balance" },
      { path: "/accountreports/suboption4", label: "Balance Sheet" },
      { path: "/accountreports/suboption5", label: "Profit And Loss" },
      { path: "/accountreports/suboption6", label: "User Base Collection" },
      { path: "/accountreports/suboption7", label: "Price Change Detail" },
      {
        path: "/accountreports/suboption8",
        label: "Balance Confirmation(Vendor / Customer)",
      },
      { path: "/accountreports/suboption9", label: "General Ledger Detail" },
      {
        path: "/accountreports/suboption10",
        label: "General Ledger With Product Detail",
      },
      {
        path: "/accountreports/suboption11",
        label: "Receivable / Payable Summary Report",
        disabled: true,
      },
      { path: "/accountreports/suboption12", label: "Ageing analysis Reports" },
      {
        path: "/accountreports/suboption13",
        label: "Invoice Wise Ageing Analysis",
      },
      { path: "/accountreports/suboption14", label: "Chart Of Accounts" },
    ],
  },
  {
    name: "Inventory Reports",
    items: [
      { path: "/inventoryreports/suboption1", label: "Item Search" },
      { path: "/inventoryreports/suboption2", label: "Inventory Item List" },
      {
        path: "/inventoryreports/suboption3",
        label: "Print Preview Purchase, Sales and Return Bill",
      },
      {
        path: "/inventoryreports/suboptions4",
        label: "Purchase / Sales / Issue Book",
      },
      {
        path: "/inventoryreports/suboption5",
        label: "Purchase / Sales Book (Annex-13)",
      },
      {
        path: "/inventoryreports/suboptions6",
        label: "Product Wise - Profitability Reports",
      },
      {
        path: "/inventoryreports/suboptions7",
        label: "Vendor Purchase / Return Detailed Invoice Wise",
      },
      {
        path: "/inventoryreports/suboptions8",
        label: "Vendor Purchase / Return Category Wise",
      },
      {
        path: "/inventoryreports/suboptions9",
        label: "Purchase Landed Cost Report",
      },
      {
        path: "/inventoryreports/suboptions11",
        label: "Item Purchase / Return In Detail",
      },
      { path: "/inventoryreports/suboptions12", label: "CBMS Related Report" },
      {
        path: "/inventoryreports/suboptions13",
        label: "Customer Sales / Return Detail Invoice Wise",
      },
      {
        path: "/inventoryreports/suboptions14",
        label: "Customer Sales / Return Category Wise",
      },
      {
        path: "/inventoryreports/suboptions15",
        label: "Item Sales / Return In Detail",
      },
      {
        path: "/inventoryreports/suboptions16",
        label: "Item Sales (Area / Salesman) Wise",
      },
      {
        path: "/inventoryreports/suboptions17",
        label: "Production / Consumptions Report",
      },
      {
        path: "/inventoryreports/suboptions18",
        label: "Inventory Item Stock Report",
      },
      { path: "/inventoryreports/suboptions19", label: "Item Stock In Detail" },
      {
        path: "/inventoryreports/suboptions20",
        label: "Purchase And Sales More Than One Lakh",
      },
      {
        path: "/inventoryreports/suboptions21",
        label: "VAT Ledger of Purchase And Sales",
      },
      {
        path: "/inventoryreports/suboptions22",
        label: "No Sales From Last Purchase",
      },
      {
        path: "/inventoryreports/suboptions23",
        label: "No Purchase Since Date But Stock Avi",
      },
      {
        path: "/inventoryreports/suboptions24",
        label: "Bonus Received From Vendor",
      },
    ],
  },
  {
    name: "System Security",
    items: [
      { path: "/systemsecurity/suboptions1", label: "Menu Access" },
      { path: "/systemsecurity/suboptions2", label: "Backup Data" },
      { path: "/systemsecurity/suboptions3", label: "Change Password" },
      { path: "/systemsecurity/suboptions4", label: "Sign Up User" },
      { path: "/systemsecurity/suboptions5", label: "Printer Setup" },
      { path: "/systemsecurity/suboptions6", label: "Invoice Greeting Note" },
      { path: "/systemsecurity/suboptions7", label: "Current Users" ,
        disabled: true
      },
      { path: "/systemsecurity/suboptions8", label: "End Of Day" },
      {
        path: "/systemsecurity/suboptions9",
        label: "IRD Setup",
        subOptions: [
          {
            path: "/systemsecurity/suboptions9/suboption1",
            label: "Activate / Deactivate Real Time Data",
          },
        ],
      },
    ],
  },
];
