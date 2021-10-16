console.log(
  function validateHello(greetings = "ahoj") {
   return [
      "hello",
      "ciao",
      "salut",
      "hallo",
      "hola",
      "ahoj",
      "czesc",
    ].find(x=>greetings.toLowerCase().match(x.toLowerCase())) ? true : false
  }()
);
// [validateHello] using array find match lowercase and ternary
