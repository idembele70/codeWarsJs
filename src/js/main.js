class Num {
  digit(params) {
    
  }
}

String.prototype.digit = function(){
  return this.length == 1 && this.match(/\d/) ? true : false;
}

console.log("22".digit(2));