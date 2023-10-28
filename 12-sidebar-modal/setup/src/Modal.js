import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  const [isModal, setIsModal] = useState(true)
  return <div className={`modal-overlay  ${isModal ? "show-modal" : ""}`}>
    <div className="modal-container">
      <h3>modal content</h3>
      <button className='close-modal-btn' onClick={() => setIsModal(false)}><FaTimes /></button>
    </div>
  </div>
}

export default Modal
