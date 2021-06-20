function makeUpperCasse(str = "hello worLD") {
  return [...str].map((x, i) => {
    const upperCassed = x.charCodeAt(0) - 32;
    if (x == " ") return " ";
    return x.charCodeAt(0) > 90 ? (x = String.fromCharCode(upperCassed)) : x;
  }).join``;
}

console.log(makeUpperCasse());
console.log("z".charCodeAt(0));
