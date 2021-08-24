function getPlanetName(id = 2) {
  const planet =  {
    1 : "Mercury",
    2 : "Venus",
    3 : "Earth",
    4 : "Mars",
    4 : "Jupiter",
    5 : "Saturn",
    6 : "Uranus",
    7 : "Neptune"}
  return planet[id]
}
console.log(getPlanetName())
// [getPlanet] object


