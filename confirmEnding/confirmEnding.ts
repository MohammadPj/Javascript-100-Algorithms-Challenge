export function confirmEnding(str: string, target: string) {

  const length = str.length - target.length
  return str.substring(length, str.length) === target
  
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));