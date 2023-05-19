export function arrayChange(inputArray: number[]): number {
  let moves = 0

    for (let i = 0; i < inputArray.length; i++) {
      let element = inputArray[i];
      const prvElement = inputArray[i - 1] || 0

      if(element <= prvElement) {
        const diff = prvElement - element + 1
        moves += diff
        element = prvElement + 1
        inputArray[i] = element
      }

    }
  return moves
}

console.log(arrayChange([1, 1, 1]));