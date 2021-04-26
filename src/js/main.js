function ValidateUsr(username="ass") {
  const res = new RegExp('[a-z]|_|\\d','g');
  if (username) {
   return username.match(res).length == username.length && 4<=username.length<=16;
  } else {
    return false
  }
}

console.log(ValidateUsr());