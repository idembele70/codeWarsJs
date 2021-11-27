console.log(
  function validatePIN(pin="1234") {
    const {length} = pin.replace(/\D/ig,"")
    if(length!=pin.length)return false
      return 4 === length || length === 6
  }()
)
// [validatePIN] using destructuration replace functions if conditions and return funcs