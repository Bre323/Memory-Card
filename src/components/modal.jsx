import '../styles/modal.css';

function Modal({children, isOpen}) {
  if(!isOpen) {
    return null;
  }
  else {
    return (
      <div id="overlay">
        <div id="modal">
          {children}
        </div>
      </div>
    )
  }
}

export default Modal;
