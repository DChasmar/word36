import React, { useContext } from 'react';
import Modal from 'react-modal';
import { LetterboxContext } from './Letterbox';

Modal.setAppElement('#root');

function WinModal({ isOpen, onRequestClose}) {
  const { swapCount } = useContext(LetterboxContext);

  const modalContent = (
    <div>
      <h3>Swap Count: {swapCount}</h3>
      <button className="play-button" onClick={onRequestClose}>
            Play
      </button>
    </div>
  );

  const modalStyles = {
    overlay: {
      backgroundColor: 'rgba(230, 230, 230, 0.5)',
      backdropFilter: 'blur(5px)',
      transition: 'backdrop-filter 0.3s ease-in-out',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '40%',
      height: '40%',
      padding: '2%',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '999',
      textAlign: 'center',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Win Modal"
      style={modalStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <div className="modal-text">{modalContent}</div>
      </div>
    </Modal>
  );
}

export default WinModal;