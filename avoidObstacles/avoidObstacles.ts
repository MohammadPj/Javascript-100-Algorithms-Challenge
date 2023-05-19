export function avoidObstacles(inputArray: number[]): number {
  const sortedArray = inputArray.sort((a, b) => a - b);

  for (let i = 1; i <= sortedArray[sortedArray.length - 1]; i++) {
    if (sortedArray[i] !== i) {
      if (sortedArray.every((item) => item % i !== 0)) {
        return i
      }
    }
  }

 return sortedArray[sortedArray.length - 1] + 1
}

console.log(avoidObstacles([2,4,6,10, 14]));
