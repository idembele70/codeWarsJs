function isPangram(string="The quick brown fox jumps over the lazy dog."){
   
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
   
  }

  console.log(isPangram());


