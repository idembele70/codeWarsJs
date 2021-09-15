console.log(
  function strCount(str="hello",letter="a") {
    const letterFinder = new RegExp(letter,"g")
    const arrayOfFind = str.match(letterFinder)
    return arrayOfFind ? arrayOfFind.length : 0
  }()
);
// [strCount] using regex & match