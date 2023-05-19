export function bishopAndPawn(bishop: string, pawn: string): boolean {
  const verticals = ["a", "b", "c", "d", "e", "f", "g"];

  let bishopX = verticals.indexOf(bishop.split("")[0]);
  let bishopY = Number(bishop.split("")[1]) - 1
  let pawnX = verticals.indexOf(pawn.split("")[0]);
  let pawnY = Number(pawn.split("")[1]) - 1

  const diff = pawnY - bishopY;

  if (
    verticals[bishopX - diff] === verticals[pawnX] ||
    verticals[bishopX + diff] === verticals[pawnX]
  )
    return true;
  return false;
}

console.log(bishopAndPawn("d6", "e7"));
