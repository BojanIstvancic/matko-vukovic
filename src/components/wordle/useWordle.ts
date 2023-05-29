import { useState } from 'react'

const useWordle = (solution: string) => {
  const [currentWord, setCurrentWord] = useState(""); 
  const [guesses, setGuesses] = useState([...Array(6)]);
  const availableLetters = "abcčćdđefghijklmnoprsštuvzž".split("");
  const turn = 0;

  const handleKeyUp = (event: any) => {
    const enteredValue = event.key;

    if(enteredValue === "Backspace") {
      setCurrentWord(prev => prev.slice(0,-1))
    }

    if(currentWord.length > 5) return;

    if (availableLetters.includes(enteredValue) && currentWord.length < 5) {
      setCurrentWord(prev => prev + enteredValue)
    }
  }

  return { handleKeyUp, guesses, currentWord, turn }
}

export default useWordle;