import './App.css';
import { createContext, useState, useEffect } from 'react';
import Letterbox from './components/Letterbox';
import ModalButton from './components/ModalButton';
import Prompt from './components/Prompt';
import { readSavedGameProgress, writeSavedGameProgress } from './utils';

export const AppContext = createContext();

function App() {
  const [showPrompt, setShowPrompt] = useState(true);

  const [wins, setWins] = useState(readSavedGameProgress());

  useEffect(() => {
    writeSavedGameProgress(wins);
  }, [wins]);

  const hidePrompt = () => {
    if (!showPrompt) return;
    setShowPrompt(false);
  };

  const [matrixLength, setMatrixLength] = useState(3);

  const changeMatrixSize = (newLength) => {
    setMatrixLength(newLength);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <p>This website is designed to be used without instructions.</p>
      <p>
        <strong>Instructions:</strong>
      </p>
      <ul>
        <li>Click on two letters to swap their position.</li>
        <li>Try to spell words horizontally of the length of the grid.</li>
        <li>Try to turn the whole grid green.</li>
      </ul>
      <h4>Change grid size:</h4>
      <div className='grid-size-container'>
        <button className="size-number" onClick={() => {changeMatrixSize(3); closeModal();}}>3</button>
        <button className="size-number" onClick={() => {changeMatrixSize(4); closeModal();}}>4</button>
        <button className="size-number" onClick={() => {changeMatrixSize(5); closeModal();}}>5</button>
        <button className="size-number" onClick={() => {changeMatrixSize(6); closeModal();}}>6</button>
        <button className="size-number" onClick={() => {changeMatrixSize(7); closeModal();}}>7</button>
        <button className="size-number" onClick={() => {changeMatrixSize(8); closeModal();}}>8</button>
        <button className="size-number" onClick={() => {changeMatrixSize(9); closeModal();}}>9</button>
      </div>
      <h4>Wins:</h4>
      <ul>
        <li>3 x 3 Grid: <strong style={{ color: wins.three > 0 ? "#74c847" : "#888" }}>{wins.three || 0}</strong></li>
        <li>4 x 4 Grid: <strong style={{ color: wins.four > 0 ? "#74c847" : "#888" }}>{wins.four || 0}</strong></li>
        <li>5 x 5 Grid: <strong style={{ color: wins.five > 0 ? "#74c847" : "#888" }}>{wins.five || 0}</strong></li>
        <li>6 x 6 Grid: <strong style={{ color: wins.six > 0 ? "#74c847" : "#888" }}>{wins.six || 0}</strong></li>
        <li>7 x 7 Grid: <strong style={{ color: wins.seven > 0 ? "#74c847" : "#888" }}>{wins.seven || 0}</strong></li>
        <li>8 x 8 Grid: <strong style={{ color: wins.eight > 0 ? "#74c847" : "#888" }}>{wins.eight || 0}</strong></li>
        <li>9 x 9 Grid: <strong style={{ color: wins.nine > 0 ? "#74c847" : "#888" }}>{wins.nine || 0}</strong></li>
      </ul>
    </div>
  );

  return (
    <AppContext.Provider value={{
      hidePrompt,
      changeMatrixSize,
      matrixLength,
      wins,
      setWins,
      openModal,
      closeModal,
      modalIsOpen
    }}>
    <div className="App">
      {showPrompt && <Prompt />}
      <div className="heading">Word Grid</div>
      <ModalButton content={modalContent} />
      <div className='game'>
        <Letterbox />
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
