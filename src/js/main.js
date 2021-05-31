function validatePIN(pin = "123a") {
  const { length } = pin;
  return (pin.replace(/[0-9]/g,'').length == 0 && (length == 6 || length == 4));
}

console.log(validatePIN());