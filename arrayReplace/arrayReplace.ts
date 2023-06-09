export function arrayReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {

  return inputArray.map(e => e === elemToReplace ? substitutionElem : e)
}

console.log(arrayReplace([1, 2, 1], 1, 3));
