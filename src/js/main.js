const lowercaseCount = (str="abc") => {
  const strTab = str.match(/[a-z]/g)
  return !strTab ? 0 : strTab.length
}

console.log(lowercaseCount());