import React, { useContext, useState } from 'react'
// import { AppContext } from '../App'
import { LetterboxContext } from './Letterbox';

function Letter({ letter, rowIndex, columnIndex, color, swap }) {
  // const { } = useContext(AppContext);
  const { swapLetters, matrixLength } = useContext(LetterboxContext);

  const selectLetter = () => {
    swapLetters(rowIndex, columnIndex);
  };

  const letterStyle = {
    width: `min(${70 / matrixLength}vw, ${70 / matrixLength}vh)`, // Use the state value for width
    height: `min(${70 / matrixLength}vw, ${70 / matrixLength}vh)`, // Use the state value for height
    fontSize: `min(${44 / matrixLength}vw, ${44 / matrixLength}vh)`,
  };

  if (color === 1) {
    letterStyle.backgroundColor = '#74c847';
    letterStyle.color = swap ? '#a966fc' : undefined;
  } else if (swap) {
    letterStyle.color = '#a966fc';
  }

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