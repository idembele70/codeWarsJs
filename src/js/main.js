function shortenToDate(longDate="Friday May 2, 9am") {
  return longDate.split(',').slice(0,-1).join(" ")
}
console.log(shortenToDate());
// [shortenToDate] using split slice join