console.log(
  function vowelsCount(str="abracadabra") {
    const tabs = []
     str.split('').forEach(elt =>elt.match(/[aeuio]/ig) && tabs.push(elt))
     return tabs.length
  }()
);
// [vowelsCount] using constante variable, split forEach match