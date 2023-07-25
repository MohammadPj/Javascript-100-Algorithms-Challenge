import { log } from "console";

export function commonCharacterCount(s1: string, s2: string): number {
  const splitedS1 = s1.split("")
  

  const splitedS2 = s2.split("")
  

  const makeArrayToObj = (arr: string[]): {} => {
    const obj = {}

    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      
      if(obj[element]) {
        obj[element] += 1
      } else {
        obj[element] = 1
      }
    }

    return obj
  }

  const s1Obj =  makeArrayToObj(splitedS1)
  const s2Obj = makeArrayToObj(splitedS2)

  const commonObj = {}

  for (let i in s1Obj) {
    if (s2Obj[i]) {
      commonObj[i] = Math.min(s1Obj[i], s2Obj[i])
    }
  }

  console.log(commonObj);
  
  return 1
}

console.log(commonCharacterCount('aabcc', 'adcaa'));