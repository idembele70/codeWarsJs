function sortBytes(uint32 = 3735928559) {
  const arrUint32 = uint32.toString(2).padStart(32, 0).split('').map((x, i) => (i + 1) % 8 == 0 && i != 0 ? x += " " : x).join``.trim().split(' ').sort((a,b)=>b-a).join``;
  return  parseInt(arrUint32,2)
}
console.log(sortBytes());