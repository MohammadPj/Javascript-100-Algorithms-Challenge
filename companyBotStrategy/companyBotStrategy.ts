export function companyBotStrategy(trainingData: number[][]): number {
  const correctAnswers = trainingData.filter((data) => data[1] === 1);
  console.log(correctAnswers);

  return (
    correctAnswers.reduce(
      (accumulator, currentValue, index) => accumulator + currentValue[0],
      0
    ) / (correctAnswers.length || 1)
  );
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1],
  ])
);
console.log(
  companyBotStrategy([
    [4, -1],
    [0, 0],
    [5, -1],
  ])
);
