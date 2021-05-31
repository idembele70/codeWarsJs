function validatePIN(pin = "1234") {
  const digitLength = pin.match(/[0-9]/gi) ? pin.match(/[0-9]/gi).length : 0;
  return (digitLength == 6 || digitLength == 4) && (pin.length == 6 || pin.length == 4);
}

console.log(validatePIN());
