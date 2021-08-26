function shortenToDate(longDate="Friday May 2, 9am") {
  return longDate.split(/,.+/).join``
}
console.log(shortenToDate());
// [shortenToDate] using split