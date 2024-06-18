import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_LETTER } from '../../constants';
import {checkGuess} from '../../game-helpers'


function Cell({letter, status }){
  const classes = status ? `cell ${status}` : 'cell'
  return <span className={classes}>{letter}</span>
}


function Guesses({values, answer}) {

  const result = checkGuess(values, answer) 

  return <div className='guess'>
    {
    range(NUM_OF_GUESSES_LETTER).map(num => <Cell key={num} letter={result ?result[num].letter : undefined} status={result ? result[num].status : undefined}/>)
    }
  </div>;
}

export default Guesses;
