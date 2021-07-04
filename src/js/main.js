function areYouPlayinBanjo(name="Adam") {
  return !name.match(/^R/i) ? name +" does not play banjo" : name + " plays banjo"
}
console.log(areYouPlayinBanjo());