class Bool {
  constructor(){
  }
  boolToWord(bool=false){
    return bool === true ? 'Yes' : 'No';
  }
}

const bool = new Bool().boolToWord();
console.log(bool);