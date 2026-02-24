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
      <div id="overlay">
        <div id="modal">
          { children }
        </div>
      </div>
    )
  }
}

export default Modal;
