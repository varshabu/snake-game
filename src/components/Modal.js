import React from 'react'

const Modal = ({children, onClose}) => {
    return (
      <div 
        className="modal show"
        style={{display: 'block'}}
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content game-modal">
            <div class="modal-body game-modal-overlay">
              <p className="modal-font">Game Over</p>
            </div>
            <div className="footer-modal">
              <button 
                className="btn btn-success back-button" 
                onClick={onClose}
              >Back To Home</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Modal;
