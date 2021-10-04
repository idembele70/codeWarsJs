console.log(
  function decodePass(passArr=['password123', 'admin', 'admin1'], bin="01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011") {
    bin = bin.split(' ').map(bineary=>String.fromCharCode(parseInt(bineary,2))).join('')
    return passArr.find(
      pass=> bin === pass
    ) || false
  }()
);
// [decodePass] using map split String charcode parseInt join and find

