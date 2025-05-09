import React, { useState, Suspense, lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog, faSave, faUserPlus, faKey,
  faPrint, faFileInvoice, faCalendar, faTools,
} from "@fortawesome/free-solid-svg-icons";

const MenuAccess = lazy(() => import("./MenuAccess"));
const BackupData = lazy(() => import("./BackupData"));
const SignUpUser = lazy(() => import("./SignUpUser"));
const ChangePassword = lazy(() => import("./ChangePassword"));
const PrinterSetup = lazy(() => import("./PrinterSetup"));
const InvoiceGreetingNote = lazy(() => import("./InvoiceGreetingNote"));
const EndOfDay = lazy(() => import("./EndOfDay"));
const RID = lazy(() => import("./IRDSetup/RID"));

function SystemSecurity() {
  const [selectedList, setSelectedList] = useState(null);

  const componentMap = {
    "Menu Access": <MenuAccess />,
    "Backup Data": <BackupData />,
    "Sign Up User": <SignUpUser />,
    "Change Password": <ChangePassword />,
    "Printer Setup": <PrinterSetup />,
    "Invoice Greeting Note": <InvoiceGreetingNote />,
    "End of Day": <EndOfDay />,
    "IRD Setup": <RID />,
  };

  const iconMap = {
    "Menu Access": faCog,
    "Backup Data": faSave,
    "Sign Up User": faUserPlus,
    "Change Password": faKey,
    "Printer Setup": faPrint,
    "Invoice Greeting Note": faFileInvoice,
    "End of Day": faCalendar,
    "IRD Setup": faTools,
  };

  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      <div className="flex gap-6 bg-white rounded-lg shadow-md border-2 p-6 h-[80vh] w-[1100px]">
        
        {/* Sidebar */}
        <div className="w-64 border-r pr-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">System Security</h2>
          <ul className="space-y-2">
            {Object.keys(componentMap).map((list) => (
              <li
                key={list}
                className={`p-3 rounded-lg cursor-pointer text-sm font-medium transition duration-300 ${
                  selectedList === list ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedList(list)}
              >
                <FontAwesomeIcon icon={iconMap[list]} className="mr-3" />
                {list}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 max-h-full overflow-auto">
          <h2 className="text-xl font-semibold mb-4">{selectedList ?? "Welcome"}</h2>
          <Suspense fallback={<div>Loading...</div>}>
            {selectedList ? (
              componentMap[selectedList]
            ) : (
              <p className="text-gray-500">Select an option from the sidebar to view details.</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default SystemSecurity;
