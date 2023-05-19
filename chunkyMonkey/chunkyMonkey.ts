// export function chunkyMonkey(arr: any[], size: number): any[][] {
// const chunkedArr: any[][] = [];

//   for (let i = 0; i < arr.length; ) {
//     const pushedArray: any[] = [];

//     for (let j = i; j < i + size; j++) {
//       if (arr[j]) {
//         pushedArray.push(arr[j]);
//       }
//     }

//     chunkedArr.push(pushedArray)
//     i += size;
//   }
//   return chunkedArr
// }

export function chunkyMonkey(arr: any[], size: number): any[][] {
  const chunkedArr: any[][] = []

  for (let i = 0; i < arr.length;) {
    chunkedArr.push(arr.slice(i, i + size))
    i += size
  }

  return chunkedArr

}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));