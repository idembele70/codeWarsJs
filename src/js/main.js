console.log(
  (function quarterOf(month = 3) {
    return month  %2 == 0 ? Math.floor(month  / 3) : Math.ceil(month/3)
  })()
);
