export function isCaseInsensitivePalindrome(inputString: string): boolean {
  const originalLowerCased = inputString.toLowerCase()
  const reversedWord = originalLowerCased.split('').reverse().join('')
  
  if(originalLowerCased === reversedWord) return true
  
  return false
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abaca'));