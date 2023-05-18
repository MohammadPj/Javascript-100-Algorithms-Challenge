const mostRepeatedCharecter = (str: string): string => {
  const splitedString = str.split('')
  const charCountObj = {}

  let mostRepeated = 0
  let mostRepeatedChar = ''

  for (let i = 0; i < splitedString.length; i++) {
    const elemet = splitedString[i]

    if (charCountObj[elemet]) {
      charCountObj[elemet] += 1
    } else {
      charCountObj[elemet] = 1
    }

    if(charCountObj[elemet] > mostRepeated) {
      mostRepeated = charCountObj[elemet]
      mostRepeatedChar = elemet
    }
  }
  return mostRepeatedChar
}

console.log(mostRepeatedCharecter('ssammsaaaamaa'));