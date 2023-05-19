export function arrayPreviousLess(items: number[]): number[] {
  const newArray: number[] = [];

  for (let i = items.length - 1; i >= 0; i--) {

    for (let j = i ; j >= 0; j--) {
      
      if (items[j] < items[i]) {
        newArray.unshift(items[j])
        break;
      } else if (j === 0) {
        newArray.unshift(-1)
      }
    }
  }

  return newArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
