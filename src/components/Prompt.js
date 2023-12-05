import React, { useContext, useState } from 'react';
import { AppContext } from '../App'

function Prompt() {
    const { hidePrompt, changeMatrixSize } = useContext(AppContext);
    const [isVisible, setIsVisible] = useState(true); // Use state to manage visibility
    const [showNumbers, setShowNumbers] = useState(false);

    const iconGrid = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];

    // const playDaily = () => {
    //   setIsVisible(false); // Trigger the fade-out effect
    //   setTimeout(() => hidePrompt(), 500); // Call hidePrompt after the fade-out duration (in this case, 500ms)
    // }

    const practice = () => {
      setShowNumbers(true);
    }
    
    const chooseGridSize = (length) => {
      changeMatrixSize(length);
      setIsVisible(false); // Trigger the fade-out effect
      setTimeout(() => hidePrompt(), 500);
    }

  return (
    <div className={`prompt ${isVisible ? '' : 'hidden'}`}>
        <div className="grid-container" style={{ gridTemplateRows: 'repeat(3, 1fr)', gap: 'min(0.8vh, 0.8vw)'}}>
          {iconGrid.map((row, rowIndex) => (
            <div className="grid-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'min(0.8vh, 0.8vw)'}} key={rowIndex}>
              {row.map((letter, columnIndex) => (
                <div className="grid-cell" key={columnIndex}>
                  <div className="icon-circle">{letter}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <h1>Word Grid</h1>
        <button className="play-button" onClick={practice}>
            Play
        </button>
        {showNumbers && 
        <div>
          <h3>Choose grid size:</h3>
          <div className='grid-size-container'>
            <button className="size-number" onClick={() => chooseGridSize(3)}>3</button>
            <button className="size-number" onClick={() => chooseGridSize(4)}>4</button>
            <button className="size-number" onClick={() => chooseGridSize(5)}>5</button>
            <button className="size-number" onClick={() => chooseGridSize(6)}>6</button>
            <button className="size-number" onClick={() => chooseGridSize(7)}>7</button>
            <button className="size-number" onClick={() => chooseGridSize(8)}>8</button>
            <button className="size-number" onClick={() => chooseGridSize(9)}>9</button>
          </div>
        </div>}
    </div>
  );
}

export default Prompt;