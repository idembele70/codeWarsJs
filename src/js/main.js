function getPlanetName(id = 4) {
  const planet =  {
     "Mercury": 1,
     "Venus": 2,
     "Earth": 3,
     "Mars": 4,
     "Jupiter": 5,
     "Saturn": 6,
     "Uranus": 7,
     "Neptune": 8}
  return Object.keys(planet).find(
    key=>planet[key] === id
  )
}
console.log(getPlanetName())
// [getPlanet] object key find


