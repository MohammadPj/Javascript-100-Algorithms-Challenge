export function almostIncreasingSequence(sequence: number[]): any {
  for (let i = 0; i < sequence.length; i++) {
    const dbPrvElement = sequence[i - 2] || 0;
    const prvElement = sequence[i - 1] || 0;
    const element = sequence[i];

    if (element < prvElement) {
      if (element >= dbPrvElement) {
        sequence.splice(i - 1, 1);
      } else {
        sequence.splice(i, 1);
      }
      i--
    }

  }

  return sequence;
}

console.log(almostIncreasingSequence([5, 50, 7, 11,2, 3, 9]));
console.log(almostIncreasingSequence([1, 3, 2]));
