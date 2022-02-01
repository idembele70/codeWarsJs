const lists = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
]
function greetDevelopers(list=lists) {
  return list.map(
    (item)=>({...item,greeting:`Hi ${item.firstName}, what do you like the most about ${item.language}?`})
  )
}
// [greetDevelopers] using map iteration and template string