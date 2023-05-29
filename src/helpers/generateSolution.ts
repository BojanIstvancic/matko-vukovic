export const generateSolution = ( solutions: string[]) => {
  return solutions[Math.round(Math.random() * solutions.length)];
};
