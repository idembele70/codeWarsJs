var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
console.log(function countLanguages(list=list1) {
  const counter = {}
  for (const listItem of list) {
    const { language } = listItem;
    if(counter[language])
    counter[language] +=1
    else
    counter[language] = 1
  }
  return counter
}())
// [countLanguages] using const object forof iteration if else statement