import React, { useContext } from 'react'
import { LetterboxContext } from './Letterbox';

function Letter({ letter, rowIndex, columnIndex, color, swap }) {
  const { swapLetters, matrixLength } = useContext(LetterboxContext);

  const selectLetter = () => {
    swapLetters(rowIndex, columnIndex);
  };

  const letterStyle = {
    width: `min(${70 / matrixLength}vw, ${70 / matrixLength}vh)`, // Use the state value for width
    height: `min(${70 / matrixLength}vw, ${70 / matrixLength}vh)`, // Use the state value for height
    fontSize: `min(${44 / matrixLength}vw, ${44 / matrixLength}vh)`,
    backgroundColor: color === 1 ? '#74c847' : undefined,
    color: swap ? '#a966fc' : 'inherit',
  };

  return (
      <div>
        <div className='letter'
        style= {letterStyle}
        onClick={selectLetter}>
            {letter}
        </div>
      </div>
    )
}

export default Letter