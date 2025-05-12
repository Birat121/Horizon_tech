import { Dialog } from "@headlessui/react";

const DialogBox = ({ isOpen, onClose, title, children }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        {/* Overlay */}
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        {/* Dialog Panel */}
        <Dialog.Panel className="bg-white rounded-lg max-w-lg w-full mx-auto p-6 z-20">
          {title && (
            <Dialog.Title className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {title}
            </Dialog.Title>
          )}
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DialogBox;


