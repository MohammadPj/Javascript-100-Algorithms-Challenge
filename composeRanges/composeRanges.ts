export function composeRanges(nums: number[]): string[] {
  const sortedArr: number[] = [];
  sortedArr[0] = nums[0];
  const res: any[] = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const nextNum = nums[i + 1];

    if (num + 1 < nextNum) {
      sortedArr.push(num);
      sortedArr.push(nextNum);
    }
  }


  for (let i = 0; i < sortedArr.length; i++) {
    if (i % 2 === 0) {
      let item = "";
      if (sortedArr[i + 1] > sortedArr[i]) {
        item = sortedArr[i] + "->" + sortedArr[i + 1];
      } else {
        item = sortedArr[i].toString();
      }
      res.push(item);
    }
  }

  return res;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9, 10, 11, 12, 13, 20]));
