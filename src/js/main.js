document.body.style.backgroundColor = "black";
document.body.style.color = "white";
document.body.innerHTML = "white";
let string = 'sak';

function solution(number=10){
    let resultat = 0 ;
  for (let i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0 ) {
          resultat +=i;
      }
      
  }
  return resultat;
}

solution();