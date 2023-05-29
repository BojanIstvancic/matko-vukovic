import { useState } from 'react'

const useWordle = (solution: string) => {
  const turn = 1;
  const [currentWord, setCurrentWord] = useState(""); 
  const [guesses, setGuesses] = useState([...Array(6)]);

  const handleKeyUp = (event: any) => {
    const enteredValue = event.key;

    if (/^[A-Za-z]$/.test(enteredValue) && currentWord.length < 5) {
        setCurrentWord(prev => prev + enteredValue)
    }
  }

  return { handleKeyUp, guesses, currentWord, turn }
}

export default useWordle;