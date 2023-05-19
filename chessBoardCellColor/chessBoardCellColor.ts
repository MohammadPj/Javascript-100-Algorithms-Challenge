export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const isblackCahrectersOdd = {
    A: 1,
    B: 0,
    C: 1,
    D: 0,
    E: 1,
    F: 0,
    G: 1,
    H: 0,
  }


  const isCellOneBlack = Number(cell1.split('')[1]) % 2 === isblackCahrectersOdd[cell1.split('')[0]]
  const isCellTwoBlack = Number(cell2.split('')[1]) % 2 === isblackCahrectersOdd[cell2.split('')[0]]
  
  return isCellOneBlack === isCellTwoBlack
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
