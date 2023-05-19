export function characterParity(symbol: string): string {

  const parsedNjmber = Number(symbol)

 return isNaN(parsedNjmber) ? 'not a digit' : parsedNjmber % 2 === 0 ? 'even' : 'odd'
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
