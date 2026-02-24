import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode
  isOpen: boolean
}

function Modal({ children, isOpen }: ModalProps) {
  if (!isOpen) {
    return null;
  }
  else {
    return (
      <div className="flex justify-center items-center absolute top-0 left-0 z-index-1 h-[100vh] w-[100vw] bg-green-700 opacity-95">
        <div className="flex flex-col justify-center items-center bg-green-600 h-90 w-90 p-5 rounded-lg">
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
