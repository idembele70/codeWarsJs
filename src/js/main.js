function isPalindrome(x="aA") {
  const xRegex = new RegExp(x,"ig")
  return xRegex.test([...x].reverse().join(""))
}
console.log(isPalindrome());
// [isPalindrome] using regex


