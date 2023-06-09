export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let max = 0
    for (let i = 0; i < inputArray.length; i++) {
      const element = inputArray[i];
      const prvElement = inputArray[i - 1] || 0;

      if(Math.abs(element - prvElement) > max) max = Math.abs(element - prvElement)
    }
  return max
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));