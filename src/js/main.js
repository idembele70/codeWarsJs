function areYouPlayinBanjo(name = "Adam") {
  return (
    `${name} ` +
    (name.charAt(0).toLowerCase() == "r" ? "plays banjo" : "does not play banjo")
  );
}
console.log(areYouPlayinBanjo());
