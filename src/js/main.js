function findLongest(str="The quick white fox jumped around the massive dog") {

  const strSplited = str.split(" ");
  let longest = 0
  
  for (let i = 0; i < strSplited.length; i++) {

    if (strSplited[i].length > longest) {
      longest = strSplited[i].length
    }
    }
    return longest
  }
console.log(findLongest());
// [findLongest] using split function const let variable for iteration if condition and return