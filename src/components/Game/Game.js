import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../Guess-Input/Guess-Input';
import GuessResult from '../GuessResult/GuessResult';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([])

  const handleGuessList = (input)=>{
    const nextInput = [...guessList, input]
    setGuessList(nextInput)
    console.log(guessList)
  }

  return <>
    <GuessResult guessList = {guessList} answer= {answer}/>
    <GuessInput setGuessList = {handleGuessList}/>
  </>;
}

export default Game;
