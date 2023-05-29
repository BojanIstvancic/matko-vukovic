const generateGoalWord = () => {
  const awailableWords = ["domar", "basan", "vesti", "krilo", "avion"];

  return awailableWords[Math.round(Math.random() * awailableWords.length)];
};

export { generateGoalWord };