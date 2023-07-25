export function compareIntegers(a: string, b: string): string {
  return Number(a) < Number(b) ? "less" : Number(a) > Number(b) ? "greater" : "equal"
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));