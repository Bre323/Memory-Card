function Modal({children, isOpen}) {
  if(!isOpen) {
    return null;
  }
  else {
    return (
      <div className="overlay">
        <div className="modal">
          {children}
        </div>
      </div>
    )
  }
}

export default Modal;
