import React from "react";
import { Dialog } from "@headlessui/react";

const DialogBox = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        
        {/* Overlay */}
        <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
        
        {/* Dialog Content */}
        <div className="bg-white rounded-lg max-w-lg w-full mx-auto p-6 z-20">
          <Dialog.Panel>
            {title && (
              <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4 text-center">
                {title}
              </Dialog.Title>
            )}
            
            {children}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogBox;
