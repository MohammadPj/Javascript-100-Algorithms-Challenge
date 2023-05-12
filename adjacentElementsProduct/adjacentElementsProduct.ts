export function adjacentElementsProduct(inputArray: number[]): number {
    let max = 0
    for (let i = 0; i < inputArray.length; i++) {
        const res = inputArray[i] * inputArray[i + 1]
        max = res > max ? res : max
    }
    return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));