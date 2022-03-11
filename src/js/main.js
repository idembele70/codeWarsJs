console.log(
  function friend(friends=["Ryan", "Kieran", "Mark"]) {
    return friends.filter(
      ({length})=>length === 4
    )
  }()
)
// [friend] using filter function