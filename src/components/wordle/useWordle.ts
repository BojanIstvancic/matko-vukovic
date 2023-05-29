import { useState } from 'react'

const useWordle = (solution: string) => {
  const [currentWord, setCurrentWord] = useState(""); 
  const [guesses, setGuesses] = useState([...Array(6)]);
  const availableLetters = "abcčćdđefghijklmnoprsštuvzž".split("");
  const [turn, setTurn] = useState(0);

  const formatGuesses = () => {
    const guessAttempt = [...Array(5)].map((_, index) => {
      if(solution[index] === currentWord[index] ) {
        return currentWord[index] + "-correct";
      } 

      if(solution.includes(currentWord[index])) {
        return currentWord[index] + "-semicorrect"
      }

      return currentWord[index] + "-incorrect"
    })

    const newGuesses = [...guesses];
    newGuesses.splice(turn, 1,  guessAttempt);

    setGuesses(newGuesses)
    setCurrentWord("");
    setTurn((previous) =>  previous + 1)
  }

  const handleKeyUp = (event: any) => {
    const enteredValue = event.key;

    if(enteredValue === "Enter" && currentWord.length !== 5 ) {
      return
    }

    
    if(enteredValue === "Enter" && currentWord.length === 5 ) {
      formatGuesses()
    }

    if(enteredValue === "Backspace") {
      setCurrentWord(previous => previous.slice(0,-1))
    }

    if(currentWord.length > 5) return;

    if (availableLetters.includes(enteredValue) && currentWord.length < 5) {
      setCurrentWord(previous => previous + enteredValue)
    }
  }

  return { handleKeyUp, guesses, currentWord, turn }
}

export default useWordle;