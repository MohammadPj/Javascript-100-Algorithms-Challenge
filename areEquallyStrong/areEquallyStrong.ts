export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  const yourWeakest = yourLeft > yourRight ? yourLeft : yourRight
  const yourStrongest = yourLeft <= yourRight ? yourLeft : yourRight
  const frienWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight
  const frindStrongest = friendsLeft > friendsRight ? friendsLeft : friendsRight
  
  return (yourWeakest === frienWeakest && frindStrongest === yourStrongest) 
}
// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
