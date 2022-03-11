console.log(
  function friend(friends=["Ryan", "Kieran", "Mark"]) {
    const newfriends = []
    for (const friend of friends) {
      if(friend.length === 4)
      newfriends.push(friend)
    }
    return newfriends
  }()
)
// [friend] using for of iteration and array push functions