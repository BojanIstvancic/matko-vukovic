import { useState } from "react";

const useWordle = (solution: string) => {
  const [currentWord, setCurrentWord] = useState(""); 
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [turn, setTurn] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false)
  const availableLetters = "abcčćdđefghijklmnoprsštuvzž".split("");
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

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

    return newGuesses;
  }

  const checkIfGameIsOver = () => {
    setUsedLetters((previous) => [...previous,...currentWord.split("")])
    setGuesses(formatGuesses())
    setCurrentWord("");
    setTurn((previous) =>  previous + 1)

    if(currentWord === solution) {
      setIsCorrect(true)
    }
  }

  const handleKeyUp = (event: any) => {
    const enteredValue = event.key;

    if(enteredValue === "Enter" && currentWord.length !== 5 ) {
      return
    }

    
    if(enteredValue === "Enter" && currentWord.length === 5 ) {
      checkIfGameIsOver()
    }

    if(enteredValue === "Backspace") {
      setCurrentWord(previous => previous.slice(0,-1))
    }

    if(currentWord.length > 5) return;

    if (availableLetters.includes(enteredValue) && currentWord.length < 5) {
      setCurrentWord(previous => previous + enteredValue)
    }
  }

  return { handleKeyUp, guesses, currentWord, turn, isCorrect, usedLetters }
}

export default useWordle;