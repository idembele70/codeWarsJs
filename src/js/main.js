function friend(friends=["Ryan", "Kieran", "Mark"]) {
  const myFriends = []
   for (const name of friends) {
     if(name.length === 4) myFriends.push(name)
   }
   return myFriends
}
console.log(friend());