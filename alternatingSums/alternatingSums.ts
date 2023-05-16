export function alternatingSums(a: number[]): number[] {
  let team1 = 0
  let team2 = 0

  for (let i = 0; i < a.length;) {
    team1 += a[i]
    i = i + 2
  }

  for (let i = 1; i < a.length;) {
    team2 += a[i]
    i = i + 2
  }

  return [team1, team2]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))