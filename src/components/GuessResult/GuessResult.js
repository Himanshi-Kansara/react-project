import React from 'react';
import Guesses from '../Guesses/Guesses'
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({guessList, answer}) {
  return <div>
    <ul>
    { 
      range(NUM_OF_GUESSES_ALLOWED).map((num) => <Guesses key={num} values = {guessList[num]?.guessInput} answer = {answer}/>)
    }
    </ul>
  </div>;
}

export default GuessResult;
