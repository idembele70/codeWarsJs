function isPangram(string="The quick brown fox jumps over the lazy dog."){
    string = string.toLowerCase();
    string = string.split('').sort().toString('');
    const regex=/[a-z]/gi;
    const container = '';
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i)) {
            for (let j = 0; j < container.length; j++) {
                if (container.match()) {
                } else {
                    container.push(string.charAt(i));
                    
                }
                
            }
        }
        
    }
    return container.length;
  }

  console.log(isPangram());
