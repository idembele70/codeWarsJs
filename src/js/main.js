const getAge = (inputString="4 years old") => { 
  return +inputString.replace(/\D/ig,"")
 }
 console.log(getAge())
// [getAge] using + and replace regex
