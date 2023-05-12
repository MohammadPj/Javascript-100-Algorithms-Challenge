export function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0
  let longestWorlds: string[] = []

  inputArray.forEach(word => {
    longestLength = word.length > longestLength ? word.length : longestLength
  })
  
  inputArray.forEach(word => {
    if(word.length === longestLength) {
        longestWorlds.push(word)
    }
  })

  return longestWorlds
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
