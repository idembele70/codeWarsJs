const helloWorld = () => {
  const tabs = [72, 101, 108, 108, 111,
    44,  32,  87, 111, 114,
   108, 100,33]
  return tabs.map(x=>String.fromCharCode(x)).join('')
}
console.log(helloWorld())
// [helloworld] trying