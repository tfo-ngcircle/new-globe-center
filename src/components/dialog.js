import { Dialog } from "@headlessui/react";
import { MdFullscreenExit } from "react-icons/md";

export default function MyDialog({ className, children, isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 overflow-y-auto z-[999]"
    >
      <Dialog.Overlay className={`fixed inset-0 ${className}`} />
      {children}
      <MdFullscreenExit
        className="bg-gray-700 text-white bg-opacity-50 text-4xl p-1 rounded-full fixed top-4 right-4 z-10"
        onClick={onClose}
      />
    </Dialog>
  );
}
