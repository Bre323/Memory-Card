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
      <div className="flex justify-center items-center absolute top-0 left-0 z-index-1 h-[100vh] w-[100vw] bg-background opacity-95">
        <div className="flex flex-col justify-center items-center bg-results h-[300px] w-[300px] p-[20px] rounded-xl">
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
