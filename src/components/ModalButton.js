import React, { useContext } from 'react';
import HelpModal from './HelpModal';
import { AppContext } from '../App';

function ModalButton({ content }) {
  const { openModal, closeModal, modalIsOpen } = useContext(AppContext);

  return (
    <div>
      <button onClick={openModal} className="help">
        ?
      </button>
      <HelpModal isOpen={modalIsOpen} onRequestClose={closeModal} content={content} />
    </div>
  );
}

export default ModalButton;