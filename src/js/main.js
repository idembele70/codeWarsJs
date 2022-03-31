const getAge = (inputString="4 years old") => { 
  return Number(inputString.replace(/\D/ig,""))
 }
 console.log(getAge())
// [getAge] using Number Classes and replace regex
