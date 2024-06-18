import {React, useState} from 'react'

function GuessInput({setGuessList}){

    const [guessInput, setGuessInput] = useState('')

    const handleForm = (event)=>{
        event.preventDefault();
        setGuessList({guessInput, id : Math.random()})
        setGuessInput('')
    }

    return(
        <>
            <form onSubmit={handleForm} className='guess-input-wrapper'>
                <label htmlFor='guess-input'>Enter Guess</label>
                <input type='text'
                required
                minLength={5}
                maxLength={5}
                id='guess-input' name='guess-input' value={guessInput} onChange={(event)=>{
                    setGuessInput(event.target.value.toUpperCase())
                }}/>
            </form>
        </>
    )
}

export default GuessInput