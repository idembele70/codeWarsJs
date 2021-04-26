function isLockNessMonster(s) {
  const reg = new RegExp("tree fiddy|3.50");
  return reg.test(s)
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to 3.50"));
console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));