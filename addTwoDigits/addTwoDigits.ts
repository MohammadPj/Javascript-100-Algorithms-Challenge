export function addTwoDigits(n: number): number {
  return n.toString().split('').reduce((total , current) => total + Number(current), 0)
}

console.log(addTwoDigits(29));