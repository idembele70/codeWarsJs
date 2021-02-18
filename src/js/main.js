function solution(roman =21 ) {
  let romanString = '';
  while (roman > 0) {
    if (1000 <= roman) {
      let  Dlong = parseInt(roman / 1000);
        roman = roman % 1000;
        for (let i = 0; i < Dlong; i++) {
          romanString += 'M';
        }
      }

    if (500 <= roman < 1000) {
      let  Dlong = parseInt(roman / 500);
        roman = roman % 500;
        for (let i = 0; i < Dlong; i++) {
          romanString += 'D';
        }
      }
    if (100 <= roman < 500) {
      let  Clong = parseInt(roman / 100);
        roman = roman % 100;
        for (let i = 0; i < Clong; i++) {
          romanString += 'C';
        }
      }

    if (50 <= roman < 100) {
      let  Llong = parseInt(roman / 50);
        roman = roman % 50;
        for (let i = 0; i < Llong; i++) {
          romanString += 'L';
        }
      }

    if (10 <= roman < 50) {
    let  Mlong = parseInt(roman / 10);
      roman = roman % 10;
      for (let i = 0; i < Mlong; i++) {
        romanString += 'X';
      }
    }
     if (5 <= roman < 10) {
     let Vlong = parseInt(roman / 5);
      roman = roman % 5;
      for (let i = 0; i < Vlong; i++) {
        romanString += 'V';
      }
    }
     if (1 <= roman < 5) {
     let Ilong = parseInt(roman / 1);
     roman = roman % 1;
     for (let i = 0; i < Ilong; i++) {
       romanString += 'I';
      }
      
    }
  }
  return romanString;
}

console.log(solution());