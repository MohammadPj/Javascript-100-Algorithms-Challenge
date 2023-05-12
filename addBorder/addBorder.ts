export function addBorder(picture: string[]): string[] {
  const wallLength = picture[0].length + 2;
  let wall = "*".repeat(wallLength);

  
  picture.forEach((p, i) => {
      picture[i] = '*'.concat(p, '*')
    })
    
    picture.unshift(wall)
    picture.push(wall)

  return picture;
}
console.log(addBorder(["abc", "ded"]));
