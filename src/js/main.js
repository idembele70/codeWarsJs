class Bool {
  constructor() {
  }
  boolToWord(bool = false) {
    if (bool === true) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
}

const bool = new Bool().boolToWord();
console.log(bool);